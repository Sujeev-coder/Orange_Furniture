import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { productCategories } from '../data/categories';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      if (isHomePage) {
        const sections = ['home', 'categories', 'why-us', 'gallery', 'reviews', 'contact'];
        for (const id of sections) {
          const section = document.getElementById(id);
          if (section) {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              setActiveHash(`#${id}`);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle hash scrolling when navigating back to home page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, isHomePage]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleHomeLink = (hash) => {
    closeMenu();
    if (isHomePage) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Orange Furniture Assets/Logo/Orange Furniture Logo.jpg" alt="Orange Furniture Logo" className="logo-img" />
        </Link>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a 
              href="#home" 
              className={isHomePage && activeHash === '#home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleHomeLink('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <Link 
              to="/categories" 
              className={location.pathname === '/categories' ? 'active' : ''}
              onClick={closeMenu}
            >
              Categories
            </Link>
          </li>
          <li>
            <a 
              href="#why-us" 
              className={isHomePage && activeHash === '#why-us' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleHomeLink('why-us'); }}
            >
              Why Us
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className={isHomePage && activeHash === '#gallery' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleHomeLink('gallery'); }}
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#reviews" 
              className={isHomePage && activeHash === '#reviews' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleHomeLink('reviews'); }}
            >
              Reviews
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={isHomePage && activeHash === '#contact' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleHomeLink('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <a href="tel:+919246221000" className="nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>
        </div>
        <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} id="navToggle" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
