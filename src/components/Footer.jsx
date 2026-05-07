import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer" style={{ overflowX: 'hidden' }}>
    {/* Big footer marquee - Full Width (Edge to Edge) */}
    <div className="footer-marquee-container" style={{ borderBottom: '1px solid #1a1a1a', padding: '3rem 0', marginBottom: '5rem', overflow: 'hidden', background: '#050505' }}>
      <div className="marquee-container" style={{ position: 'relative', opacity: 1 }}>
        <div className="marquee-content" style={{ fontSize: 'clamp(2rem, 8vw, 10rem)', fontWeight: 900, lineHeight: 1 }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className="marquee-brand-text" style={{ display: 'inline-block', paddingRight: '6rem' }}>
              THE ENZO MEDIA.
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <img src="/images/logodarktheme/logo.webp" alt="The Enzo Media" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
          </Link>
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
          <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/#services" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>All Services</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/work" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Case Studies</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/about" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/gallery" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Work Gallery</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/blog" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Blog Insights</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Core Solutions</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/digital-marketing-varanasi" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Digital Marketing</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/google-ads-agency" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Google Ads</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/social-media-marketing" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Social Media</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/services/performance-ads" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Performance Ads</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Service Areas</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/marketing-agency-varanasi" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Varanasi</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/marketing-agency-ayodhya" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Ayodhya</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/marketing-agency-gonda" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Gonda</Link></li>
            <li style={{ marginBottom: '0.75rem' }}><Link to="/marketing-agency-delhi" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>Delhi NCR</Link></li>
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

      <div className="footer-bottom" style={{ borderTop: '1px solid #1a1a1a', marginTop: '5rem', padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#444', flexWrap: 'wrap', gap: '1rem' }}>
        <span>© {new Date().getFullYear()} The Enzo Media. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to="/privacy-policy" style={{ color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'}
            onMouseLeave={e => e.currentTarget.style.color = '#444'}
          >Privacy Policy</Link>
          <Link to="/terms-and-conditions" style={{ color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'}
            onMouseLeave={e => e.currentTarget.style.color = '#444'}
          >Terms & Conditions</Link>
          <span>Made in Varanasi</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

