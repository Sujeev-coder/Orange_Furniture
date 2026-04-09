import React from 'react';
import ScrollReveal from './ScrollReveal';
import { productCategories } from '../data/categories';
import { products } from '../data/products';

const Products = () => {
  // Get one featured product from each category
  const featuredProducts = productCategories.map(category => 
    products.find(p => p.categoryId === category.id)
  );

  return (
    <section className="products" id="categories">
      <div className="container">
        <ScrollReveal className="section-header" delay={0}>
          <span className="section-tag">Our Collection</span>
          <h2 className="section-title">Explore Our <span className="text-gradient">Categories</span></h2>
          <p className="section-subtitle">Handcrafted furniture designed for modern Indian homes</p>
        </ScrollReveal>

        {/* Featured Products Grid - One per Category */}
        <div className="products-grid featured-grid">
          {featuredProducts.map((product, index) => (
            <ScrollReveal 
              key={product.id} 
              className="product-card" 
              delay={index * 0.1}
            >
              <div className="product-img-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-overlay">
                  <span className="product-view">View Details →</span>
                </div>
              </div>
              <div className="product-info">
                <div className="product-model">Model: {product.model}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Browse All Link */}
        <div className="browse-all-link">
          <a href="#all-categories" className="cta-button">
            Browse All Categories & Products →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
