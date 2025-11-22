import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
                        <h1>Your <span className="highlight">Success</span> Drives Our Mission</h1>
                        <p>We design, develop, launch, and maintain digital solutions that fuel business growth. Because we only thrive when you thrive.</p>
                        <Link to="/contact" className="cta-button">
                            <span>Start Your Journey</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-card card-1">
                            <div className="card-icon">💡</div>
                            <div className="card-title">Innovation</div>
                            <div className="card-stat">24/7</div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">🚀</div>
                            <div className="card-title">Growth</div>
                            <div className="card-stat">+250%</div>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">🎯</div>
                            <div className="card-title">Success Rate</div>
                            <div className="card-stat">98%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <div className="services-container">
                    <div className="section-header fade-in">
                        <span className="section-label">WHAT WE DO</span>
                        <h2>Comprehensive Solutions</h2>
                        <p>From concept to launch and beyond, we're your complete technology partner</p>
                    </div>
                    <div className="services-grid">
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
                </div>
            </section>

            {/* Process Section */}
            <section id="portfolio" className="process">
                <div className="process-container">
                    <div className="section-header fade-in">
                        <span className="section-label">HOW WE WORK</span>
                        <h2>Our Process</h2>
                        <p>A proven methodology that transforms ideas into successful digital products</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step fade-in">
                            <div className="step-circle">1</div>
                            <h3>Discover</h3>
                            <p>We dive deep into your business goals, challenges, and opportunities</p>
                        </div>
                        <div className="process-step fade-in">
                            <div className="step-circle">2</div>
                            <h3>Strategize</h3>
                            <p>Create a comprehensive strategy aligned with your objectives</p>
                        </div>
                        <div className="process-step fade-in">
                            <div className="step-circle">3</div>
                            <h3>Execute</h3>
                            <p>Build and refine your solution</p>
                        </div>
                        <div className="process-step fade-in">
                            <div className="step-circle">4</div>
                            <h3>Grow</h3>
                            <p>Continuous optimization based on data and feedback</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Grow Together?</h2>
                    <p>Let's build something extraordinary. Your success story starts with a conversation.</p>
                    <Link to="/contact" className="cta-button-white">
                        <span>Get in Touch</span>
                        <span>✉️</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;