import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function About() {
    const { t } = useLanguage();
    
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="page">
            <div className="about-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">{t.about.label}</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>{t.about.title}</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)', marginBottom: '15px' }}>
                        {t.about.description}
                    </p>
                    <p style={{ fontSize: '1.1em', color: 'var(--light-gray)', marginTop: '30px', marginBottom: '60px' }}>
                        {t.about.legal}
                    </p>
                </div>

                {/* Add about content here */}
            </div>
        </div>
    );
}

export default About;