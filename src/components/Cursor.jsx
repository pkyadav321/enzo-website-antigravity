import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, animate } from 'framer-motion';

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Ring follows with dampened spring — feels "magnetic"
  const ringSpring = { damping: 28, stiffness: 180, mass: 0.5 };
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  // Dot snaps instantly
  const dotX = cursorX;
  const dotY = cursorY;

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e) => {
      const el = e.target;
      const interactive =
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('magnetic') ||
        el.closest('[data-cursor="hover"]');
      setIsHovered(!!interactive);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [cursorX, cursorY]);

  if (isHidden && typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring — spring-lagged, gradient border */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 56 : isClicking ? 20 : 36,
            height: isHovered ? 56 : isClicking ? 20 : 36,
            borderColor: isHovered ? 'transparent' : 'rgba(255,77,0,0.6)',
            backgroundColor: isHovered ? 'rgba(255,77,0,0.12)' : 'transparent',
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          style={{
            borderRadius: isHovered ? '8px' : '50%',
            border: '1.5px solid',
            boxShadow: isHovered
              ? '0 0 20px rgba(255,77,0,0.3), 0 0 40px rgba(255,130,0,0.1)'
              : '0 0 10px rgba(255,77,0,0.15)',
            background: isHovered
              ? 'radial-gradient(circle, rgba(255,77,0,0.15), rgba(255,130,0,0.05))'
              : 'transparent',
          }}
        />
      </motion.div>

      {/* Inner dot — snaps to position */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 6 : isClicking ? 3 : 5,
            height: isHovered ? 6 : isClicking ? 3 : 5,
            opacity: isHovered ? 0.6 : 1,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          style={{
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff4d00, #ff8c00)',
            boxShadow: '0 0 8px rgba(255,77,0,0.8)',
          }}
        />
      </motion.div>
    </>
  );
};

export default Cursor;
