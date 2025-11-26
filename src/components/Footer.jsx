import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{t.footer.company}</h3>
          <p>{t.footer.tagline}</p>
        </div>
        <div className="footer-links">
          <h4>{t.footer.services}</h4>
          <ul>
            <li><Link to="/services">{t.footer.servicesList[0]}</Link></li>
            <li><Link to="/services">{t.footer.servicesList[1]}</Link></li>
            <li><Link to="/services">{t.footer.servicesList[2]}</Link></li>
            <li><Link to="/services">{t.footer.servicesList[3]}</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>{t.footer.companySection}</h4>
          <ul>
            <li><Link to="/about">{t.footer.companyLinks[0]}</Link></li>
            <li><Link to="/portfolio">{t.footer.companyLinks[1]}</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>{t.footer.connect}</h4>
          <ul>
            <li><a href="#">{t.footer.connectLinks[0]}</a></li>
            <li><a href="#">{t.footer.connectLinks[1]}</a></li>
            <li><a href="#">{t.footer.connectLinks[2]}</a></li>
            <li><Link to="/contact">{t.footer.connectLinks[3]}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {t.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
