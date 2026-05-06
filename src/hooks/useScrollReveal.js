import { useEffect } from 'react';

const useScrollReveal = (path) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      // lowered threshold to 0.05 and increased root margin so it triggers earlier
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' } 
    );

    // Wait a bit longer for framer-motion page transitions to finish and layout to settle
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
      elements.forEach((el) => {
        // If it's already near the top of the page, reveal immediately
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
        observer.observe(el);
      });
    }, 400); // 400ms is after framer motion's 0.4s transition

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [path]);
};

export default useScrollReveal;
