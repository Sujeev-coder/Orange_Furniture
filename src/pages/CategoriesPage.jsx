import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { productCategories } from '../data/categories';
import { products } from '../data/products';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory ? p.categoryId === selectedCategory : true;
    const matchesSearch = searchTerm
      ? p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.model.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const selectedCategoryData = productCategories.find(c => c.id === selectedCategory);

  return (
    <div className="categories-page">
      {/* Page Hero Banner */}
      <section className="categories-hero">
        <div className="categories-hero-bg">
          <div className="categories-hero-overlay"></div>
        </div>
        <div className="container categories-hero-content">
          <div className="categories-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
            <span className="breadcrumb-current">Categories</span>
          </div>
          <h1 className="categories-hero-title">
            Our <span className="text-gradient">Categories</span>
          </h1>
          <p className="categories-hero-subtitle">
            Explore our complete collection of premium furniture — handcrafted for modern Indian homes
          </p>

          {/* Search Bar */}
          <div className="categories-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search products by name, model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="categories-search-input"
              id="categories-search"
            />
            {searchTerm && (
              <button 
                className="search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Cards Grid */}
      <section className="categories-cards-section">
        <div className="container">
          <div className="categories-cards-grid">
            <button
              className={`category-card-item ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              <div className="category-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <span className="category-card-name">All Products</span>
              <span className="category-card-count">{products.length} items</span>
            </button>
            {productCategories.map((category) => {
              const count = products.filter(p => p.categoryId === category.id).length;
              return (
                <button
                  key={category.id}
                  className={`category-card-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="category-card-icon">
                    <img src={category.image} alt={category.name} loading="lazy" />
                  </div>
                  <span className="category-card-name">{category.name}</span>
                  <span className="category-card-count">{count} items</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="categories-results">
        <div className="container">
          <div className="results-header">
            <div className="results-info">
              <h2 className="results-title">
                {selectedCategoryData ? selectedCategoryData.name : 'All Products'}
              </h2>
              <span className="results-count">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
            </div>
            {(selectedCategory || searchTerm) && (
              <button
                className="results-clear"
                onClick={() => { setSelectedCategory(null); setSearchTerm(''); }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Clear Filters
              </button>
            )}
          </div>

          {/* Products Grid or Product Details */}
          {selectedProduct ? (
            // Show Selected Product Details
            <div className="product-details-container">
              <button 
                className="back-to-products-btn"
                onClick={() => setSelectedProduct(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Back to Products
              </button>
              <ScrollReveal className="product-details-card">
                <div className="product-details-grid">
                  <div className="product-details-image">
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                    <div className="product-category-badge">{selectedProduct.category}</div>
                  </div>
                  <div className="product-details-info">
                    <div className="product-model">Model: {selectedProduct.model}</div>
                    <h1>{selectedProduct.name}</h1>
                    <p className="product-description">{selectedProduct.description}</p>
                    
                    <div className="product-details-pricing">
                      {selectedProduct.discount && (
                        <div className="product-discount-badge">-{selectedProduct.discount}%</div>
                      )}
                      <div className="product-prices-details">
                        {selectedProduct.offerPrice && selectedProduct.discount ? (
                          <>
                            <span className="product-original-price">₹{selectedProduct.price.toLocaleString('en-IN')}</span>
                            <span className="product-offer-price">₹{selectedProduct.offerPrice.toLocaleString('en-IN')}</span>
                            <span className="savings">You Save: ₹{(selectedProduct.price - selectedProduct.offerPrice).toLocaleString('en-IN')}</span>
                          </>
                        ) : (
                          <span className="product-price">₹{selectedProduct.price.toLocaleString('en-IN')}</span>
                        )}
                      </div>
                    </div>

                    <div className="product-details-actions">
                      <a href="tel:+919246221000" className="btn btn-primary btn-lg">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Contact for Price
                      </a>
                      <Link to="/#contact" className="btn btn-secondary">
                        Get Custom Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ) : filteredProducts.length > 0 ? (
            // Show Product Grid
            <div className="products-grid categories-products-grid">
              {filteredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  className="product-card"
                  delay={(index % 4) * 0.08}
                >
                  <div className="product-img-wrap">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <div className="product-category-badge">{product.category}</div>
                    <div 
                      className="product-overlay"
                      onClick={() => setSelectedProduct(product)}
                      style={{ cursor: 'pointer' }}
                    >
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
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
              <button
                className="cta-button"
                onClick={() => { setSelectedCategory(null); setSearchTerm(''); }}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Can't Find What You're Looking For?</h2>
            <p>We also craft custom furniture tailored to your space and style. Get in touch!</p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919246221000" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Now
              </a>
              <Link to="/#contact" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
                Visit Showroom →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
