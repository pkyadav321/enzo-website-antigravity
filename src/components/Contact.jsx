import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formsubmit.co/ajax/bdf9c292d04fc668855983e246d52259", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ background: 'transparent', padding: '120px 0' }}>
      <div className="container">

        {/* Centered editorial CTA */}
        <div className="reveal section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Let's Talk</span>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(4rem, 10vw, 10rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: '#fff', marginBottom: '2.5rem' }}>
            Ready to<br />
            <span className="text-accent">Dominate Your Market?</span>
          </h2>
          <p style={{ color: '#666', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
            Reaching out is free. We're currently helping businesses in <b>Varanasi</b>, <b>Gonda</b>, <b>Ayodhya</b>, and <b>Delhi NCR</b> scale. You'll walk away with a clear growth roadmap — even if we don't end up working together.
          </p>
        </div>

        {/* Form */}
        <div className="reveal stagger-2 contact-form">
          {isSubmitted ? (
            <div className="form-success">
              ✓ Thank you! We will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Lead from Website" />
              <input type="hidden" name="_template" value="table" />

              <div className="form-row" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group-contact">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control" required placeholder="Your full name" />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-control" required placeholder="you@company.com" />
                </div>
                <div className="form-group-contact">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input type="tel" id="phone" name="phone" className="form-control" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="form-group-contact" style={{ marginBottom: '2.5rem' }}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-control" required placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Start a Project ↗'}
              </button>
            </form>
          )}
        </div>

        {/* Contact links */}
        <div className="reveal stagger-3 contact-links-container" style={{ display: 'flex', justifyContent: 'center', gap: '6rem', flexWrap: 'wrap', paddingTop: '6rem', marginTop: '6rem', borderTop: '1px solid #1a1a1a', textAlign: 'center' }}>
          {[
            { label: 'Call Us', value: '+91 8076450844', href: 'tel:+918076450844' },
            { label: 'Email', value: 'theenzomedia@gmail.com', href: 'mailto:theenzomedia@gmail.com' },
            { label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/918076450844' },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', minWidth: '200px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#444', marginBottom: '0.75rem' }}>{c.label}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8352a'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
