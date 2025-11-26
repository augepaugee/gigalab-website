import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Initialize from localStorage if available
    const savedLanguage = localStorage.getItem('language');
    const [language, setLanguage] = useState(savedLanguage || null);
    const [isLanguageSelected, setIsLanguageSelected] = useState(!!savedLanguage);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const selectLanguage = (lang) => {
        if (lang === language) return; // Don't transition if same language
        
        setIsTransitioning(true);
        
        // Fade out
        setTimeout(() => {
            setLanguage(lang);
            setIsLanguageSelected(true);
            localStorage.setItem('language', lang);
            
            // Fade in
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 200);
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'lt' : 'en';
        selectLanguage(newLang);
    };

    const t = language ? translations[language] : translations['en'];

    return (
        <LanguageContext.Provider value={{ language, selectLanguage, toggleLanguage, isLanguageSelected, isTransitioning, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
