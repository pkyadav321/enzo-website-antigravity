import React from 'react';

const testimonials = [
  {
    stars: 5,
    quote: '"Foot traffic doubled in 2 months. 80+ qualified leads. They truly understand the local market."',
    name: 'Rajesh Sharma', role: 'Owner, Sharma Electronics, Varanasi',
    initials: 'RS', color: '#e8352a',
  },
  {
    stars: 5,
    quote: '"Admission inquiries went up 3x after The Enzo Media handled our Google Ads and landing pages."',
    name: 'Priya Agarwal', role: 'Director, Agarwal Institute, Ghaziabad',
    initials: 'PA', color: '#1a1a1a',
  },
  {
    stars: 5,
    quote: '"Clean branding, strong ad campaigns, transparent weekly reports. The Enzo Media is the real deal."',
    name: 'Mohit Verma', role: 'Founder, Verma Buildtech, Ayodhya',
    initials: 'MV', color: '#111',
  },
  {
    stars: 5,
    quote: '"500 to 12,000 followers in 4 months. Online orders tripled. Creative, responsive, results-driven."',
    name: 'Sunita Mishra', role: 'Owner, Mishra Sweets, Gonda',
    initials: 'SM', color: '#e8352a',
  },
];

const Testimonials = () => (
  <section id="testimonials" style={{ background: 'transparent', padding: '120px 0' }}>
    <div className="container">

      {/* Centered header */}
      <div className="reveal" style={{ marginBottom: '6rem', textAlign: 'center' }}>
        <span className="section-label">Client Stories</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', color: '#fff', marginBottom: '2rem' }}>
          What<br />They Say.
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
          Real results, real feedback from businesses across Uttar Pradesh.
        </p>
      </div>

      {/* 2-col grid */}
      <div className="testimonials-grid reveal-scale">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-card reveal stagger-${i + 1}`}>
            <div className="stars">{Array.from({ length: t.stars }).map((_, j) => <span key={j} className="star">★</span>)}</div>
            <p>{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: t.color }}>{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
