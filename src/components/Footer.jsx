import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>GIGALAB</h3>
          <p>Your success is our mission. We create digital solutions that drive real business results.</p>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Design</Link></li>
            <li><Link to="/services">Development</Link></li>
            <li><Link to="/services">Launch</Link></li>
            <li><Link to="/services">Maintenance</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">GitHub</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GIGALAB. Your Success, Our Mission.</p>
      </div>
    </footer>
  );
}

export default Footer;
