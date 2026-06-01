import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'framer-motion';

/* ── CountUp using framer-motion animate ── */
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(0, end, {
            duration: duration / 1000,
            ease: 'easeOut',
            onUpdate: (v) => setCount(Math.round(v)),
          });
          observer.disconnect();
          return () => controls.stop();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => (
  <section
    id="hero"
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}
  >
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -2,
        pointerEvents: 'none',
      }}
    >
      <source src="/Video/hero-bg.webm" type="video/webm" />
    </video>

    {/* Video Overlay (Cream overlay for light theme contrast) */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(250, 248, 245, 0.82) 0%, rgba(250, 248, 245, 0.95) 100%)',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />

    {/* Ambient aura */}
    <div
      className="reveal stagger-1 floating-bg"
      style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(255,77,0,0.08) 0%, rgba(255,140,0,0.03) 40%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(20px)',
        zIndex: -1, pointerEvents: 'none',
        animation: 'orb-float-3 20s ease-in-out infinite',
      }}
    />

    {/* Top-right coord marker */}
    <div className="reveal" style={{ position: 'absolute', top: '40px', right: '40px', opacity: 0.15, color: 'var(--text-tertiary)', fontSize: '0.6rem', letterSpacing: '0.2em', pointerEvents: 'none', textAlign: 'right' }}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ marginLeft: 'auto' }}>
        <path d="M30 0V60M0 30H60" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="2" fill="currentColor" />
      </svg>
      <div style={{ marginTop: '10px', fontFamily: 'monospace' }}>COORD // 25.31° N, 82.97° E</div>
    </div>

    {/* Bottom-left system marker */}
    <div className="reveal" style={{ position: 'absolute', bottom: '60px', left: '40px', opacity: 0.12, color: 'var(--text-tertiary)', fontSize: '0.6rem', pointerEvents: 'none', textAlign: 'left' }}>
      <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
        {[...Array(20)].map((_, i) => (
          <rect key={i} x={i * 5} y="0" width="1" height={i % 5 === 0 ? '20' : '10'} fill="currentColor" />
        ))}
      </svg>
      <div style={{ marginTop: '10px', fontFamily: 'monospace', letterSpacing: '0.1em' }}>ENZO_SYSTEM_CORE_V.04</div>
    </div>

    <div className="container hero-container" style={{ paddingTop: '80px' }}>

      {/* ── MAIN HEADING — AI added correctly ── */}
      <h1
        className="reveal stagger-2 hero-main-title"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(1.2rem, 5vw, 6rem)', /* Scaled down minimum to guarantee 2-line fit on tiny screens */
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)',
          margin: '0 auto 2.5rem',
          maxWidth: '1400px', // Increased width to prevent 3rd line
        }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>Building Scalable Brands</span> <br />
        <span style={{ whiteSpace: 'nowrap', display: 'inline-block', marginTop: '0.2rem' }}>
          with{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #ff2200 0%, #ff4d00 50%, #ff8c00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI &amp; Creative Strategy.
          </span>
        </span>
      </h1>

      {/* Sub text + CTAs */}
      <div
        className="reveal stagger-3"
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '3rem', paddingBottom: '5rem',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px', fontWeight: 400 }}>
          The leading AI-powered creative performance agency scaling brands across{' '}
          <b>Gonda</b>, <b>Ayodhya</b>, <b>Varanasi (Banaras)</b>, and <b>Delhi NCR</b>.
          We turn ad spend into measurable profit. Stop guessing. Start scaling.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get a Free Audit ↗
          </button>
          <button className="btn-ghost" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            See Our Results
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="reveal stagger-4 hero-stats-row"
        style={{ display: 'flex', gap: '6rem', padding: '4rem 0', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {[
          { end: 50,  suffix: '+', label: 'Clients Served' },
          { end: 3,   suffix: '×', label: 'Avg ROI Delivered' },
          { end: 4,   suffix: '',  label: 'Cities Active' },
          { end: 3,   suffix: '+', label: 'Years in Market' },
        ].map((s) => (
          <div key={s.label}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900, lineHeight: 1,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #ff4d00, #ff8c00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              <CountUp end={s.end} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginTop: '0.4rem' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
