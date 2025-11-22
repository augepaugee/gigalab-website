import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
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
                    <span className="section-label">WHAT WE DO</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>Our Services</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)' }}>Comprehensive IT solutions designed to transform your business and drive success</p>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div className="grid-2">
                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">✏️</div>
                                <h3>Design</h3>
                                <p>User-centric design that captures your brand essence and creates memorable digital experiences that convert visitors into customers.</p>
                                <ul className="service-features">
                                    <li>UI/UX Design</li>
                                    <li>Brand Identity & Strategy</li>
                                    <li>Design Systems</li>
                                    <li>User Research & Testing</li>
                                    <li>Prototyping</li>
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">⚙️</div>
                                <h3>Development</h3>
                                <p>Robust, scalable solutions built with cutting-edge technologies and industry best practices for maximum performance.</p>
                                <ul className="service-features">
                                    <li>Web Application Development</li>
                                    <li>Mobile App Development</li>
                                    <li>Custom Software Solutions</li>
                                    <li>E-commerce Platforms</li>
                                    <li>API Development & Integration</li>
                                    <li>Database Design & Optimization</li>
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">🚀</div>
                                <h3>Launch</h3>
                                <p>Strategic deployment ensuring your solution reaches your audience with maximum impact and minimal downtime.</p>
                                <ul className="service-features">
                                    <li>Cloud Infrastructure Setup</li>
                                    <li>Performance Optimization</li>
                                    <li>Security Hardening</li>
                                    <li>Load Testing & QA</li>
                                    <li>SEO Optimization</li>
                                    <li>Launch Strategy & Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-card-content">
                                <div className="service-icon">🔧</div>
                                <h3>Maintenance</h3>
                                <p>Ongoing support and evolution to keep your solution performing at its peak and adapting to changing needs.</p>
                                <ul className="service-features">
                                    <li>24/7 Technical Support</li>
                                    <li>Regular Updates & Patches</li>
                                    <li>Security Monitoring</li>
                                    <li>Performance Analytics</li>
                                    <li>Feature Enhancements</li>
                                    <li>Backup & Disaster Recovery</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '80px' }}>
                        <Link to="/contact" className="cta-button">
                            <span>Get in Touch</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;