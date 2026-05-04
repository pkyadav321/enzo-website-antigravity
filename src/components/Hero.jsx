import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Hero = () => (
  <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0', background: 'transparent', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
    
    {/* Decorative Background Element (Interactive Aura) */}
    <div className="reveal stagger-1 floating-bg" style={{ 
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      width: '600px', height: '600px', 
      background: 'radial-gradient(circle, rgba(232,53,42,0.05) 0%, transparent 70%)',
      borderRadius: '50%', zIndex: -1, pointerEvents: 'none'
    }} />

    {/* Vector Markers */}
    <div className="reveal" style={{ position: 'absolute', top: '40px', right: '40px', opacity: 0.2, color: '#fff', fontSize: '0.6rem', letterSpacing: '0.2em', pointerEvents: 'none', textAlign: 'right' }}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ marginLeft: 'auto' }}>
        <path d="M30 0V60M0 30H60" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="30" cy="30" r="2" fill="currentColor"/>
      </svg>
      <div style={{ marginTop: '10px', fontFamily: 'monospace' }}>COORD // 25.31° N, 82.97° E</div>
    </div>
    <div className="reveal" style={{ position: 'absolute', bottom: '60px', left: '40px', opacity: 0.15, color: '#fff', fontSize: '0.6rem', pointerEvents: 'none', textAlign: 'left' }}>
      <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
        {[...Array(20)].map((_, i) => (
          <rect key={i} x={i * 5} y="0" width="1" height={i % 5 === 0 ? '20' : '10'} fill="currentColor"/>
        ))}
      </svg>
      <div style={{ marginTop: '10px', fontFamily: 'monospace', letterSpacing: '0.1em' }}>ENZO_SYSTEM_CORE_V.04</div>
    </div>

    {/* Giant headline — 2 lines */}
    <div className="container" style={{ paddingTop: '100px' }}>
      <h1 className="reveal stagger-2" style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(3rem, 8vw, 6.5rem)',
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-0.04em',
        color: '#fff',
        margin: '0 auto 2.5rem',
        maxWidth: '1250px'
      }}>
        Building Scalable Brands<br />
        with <span className="text-italic-accent">Creative Strategy.</span>
      </h1>

      {/* Sub row — centered */}
      <div className="reveal stagger-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', paddingBottom: '5rem', borderBottom: '1px solid #1a1a1a' }}>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.7, maxWidth: '600px', fontWeight: 400 }}>
          The leading creative performance agency scaling brands across <b>Varanasi</b>, <b>Gonda</b>, <b>Ayodhya</b>, and <b>Delhi NCR</b>. We turn ad spend into measurable profit. Stop guessing. Start scaling.
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

      {/* Stats row — centered */}
      <div className="reveal stagger-4" style={{ display: 'flex', gap: '6rem', padding: '4rem 0', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { end: 50, suffix: '+', label: 'Clients Served' },
          { end: 3, suffix: '×', label: 'Avg ROI Delivered' },
          { end: 4, suffix: '', label: 'Cities Active' },
          { end: 3, suffix: '+', label: 'Years in Market' },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1, color: '#fff', letterSpacing: '-0.04em' }}>
              <CountUp end={s.end} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444', marginTop: '0.4rem' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
