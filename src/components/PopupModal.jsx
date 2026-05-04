import React, { useState, useEffect } from 'react';

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem('popup')) {
      const t = setTimeout(() => { setOpen(true); sessionStorage.setItem('popup', '1'); }, 6000);
      return () => clearTimeout(t);
    }
  }, []);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setOpen(false)}>
      <div className="modal-box">
        <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
        <h3>Get Your Free <em className="text-italic-accent">Audit</em></h3>
        <p>Ready to scale? Let's analyse your current strategy and find growth opportunities.</p>
        <form action="https://formsubmit.co/theenzomedia@gmail.com" method="POST" className="form-group">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Lead — Free Audit Request" />
          <input type="text" name="name" required placeholder="Your Full Name" className="form-input" />
          <input type="email" name="email" required placeholder="Email Address" className="form-input" />
          <input type="tel" name="phone" required placeholder="Phone Number" className="form-input" />
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px' }}>Submit Request →</button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
