import React from 'react';
import ScrollReveal from './ScrollReveal';

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <ScrollReveal className="section-header" delay={0}>
          <span className="section-tag">Our Collection</span>
          <h2 className="section-title">Explore Our <span className="text-gradient">Categories</span></h2>
          <p className="section-subtitle">Handcrafted furniture designed for modern Indian homes</p>
        </ScrollReveal>
        <div className="products-grid">
          <ScrollReveal className="product-card" delay={0}>
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" alt="Premium Sofas" loading="lazy" />
              <div className="product-overlay">
                <span className="product-view">View Collection →</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Sofas</h3>
              <p>L-shaped, recliners & classic sofas</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="product-card" delay={0.1}>
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80" alt="Beds & Cots" loading="lazy" />
              <div className="product-overlay">
                <span className="product-view">View Collection →</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Beds & Cots</h3>
              <p>King, queen & storage beds</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="product-card" delay={0.2}>
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80" alt="Chairs" loading="lazy" />
              <div className="product-overlay">
                <span className="product-view">View Collection →</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Chairs</h3>
              <p>Dining, accent & lounge chairs</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="product-card" delay={0.3}>
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80" alt="Office Furniture" loading="lazy" />
              <div className="product-overlay">
                <span className="product-view">View Collection →</span>
              </div>
            </div>
            <div className="product-info">
              <h3>Office Furniture</h3>
              <p>Desks, ergonomic chairs & shelves</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Products;
