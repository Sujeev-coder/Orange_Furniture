import React from 'react';
import { Link } from 'react-router-dom';
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
                <div className="product-pricing">
                  {product.discount && (
                    <div className="product-discount-badge">-{product.discount}%</div>
                  )}
                  <div className="product-prices">
                    {product.offerPrice && product.discount ? (
                      <>
                        <span className="product-original-price">₹{product.price.toLocaleString('en-IN')}</span>
                        <span className="product-offer-price">₹{product.offerPrice.toLocaleString('en-IN')}</span>
                      </>
                    ) : (
                      <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Browse All Link */}
        <div className="browse-all-link">
          <Link to="/categories" className="cta-button">
            Browse All Categories & Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
