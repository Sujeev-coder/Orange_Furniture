import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay * 1000);
          } else {
            entry.target.classList.add('revealed');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-up ${className}`} style={delay ? { animationDelay: `${delay}s` } : {}}>
      {children}
    </div>
  );
};

export default ScrollReveal;
