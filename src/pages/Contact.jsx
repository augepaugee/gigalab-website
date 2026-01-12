import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import CustomSelect from '../components/CustomSelect';
import emailjs from '@emailjs/browser';

function Contact() {
    const { t } = useLanguage();
    
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
        
        // EmailJS configuration from environment variables
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
        
        // Send email using EmailJS
        emailjs.send(serviceId, templateId, {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
            to_email: 'team@giggalab.com'
        }, publicKey)
        .then((response) => {
            console.log('Email sent successfully:', response);
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
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again or contact us directly at team@giggalab.com');
        });
    };

    return (
        <div className="page">
            <div className="contact-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">{t.contact.label}</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>{t.contact.title}</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)', marginBottom: '15px' }}>
                        {t.contact.subtitle}
                    </p>
                    <p style={{ fontSize: '1.1em', color: 'var(--primary-blue)', marginTop: '30px', marginBottom: '60px' }}>
                        {t.contact.formNote}
                    </p>
                </div>

                <div className="contact-form-container">

                    {submitted && (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>{t.contact.success.title}</h3>
                            <p>{t.contact.success.message}</p>
                        </div>
                    )}

                    <form className="contact-form-modern" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">
                                    {t.contact.form.fullName} <span className="required">{t.contact.form.required}</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.form.placeholders.name}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    {t.contact.form.email} <span className="required">{t.contact.form.required}</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t.contact.form.placeholders.email}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">{t.contact.form.phone}</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.placeholders.phone}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">{t.contact.form.company}</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.placeholders.company}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="service">{t.contact.form.service}</label>
                                <CustomSelect
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.serviceOptions.select}
                                    options={[
                                        { value: '', label: t.contact.form.serviceOptions.select },
                                        { value: 'design', label: t.contact.form.serviceOptions.design },
                                        { value: 'development', label: t.contact.form.serviceOptions.development },
                                        { value: 'launch', label: t.contact.form.serviceOptions.launch },
                                        { value: 'maintenance', label: t.contact.form.serviceOptions.maintenance },
                                        { value: 'consulting', label: t.contact.form.serviceOptions.consulting },
                                        { value: 'full-package', label: t.contact.form.serviceOptions.fullPackage }
                                    ]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="budget">{t.contact.form.budget}</label>
                                <CustomSelect
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.budgetOptions.select}
                                    options={[
                                        { value: '', label: t.contact.form.budgetOptions.select },
                                        { value: '0-50', label: t.contact.form.budgetOptions.range1 },
                                        { value: '50-200', label: t.contact.form.budgetOptions.range2 },
                                        { value: '200-500', label: t.contact.form.budgetOptions.range3 },
                                        { value: '500+', label: t.contact.form.budgetOptions.range4 }
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                {t.contact.form.message} <span className="required">{t.contact.form.required}</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder={t.contact.form.placeholders.message}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn-modern">
                            <span>{t.contact.form.submit}</span>
                            <span className="btn-arrow">→</span>
                        </button>
                    </form>

                    {/* Contact Info Cards */}
                    <div className="contact-info-grid">
                        <div className="contact-info-card">
                            <div className="info-icon">📧</div>
                            <h4>{t.contact.info.email}</h4>
                            <p><a href="mailto:team@giggalab.com">team@giggalab.com</a></p>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">📞</div>
                            <h4>{t.contact.info.phone}</h4>
                            <p><a href="tel:+37068491738">+370 684 91738</a></p>
                            <p><a href="tel:+37063022810">+370 630 22810</a></p>
                            <p>{t.contact.info.phoneHours}</p>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-icon">📍</div>
                            <h4>{t.contact.info.location}</h4>
                            <p>{t.contact.info.locationDetails[0]}</p>
                            <p>{t.contact.info.locationDetails[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;