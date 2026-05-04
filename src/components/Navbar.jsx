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

  const NavLinks = () => (
    <>
      <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
      
      <div 
        className="nav-dropdown-wrapper"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <a href="#services" className="nav-dropdown-trigger">Services</a>
        <div className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}>
          {servicesLinks.map(s => (
            <a 
              key={s.id} 
              href={`#/services/${s.id}`}
              className="nav-dropdown-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <a href="#/work" onClick={() => setIsMenuOpen(false)}>Work</a>
      <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
      <a href="#/blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
    </>
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/logodarktheme/logo.png" alt="The Enzo Media" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        <NavLinks />
      </div>

      {/* Get in Touch CTA */}
      <div className="nav-actions">
        <a
          href="#contact"
          className="navbar-cta hide-mobile"
          onClick={e => {
            const el = document.getElementById('contact');
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get in touch →
        </a>

        {/* Hamburger Menu Icon */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <NavLinks />
          <a href="#contact" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
