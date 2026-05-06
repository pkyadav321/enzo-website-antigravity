import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

/*
  ServiceDetail — NO reveal/stagger classes.
  Content uses mount-based fade-in (opacity transition on load)
  so it's ALWAYS visible when the page opens.
*/

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    /* Small delay so transition fires after paint */
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, [serviceId]);

  if (!service) {
    return (
      <div style={{ color: '#fff', padding: '200px 2rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Service Not Found</h2>
        <Link to="/" style={{ color: '#ff4d00' }}>← Back to Home</Link>
      </div>
    );
  }

  /* Reusable fade style — mounts immediately */
  const fade = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <main style={{ background: 'transparent' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '160px 0 80px',
      }}>
        <div className="container">
          <span
            className="section-label"
            style={{ display: 'inline-block', ...fade(0) }}
          >
            Service Expertise
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.05em',
              color: '#fff',
              marginBottom: '2rem',
              marginTop: '1rem',
              ...fade(0.1),
            }}
          >
            {service.title.split(' ').map((word, i) => (
              <span key={i}>
                {i % 2 !== 0
                  ? <span style={{
                      background: 'linear-gradient(135deg,#ff2200,#ff4d00,#ff8c00)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text', fontStyle: 'normal',
                    }}>{word} </span>
                  : word + ' '
                }
              </span>
            ))}
          </h1>

          <p style={{
            color: '#888', fontSize: '1.25rem', lineHeight: 1.8,
            maxWidth: '750px', margin: '0 auto 2.5rem',
            ...fade(0.2),
          }}>
            {service.what}
          </p>

          <div style={{ ...fade(0.3) }}>
            <Link to="/#contact" className="btn-primary">
              Get a Free Consultation ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #1a1a1a' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '3rem',
          textAlign: 'center',
          ...fade(0.1),
        }}>
          {[
            { val: '95%', label: 'Client Retention' },
            { val: '2.5×', label: 'Avg Growth Rate' },
            { val: '50+', label: 'Brands Scaled' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900,
                background: 'linear-gradient(135deg,#ff4d00,#ff8c00)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{s.val}</div>
              <div style={{
                fontSize: '0.65rem', color: '#444', textTransform: 'uppercase',
                letterSpacing: '0.15em', marginTop: '0.5rem', fontWeight: 700,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY & HOW ── */}
      <section style={{ padding: '100px 0', borderTop: '1px solid #1a1a1a' }}>
        <div className="container">
          <div className="service-detail-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            textAlign: 'left',
            ...fade(0.15),
          }}>
            {/* Left — Why */}
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900,
                color: '#fff', marginBottom: '2rem',
              }}>
                The{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#ff2200,#ff4d00,#ff8c00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Rationale.</span>
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                {service.why}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {service.deliverables.map((d, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    color: '#ddd', fontSize: '0.9rem', fontWeight: 600,
                  }}>
                    <span style={{ color: '#ff4d00', fontSize: '1.1rem' }}>—</span> {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — How / Steps */}
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900,
                color: '#fff', marginBottom: '2rem',
              }}>
                Our{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#ff2200,#ff4d00,#ff8c00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Framework.</span>
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                {service.how}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {service.steps.map((step, i) => (
                  <div key={i} className="card" style={{ padding: '1.75rem' }}>
                    <div style={{
                      fontSize: '0.65rem', fontWeight: 800, color: '#ff4d00',
                      letterSpacing: '0.1em', marginBottom: '0.75rem',
                    }}>0{i + 1}</div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.83rem', color: '#555', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATEMENT ── */}
      <section style={{
        padding: '120px 0',
        background: '#060606',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Watermark text */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          fontSize: '12vw', fontWeight: 900,
          color: 'rgba(255,255,255,0.015)',
          whiteSpace: 'nowrap', pointerEvents: 'none',
          textTransform: 'uppercase', letterSpacing: '-0.05em',
        }}>{service.title}</div>

        <div className="container" style={{ position: 'relative', zIndex: 1, ...fade(0.1) }}>
          <p style={{
            fontSize: '0.65rem', fontWeight: 800, color: '#ff4d00',
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem',
          }}>
            {service.tagline}
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 900,
            color: '#fff', marginBottom: '3rem', lineHeight: 1.2,
          }}>
            Turning Potential into{' '}
            <span style={{
              background: 'linear-gradient(135deg,#ff2200,#ff4d00,#ff8c00)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Power.</span>
          </h2>
          <div style={{
            maxWidth: '820px', margin: '0 auto',
            padding: '3.5rem',
            border: '1px solid rgba(255,77,0,0.15)',
            borderRadius: '32px',
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(20px)',
          }}>
            <p style={{ fontSize: '1.3rem', color: '#999', lineHeight: 1.8 }}>
              We don't just provide {service.title} services — we build compounding growth engines.
              Every campaign is a calculated step toward market dominance.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '100px 0',
        textAlign: 'center',
        borderTop: '1px solid #1a1a1a',
        ...fade(0.1),
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900,
            marginBottom: '1.5rem', color: '#fff',
          }}>
            Ready to Scale{' '}
            <span style={{
              background: 'linear-gradient(135deg,#ff2200,#ff4d00,#ff8c00)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{service.title}?</span>
          </h2>
          <p style={{ color: '#555', marginBottom: '2.5rem', fontSize: '1rem' }}>
            Book a free 30-minute strategy call with our team.
          </p>
          <Link to="/#contact" className="btn-primary">
            Book a Strategy Call ↗
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
