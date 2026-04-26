import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80" alt="Premium living room with luxury sofa" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <ScrollReveal className="hero-badge" delay={0}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF6A00"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>3.8 Rating</span>
          <span className="badge-divider">|</span>
          <span>95 Reviews</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="hero-title">Transform Your Home<br/>with <span className="text-gradient">Premium Furniture</span></h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="hero-subtitle">Custom-crafted furniture with comfort, quality & style — delivered and installed free within 5 km.</p>
        </ScrollReveal>
        
        <ScrollReveal className="hero-ctas" delay={0.3}>
          <a href="https://maps.google.com/?q=Orange+Furniture+Nagole+Hyderabad" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Visit Showroom
          </a>
          <a href="tel:+919246221000" className="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call: +91 92462 21000
          </a>
        </ScrollReveal>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
