import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
// Import projects directly
import { project1 } from '../portfolio/project1';
import { project2 } from '../portfolio/project2';
import { project3 } from '../portfolio/project3';
import { project4 } from '../portfolio/project4';

function Portfolio() {
    const { t } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [currentSlides, setCurrentSlides] = useState({});

    // Load projects
    useEffect(() => {
        // Add all imported projects to the array
        const allProjects = [
            project1,
            project2,
            project3,
            project4,
            // Add more projects here as you create them
        ];
        
        setProjects(allProjects);
        
        // Initialize slide indexes for each project
        const initialSlides = {};
        allProjects.forEach(project => {
            initialSlides[project.id] = 0;
        });
        setCurrentSlides(initialSlides);
        
        console.log('Loaded projects:', allProjects);
    }, []);

    // Function to go to next slide
    const nextSlide = (projectId, imagesLength) => {
        setCurrentSlides(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % imagesLength
        }));
    };

    // Function to go to previous slide
    const prevSlide = (projectId, imagesLength) => {
        setCurrentSlides(prev => ({
            ...prev,
            [projectId]: (prev[projectId] - 1 + imagesLength) % imagesLength
        }));
    };

    // Function to go to specific slide
    const goToSlide = (projectId, index) => {
        setCurrentSlides(prev => ({
            ...prev,
            [projectId]: index
        }));
    };

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="page">
            <div className="portfolio-hero" style={{ display: 'block', paddingBottom: '100px' }}>
                <div style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto', marginBottom: '80px' }}>
                    <span className="section-label">{t.portfolio.label}</span>
                    <h1 style={{ fontSize: '3.5em', color: 'white', marginBottom: '20px', fontWeight: '800' }}>{t.portfolio.title}</h1>
                    <p style={{ fontSize: '1.3em', color: 'var(--light-gray)', marginBottom: '60px' }}>
                        {t.portfolio.subtitle}
                    </p>
                </div>

                {/* Portfolio Projects */}
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {projects.length > 0 ? (
                        <div className="projects-grid">
                            {projects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <h3 style={{ 
                                        fontSize: '2em', 
                                        color: '#E0E0E0',
                                        marginBottom: '30px',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {project.title}
                                    </h3>
                                    {project.images && project.images.length > 0 && (
                                        <div style={{ 
                                            position: 'relative', 
                                            marginBottom: '15px', 
                                            overflow: 'hidden', 
                                            borderRadius: '8px',
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            {/* Image Container with Sliding Effect */}
                                            <div style={{
                                                display: 'flex',
                                                transform: `translateX(-${(currentSlides[project.id] || 0) * 100}%)`,
                                                transition: 'transform 0.5s ease-in-out'
                                            }}>
                                                {project.images.map((image, index) => (
                                                    <img 
                                                        key={index}
                                                        src={image} 
                                                        alt={`${project.title} - Slide ${index + 1}`}
                                                        style={{ 
                                                            width: '100%',
                                                            height: 'auto',
                                                            maxHeight: '600px',
                                                            objectFit: 'contain',
                                                            display: 'block',
                                                            borderRadius: '8px',
                                                            flexShrink: 0
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            
                                            {/* Navigation Arrows (only show if more than 1 image) */}
                                            {project.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={() => prevSlide(project.id, project.images.length)}
                                                        style={{
                                                            position: 'absolute',
                                                            left: '10px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            background: 'rgba(0, 0, 0, 0.5)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '50%',
                                                            width: '40px',
                                                            height: '40px',
                                                            cursor: 'pointer',
                                                            fontSize: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        ‹
                                                    </button>
                                                    <button
                                                        onClick={() => nextSlide(project.id, project.images.length)}
                                                        style={{
                                                            position: 'absolute',
                                                            right: '10px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            background: 'rgba(0, 0, 0, 0.5)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '50%',
                                                            width: '40px',
                                                            height: '40px',
                                                            cursor: 'pointer',
                                                            fontSize: '20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        ›
                                                    </button>
                                                    
                                                    {/* Dots Indicator */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: '10px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        display: 'flex',
                                                        gap: '8px'
                                                    }}>
                                                        {project.images.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => goToSlide(project.id, index)}
                                                                style={{
                                                                    width: '10px',
                                                                    height: '10px',
                                                                    borderRadius: '50%',
                                                                    border: 'none',
                                                                    background: (currentSlides[project.id] || 0) === index 
                                                                        ? 'white' 
                                                                        : 'rgba(255, 255, 255, 0.5)',
                                                                    cursor: 'pointer',
                                                                    padding: 0
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                    <p style={{ 
                                        fontSize: '1.1em', 
                                        color: 'var(--light-gray)',
                                        lineHeight: '1.8',
                                        marginTop: '30px',
                                        textAlign: 'justify',
                                        textJustify: 'inter-word'
                                    }}>
                                        {project.description}
                                    </p>
                                    {project.website && (
                                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                            <a 
                                                href={project.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: 'var(--primary-color)',
                                                    fontSize: '1.1em',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                    transition: 'opacity 0.3s ease'
                                                }}
                                                onMouseOver={(e) => e.target.style.opacity = '0.8'}
                                                onMouseOut={(e) => e.target.style.opacity = '1'}
                                            >
                                                {t.portfolio.visitWebsite} →
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center', color: 'var(--light-gray)' }}>
                            {t.portfolio.loading}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;