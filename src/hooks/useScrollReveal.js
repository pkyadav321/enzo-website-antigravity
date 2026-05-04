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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Give the DOM a tiny moment to render the new page
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [path]);
};

export default useScrollReveal;
