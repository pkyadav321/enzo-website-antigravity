import React, { useEffect, useRef } from 'react';

const TRAIL_COUNT = 12;

const CursorTrail = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    const coords = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId;
    const animate = () => {
      let x = coords.x;
      let y = coords.y;
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const nextX = x;
        const nextY = y;
        dot.style.left = `${nextX}px`;
        dot.style.top = `${nextY}px`;
        dot.style.opacity = 1 - i / TRAIL_COUNT;
        dot.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
        x += (parseFloat(dot.style.left) - nextX) * 0.35;
        y += (parseFloat(dot.style.top) - nextY) * 0.35;
      });
      animId = requestAnimationFrame(animate);
    };

    // Delayed follow effect
    const positions = Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }));
    const animateTrail = () => {
      positions[0].x += (coords.x - positions[0].x) * 0.25;
      positions[0].y += (coords.y - positions[0].y) * 0.25;
      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.25;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.25;
      }
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.left = `${positions[i].x}px`;
        dot.style.top = `${positions[i].y}px`;
        dot.style.opacity = (1 - i / TRAIL_COUNT) * 0.7;
        dot.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
      });
      animId = requestAnimationFrame(animateTrail);
    };

    animateTrail();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-dot"
          style={{
            width: '6px',
            height: '6px',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
