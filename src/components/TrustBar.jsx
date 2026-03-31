import React from 'react';
import ScrollReveal from './ScrollReveal';

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-items">
          <ScrollReveal className="trust-item" delay={0}>
            <div className="trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            </div>
            <div>
              <strong>Best Prices</strong>
              <span>Compared to nearby stores</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="trust-item" delay={0.1}>
            <div className="trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            </div>
            <div>
              <strong>Custom Furniture</strong>
              <span>Made to your specifications</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="trust-item" delay={0.2}>
            <div className="trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div>
              <strong>Free Delivery</strong>
              <span>& installation within 5 km</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
