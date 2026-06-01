import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Full services list — all 10 links restored
  const servicesLinks = [
    { label: 'Performance Ads', path: '/services/performance-ads' },
    { label: 'Social Media Growth', path: '/services/social-media' },
    { label: 'High-Converting Video', path: '/services/high-converting-video' },
    { label: 'Conversion Web Design', path: '/services/conversion-web-design' },
    { label: 'Brand & Creative Design', path: '/services/brand-creative' },
    { label: 'Commercial Photography', path: '/services/commercial-photography' },
    { label: 'AI-Powered Imagery', path: '/services/ai-product-imagery' },
    { label: 'OOH Advertising', path: '/services/ooh-advertising' },
    { label: 'Ecommerce Listing Designs', path: '/services/ecommerce-listing' },
    { label: 'Case Study: Sambhala Agro', path: '/casestudy/sambhala-orchard' },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link to="/" style={mobile ? { '--i': 0 } : {}} onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>Home</Link>
      <Link to="/about" style={mobile ? { '--i': 1 } : {}} onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>About</Link>

      <div
        className={`nav-dropdown-wrapper ${mobile ? 'mobile-dropdown' : ''}`}
        style={mobile ? { '--i': 2, flexShrink: 0, width: '100%' } : {}}
        onMouseEnter={() => !mobile && setIsServicesOpen(true)}
        onMouseLeave={() => !mobile && setIsServicesOpen(false)}
      >
        <div
          className="nav-dropdown-trigger"
          onClick={() => mobile && setIsServicesOpen(!isServicesOpen)}
          style={mobile ? { 
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: 'auto', flexShrink: 0
          } : { 
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}
        >
          <span>Services</span>
          {/* Removed arrow icon */}
        </div>
        
        {/* Desktop Dropdown */}
        {!mobile && (
          <div className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}>
            <Link to="/#services" className="nav-dropdown-item" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); setIsServicesOpen(false); }} style={{ fontWeight: 800, color: 'var(--primary)' }}>
              All Services
            </Link>
            {servicesLinks.map((s) => (
              <Link key={s.path} to={s.path} className="nav-dropdown-item" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); setIsServicesOpen(false); }}>
                {s.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Dropdown - Explicitly Rendered for Reliability */}
        {mobile && isServicesOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', marginTop: '1rem', gap: '1rem', flexShrink: 0, width: '100%' }}>
            <Link to="/#services" className="nav-dropdown-item" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); setIsServicesOpen(false); }} style={{ fontWeight: 800, color: '#ff4d00', padding: 0 }}>
              All Services
            </Link>
            {servicesLinks.map((s) => (
              <Link key={s.path} to={s.path} className="nav-dropdown-item" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); setIsServicesOpen(false); }} style={{ padding: 0 }}>
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/work" style={mobile ? { '--i': 3 } : {}} onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>Case Studies</Link>
      <Link to="/gallery" style={mobile ? { '--i': 4 } : {}} onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>Work</Link>
      <Link to="/blog" style={mobile ? { '--i': 5 } : {}} onClick={() => { window.scrollTo(0,0); setIsMenuOpen(false); }}>Blog</Link>
    </>
  );

  // Lock scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img
            src="/images/logodarktheme/logo.webp"
            alt="The Enzo Media"
            style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        <NavLinks />
      </div>

      {/* Action Area */}
      <div className="nav-actions">
        <Link to="/#contact" className="navbar-cta hide-mobile">Get in touch →</Link>

        {/* Hamburger */}
        <button
          className={`hamburger-v2 ${isMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'show' : ''}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`sidebar-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content" style={{ justifyContent: 'center', padding: '0 40px' }}>
          <div className="sidebar-links">
            <NavLinks mobile={true} />
            <Link to="/#contact" className="sidebar-cta-btn" style={{ '--i': 6, marginTop: '2rem' }} onClick={() => setIsMenuOpen(false)}>
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
