import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleHomeLink = (e, hash) => {
    e.preventDefault();
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
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <span className="logo-icon">🟠</span>
              <span className="logo-text">Orange<span className="logo-accent">Furniture</span></span>
            </Link>
            <p>Custom-crafted furniture for modern Indian homes. Quality, comfort & style at honest prices.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleHomeLink(e, 'home')}>Home</a></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><a href="#why-us" onClick={(e) => handleHomeLink(e, 'why-us')}>Why Choose Us</a></li>
              <li><a href="#gallery" onClick={(e) => handleHomeLink(e, 'gallery')}>Gallery</a></li>
              <li><a href="#reviews" onClick={(e) => handleHomeLink(e, 'reviews')}>Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleHomeLink(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/categories">Sofas</Link></li>
              <li><Link to="/categories">Chairs</Link></li>
              <li><Link to="/categories">Dining</Link></li>
              <li><Link to="/categories">Tea Tables</Link></li>
              <li><Link to="/categories">Cupboards</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact Info</h4>
            <ul>
              <li>2-3-456, Sai Nagar</li>
              <li>Alkapuri X Roads, Nagole</li>
              <li>Hyderabad - 500068</li>
              <li><a href="tel:+919246221000">+91 92462 21000</a></li>
              <li><a href="tel:040-2422009">040 - 2422009</a></li>
              <li>Open until 9:30 PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Orange Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
