import React from 'react';

const Footer = () => (
  <footer className="footer" style={{ overflowX: 'hidden' }}>
    {/* Big footer marquee - Full Width (Edge to Edge) */}
    <div style={{ borderBottom: '1px solid #1a1a1a', padding: '3rem 0', marginBottom: '5rem', overflow: 'hidden', background: '#050505' }}>
      <div className="marquee-container" style={{ position: 'relative', opacity: 1 }}>
        <div className="marquee-content" style={{ fontSize: 'clamp(2rem, 8vw, 10rem)', fontWeight: 900, lineHeight: 1 }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#fff', display: 'inline-block', paddingRight: '6rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.3)', textShadow: '0 0 15px rgba(255,255,255,0.1)' }}>THE ENZO</span> <span style={{ color: '#111' }}>MEDIA.</span>
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <img src="/images/logodarktheme/logo.png" alt="The Enzo Media" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            A premium creative performance agency helping brands across <b>Varanasi</b>, <b>Gonda</b>, <b>Ayodhya</b>, and <b>Delhi NCR</b> scale with data-driven marketing and creative excellence.
          </p>
          <div className="footer-socials" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.instagram.com/theenzomedia" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/theenzomedia" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><a href="#services" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Services</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#portfolio" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Portfolio</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#about" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#gallery" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Gallery</a></li>
            <li style={{ marginBottom: '0.75rem' }}><a href="#/blog" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Serving In</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>Varanasi, UP</li>
            <li style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>Gonda, UP</li>
            <li style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>Ayodhya, UP</li>
            <li style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>Delhi NCR</li>
            <li style={{ marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>Mumbai (Remote)</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Location</h4>
          <div className="footer-location" style={{ color: '#666' }}>
            <div className="loc-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#444', marginBottom: '0.3rem' }}>Headquarters</div>
            <div className="loc-city" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Varanasi, UP</div>
            <div className="loc-country">India</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid #1a1a1a', marginTop: '5rem', padding: '2rem 0', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#444' }}>
        <span>© {new Date().getFullYear()} The Enzo Media. All rights reserved.</span>
        <span>Made in Varanasi</span>
      </div>
    </div>
  </footer>
);

export default Footer;
