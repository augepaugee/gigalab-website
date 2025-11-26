import React, { useState } from 'react';

function LanguageSelector({ onSelectLanguage }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleLanguageSelect = (lang) => {
        setIsClosing(true); // Start animation
        onSelectLanguage(lang); // Switch language immediately
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: isClosing ? 'fadeOut 0.3s ease-in-out' : 'fadeIn 0.3s ease-in-out',
            opacity: isClosing ? 0 : 1,
            pointerEvents: isClosing ? 'none' : 'auto'
        }}>
            <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                animation: isClosing ? 'slideDown 0.3s ease-out' : 'slideUp 0.5s ease-out',
                transform: isClosing ? 'translateY(30px)' : 'translateY(0)',
                opacity: isClosing ? 0 : 1
            }}>
                <button
                    onClick={() => handleLanguageSelect('en')}
                    style={{
                        width: '240px',
                        height: '160px',
                        padding: 0,
                        color: 'white',
                        textShadow: '0 3px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8)',
                        background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 30\'%3E%3Cdefs%3E%3CclipPath id=\'uk-clip\'%3E%3Cpath d=\'M0,0 v30 h60 v-30 z\'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path=\'url(%23uk-clip)\'%3E%3Cpath d=\'M0,0 v30 h60 v-30 z\' fill=\'%23012169\'/%3E%3Cpath d=\'M0,0 L60,30 M60,0 L0,30\' stroke=\'%23fff\' stroke-width=\'6\'/%3E%3Cpath d=\'M0,0 L60,30 M60,0 L0,30\' stroke=\'%23C8102E\' stroke-width=\'4\'/%3E%3Cpath d=\'M30,0 v30 M0,15 h60\' stroke=\'%23fff\' stroke-width=\'10\'/%3E%3Cpath d=\'M30,0 v30 M0,15 h60\' stroke=\'%23C8102E\' stroke-width=\'6\'/%3E%3C/g%3E%3C/svg%3E")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.borderColor = 'white';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.7)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
                        zIndex: 0
                    }}></div>
                    <span style={{ position: 'relative', zIndex: 1, fontSize: '2em', fontWeight: '700' }}>GB</span>
                    <span style={{ position: 'relative', zIndex: 1, fontSize: '1.2em', fontWeight: '600' }}>English</span>
                </button>
                
                <button
                    onClick={() => handleLanguageSelect('lt')}
                    style={{
                        width: '240px',
                        height: '160px',
                        padding: 0,
                        color: 'white',
                        textShadow: '0 3px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8)',
                        background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 5 3\'%3E%3Crect width=\'5\' height=\'1\' y=\'0\' fill=\'%23FDB913\'/%3E%3Crect width=\'5\' height=\'1\' y=\'1\' fill=\'%23006A44\'/%3E%3Crect width=\'5\' height=\'1\' y=\'2\' fill=\'%23C1272D\'/%3E%3C/svg%3E")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.borderColor = 'white';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.7)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
                        zIndex: 0
                    }}></div>
                    <span style={{ position: 'relative', zIndex: 1, fontSize: '2em', fontWeight: '700' }}>LT</span>
                    <span style={{ position: 'relative', zIndex: 1, fontSize: '1.2em', fontWeight: '600' }}>Lietuvių</span>
                </button>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideDown {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                }
            `}</style>
        </div>
    );
}

export default LanguageSelector;
