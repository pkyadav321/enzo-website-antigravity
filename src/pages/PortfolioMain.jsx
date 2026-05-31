import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PortfolioMain = () => {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <main style={{ background: 'var(--background)', minHeight: '100vh', paddingTop: isMobile ? '60px' : '80px' }}>
      {/* ─── HEADER ─── */}
      <section style={{ padding: isMobile ? '4rem 1.5rem 3rem' : '6rem 2rem 5rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#666',
          fontSize: isMobile ? '0.75rem' : '0.85rem',
          textDecoration: 'none',
          marginBottom: isMobile ? '2rem' : '3rem',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '0.05em',
          transition: 'color 0.2s'
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}
        >
          ← Back to Home
        </Link>

        <h1 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          textTransform: 'uppercase'
        }}>
          Brand <span style={{ color: '#ff4d00' }}>Case Study.</span>
        </h1>
      </section>

      {/* ─── SAMBHALA CASE STUDY CARD ─── */}
      <section style={{ padding: isMobile ? '0 1.5rem 4rem' : '0 2rem 8rem', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          borderRadius: isMobile ? '20px' : '24px',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.06)',
          background: 'var(--card-bg)',
          minHeight: isMobile ? 'auto' : '520px'
        }}>
          {/* Top/Left — Image (Mobile moves image to top for better impact) */}
          {isMobile && (
            <div style={{
              background: 'var(--section-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <img
                src="/branding/SAMBHALAORCHARD&AGROENGLISHFinal.png"
                alt="Sambhala Orchard & Agro Logo"
                style={{
                  width: '90%',
                  maxWidth: '300px',
                  filter: 'drop-shadow(0 15px 40px rgba(0,0,0,0.7))'
                }}
              />
            </div>
          )}

          {/* Text Content */}
          <div style={{
            padding: isMobile ? '2.5rem 1.5rem' : '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: isMobile ? '1.2rem' : '1.5rem'
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#ff4d00'
            }}>
              Featured Case Study · 2025
            </span>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              Sambhala <span style={{ color: '#ff4d00' }}>Orchard & Agro.</span>
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              A full brand identity system for a premium agricultural brand — from logo design and color systems to brand guidelines and packaging identity.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              {['Logo Design', 'Brand Identity', 'Guidelines', 'Packaging'].map(tag => (
                <span key={tag} style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '100px',
                  border: '1px solid rgba(255,77,0,0.25)',
                  background: 'rgba(255,77,0,0.06)',
                  fontSize: '0.7rem',
                  color: 'var(--text-secondary)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '0.05em'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/casestudy/sambhala-orchard"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: isMobile ? '0.8rem 1.5rem' : '0.9rem 2rem',
                background: 'linear-gradient(135deg, #ff2200, #ff4d00, #ff8c00)',
                color: '#fff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '0.7rem' : '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: '100px',
                textDecoration: 'none',
                width: 'fit-content',
                marginTop: '1rem',
                boxShadow: '0 8px 24px rgba(255,77,0,0.35)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,77,0,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,77,0,0.35)'; }}
            >
              View Full Case Study ↗
            </Link>
          </div>

          {/* Desktop — Right Logo visual */}
          {!isMobile && (
            <div style={{
              background: 'var(--section-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4rem',
              borderLeft: '1px solid var(--border-color)'
            }}>
              <img
                src="/branding/SAMBHALAORCHARD&AGROENGLISHFinal.png"
                alt="Sambhala Orchard & Agro Logo"
                style={{
                  width: '85%',
                  maxWidth: '420px',
                  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))'
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ─── MORE COMING SOON ─── */}
      <section style={{
        padding: isMobile ? '4rem 1.5rem 6rem' : '5rem 2rem 8rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)'
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: isMobile ? '0.7rem' : '0.8rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
          marginBottom: '1rem'
        }}>
          More Case Studies Coming Soon
        </p>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          Ready to build your brand?
        </h3>
        <Link
          to="/#contact"
          onClick={() => window.scrollTo(0, 0)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: isMobile ? '0.8rem 2rem' : '0.9rem 2.5rem',
            border: '1px solid rgba(255,77,0,0.3)',
            background: 'rgba(255,77,0,0.06)',
            color: '#ff4d00',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? '0.7rem' : '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,77,0,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,77,0,0.06)'; }}
        >
          Start a Project →
        </Link>
      </section>
    </main>
  );
};

export default PortfolioMain;
