import React from 'react';

const services = [
  { num: '01', title: 'Performance Ads', desc: 'Turn ad spend into profit. Meta & Google campaigns engineered for high-intent lead generation.' },
  { num: '02', title: 'Social Media Growth', desc: 'Build a cult-like following. Organic content that warms audiences and compounds over time.' },
  { num: '03', title: 'High-Converting Video', desc: 'Stop the scroll. Short-form reels and video ads scripted, shot, and edited to convert.' },
  { num: '04', title: 'Conversion Web Design', desc: 'Blazing-fast, mobile-optimized landing pages that turn clicks into paying clients.' },
  { num: '05', title: 'Brand & Creative Design', desc: 'From ad creatives to full brand identities — make you the obvious choice in your market.' },
  { num: '06', title: 'Commercial & AI Photography', desc: 'Studio-grade product photography and AI-enhanced imagery that elevates brand value.' },
  { num: '07', title: 'OOH Advertising', desc: 'Strategic outdoor campaigns and hoardings that dominate local territories offline.' },
  { num: '08', title: 'Ecommerce Listing Designs', desc: 'Slick, persuasive product infographics and A+ content that drive sales on Amazon & Flipkart.' },
];

const Services = () => {
  return (
    <section id="services" style={{ background: 'transparent', padding: '120px 0' }}>
    <div className="container">

      {/* Centered header */}
      <div className="reveal" style={{ marginBottom: '6rem', textAlign: 'center' }}>
        <span className="section-label">Our Services</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: '#fff', marginBottom: '2.5rem' }}>
          What We <span className="text-italic-accent">Do.</span>
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
          Every service is built around one outcome — measurable growth for your business.
        </p>
      </div>

      {/* List */}
      <div className="services-list-container">
        {services.map((s, i) => {
          const serviceIds = {
            '01': 'performance-ads',
            '02': 'social-media',
            '03': 'high-converting-video',
            '04': 'conversion-web-design',
            '05': 'brand-creative',
            '06': 'ecommerce-listing',
            '07': 'ecommerce-listing', // fallback
            '08': 'ecommerce-listing'
          };
          const sid = serviceIds[s.num] || 'performance-ads';
          
          return (
            <div 
              key={s.num} 
              className={`service-list-item reveal stagger-${i + 1}`}
              onClick={() => window.location.hash = `#/services/${sid}`}
              style={{ cursor: 'pointer' }}
            >
              <span className="service-list-num">{s.num}</span>
              <span className="service-list-title">{s.title}</span>
              <span className="service-list-desc">{s.desc}</span>
              <span className="service-list-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
                  <path d="M16 12L12 16L8 12" stroke="currentColor" strokeWidth="1" transform="rotate(-45 12 12)"/>
                </svg>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default Services;
