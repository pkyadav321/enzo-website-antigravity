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

  const servicesLinks = [
    { label: 'Digital Marketing (Varanasi)', path: '/digital-marketing-varanasi' },
    { label: 'Google Ads Agency', path: '/google-ads-agency' },
    { label: 'Social Media Marketing', path: '/social-media-marketing' },
    { label: 'Performance Ads', path: '/services/performance-ads' },
    { label: 'Social Media Growth', path: '/services/social-media' },
    { label: 'High-Converting Video', path: '/services/high-converting-video' },
    { label: 'Conversion Web Design', path: '/services/conversion-web-design' },
    { label: 'Brand & Creative Design', path: '/services/brand-creative' },
    { label: 'Ecommerce Listing Designs', path: '/services/ecommerce-listing' },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link to="/about" style={mobile ? { '--i': 1 } : {}} onClick={() => setIsMenuOpen(false)}>About</Link>
      
      <div 
        className={`nav-dropdown-wrapper ${mobile ? 'mobile-dropdown' : ''}`}
        onMouseEnter={() => !mobile && setIsServicesOpen(true)}
        onMouseLeave={() => !mobile && setIsServicesOpen(false)}
        style={mobile ? { '--i': 2 } : {}}
      >
        <div 
          className="nav-dropdown-trigger" 
          onClick={() => mobile && setIsServicesOpen(!isServicesOpen)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {mobile ? (
            <>
              <span>Services</span>
              <span className={`arrow ${isServicesOpen ? 'up' : ''}`} style={{ transition: 'transform 0.3s', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </>
          ) : (
            <span style={{ cursor: 'pointer' }}>Services</span>
          )}
        </div>
        <div className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}>
          <Link 
            to="/#services" 
            className="nav-dropdown-item" 
            onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
            style={{ fontWeight: 800, color: '#fff' }}
          >
            All Services
          </Link>
          {servicesLinks.map((s, idx) => (
            <Link 
              key={s.path} 
              to={s.path}
              className="nav-dropdown-item"
              onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
              style={mobile ? { '--j': idx } : {}}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/work" style={mobile ? { '--i': 3 } : {}} onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
      <Link to="/gallery" style={mobile ? { '--i': 4 } : {}} onClick={() => setIsMenuOpen(false)}>Work</Link>
      <Link to="/blog" style={mobile ? { '--i': 5 } : {}} onClick={() => setIsMenuOpen(false)}>Blog</Link>
    </>
  );

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logodarktheme/logo.webp" alt="The Enzo Media" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        <NavLinks />
      </div>

      {/* Action Area */}
      <div className="nav-actions">
        <Link to="/#contact" className="navbar-cta hide-mobile">Get in touch →</Link>

        {/* Premium Hamburger Icon */}
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

      {/* Premium Sidebar Overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'show' : ''}`} onClick={() => setIsMenuOpen(false)} />
      
      <div className={`sidebar-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <span>Navigation</span>
          </div>
          <div className="sidebar-links">
            <NavLinks mobile={true} />
            <Link to="/#contact" className="sidebar-cta-btn" style={{ '--i': 6 }} onClick={() => setIsMenuOpen(false)}>
              Start a Project
            </Link>
          </div>
          
          <div className="sidebar-footer">
            <div className="social-mini">
              <a href="https://www.instagram.com/theenzomedia" target="_blank" rel="noopener noreferrer">IG</a>
              <a href="https://www.facebook.com/theenzomedia" target="_blank" rel="noopener noreferrer">FB</a>
              <a href="mailto:theenzomedia@gmail.com">EMAIL</a>
            </div>
            <p>© {new Date().getFullYear()} ENZO MEDIA</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

