import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null;
}

function AppContent() {
    const { isLanguageSelected, selectLanguage } = useLanguage();
    const [showSelector, setShowSelector] = React.useState(!isLanguageSelected);

    const handleLanguageSelect = (lang) => {
        selectLanguage(lang); // Switch language immediately
        setTimeout(() => {
            setShowSelector(false); // Remove selector after animation
        }, 300);
    };

    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
                {showSelector && <LanguageSelector onSelectLanguage={handleLanguageSelect} />}
            </div>
        </Router>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;