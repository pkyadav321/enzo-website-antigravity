import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const LeadCapture = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="lead-capture" style={{ paddingTop: '2rem' }}>
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <div className="section-badge">
          <span className="dot"></span>
          GET YOUR FREE GROWTH AUDIT
        </div>
        <h2>Ready to scale your business?</h2>
        <p>Leave your details and our team will get back to you with a customized strategy.</p>
      </div>

      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto' }}
      >
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Check size={32} color="#25D366" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Thank You!</h3>
            <p>Your request has been received. We'll be in touch shortly.</p>
          </div>
        ) : (
          <form action="https://formsubmit.co/theenzomedia@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.theenzomedia.com" />
            <input type="hidden" name="_subject" value="New Lead from Website" />

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
              <input type="text" name="name" required placeholder="John Doe" className="form-input" />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" className="form-input" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Phone Number</label>
              <input type="tel" name="phone" required placeholder="+91 00000 00000" className="form-input" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Submit Request <Send size={18} />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default LeadCapture;
