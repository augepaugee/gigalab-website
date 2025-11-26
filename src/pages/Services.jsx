import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function Services() {
    const { t } = useLanguage();
    
    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="page">
            <div className="services-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">{t.services.label}</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>{t.services.title}</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)' }}>{t.services.subtitle}</p>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div className="grid-2">
                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">✏️</div>
                                <h3>{t.services.design.title}</h3>
                                <p>{t.services.design.description}</p>
                                <ul className="service-features">
                                    {t.services.design.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">⚙️</div>
                                <h3>{t.services.development.title}</h3>
                                <p>{t.services.development.description}</p>
                                <ul className="service-features">
                                    {t.services.development.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">🚀</div>
                                <h3>{t.services.launch.title}</h3>
                                <p>{t.services.launch.description}</p>
                                <ul className="service-features">
                                    {t.services.launch.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">🔧</div>
                                <h3>{t.services.maintenance.title}</h3>
                                <p>{t.services.maintenance.description}</p>
                                <ul className="service-features">
                                    {t.services.maintenance.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '80px' }}>
                        <Link to="/contact" className="cta-button">
                            <span>{t.services.cta}</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;