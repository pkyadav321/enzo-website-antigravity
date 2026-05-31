import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | EnZo Media';
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
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4rem', fontFamily: "'Space Grotesk', sans-serif" }}>Last updated: May 7, 2026</p>

        <div style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '3rem' }} />

        <div style={sectionStyle}>
          <h2 style={headingStyle}>1. Information We Collect</h2>
          <p style={paraStyle}>We collect information you provide directly to us, such as when you fill out our contact form, request a free audit, or communicate with us via email or phone. This may include your name, email address, phone number, business name, and any other information you choose to provide.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>2. How We Use Your Information</h2>
          <p style={paraStyle}>We use the information we collect to: respond to your inquiries and provide you with requested services; send you marketing and promotional communications (with your consent); analyze and improve our website and services; comply with legal obligations.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>3. Sharing of Information</h2>
          <p style={paraStyle}>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share information with trusted third parties who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>4. Cookies</h2>
          <p style={paraStyle}>Our website may use cookies to enhance your experience. Cookies are small files placed on your device that help us understand how visitors use our site. You can choose to disable cookies through your browser settings, though this may affect certain features of our website.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>5. Data Security</h2>
          <p style={paraStyle}>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>6. Your Rights</h2>
          <p style={paraStyle}>You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us at the details provided below.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>7. Contact Us</h2>
          <p style={paraStyle}>If you have questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
