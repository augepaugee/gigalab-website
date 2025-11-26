import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, selectLanguage } = useLanguage();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        {
            code: 'en',
            label: 'EN',
            name: 'English',
            flag: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="flag-icon">
                    <defs>
                        <clipPath id="uk-clip">
                            <polygon points="60,0 60,30 0,30"/>
                        </clipPath>
                        <clipPath id="us-clip">
                            <polygon points="0,0 60,0 0,30"/>
                        </clipPath>
                    </defs>
                    <g clipPath="url(#uk-clip)">
                        <rect width="60" height="30" fill="#012169"/>
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                    <g clipPath="url(#us-clip)">
                        <rect width="60" height="30" fill="#B22234"/>
                        <path d="M0,2.3 h60 M0,6.9 h60 M0,11.5 h60 M0,16.1 h60 M0,20.7 h60 M0,25.3 h60" stroke="#fff" strokeWidth="2.3"/>
                        <rect width="24" height="13" fill="#003366"/>
                        <g fill="#fff">
                            <polygon points="8.8,1.2 9.0,1.8 9.6,1.8 9.1,2.2 9.3,2.8 8.8,2.4 8.3,2.8 8.5,2.2 8.0,1.8 8.6,1.8"/>
                            <polygon points="12,1.2 12.2,1.8 12.8,1.8 12.3,2.2 12.5,2.8 12,2.4 11.5,2.8 11.7,2.2 11.2,1.8 11.8,1.8"/>
                            <polygon points="15.2,1.2 15.4,1.8 16.0,1.8 15.5,2.2 15.7,2.8 15.2,2.4 14.7,2.8 14.9,2.2 14.4,1.8 15.0,1.8"/>
                            <polygon points="18.4,1.2 18.6,1.8 19.2,1.8 18.7,2.2 18.9,2.8 18.4,2.4 17.9,2.8 18.1,2.2 17.6,1.8 18.2,1.8"/>
                            <polygon points="21.6,1.2 21.8,1.8 22.4,1.8 21.9,2.2 22.1,2.8 21.6,2.4 21.1,2.8 21.3,2.2 20.8,1.8 21.4,1.8"/>
                            <polygon points="10.4,3.4 10.6,4.0 11.2,4.0 10.7,4.4 10.9,5.0 10.4,4.6 9.9,5.0 10.1,4.4 9.6,4.0 10.2,4.0"/>
                            <polygon points="13.6,3.4 13.8,4.0 14.4,4.0 13.9,4.4 14.1,5.0 13.6,4.6 13.1,5.0 13.3,4.4 12.8,4.0 13.4,4.0"/>
                            <polygon points="16.8,3.4 17.0,4.0 17.6,4.0 17.1,4.4 17.3,5.0 16.8,4.6 16.3,5.0 16.5,4.4 16.0,4.0 16.6,4.0"/>
                            <polygon points="20,3.4 20.2,4.0 20.8,4.0 20.3,4.4 20.5,5.0 20,4.6 19.5,5.0 19.7,4.4 19.2,4.0 19.8,4.0"/>
                            <polygon points="8.8,5.6 9.0,6.2 9.6,6.2 9.1,6.6 9.3,7.2 8.8,6.8 8.3,7.2 8.5,6.6 8.0,6.2 8.6,6.2"/>
                            <polygon points="12,5.6 12.2,6.2 12.8,6.2 12.3,6.6 12.5,7.2 12,6.8 11.5,7.2 11.7,6.6 11.2,6.2 11.8,6.2"/>
                            <polygon points="15.2,5.6 15.4,6.2 16.0,6.2 15.5,6.6 15.7,7.2 15.2,6.8 14.7,7.2 14.9,6.6 14.4,6.2 15.0,6.2"/>
                            <polygon points="18.4,5.6 18.6,6.2 19.2,6.2 18.7,6.6 18.9,7.2 18.4,6.8 17.9,7.2 18.1,6.6 17.6,6.2 18.2,6.2"/>
                            <polygon points="21.6,5.6 21.8,6.2 22.4,6.2 21.9,6.6 22.1,7.2 21.6,6.8 21.1,7.2 21.3,6.6 20.8,6.2 21.4,6.2"/>
                            <polygon points="10.4,7.8 10.6,8.4 11.2,8.4 10.7,8.8 10.9,9.4 10.4,9.0 9.9,9.4 10.1,8.8 9.6,8.4 10.2,8.4"/>
                            <polygon points="13.6,7.8 13.8,8.4 14.4,8.4 13.9,8.8 14.1,9.4 13.6,9.0 13.1,9.4 13.3,8.8 12.8,8.4 13.4,8.4"/>
                            <polygon points="16.8,7.8 17.0,8.4 17.6,8.4 17.1,8.8 17.3,9.4 16.8,9.0 16.3,9.4 16.5,8.8 16.0,8.4 16.6,8.4"/>
                            <polygon points="20,7.8 20.2,8.4 20.8,8.4 20.3,8.8 20.5,9.4 20,9.0 19.5,9.4 19.7,8.8 19.2,8.4 19.8,8.4"/>
                            <polygon points="8.8,10.0 9.0,10.6 9.6,10.6 9.1,11.0 9.3,11.6 8.8,11.2 8.3,11.6 8.5,11.0 8.0,10.6 8.6,10.6"/>
                            <polygon points="12,10.0 12.2,10.6 12.8,10.6 12.3,11.0 12.5,11.6 12,11.2 11.5,11.6 11.7,11.0 11.2,10.6 11.8,10.6"/>
                            <polygon points="15.2,10.0 15.4,10.6 16.0,10.6 15.5,11.0 15.7,11.6 15.2,11.2 14.7,11.6 14.9,11.0 14.4,10.6 15.0,10.6"/>
                            <polygon points="18.4,10.0 18.6,10.6 19.2,10.6 18.7,11.0 18.9,11.6 18.4,11.2 17.9,11.6 18.1,11.0 17.6,10.6 18.2,10.6"/>
                            <polygon points="21.6,10.0 21.8,10.6 22.4,10.6 21.9,11.0 22.1,11.6 21.6,11.2 21.1,11.6 21.3,11.0 20.8,10.6 21.4,10.6"/>
                        </g>
                    </g>
                    <line x1="0" y1="30" x2="60" y2="0" stroke="#fff" strokeWidth="1"/>
                </svg>
            )
        },
        {
            code: 'lt',
            label: 'LT',
            name: 'Lietuvių',
            flag: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="flag-icon">
                    <rect width="5" height="1" y="0" fill="#FDB913"/>
                    <rect width="5" height="1" y="1" fill="#006A44"/>
                    <rect width="5" height="1" y="2" fill="#C1272D"/>
                </svg>
            )
        }
    ];

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    const handleLanguageChange = (langCode) => {
        selectLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className="language-switcher-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select language"
            >
                {currentLanguage.flag}
                <span className="language-label">{currentLanguage.label}</span>
                <svg
                    className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            {lang.flag}
                            <span className="language-name">{lang.name}</span>
                            {language === lang.code && (
                                <svg
                                    className="check-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
