import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AUTO_CLOSE_SEC = 12; // auto-close after 12 seconds

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(AUTO_CLOSE_SEC);
  const timerRef = useRef(null);
  const countRef = useRef(null);
  const userInteracted = useRef(false);

  // Show popup after 4s (once per session)
  useEffect(() => {
    if (!sessionStorage.getItem('popup_viewed')) {
      const t = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem('popup_viewed', 'true');
      }, 4000);
      return () => clearTimeout(t);
    }
  }, []);

  // Auto-close countdown when popup opens
  useEffect(() => {
    if (!open || isSubmitted) return;

    setCountdown(AUTO_CLOSE_SEC);
    userInteracted.current = false;

    // Countdown tick every second
    countRef.current = setInterval(() => {
      if (userInteracted.current) {
        clearInterval(countRef.current);
        return;
      }
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countRef.current);
          setOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countRef.current);
  }, [open, isSubmitted]);

  const stopAutoClose = () => {
    userInteracted.current = true;
    clearInterval(countRef.current);
    setCountdown(null); // hide bar
  };

  const closeModal = () => {
    stopAutoClose();
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    stopAutoClose();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formsubmit.co/ajax/bdf9c292d04fc668855983e246d52259', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setOpen(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(6px)',
              zIndex: 9999,
            }}
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '420px',
              zIndex: 10000,
              background: 'rgba(12, 12, 14, 0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,77,0,0.07)',
              overflow: 'hidden',
            }}
          >
            {/* Orange top glow */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '180px', height: '180px',
              background: 'radial-gradient(circle, rgba(255,77,0,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* ✕ Close button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '1.1rem',
                right: '1.1rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#a1a1aa',
                fontSize: '1rem',
                lineHeight: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s, color 0.2s',
                zIndex: 10,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,77,0,0.2)';
                e.currentTarget.style.color = '#ff4d00';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.color = '#a1a1aa';
              }}
            >
              ✕
            </button>

            {/* Auto-close countdown bar */}
            {countdown !== null && !isSubmitted && (
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                height: '3px',
                width: `${(countdown / AUTO_CLOSE_SEC) * 100}%`,
                background: 'linear-gradient(90deg, #ff2200, #ff8c00)',
                transition: 'width 1s linear',
                borderRadius: '28px 0 0 0',
              }} />
            )}

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '60px', height: '60px',
                  background: 'rgba(255,77,0,0.12)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.8rem', color: '#ff4d00',
                }}>✓</div>
                <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                  Request Sent!
                </h3>
                <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <span style={{
                  fontSize: '0.62rem', fontWeight: 800,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #ff4d00, #ff8c00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block', marginBottom: '0.75rem',
                }}>
                  Exclusive Offer
                </span>
                <h3 style={{
                  color: '#fff', fontSize: '1.8rem', fontWeight: 900,
                  lineHeight: 1.15, marginBottom: '0.75rem',
                  letterSpacing: '-0.03em',
                }}>
                  Get Your Free{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #ff2200, #ff8c00)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    AI Audit.
                  </span>
                </h3>
                <p style={{ color: '#71717a', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  Discover how our AI strategies can scale your brand ROI.
                  Limited slots available for 2026.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="High-Intent AI Audit Request" />

                  {['Full Name', 'Email Address', 'Phone Number'].map((ph, i) => (
                    <input
                      key={ph}
                      type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
                      name={['name', 'email', 'phone'][i]}
                      required
                      placeholder={ph}
                      onFocus={stopAutoClose}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: '12px',
                        padding: '0.85rem 1rem',
                        fontSize: '0.88rem',
                        color: '#fff',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocusCapture={e => {
                        stopAutoClose();
                        e.currentTarget.style.borderColor = '#ff4d00';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,77,0,0.12)';
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      marginTop: '0.25rem',
                      padding: '1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #ff2200, #ff4d00)',
                      border: 'none',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: 'opacity 0.2s, transform 0.2s',
                      boxShadow: '0 8px 24px rgba(255,77,0,0.3)',
                    }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {isSubmitting ? 'Processing…' : 'Secure My Free Audit →'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
