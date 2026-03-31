import React from 'react';
import ScrollReveal from './ScrollReveal';

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <ScrollReveal className="section-header" delay={0}>
          <span className="section-tag">Why Orange</span>
          <h2 className="section-title">Why Customers <span className="text-gradient">Choose Us</span></h2>
          <p className="section-subtitle">Experience the difference of quality craftsmanship and honest pricing</p>
        </ScrollReveal>
        <div className="features-grid">
          <ScrollReveal className="feature-card" delay={0}>
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3>Custom Designs</h3>
            <p>Tell us your vision and we'll craft furniture that fits your space perfectly — size, style, and fabric of your choice.</p>
          </ScrollReveal>
          <ScrollReveal className="feature-card" delay={0.1}>
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Affordable Pricing</h3>
            <p>Premium quality at honest prices. We cut out middlemen so you get the best value for your investment.</p>
          </ScrollReveal>
          <ScrollReveal className="feature-card" delay={0.2}>
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <h3>Free Delivery & Installation</h3>
            <p>We deliver and set up your furniture completely free of charge within a 5 km radius of our store.</p>
          </ScrollReveal>
          <ScrollReveal className="feature-card" delay={0.3}>
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Trusted by 95+ Customers</h3>
            <p>Our growing family of happy customers speaks for our commitment to quality and service excellence.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
