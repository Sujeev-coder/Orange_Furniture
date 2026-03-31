import React from 'react';
import ScrollReveal from './ScrollReveal';

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <ScrollReveal className="section-header" delay={0}>
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Customers <span className="text-gradient">Say</span></h2>
          <p className="section-subtitle">Real reviews from real customers</p>
        </ScrollReveal>
        <div className="reviews-grid">
          <ScrollReveal className="review-card" delay={0}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Excellent quality sofas at very reasonable prices. The team was very helpful in customizing exactly what we needed. Delivery was on time and installation was done neatly."</p>
            <div className="review-author">
              <div className="review-avatar">RK</div>
              <div>
                <strong>Rajesh Kumar</strong>
                <span>Nagole, Hyderabad</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="review-card" delay={0.1}>
            <div className="review-stars">★★★★☆</div>
            <p className="review-text">"Good range of furniture options. We got a complete bedroom set at a price much lower than other stores in the area. Minor delay in delivery, but the quality made up for it."</p>
            <div className="review-author">
              <div className="review-avatar">PS</div>
              <div>
                <strong>Priya Sharma</strong>
                <span>Uppal, Hyderabad</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="review-card" delay={0.2}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"We got our entire home furnished from Orange Furniture. From living room sofa to kids' beds — everything was custom made. Great value for money and the free installation is a big plus!"</p>
            <div className="review-author">
              <div className="review-avatar">AM</div>
              <div>
                <strong>Arun Mehta</strong>
                <span>Kothapet, Hyderabad</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
