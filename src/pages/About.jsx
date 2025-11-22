import React, { useEffect } from 'react';

function About() {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="page">
            <div className="about-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">WHO WE ARE</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>About GIGALAB</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)', marginBottom: '15px' }}>
                        We're a team of passionate technologists dedicated to helping businesses grow.
                    </p>
                    <p style={{ fontSize: '1.1em', color: 'var(--light-gray)', marginTop: '30px', marginBottom: '60px' }}>
                        Our company is registered as an individual activity in Lithuania and is subject to Lithuanian laws.
                    </p>
                </div>

                {/* Add about content here */}
            </div>
        </div>
    );
}

export default About;