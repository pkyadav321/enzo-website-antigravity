import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms & Conditions | EnZo Media';
  }, []);

  const sectionStyle = { marginBottom: '3rem' };
  const headingStyle = { fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' };
  const paraStyle = { fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8 };

  return (
    <main style={{ background: 'var(--background)', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 7rem) 2rem 8rem' }}>

        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '3rem', fontFamily: "'Space Grotesk', sans-serif" }}
          onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}
        >← Back to Home</Link>

        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff4d00', display: 'block', marginBottom: '1.5rem' }}>Legal</span>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Terms &amp; Conditions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4rem', fontFamily: "'Space Grotesk', sans-serif" }}>Last updated: May 7, 2026</p>

        <div style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '3rem' }} />

        <div style={sectionStyle}>
          <h2 style={headingStyle}>1. Acceptance of Terms</h2>
          <p style={paraStyle}>By accessing and using theenzomedia.com, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>2. Services</h2>
          <p style={paraStyle}>EnZo Media provides digital marketing, brand design, performance advertising, social media management, and related creative services. The scope of services for each client is defined in individual service agreements or proposals.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>3. Payment Terms</h2>
          <p style={paraStyle}>Payment terms are outlined in individual client proposals. Generally, a 50% advance is required before project commencement, with the remaining balance due upon delivery or as agreed. All fees are non-refundable once work has commenced unless otherwise stated in the service agreement.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>4. Intellectual Property</h2>
          <p style={paraStyle}>Upon full payment, the client receives full ownership of the final deliverables. EnZo Media retains the right to showcase completed work in its portfolio and marketing materials unless a confidentiality agreement is in place.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>5. Confidentiality</h2>
          <p style={paraStyle}>Both parties agree to maintain confidentiality of all sensitive business information shared during the engagement. EnZo Media will not share client data, strategies, or business information with third parties without explicit consent.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>6. Limitation of Liability</h2>
          <p style={paraStyle}>EnZo Media's liability is limited to the total fees paid by the client for the specific service in question. We are not liable for indirect, incidental, or consequential damages including loss of revenue or business opportunities.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>7. Termination</h2>
          <p style={paraStyle}>Either party may terminate the service agreement with 30 days' written notice. The client is responsible for payment of all work completed up to the termination date.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>8. Governing Law</h2>
          <p style={paraStyle}>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Varanasi, Uttar Pradesh.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>9. Contact</h2>
          <p style={paraStyle}>For any questions regarding these Terms, please contact us:</p>
          <div style={{ ...paraStyle, marginTop: '1rem', padding: '1.5rem 2rem', background: 'rgba(255,77,0,0.04)', border: '1px solid rgba(255,77,0,0.15)', borderRadius: '16px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>EnZo Media</strong><br />
            Email: <a href="mailto:theenzomedia@gmail.com" style={{ color: '#ff4d00', textDecoration: 'none' }}>theenzomedia@gmail.com</a><br />
            Phone: <a href="tel:+919220797941" style={{ color: '#ff4d00', textDecoration: 'none' }}>+91 9220797941</a><br />
            Location: Varanasi, Uttar Pradesh, India
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
