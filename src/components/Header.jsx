import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        const opacity = Math.max(0, 1 - (scrollTop - 100) / 200);
        const translateY = Math.min(30, (scrollTop - 100) / 10);
        
        const logo = document.querySelector('.hero-logo');
        const nav = document.querySelector('nav');
        
        if (logo && nav) {
          logo.style.opacity = opacity;
          logo.style.transform = `translateX(-50%) translateY(-${translateY}px)`;
          nav.style.opacity = opacity;
          nav.style.transform = `translateX(-50%) translateY(-${translateY}px)`;
          
          if (opacity === 0) {
            logo.style.pointerEvents = 'none';
            nav.style.pointerEvents = 'none';
          } else {
            logo.style.pointerEvents = 'auto';
            nav.style.pointerEvents = 'auto';
          }
        }
      } else {
        const logo = document.querySelector('.hero-logo');
        const nav = document.querySelector('nav');
        
        if (logo && nav) {
          logo.style.opacity = '1';
          logo.style.transform = 'translateX(-50%) translateY(0)';
          nav.style.opacity = '1';
          nav.style.transform = 'translateX(-50%) translateY(0)';
          logo.style.pointerEvents = 'auto';
          nav.style.pointerEvents = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Logo */}
      <div className="hero-logo">
        <Link to="/">
          <h1>GIGALAB</h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <Link to="/services" className={isActive('/services')}>Services</Link>
        <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
        <Link to="/about" className={isActive('/about')}>About</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </nav>
    </>
  );
}

export default Header;
