import React, { useEffect } from 'react';

function Portfolio() {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="page">
            <div className="portfolio-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">OUR WORK</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>Portfolio</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)', marginBottom: '60px' }}>
                        Discover how we've helped businesses elevate their online impact
                    </p>
                </div>

                {/* Add portfolio content here */}
            </div>
        </div>
    );
}

export default Portfolio;