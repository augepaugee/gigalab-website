import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function Home() {
    const { t } = useLanguage();
    
    useEffect(() => {
        // Intersection Observer for fade-in animations
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
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                            {t.home.hero.title[0]}
                            <span className="highlight">{t.home.hero.title[1]}</span>
                            {t.home.hero.title[2]}
                        </h1>
                        <p>{t.home.hero.subtitle}</p>
                        <Link to="/contact" className="cta-button">
                            <span>{t.home.hero.cta}</span>
                            <span className="arrow">{t.home.hero.arrow}</span>
                        </Link>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-card card-1">
                            <div className="card-icon">💡</div>
                            <div className="card-title">{t.home.cards.innovation}</div>
                            <div className="card-stat">24/7</div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">🚀</div>
                            <div className="card-title">{t.home.cards.growth}</div>
                            <div className="card-stat">+250%</div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">🎯</div>
                            <div className="card-title">{t.home.cards.successRate}</div>
                            <div className="card-stat">100%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <div className="services-container">
                    <div className="section-header fade-in">
                        <span className="section-label">{t.home.services.label}</span>
                        <h2>{t.home.services.title}</h2>
                        <p>{t.home.services.subtitle}</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">✏️</div>
                                <h3>{t.home.services.design.title}</h3>
                                <p>{t.home.services.design.description}</p>
                                <ul className="service-features">
                                    {t.home.services.design.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">⚙️</div>
                                <h3>{t.home.services.development.title}</h3>
                                <p>{t.home.services.development.description}</p>
                                <ul className="service-features">
                                    {t.home.services.development.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">🚀</div>
                                <h3>{t.home.services.launch.title}</h3>
                                <p>{t.home.services.launch.description}</p>
                                <ul className="service-features">
                                    {t.home.services.launch.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">🔧</div>
                                <h3>{t.home.services.maintenance.title}</h3>
                                <p>{t.home.services.maintenance.description}</p>
                                <ul className="service-features">
                                    {t.home.services.maintenance.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="portfolio" className="process">
                <div className="process-container">
                    <div className="section-header fade-in">
                        <span className="section-label">{t.home.process.label}</span>
                        <h2>{t.home.process.title}</h2>
                        <p>{t.home.process.subtitle}</p>
                    </div>
                    <div className="process-steps">
                        {t.home.process.steps.map((step, index) => (
                            <div key={index} className="process-step fade-in">
                                <div className="step-circle">{index + 1}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="cta-section">
                <div className="cta-content">
                    <h2>{t.home.cta.title}</h2>
                    <p>{t.home.cta.subtitle}</p>
                    <Link to="/contact" className="cta-button-white">
                        <span>{t.home.cta.button}</span>
                        <span>✉️</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;