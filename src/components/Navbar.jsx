import React from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="/images/logodarktheme/logo.png" alt="The Enzo Media" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        
        {/* Services Dropdown */}
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
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <a href="#portfolio">Work</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#/blog">Blog</a>
      </div>
      <a
        href="#contact"
        className="navbar-cta"
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
    </nav>
  );
};

export default Navbar;
