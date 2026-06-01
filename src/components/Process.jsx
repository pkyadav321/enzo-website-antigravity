import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Map, Zap, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discovery Audit',
    desc: 'Deep dive into your business, audience, and competitive landscape to find the real growth levers.',
    Icon: Search,
    color: '#ff2200',
  },
  {
    num: '02',
    title: 'Growth Blueprint',
    desc: 'A custom strategy roadmap built around your specific market, budget, and goals.',
    Icon: Map,
    color: '#ff4d00',
  },
  {
    num: '03',
    title: 'Relentless Execution',
    desc: 'Campaigns launched with precision. Creatives built to stop the scroll and convert at every stage.',
    Icon: Zap,
    color: '#ff7b00',
  },
  {
    num: '04',
    title: 'Optimize & Scale',
    desc: "Test, learn, and compound. We double down on what works and kill what doesn't.",
    Icon: TrendingUp,
    color: '#ffaa00',
  },
];

const Process = () => {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!wrapper || !sticky || !track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - track.offsetWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${track.scrollWidth - track.offsetWidth}`,
          pin: sticky,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id="process" style={{ position: 'relative' }}>

      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        {/* Section Header */}
        <div style={{ padding: '0 4rem 3rem', flexShrink: 0 }}>
          <span className="section-label">How We Do It</span>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              margin: 0,
            }}>
              A Strategic{' '}
              <span style={{ color: '#ff4d00' }}>Blueprint.</span>
            </h2>
            <p style={{
              color: '#71717a',
              fontSize: '1rem',
              lineHeight: 1.6,
              maxWidth: '340px',
              margin: 0,
            }}>
              From deep discovery to exponential scaling, our process is designed for precision and results.{' '}
              <span style={{ opacity: 0.5 }}>Scroll →</span>
            </p>
          </div>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '1.5rem',
            paddingLeft: '4rem',
            paddingRight: '4rem',
            willChange: 'transform',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                flexShrink: 0,
                width: 'clamp(300px, 30vw, 480px)',
                height: '420px',
                background: 'var(--card-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-color)',
                borderRadius: '32px',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.4s ease, transform 0.4s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = step.color;
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Ghost number background */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '16px',
                fontSize: '9rem',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.04)',
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>{step.num}</div>

              {/* Top glow */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '200px', height: '200px',
                background: `radial-gradient(circle, ${step.color}18 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                width: '54px', height: '54px',
                background: `${step.color}18`,
                border: `1px solid ${step.color}35`,
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: step.color,
              }}>
                <step.Icon size={24} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                }}>
                  {step.title}
                </h4>
                <p style={{
                  color: '#71717a',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0,
                width: '100%', height: '3px',
                background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback */}
      <style>{`
        @media (max-width: 768px) {
          #process {
            height: auto !important;
          }
          #process [style*="position: sticky"] {
            position: relative !important;
            height: auto !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
};

export default Process;
