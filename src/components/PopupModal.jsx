import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const autoCloseTimerRef = useRef(null);

  useEffect(() => {
    if (!sessionStorage.getItem('popup_viewed')) {
      const timer = setTimeout(() => { 
        setOpen(true); 
        sessionStorage.setItem('popup_viewed', 'true'); 
      }, 5000); // Show popup after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  // UX Improvement: Auto-close after 25s if the user doesn't interact, so they aren't forced to close it manually
  useEffect(() => {
    if (open && !isSubmitted) {
      autoCloseTimerRef.current = setTimeout(() => {
        setOpen(false);
      }, 25000); // 25 seconds auto-close
    }
    return () => {
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
    };
  }, [open, isSubmitted]);

  const handleInteraction = () => {
    // Clear auto-close timer if user starts typing or interacting
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInteraction();
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
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          setOpen(false);
        }, 3000);
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
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl p-8 overflow-hidden modal-card"
            style={{
              background: 'rgba(250, 248, 245, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 24px 60px rgba(15,15,17,0.12)',
            }}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] -z-10" />

            {/* Highly visible close button */}
            <button 
              className="absolute top-4 right-4 modal-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '0.25rem',
                zIndex: 10,
              }}
            >
              ✕
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-black font-heading mb-2" style={{ color: 'var(--text-primary)' }}>Request Sent!</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <span className="font-accent text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
                  Exclusive Offer
                </span>
                <h3 className="text-3xl font-black font-heading mb-3 leading-tight" style={{ color: 'var(--text-primary)' }}>
                  Get Your Free <span className="text-gradient">AI Audit.</span>
                </h3>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Discover how our AI strategies can scale your brand ROI. 
                  Limited slots available for May 2026.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="High-Intent AI Audit Request" />
                  
                  <div className="space-y-3">
                    <input 
                      type="text" name="name" required 
                      placeholder="Full Name" 
                      onFocus={handleInteraction}
                      className="w-full modal-input rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                    />
                    <input 
                      type="email" name="email" required 
                      placeholder="Email Address" 
                      onFocus={handleInteraction}
                      className="w-full modal-input rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                    />
                    <input 
                      type="tel" name="phone" required 
                      placeholder="Phone Number" 
                      onFocus={handleInteraction}
                      className="w-full modal-input rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-primary py-4 rounded-xl flex justify-center items-center font-bold tracking-widest text-xs uppercase"
                    disabled={isSubmitting}
                    onClick={handleInteraction}
                  >
                    {isSubmitting ? 'Processing...' : 'Secure My Audit →'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}

      <style>{`
        .modal-input {
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }
        .modal-input:focus {
          border-color: var(--primary);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(212, 64, 0, 0.15);
        }
        .modal-close-btn {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .modal-close-btn:hover {
          color: var(--text-primary) !important;
          transform: scale(1.1);
        }
        .modal-input::placeholder {
          color: var(--text-secondary);
          opacity: 0.6;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default PopupModal;
