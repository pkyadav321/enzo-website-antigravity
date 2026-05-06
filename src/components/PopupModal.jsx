import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('popup_viewed')) {
      const timer = setTimeout(() => { 
        setOpen(true); 
        sessionStorage.setItem('popup_viewed', 'true'); 
      }, 5000); // 5s delay
      return () => clearTimeout(timer);
    }
  }, []);

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md glass-dark rounded-3xl p-8 border-primary/20 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] -z-10" />

            <button 
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-black font-heading mb-2">Request Sent!</h3>
                <p className="text-white/40 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <span className="font-accent text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
                  Exclusive Offer
                </span>
                <h3 className="text-3xl font-black font-heading mb-4 text-white leading-tight">
                  Get Your Free <span className="text-gradient">AI Audit.</span>
                </h3>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  Discover how our AI strategies can scale your brand ROI. 
                  Limited slots available for May 2026.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="High-Intent AI Audit Request" />
                  
                  <div className="space-y-4">
                    <input 
                      type="text" name="name" required 
                      placeholder="Full Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-colors"
                    />
                    <input 
                      type="email" name="email" required 
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-colors"
                    />
                    <input 
                      type="tel" name="phone" required 
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-primary py-4 rounded-xl flex justify-center items-center font-bold tracking-widest text-xs uppercase"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Secure My Audit →'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;

