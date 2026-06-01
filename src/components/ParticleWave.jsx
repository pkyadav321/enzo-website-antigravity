import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Grid Config ─────────────────────────────────────────────── */
const COLS   = 78;   // horizontal particles per row
const ROWS   = 96;   // depth rows (bottom of screen → top)
const Z_NEAR =  12;  // world-Z at bottom of screen
const Z_FAR  = -82;  // world-Z at top of screen (camera-derived)

// X extent at near edge (camera FOV + margin)
const X_NEAR = 30;
// X extent multiplier for far rows:
// at z=-82, camera hFOV requires ~±70 world units to fill corners
// linear growth: xExtent(zi) = X_NEAR + (Z_NEAR - pz) * X_GROW
const X_GROW = 0.74;  // calibrated: 30 + (12+82)*0.74 ≈ 99.6 → enough for corners

const WAVE_AMP   = 0.28;   // subtle idle wave
const RIPPLE_AMP = 0.9;    // gentle cursor ripple
const RIPPLE_R   = 9.0;
const WAVE_SPEED = 0.65;   // slow, calm movement
const Z_STEP     = (Z_NEAR - Z_FAR) / (ROWS - 1);

/* ─── Shared raycaster objects ────────────────────────────────── */
const _ray     = new THREE.Raycaster();
const _planeY0 = new THREE.Plane(new THREE.Vector3(0, 1, 0),  0);  // Y=0
const _planeY4 = new THREE.Plane(new THREE.Vector3(0, 1, 0), -4);  // Y=4 fallback
const _hit     = new THREE.Vector3();

function screenToWorld(cx, cy, camera) {
  _ray.setFromCamera({
    x:  (cx / window.innerWidth)  * 2 - 1,
    y: -(cy / window.innerHeight) * 2 + 1,
  }, camera);
  if (_ray.ray.intersectPlane(_planeY0, _hit)) return _hit;
  if (_ray.ray.intersectPlane(_planeY4, _hit)) return _hit;
  _ray.ray.at(90, _hit);
  return _hit;
}

/* ─── Particle mesh ───────────────────────────────────────────── */
const WaveParticles = () => {
  const pointsRef    = useRef();
  const { camera }   = useThree();
  const cameraRef    = useRef(camera);
  const cursorTarget = useRef(new THREE.Vector3(9999, 0, 9999)); // raw mouse pos
  const cursor       = useRef(new THREE.Vector3(9999, 0, 9999)); // smoothed pos

  // Always keep camera ref current
  useEffect(() => { cameraRef.current = camera; });

  // ── Build perspective-correct TRAPEZOIDAL grid ──────────────
  // Near rows (bottom of screen): narrow X
  // Far rows  (top of screen):    wide X  → fills corners!
  const [positions, colors, xExtents] = useMemo(() => {
    const total = COLS * ROWS;
    const pos = new Float32Array(total * 3);
    const col = new Float32Array(total * 3);
    const xe  = new Float32Array(ROWS); // store xExtent per row for frame loop

    const c1 = new THREE.Color('#ff2200');
    const c2 = new THREE.Color('#ff8c00');
    const c3 = new THREE.Color('#ffe8d6');

    let i = 0;
    for (let zi = 0; zi < ROWS; zi++) {
      const pz      = Z_NEAR - zi * Z_STEP;
      const xExtent = X_NEAR + (Z_NEAR - pz) * X_GROW; // grows toward horizon
      xe[zi]        = xExtent;

      for (let xi = 0; xi < COLS; xi++) {
        // Evenly distribute across xExtent for this row
        const posX = ((xi / (COLS - 1)) - 0.5) * 2 * xExtent;

        pos[i]     = posX;
        pos[i + 1] = 0;
        pos[i + 2] = pz;

        // Fade: bright near bottom, FULLY invisible above 65% depth
        const t    = zi / (ROWS - 1);
        const fade = t < 0.2
          ? 1.0
          : Math.max(0, 1 - Math.pow((t - 0.2) / 0.45, 0.9));
        // Keep color as orange→golden only (no white at horizon)
        const mix  = c1.clone().lerp(c2, Math.min(t * 2, 1));

        col[i]     = mix.r * fade;
        col[i + 1] = mix.g * fade;
        col[i + 2] = mix.b * fade;

        i += 3;
      }
    }
    return [pos, col, xe];
  }, []);

  // Attach geometry once
  useEffect(() => {
    const geo = pointsRef.current?.geometry;
    if (!geo) return;
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3));
  }, [positions, colors]);

  // Global mouse tracker → writes to cursorTarget (raw)
  // useFrame below lerps cursor → cursorTarget for smooth follow
  useEffect(() => {
    const onMove = (e) => {
      const w = screenToWorld(e.clientX, e.clientY, cameraRef.current);
      cursorTarget.current.set(w.x, 0, w.z);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Per-frame animation
  useFrame((state) => {
    const geo = pointsRef.current?.geometry;
    if (!geo?.attributes?.position) return;

    const time = state.clock.getElapsedTime();
    const arr  = geo.attributes.position.array;

    // Very slow lerp → cursor ripple trails behind smoothly
    cursor.current.lerp(cursorTarget.current, 0.02);
    const cx = cursor.current.x;
    const cz = cursor.current.z;

    let i = 0;
    for (let zi = 0; zi < ROWS; zi++) {
      const pz       = Z_NEAR - zi * Z_STEP;
      const xExtent  = xExtents[zi];
      const depthFade = 1 - (zi / ROWS) * 0.45; // wave calmer at horizon

      for (let xi = 0; xi < COLS; xi++) {
        const px = ((xi / (COLS - 1)) - 0.5) * 2 * xExtent;

        // Idle wave
        let h =
          (Math.sin(xi * 0.13 + time * WAVE_SPEED) * WAVE_AMP +
           Math.cos(zi * 0.11 + time * WAVE_SPEED) * WAVE_AMP) * depthFade;

        // Cursor ripple
        const dx   = px - cx;
        const dz   = pz - cz;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < RIPPLE_R) {
          const s = 1 - dist / RIPPLE_R;
          const eased = s * s * (3 - 2 * s); // smooth cubic
          h += Math.sin(dist * 1.6 - time * 4.5) * eased * RIPPLE_AMP;
        }

        arr[i + 1] = h;
        i += 3;
      }
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.065}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.88}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

/* ─── Canvas wrapper ───────────────────────────────────────────── */
export default function ParticleWave() {
  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: -2,
      pointerEvents: 'none',
      background: '#09090b',
    }}>
      <Canvas
        camera={{ position: [0, 9, 14], fov: 55 }}
        style={{ background: 'transparent' }}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      >
        <WaveParticles />
      </Canvas>

      {/* Gradient overlay — fades particles from top downward */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '52%',
        background: 'linear-gradient(to bottom, #09090b 0%, #09090b 18%, rgba(9,9,11,0.75) 35%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

