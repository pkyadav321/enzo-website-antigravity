import React, { useState, useEffect } from 'react';

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('popup')) {
      const t = setTimeout(() => { setOpen(true); sessionStorage.setItem('popup', '1'); }, 6000);
      return () => clearTimeout(t);
    }
  }, []);

  // Lock scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

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
        // Automatically close the modal after 3 seconds
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setOpen(false)}>
      <div className="modal-box">
        <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
        <h3>Get Your Free <em className="text-italic-accent">Audit</em></h3>
        <p>Ready to scale? Let's analyse your current strategy and find growth opportunities.</p>
        
        {isSubmitted ? (
          <div className="form-success" style={{ padding: '2rem' }}>
            ✓ Thank you! We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-group">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Lead — Free Audit Request" />
            <input type="text" name="name" required placeholder="Your Full Name" className="form-input" />
            <input type="email" name="email" required placeholder="Email Address" className="form-input" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="form-input" />
            <textarea name="message" required placeholder="Tell us about your project" className="form-input" style={{ minHeight: '80px', resize: 'vertical' }}></textarea>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px' }} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Request →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
