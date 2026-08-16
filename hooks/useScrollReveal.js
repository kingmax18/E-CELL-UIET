'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.reveal:not(.visible)');
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.88) {
          el.classList.add('visible');
        }
      });
    };

    // Trigger on mount
    handleScrollReveal();

    // IntersectionObserver for high performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScrollReveal, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScrollReveal);
    };
  }, []);
}
