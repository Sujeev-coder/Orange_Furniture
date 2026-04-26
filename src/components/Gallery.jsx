import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const galleryData = [
  // Sofas
  { id: 1, category: 'sofa', img: '/Orange Furniture Assets/Sofas/IMG_6410-Photoroom.png', alt: 'Motorized Recliner Sofa', label: 'Sofa', delay: 0 },
  { id: 2, category: 'sofa', img: '/Orange Furniture Assets/Sofas/IMG_6428-Photoroom.png', alt: 'Wooden Sofa', label: 'Sofa', delay: 0.05 },
  { id: 3, category: 'sofa', img: '/Orange Furniture Assets/Sofas/IMG_6437-Photoroom.png', alt: 'Elite Single Sofa', label: 'Sofa', delay: 0.1 },
  { id: 4, category: 'sofa', img: '/Orange Furniture Assets/Sofas/20260420_143940.jpg-Photoroom.png', alt: 'Sofa cum Bed', label: 'Sofa', delay: 0.15 },
  { id: 5, category: 'sofa', img: '/Orange Furniture Assets/Sofas/20260420_144026.jpg-Photoroom.png', alt: 'Leather Sofa', label: 'Sofa', delay: 0.2 },
  { id: 6, category: 'sofa', img: '/Orange Furniture Assets/Sofas/20260420_144106.jpg-Photoroom.png', alt: 'Tesla Electrical Sofa', label: 'Sofa', delay: 0.25 },
  
  // Chairs
  { id: 7, category: 'chair', img: '/Orange Furniture Assets/Chairs/IMG_6383-Photoroom.png', alt: 'Acrylic Chair', label: 'Chair', delay: 0.3 },
  { id: 8, category: 'chair', img: '/Orange Furniture Assets/Chairs/IMG_6384-Photoroom.png', alt: 'Metal Chair', label: 'Chair', delay: 0.35 },
  { id: 9, category: 'chair', img: '/Orange Furniture Assets/Chairs/IMG_6390-Photoroom.png', alt: 'Cafeteria Chair', label: 'Chair', delay: 0.4 },
  { id: 10, category: 'chair', img: '/Orange Furniture Assets/Chairs/IMG_6391-Photoroom.png', alt: 'Bar Chair', label: 'Chair', delay: 0.45 },
  { id: 11, category: 'chair', img: '/Orange Furniture Assets/Chairs/IMG_6406-Photoroom.png', alt: 'Executive Chair', label: 'Chair', delay: 0.5 },
  { id: 12, category: 'chair', img: '/Orange Furniture Assets/Chairs/IMG_6409-Photoroom.png', alt: 'Visitors Chair', label: 'Chair', delay: 0.55 },
  
  // Dining
  { id: 13, category: 'dining', img: '/Orange Furniture Assets/Dining/IMG_6368-Photoroom.png', alt: 'Seater Dining Set', label: 'Dining', delay: 0.6 },
  { id: 14, category: 'dining', img: '/Orange Furniture Assets/Dining/20260420_144233.jpg-Photoroom (1).png', alt: 'Dining Table', label: 'Dining', delay: 0.65 },
  { id: 15, category: 'dining', img: '/Orange Furniture Assets/Dining/20260420_144244.jpg-Photoroom.png', alt: 'Stone Dining', label: 'Dining', delay: 0.7 },
  { id: 16, category: 'dining', img: '/Orange Furniture Assets/Dining/20260420_144255.jpg-Photoroom.png', alt: 'Dining Set', label: 'Dining', delay: 0.75 },
  { id: 17, category: 'dining', img: '/Orange Furniture Assets/Dining/IMG_6369-Photoroom.png', alt: 'Dining Collection', label: 'Dining', delay: 0.8 },
  { id: 18, category: 'dining', img: '/Orange Furniture Assets/Dining/IMG_6392-Photoroom.png', alt: 'Grand Dining', label: 'Dining', delay: 0.85 },
  
  // Tea Tables
  { id: 19, category: 'table', img: '/Orange Furniture Assets/tea tables/IMG_6374-Photoroom.png', alt: 'Dressing Mirror', label: 'Table', delay: 0.9 },
  { id: 20, category: 'table', img: '/Orange Furniture Assets/tea tables/IMG_6376-Photoroom.png', alt: 'Center Table', label: 'Table', delay: 0.95 },
  { id: 21, category: 'table', img: '/Orange Furniture Assets/tea tables/IMG_6378-Photoroom.png', alt: 'Study Table', label: 'Table', delay: 1 },
  { id: 22, category: 'table', img: '/Orange Furniture Assets/tea tables/IMG_6404-Photoroom.png', alt: 'Corner Stand', label: 'Table', delay: 1.05 },
  { id: 23, category: 'table', img: '/Orange Furniture Assets/tea tables/IMG_6405-Photoroom.png', alt: 'Coffee Table', label: 'Table', delay: 1.1 },
  { id: 24, category: 'table', img: '/Orange Furniture Assets/tea tables/IMG_6424-Photoroom.png', alt: 'Tea Table', label: 'Table', delay: 1.15 },
  
  // Office Tables
  { id: 25, category: 'office', img: '/Orange Furniture Assets/Office tables/20260420_144955.jpg-Photoroom.png', alt: 'Office Table 5ft', label: 'Office', delay: 1.2 },
  { id: 26, category: 'office', img: '/Orange Furniture Assets/Office tables/20260420_145018.jpg-Photoroom.png', alt: 'Contemporary Desk', label: 'Office', delay: 1.25 },
  { id: 27, category: 'office', img: '/Orange Furniture Assets/Office tables/20260420_145025.jpg-Photoroom.png', alt: 'Glass Top Desk', label: 'Office', delay: 1.3 },
  { id: 28, category: 'office', img: '/Orange Furniture Assets/Office tables/20260420_145043.jpg-Photoroom.png', alt: 'Wooden Desk', label: 'Office', delay: 1.35 },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [displayed, setDisplayed] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const filteredData = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setDisplayed(mobile ? 2 : 6);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setDisplayed(isMobile ? 2 : 6);
  }, [isMobile]);

  const handleLoadMore = () => {
    setDisplayed(prev => prev + (isMobile ? 2 : 6));
  };

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
            <button className={`filter-btn ${filter === 'sofa' ? 'active' : ''}`} onClick={() => setFilter('sofa')}>Sofas</button>
            <button className={`filter-btn ${filter === 'chair' ? 'active' : ''}`} onClick={() => setFilter('chair')}>Chairs</button>
            <button className={`filter-btn ${filter === 'dining' ? 'active' : ''}`} onClick={() => setFilter('dining')}>Dining</button>
            <button className={`filter-btn ${filter === 'table' ? 'active' : ''}`} onClick={() => setFilter('table')}>Tables</button>
            <button className={`filter-btn ${filter === 'office' ? 'active' : ''}`} onClick={() => setFilter('office')}>Office</button>
          </ScrollReveal>
          
          <div className="gallery-grid">
            {filteredData.slice(0, displayed).map(item => (
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

          {displayed < filteredData.length && (
            <ScrollReveal className="gallery-load-more" delay={0.2}>
              <button 
                className="load-more-btn" 
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </ScrollReveal>
          )}
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
            src={lightboxImg.img}
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
