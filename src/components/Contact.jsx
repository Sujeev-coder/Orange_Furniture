import React from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <ScrollReveal className="section-header" delay={0}>
            <span className="section-tag">Visit Us</span>
            <h2 className="section-title">Our <span className="text-gradient">Location</span></h2>
            <p className="section-subtitle">Come experience our furniture in person</p>
          </ScrollReveal>
          <div className="contact-grid">
            <ScrollReveal className="contact-map" delay={0}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.54!3d17.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzEyLjAiTiA3OMKwMzInMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orange Furniture Location"></iframe>
            </ScrollReveal>
            <ScrollReveal className="contact-info" delay={0}>
              <div className="contact-card">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <strong>Address</strong>
                    <p>Sai Nagar, Nagole, Hyderabad,<br/>Telangana, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+919246221000">+91 92462 21000</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <strong>Business Hours</strong>
                    <p>Open today until <strong>9:30 PM</strong></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  </div>
                  <div>
                    <strong>Services</strong>
                    <p>In-store shopping · Delivery · Custom furniture</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollReveal className="cta-box" delay={0}>
            <h2>Upgrade Your Home <span className="text-gradient">Today</span></h2>
            <p>Visit our showroom in Nagole for the best deals on custom furniture</p>
            <a href="https://maps.google.com/?q=Orange+Furniture+Nagole+Hyderabad" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Get Directions
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
