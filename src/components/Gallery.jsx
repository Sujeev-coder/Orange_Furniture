import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const galleryData = [
  { id: 1, category: 'sofa', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', alt: 'Modern sofa in living room', label: 'Sofa', delay: 0 },
  { id: 2, category: 'interior', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', alt: 'Modern interior design', label: 'Interior', delay: 0.05 },
  { id: 3, category: 'chair', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80', alt: 'Modern accent chair', label: 'Chair', delay: 0.1 },
  { id: 4, category: 'showroom', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80', alt: 'Furniture showroom display', label: 'Showroom', delay: 0.15 },
  { id: 5, category: 'sofa', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80', alt: 'Luxury sectional sofa', label: 'Sofa', delay: 0.2 },
  { id: 6, category: 'interior', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', alt: 'Elegant home interior', label: 'Interior', delay: 0.25 },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredData = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImg]);

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="container">
          <ScrollReveal className="section-header" delay={0}>
            <span className="section-tag">Showroom</span>
            <h2 className="section-title">Our <span className="text-gradient">Gallery</span></h2>
            <p className="section-subtitle">A glimpse into our showroom and craftsmanship</p>
          </ScrollReveal>
          
          <ScrollReveal className="gallery-filters" delay={0}>
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'sofa' ? 'active' : ''}`} onClick={() => setFilter('sofa')}>Sofa</button>
            <button className={`filter-btn ${filter === 'chair' ? 'active' : ''}`} onClick={() => setFilter('chair')}>Chair</button>
            <button className={`filter-btn ${filter === 'interior' ? 'active' : ''}`} onClick={() => setFilter('interior')}>Interior</button>
            <button className={`filter-btn ${filter === 'showroom' ? 'active' : ''}`} onClick={() => setFilter('showroom')}>Showroom</button>
          </ScrollReveal>
          
          <div className="gallery-grid">
            {filteredData.map(item => (
              <ScrollReveal 
                key={`${item.id}-${filter}`} 
                className="gallery-item" 
                delay={item.delay}
                style={{ animation: 'fadeIn 0.4s ease forwards' }}
              >
                <div onClick={() => setLightboxImg(item)}>
                  <img src={item.img} alt={item.alt} loading="lazy" />
                  <div className="gallery-label">{item.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {lightboxImg && (
        <div 
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', animation: 'fadeIn 0.3s ease',
            padding: '40px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <img 
            src={lightboxImg.img.replace('w=600', 'w=1200')} 
            alt={lightboxImg.alt} 
            style={{
              maxWidth: '90%', maxHeight: '90vh', objectFit: 'contain',
              borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              animation: 'scaleIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: 'white', fontSize: '1.4rem', width: '44px', height: '44px',
              borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}
            onClick={() => setLightboxImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
