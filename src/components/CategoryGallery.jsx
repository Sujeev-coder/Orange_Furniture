import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { productCategories } from '../data/categories';
import { products } from '../data/products';

const CategoryGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const filteredProducts = selectedCategory 
    ? products.filter(p => p.categoryId === selectedCategory)
    : products;

  return (
    <section className="category-gallery" id="all-categories">
      <div className="container">
        <ScrollReveal className="section-header" delay={0}>
          <span className="section-tag">Complete Collection</span>
          <h2 className="section-title">Our <span className="text-gradient">Categories</span></h2>
          <p className="section-subtitle">Explore our full range of premium furniture across all categories</p>
        </ScrollReveal>

        {/* Category Filter */}
        <div className="category-filter">
          <button 
            className={`filter-btn ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </button>
          {productCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <ScrollReveal 
              key={product.id} 
              className="product-card" 
              delay={(index % 4) * 0.1}
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
      </div>
    </section>
  );
};

export default CategoryGallery;
