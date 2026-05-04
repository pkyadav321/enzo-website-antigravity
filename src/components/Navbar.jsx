import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const servicesLinks = [
    { label: 'Performance Ads', id: 'performance-ads' },
    { label: 'Social Media Growth', id: 'social-media' },
    { label: 'High-Converting Video', id: 'high-converting-video' },
    { label: 'Conversion Web Design', id: 'conversion-web-design' },
    { label: 'Brand & Creative Design', id: 'brand-creative' },
    { label: 'Ecommerce Listing Designs', id: 'ecommerce-listing' },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      <a href="#about" style={mobile ? { '--i': 1 } : {}} onClick={() => setIsMenuOpen(false)}>About</a>
      
      <div 
        className={`nav-dropdown-wrapper ${mobile ? 'mobile-dropdown' : ''}`}
        onMouseEnter={() => !mobile && setIsServicesOpen(true)}
        onMouseLeave={() => !mobile && setIsServicesOpen(false)}
        onClick={() => mobile && setIsServicesOpen(!isServicesOpen)}
        style={mobile ? { '--i': 2 } : {}}
      >
        <a href="#services" className="nav-dropdown-trigger">
          Services {mobile && <span className={`arrow ${isServicesOpen ? 'up' : ''}`}>↓</span>}
        </a>
        <div className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}>
          {servicesLinks.map((s, idx) => (
            <a 
              key={s.id} 
              href={`#/services/${s.id}`}
              className="nav-dropdown-item"
              onClick={() => setIsMenuOpen(false)}
              style={mobile ? { '--j': idx } : {}}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <a href="#portfolio" style={mobile ? { '--i': 3 } : {}} onClick={() => setIsMenuOpen(false)}>Case Studies</a>
      <a href="#gallery" style={mobile ? { '--i': 4 } : {}} onClick={() => setIsMenuOpen(false)}>Work</a>
      <a href="#/blog" style={mobile ? { '--i': 5 } : {}} onClick={() => setIsMenuOpen(false)}>Blog</a>
    </>
  );

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/logodarktheme/logo.png" alt="The Enzo Media" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        <NavLinks />
      </div>

      {/* Action Area */}
      <div className="nav-actions">
        <a href="#contact" className="navbar-cta hide-mobile">Get in touch →</a>

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
            <a href="#contact" className="sidebar-cta-btn" style={{ '--i': 6 }} onClick={() => setIsMenuOpen(false)}>
              Start a Project
            </a>
          </div>
          
          <div className="sidebar-footer">
            <div className="social-mini">
              <a href="#">IG</a>
              <a href="#">TW</a>
              <a href="#">LI</a>
            </div>
            <p>© 2024 ENZO MEDIA</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
