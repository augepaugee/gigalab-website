import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const logo = document.querySelector('.hero-logo');
            const nav = document.querySelector('nav');
            const hamburger = document.querySelector('.mobile-menu-toggle');

            // Apply scroll effects on all screen sizes
            if (scrollTop > 100) {
                const opacity = Math.max(0, 1 - (scrollTop - 100) / 200);
                const translateY = Math.min(30, (scrollTop - 100) / 10);

                // Logo fade out
                if (logo) {
                    logo.style.opacity = opacity;

                    // Different transform for mobile vs desktop
                    if (window.innerWidth <= 768) {
                        logo.style.transform = `translateY(-${translateY}px)`;
                    } else {
                        logo.style.transform = `translateX(-50%) translateY(-${translateY}px)`;
                    }

                    if (opacity === 0) {
                        logo.style.pointerEvents = 'none';
                    } else {
                        logo.style.pointerEvents = 'auto';
                    }
                }

                // Hamburger button fade out on mobile
                if (hamburger && window.innerWidth <= 768) {
                    hamburger.style.opacity = opacity;
                    hamburger.style.transform = `translateY(-${translateY}px)`;

                    if (opacity === 0) {
                        hamburger.style.pointerEvents = 'none';
                    } else {
                        hamburger.style.pointerEvents = 'auto';
                    }
                }

                // Desktop nav fade out
                if (nav && window.innerWidth > 768) {
                    nav.style.opacity = opacity;
                    nav.style.transform = `translateX(-50%) translateY(-${translateY}px)`;

                    if (opacity === 0) {
                        nav.style.pointerEvents = 'none';
                    } else {
                        nav.style.pointerEvents = 'auto';
                    }
                }
            } else {
                // Reset logo
                if (logo) {
                    logo.style.opacity = '1';

                    // Different transform for mobile vs desktop
                    if (window.innerWidth <= 768) {
                        logo.style.transform = 'translateY(0)';
                    } else {
                        logo.style.transform = 'translateX(-50%) translateY(0)';
                    }

                    logo.style.pointerEvents = 'auto';
                }

                // Reset hamburger button on mobile
                if (hamburger && window.innerWidth <= 768) {
                    hamburger.style.opacity = '1';
                    hamburger.style.transform = 'translateY(0)';
                    hamburger.style.pointerEvents = 'auto';
                }

                // Reset desktop nav
                if (nav && window.innerWidth > 768) {
                    nav.style.opacity = '1';
                    nav.style.transform = 'translateX(-50%) translateY(0)';
                    nav.style.pointerEvents = 'auto';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial call to set correct state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Close mobile menu when route changes
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {/* Logo */}
            <div className="hero-logo">
                <Link to="/">
                    <h1>GIGGALAB</h1>
                </Link>
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <span className={mobileMenuOpen ? 'open' : ''}></span>
                <span className={mobileMenuOpen ? 'open' : ''}></span>
                <span className={mobileMenuOpen ? 'open' : ''}></span>
            </button>

            {/* Navigation */}
            <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
                <Link to="/services" className={isActive('/services')} onClick={() => setMobileMenuOpen(false)}>
                    {t.nav.services}
                </Link>
                <Link to="/portfolio" className={isActive('/portfolio')} onClick={() => setMobileMenuOpen(false)}>
                    {t.nav.portfolio}
                </Link>
                <Link to="/about" className={isActive('/about')} onClick={() => setMobileMenuOpen(false)}>
                    {t.nav.about}
                </Link>
                <Link to="/contact" className={isActive('/contact')} onClick={() => setMobileMenuOpen(false)}>
                    {t.nav.contact}
                </Link>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
}

export default Header;