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
    const [language, setLanguage] = useState(null);
    const [isLanguageSelected, setIsLanguageSelected] = useState(false);

    useEffect(() => {
        // Check if user has already selected a language
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
            setIsLanguageSelected(true);
        }
    }, []);

    const selectLanguage = (lang) => {
        setLanguage(lang);
        setIsLanguageSelected(true);
        localStorage.setItem('language', lang);
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'lt' : 'en';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const t = language ? translations[language] : translations['en'];

    return (
        <LanguageContext.Provider value={{ language, selectLanguage, toggleLanguage, isLanguageSelected, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
