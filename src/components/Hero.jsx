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

/* ── Custom Floating Dashboard Mockup showing UP Client Maps & Metrics ── */
const FloatingMockup = () => (
  <div className="reveal stagger-4 hero-dashboard-mockup">
    {/* Browser Bar */}
    <div className="mockup-header">
      <div className="dots">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
      </div>
      <div className="address-bar">enzo-performance-core.io</div>
    </div>
    
    {/* Dashboard Image */}
    <div className="mockup-body-img-wrapper" style={{ overflow: 'hidden', lineHeight: 0, position: 'relative' }}>
      <img 
        src="/images/up_marketing_dashboard_mockup.png" 
        alt="Enzo Digital Campaign Performance Dashboard for UP & NCR" 
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  </div>
);

const Hero = () => (
  <section
    id="hero"
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '120px 0 0',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
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

    <div className="container hero-container">
      <div className="hero-grid-layout">
        
        {/* Left Column: Copy & Actions */}
        <div className="hero-text-col">
          {/* Main Heading */}
          <h1
            className="reveal stagger-2 hero-main-title"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              textAlign: 'inherit',
            }}
          >
            Building <br />
            Scalable Brands <br />
            with{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff2200 0%, #ff4d00 50%, #ff8c00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              AI &amp; Creative Strategy.
            </span>
          </h1>

          {/* Subtext Paragraph with better accessibility contrast */}
          <p 
            className="reveal stagger-3"
            style={{ 
              fontSize: '1.1rem', 
              color: '#3f3f46', /* Darker grey for accessibility contrast */
              lineHeight: 1.7, 
              maxWidth: '520px', 
              fontWeight: 400,
              marginBottom: '2.5rem',
              textAlign: 'inherit',
            }}
          >
            The leading AI-powered creative performance agency scaling brands across{' '}
            <b>Gonda</b>, <b>Ayodhya</b>, <b>Varanasi (Banaras)</b>, and <b>Delhi NCR</b>.
            We turn ad spend into measurable profit. Stop guessing. Start scaling.
          </p>

          {/* CTA Buttons */}
          <div className="reveal stagger-3 hero-cta-buttons" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Free Audit ↗
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              See Our Results
            </button>
          </div>
        </div>

        {/* Right Column: Floating Device Mockup */}
        <div className="hero-mockup-col">
          <FloatingMockup />
        </div>
      </div>

      {/* Stats row with Local UP Proof-points */}
      <div
        className="reveal stagger-4 hero-stats-row"
        style={{ 
          display: 'flex', 
          gap: '4rem', 
          padding: '5rem 0', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-color)',
        }}
      >
        {[
          { end: 120, suffix: '+', label: 'UP Brands Digitised' },
          { end: 50,  suffix: ' Cr+', label: 'Local Revenue Driven' },
          { end: 10,  suffix: 'K+', label: 'Admissions in Gonda' },
          { end: 4,   suffix: ' Focus Hubs', label: 'Varanasi, Ayodhya, Gonda, NCR' },
        ].map((s) => (
          <div key={s.label} className="stat-item" style={{ flex: '1', minWidth: '160px', textAlign: 'left' }}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 900, lineHeight: 1,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #ff4d00, #ff8c00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              <CountUp end={s.end} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      /* 2-Column Responsive Hero Grid */
      .hero-grid-layout {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 3.5rem;
        align-items: center;
        text-align: left;
        padding-bottom: 4rem;
      }
      .hero-text-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .hero-mockup-col {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        width: 100%;
      }

      /* Mockup Glassmorphic styling */
      .hero-dashboard-mockup {
        width: 100%;
        max-width: 440px;
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 24px;
        box-shadow: 0 25px 60px rgba(15,15,17,0.08);
        overflow: hidden;
        animation: mockup-float 6s ease-in-out infinite;
        transform-origin: center;
      }
      @keyframes mockup-float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-12px) rotate(0.8deg); }
      }
      .mockup-header {
        background: rgba(0,0,0,0.025);
        border-bottom: 1px solid rgba(0,0,0,0.05);
        padding: 0.6rem 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .dots {
        display: flex;
        gap: 0.35rem;
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
      }
      .dot-red { background: #ff5f56; }
      .dot-yellow { background: #ffbd2e; }
      .dot-green { background: #27c93f; }
      .address-bar {
        background: #fff;
        border: 1px solid rgba(0,0,0,0.06);
        border-radius: 6px;
        font-size: 0.55rem;
        color: var(--text-tertiary);
        padding: 0.15rem 1rem;
        flex: 1;
        text-align: center;
        font-family: monospace;
      }
      .mockup-body {
        display: flex;
        height: 250px;
      }
      .mockup-sidebar {
        width: 45px;
        background: rgba(0,0,0,0.015);
        border-right: 1px solid rgba(0,0,0,0.05);
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .sidebar-icon {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background: rgba(0,0,0,0.08);
      }
      .sidebar-icon.active {
        background: var(--primary);
        opacity: 0.8;
      }
      .mockup-content {
        flex: 1;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 0;
        text-align: left;
      }
      .content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.65rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-primary);
      }
      .pulse-indicator {
        width: 6px;
        height: 6px;
        background: #27c93f;
        border-radius: 50%;
        box-shadow: 0 0 8px #27c93f;
        animation: live-pulse 1.5s infinite;
      }
      @keyframes live-pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.4); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
      }
      .panel-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 0.8rem;
        margin: 0.8rem 0;
        flex: 1;
      }
      .panel-map-box {
        background: rgba(255,255,255,0.6);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 12px;
        padding: 0.6rem;
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .map-label {
        font-size: 0.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-tertiary);
        letter-spacing: 0.05em;
      }
      .node-pulse {
        animation: ring-pulse 2s infinite;
        transform-origin: center;
      }
      .node-pulse-delay-1 {
        animation: ring-pulse 2s infinite 0.6s;
        transform-origin: center;
      }
      .node-pulse-delay-2 {
        animation: ring-pulse 2s infinite 1.2s;
        transform-origin: center;
      }
      @keyframes ring-pulse {
        0% { r: 4px; opacity: 1; }
        100% { r: 12px; opacity: 0; }
      }
      .panel-side-charts {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .chart-card {
        background: rgba(255,255,255,0.6);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 10px;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .card-lbl {
        font-size: 0.45rem;
        font-weight: 700;
        color: var(--text-tertiary);
        text-transform: uppercase;
      }
      .card-val {
        font-size: 1.1rem;
        font-weight: 900;
        color: var(--primary);
        font-family: 'Outfit', sans-serif;
        line-height: 1.1;
        margin-top: 0.1rem;
      }
      .mockup-ticker {
        background: rgba(0,0,0,0.02);
        border: 1px solid rgba(0,0,0,0.04);
        border-radius: 6px;
        padding: 0.35rem;
        font-size: 0.5rem;
        color: var(--text-secondary);
        font-family: monospace;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
      }
      .ticker-track {
        display: inline-block;
        padding-left: 100%;
        animation: ticker-slide 18s linear infinite;
      }
      .ticker-track span {
        margin-right: 2rem;
      }
      @keyframes ticker-slide {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-100%, 0, 0); }
      }

      /* MOBILE/TABLET RESPONSIVENESS */
      @media (max-width: 991px) {
        .hero-grid-layout {
          grid-template-columns: 1fr;
          text-align: center;
          gap: 3rem;
          padding-top: 40px;
        }
        .hero-text-col {
          align-items: center;
        }
        .hero-mockup-col {
          justify-content: center;
        }
        .hero-stats-row {
          justify-content: center;
          text-align: center;
          gap: 2.5rem;
        }
        .stat-item {
          text-align: center !important;
        }
      }
    `}</style>
  </section>
);

export default Hero;
