import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/*
  SMAPIT.IN EXACT-MATCH FLOATING PORTFOLIO
  ──────────────────────────────────────────────────────────────────
  BEHAVIOR:
  1. All 7 cards start EXACTLY at the center of the container (overlap).
  2. On scroll into view → they BURST OUT (translate) to their absolute positions.
  3. After landing → each card continuously floats up and down.

  IMAGE RULES:
  ✅ 3:4 or 4:5 aspect ratio images (not story height).
  ✅ border-radius: 16px.
*/

// Selected standard portrait images (not tall story sizes)
const GRID_IMAGES = [
  '/images/socialmediacreativ/Artboard 4.webp',
  '/images/socialmediacreativ/BITE POST 1.webp', 
  '/images/socialmediacreativ/Artboard 1 (2).webp',
  '/images/socialmediacreativ/4 (1).webp', // Replaced top row last image
  '/images/socialmediacreativ/Artboard 1 (4).webp', // Replaced with Artboard 1 (4)
  '/images/socialmediacreativ/Artboard 7.webp',
  '/images/socialmediacreativ/BITE POST 3.webp',
];

/*
  Perfectly Symmetrical Absolute Grid Layout
  Container is responsive. Width: 100%, Max-width: 1200px.
  Row 1 (4 cards): Lefts are 11%, 37%, 63%, 89%
  Row 2 (3 cards): Lefts are 24%, 50%, 76%
  Tops: Row 1 = 25%, Row 2 = 75% (Adjusted for perfect vertical gap on large screens)
  NO ROTATIONS.
*/
const CARDS_CFG = [
  // Row 1 (4 cards)
  { left: '11%', top: '25%', rot: 0, delay: 0.0, floatDur: 6.0 },
  { left: '37%', top: '25%', rot: 0, delay: 0.1, floatDur: 7.2 },
  { left: '63%', top: '25%', rot: 0, delay: 0.2, floatDur: 5.8 },
  { left: '89%', top: '25%', rot: 0, delay: 0.3, floatDur: 6.6 },
  // Row 2 (3 cards)
  { left: '24%', top: '75%', rot: 0, delay: 0.15, floatDur: 7.0 },
  { left: '50%', top: '75%', rot: 0, delay: 0.25, floatDur: 6.2 },
  { left: '76%', top: '75%', rot: 0, delay: 0.35, floatDur: 7.5 },
];

const PortfolioCard = ({ src, cfg, index, isExploded, isMobile }) => {
  // On mobile, we bypass the absolute "explosion" layout and use normal flex layout in a horizontal scroll container
  if (isMobile) {
    return (
      <div style={{ flexShrink: 0, width: '280px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src={src} alt="Portfolio Item" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
      </div>
    );
  }

  // Desktop explosion logic
  return (
    <motion.div
      initial={{ 
        left: '50%', 
        top: '50%', 
        x: '-50%', 
        y: '-50%', 
        scale: 0, 
        opacity: 0,
        rotate: 0 
      }}
      animate={isExploded ? {
        left: cfg.left,
        top: cfg.top,
        x: '-50%',
        y: '-50%',
        scale: 1,
        opacity: 1,
        rotate: 0 // strictly no rotation
      } : {}}
      transition={{
        duration: 0.8,
        delay: cfg.delay,
        type: 'spring',
        bounce: 0.4
      }}
      style={{
        position: 'absolute',
        width: '22%', // 22% width leaves exactly 4% gap between 4 cards (88% + 12% = 100%)
        minWidth: '220px',
        maxWidth: '280px',
        zIndex: 10 - index,
      }}
    >
      {/* The float container starts floating AFTER the explosion is roughly done */}
      <motion.div
        animate={isExploded ? {
          y: [0, -15, 0]
        } : {}}
        transition={isExploded ? {
          duration: cfg.floatDur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2 // wait for explosion
        } : {}}
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          background: '#111',
          width: '100%'
        }}
        whileHover={{
          y: -10,
          scale: 1.05,
          boxShadow: '0 30px 70px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,77,0,0.4)',
          transition: { duration: 0.3 }
        }}
      >
        <img
          src={src}
          alt="Portfolio Item"
          draggable="false"
          style={{
            width: '100%',
            aspectRatio: '3/4',
            objectFit: 'cover',
            display: 'block',
            userSelect: 'none'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="portfolio"
      style={{
        background: 'transparent',
        padding: '100px 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-label">OUR WORK</span>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 900,
          color: '#fff',
          marginTop: '1.5rem',
          lineHeight: 1.1,
          letterSpacing: '-0.04em'
        }}>
          Work we're{' '}
          <span className="text-accent">proud of.</span>
        </h2>
        <p style={{ color: '#555', marginTop: '1rem' }}>
          Scroll-stopping creatives engineered for performance.
        </p>
      </div>

      {isMobile ? (
        /* Mobile horizontal scroll gallery to prevent massive overflow */
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          padding: '0 2rem 2rem 2rem',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}>
          {GRID_IMAGES.map((src, i) => (
            <div key={i} style={{ scrollSnapAlign: 'center' }}>
              <PortfolioCard src={src} cfg={CARDS_CFG[i]} index={i} isExploded={isInView} isMobile={true} />
            </div>
          ))}
        </div>
      ) : (
        /* The absolute container for the explosion (Desktop only) */
        <div 
          ref={sectionRef}
          className="portfolio-explosion-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1300px',
            margin: '0 auto',
            height: '900px', // Perfect height for symmetrical grid gaps
          }}
        >
          {GRID_IMAGES.map((src, i) => (
            <PortfolioCard
              key={i}
              src={src}
              cfg={CARDS_CFG[i]}
              index={i}
              isExploded={isInView}
              isMobile={false}
            />
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="https://www.behance.net/prdpcrts" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          View Full Portfolio on Behance ↗
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
