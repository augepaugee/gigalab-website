import React, { useState, useEffect } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="page">
            <div className="contact-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">GET IN TOUCH</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)', marginBottom: '15px' }}>
                        Have a project in mind? Let's discuss how we can help transform your business
                    </p>
                    <p style={{ fontSize: '1.1em', color: 'var(--primary-blue)', marginTop: '30px', marginBottom: '60px' }}>
                        Fill out this form or contact us via contacts below
                    </p>
                </div>

                <div className="contact-form-container">

                    {submitted && (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>Message Sent Successfully!</h3>
                            <p>We'll get back to you within 24 hours.</p>
                        </div>
                    )}

                    <form className="contact-form-modern" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">
                                    Full Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email Address <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+370 000 00000"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="service">Service Interested In</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    <option value="design">Design</option>
                                    <option value="development">Development</option>
                                    <option value="launch">Launch</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="consulting">Consulting</option>
                                    <option value="full-package">Full Package</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="budget">Project Budget</label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                >
                                    <option value="">Select budget range</option>
                                    <option value="5k-10k">€5,000 - €10,000</option>
                                    <option value="10k-25k">€10,000 - €25,000</option>
                                    <option value="25k-50k">€25,000 - €50,000</option>
                                    <option value="50k+">€50,000+</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                Project Details <span className="required">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn-modern">
                            <span>Send Message</span>
                            <span className="btn-arrow">→</span>
                        </button>
                    </form>

                    {/* Contact Info Cards */}
                    <div className="contact-info-grid" style={{ display: 'flex', justifyContent: 'center', gap: '30px', maxWidth: '950px', margin: '0 auto' }}>
                        <div className="contact-info-card" style={{ flex: '0 0 260px', width: '260px', minWidth: '260px', maxWidth: '260px' }}>
                            <div className="info-icon">📧</div>
                            <h4>Email</h4>
                            <p><a href="mailto:company@gigalab.lt">company@gigalab.lt</a></p>
                            <p><a href="mailto:support@gigalab.lt">support@gigalab.lt</a></p>
                        </div>

                        <div className="contact-info-card" style={{ flex: '0 0 360px', width: '360px', minWidth: '360px', maxWidth: '360px' }}>
                            <div className="info-icon">📞</div>
                            <h4>Phone</h4>
                            <p><a href="tel:+37068491738">+370 684 91738</a></p>
                            <p><a href="tel:+37063022810">+370 630 22810</a></p>
                            <p>Mon-Fri, 9:00 AM - 6:00 PM GMT +2</p>
                        </div>

                        <div className="contact-info-card" style={{ flex: '0 0 260px', width: '260px', minWidth: '260px', maxWidth: '260px' }}>
                            <div className="info-icon">📍</div>
                            <h4>Location</h4>
                            <p>Vilnius, Lithuania</p>
                            <p>European Union</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;