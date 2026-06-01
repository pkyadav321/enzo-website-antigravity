import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveParticles = () => {
  const pointsRef = useRef();
  
  // Create a grid of particles
  const count = 75; // Number of particles in X and Y
  const numParticles = count * count;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    
    // Curated brand color palette: primary saffron-orange (#ff4d00) to golden (#ffaa00)
    const color1 = new THREE.Color('#ff4d00');
    const color2 = new THREE.Color('#ffaa00');
    const color3 = new THREE.Color('#ffffff'); // soft white highlight
    
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        positions[i] = (x - count / 2) * 0.45;     // X coordinate
        positions[i + 1] = 0;                       // Y coordinate (height, to be animated)
        positions[i + 2] = (y - count / 2) * 0.45; // Z coordinate
        
        const ratio = (x + y) / (count * 2);
        let mixColor;
        if (ratio < 0.5) {
          mixColor = color1.clone().lerp(color2, ratio * 2);
        } else {
          mixColor = color2.clone().lerp(color3, (ratio - 0.5) * 2);
        }
        
        colors[i] = mixColor.r;
        colors[i + 1] = mixColor.g;
        colors[i + 2] = mixColor.b;
        
        i += 3;
      }
    }
    return [positions, colors];
  }, [numParticles]);

  // Safely bind attributes programmatically on mount/update
  useEffect(() => {
    if (pointsRef.current && pointsRef.current.geometry) {
      const geo = pointsRef.current.geometry;
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
    }
  }, [positions, colors]);

  useFrame((state) => {
    // Safety guard: wait until attributes are bound by useEffect
    if (
      !pointsRef.current || 
      !pointsRef.current.geometry || 
      !pointsRef.current.geometry.attributes.position
    ) {
      return;
    }

    const time = state.clock.getElapsedTime();
    const positionsArray = pointsRef.current.geometry.attributes.position.array;
    const pointer = state.pointer || state.mouse || { x: 0, y: 0 };
    const mouseX = pointer.x;
    const mouseY = pointer.y;
    
    const targetX = mouseX * 12;
    const targetY = mouseY * 12;
    
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const posX = (x - count / 2) * 0.45;
        const posZ = (y - count / 2) * 0.45;
        
        const dx = posX - targetX;
        const dz = posZ - targetY;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        let wave = Math.sin(x * 0.12 + time * 1.2) * 0.6;
        wave += Math.cos(y * 0.12 + time * 1.2) * 0.6;
        
        const interactionRadius = 6.0;
        let ripple = 0;
        if (dist < interactionRadius) {
          const strength = (1.0 - dist / interactionRadius);
          ripple = Math.sin(dist * 1.5 - time * 3.5) * strength * 1.8;
        }
        
        positionsArray[i + 1] = wave + ripple;
        i += 3;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.06}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function ParticleWave() {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -2, 
        pointerEvents: 'none',
        background: '#09090b', 
      }}
    >
      <Canvas
        camera={{ position: [0, 9, 14], fov: 55 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <WaveParticles />
      </Canvas>
    </div>
  );
}
