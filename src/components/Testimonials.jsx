import React from 'react';

const testimonials = [
  {
    stars: 5,
    quote: '"The Enzo Media truly understands the local market and our customer psychology. Highly recommended."',
    name: 'Rajesh Sharma', role: 'Owner, Sharma Electronics, Varanasi',
    initials: 'RS', color: '#e8352a',
  },
  {
    stars: 5,
    quote: '"The team is incredibly professional. They handled our digital presence and landing pages with great detail."',
    name: 'Priya Agarwal', role: 'Director, Agarwal Institute, Ghaziabad',
    initials: 'PA', color: '#1a1a1a',
  },
  {
    stars: 5,
    quote: '"Clean branding and strong campaigns. Their transparent reporting makes them the real deal in the industry."',
    name: 'Mohit Verma', role: 'Founder, Verma Buildtech, Ayodhya',
    initials: 'MV', color: '#111',
  },
  {
    stars: 5,
    quote: '"Very thoughtful and creative logo designs. They reflect our brand appropriately and creatively."',
    name: 'Varsha', role: 'Founder, Digital PromoBuddy',
    initials: 'V', color: '#00a884',
  },
];

const Testimonials = () => (
  <section id="testimonials" style={{ background: 'transparent', padding: '60px 0 120px' }}>
    <div className="container">

      {/* Centered header */}
      <div className="reveal" style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <span className="section-label">Client Stories</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: '#fff', marginBottom: '2.5rem' }}>
          What They Say.
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
          Real results, real feedback from businesses across Uttar Pradesh.
        </p>
      </div>

      {/* 2-col grid */}
      <div className="testimonials-grid reveal-scale">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-card reveal stagger-${i + 1}`}>
            <div className="stars">{Array.from({ length: 5 }).map((_, j) => <span key={j} className="star">★</span>)}</div>
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
