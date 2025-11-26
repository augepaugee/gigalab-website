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
                        background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 30\'%3E%3Cdefs%3E%3CclipPath id=\'uk-diagonal\'%3E%3Cpolygon points=\'60,0 60,30 0,30\'/%3E%3C/clipPath%3E%3CclipPath id=\'us-diagonal\'%3E%3Cpolygon points=\'0,0 60,0 0,30\'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path=\'url(%23uk-diagonal)\'%3E%3Crect width=\'60\' height=\'30\' fill=\'%23012169\'/%3E%3Cpath d=\'M0,0 L60,30 M60,0 L0,30\' stroke=\'%23fff\' stroke-width=\'6\'/%3E%3Cpath d=\'M0,0 L60,30 M60,0 L0,30\' stroke=\'%23C8102E\' stroke-width=\'4\'/%3E%3Cpath d=\'M30,0 v30 M0,15 h60\' stroke=\'%23fff\' stroke-width=\'10\'/%3E%3Cpath d=\'M30,0 v30 M0,15 h60\' stroke=\'%23C8102E\' stroke-width=\'6\'/%3E%3C/g%3E%3Cg clip-path=\'url(%23us-diagonal)\'%3E%3Crect width=\'60\' height=\'30\' fill=\'%23B22234\'/%3E%3Cpath d=\'M0,2.3 h60 M0,6.9 h60 M0,11.5 h60 M0,16.1 h60 M0,20.7 h60 M0,25.3 h60\' stroke=\'%23fff\' stroke-width=\'2.3\'/%3E%3Crect width=\'24\' height=\'13\' fill=\'%23003366\'/%3E%3Cg fill=\'%23fff\'%3E%3Cpolygon points=\'8.8,1.2 9.0,1.8 9.6,1.8 9.1,2.2 9.3,2.8 8.8,2.4 8.3,2.8 8.5,2.2 8.0,1.8 8.6,1.8\'/%3E%3Cpolygon points=\'12,1.2 12.2,1.8 12.8,1.8 12.3,2.2 12.5,2.8 12,2.4 11.5,2.8 11.7,2.2 11.2,1.8 11.8,1.8\'/%3E%3Cpolygon points=\'15.2,1.2 15.4,1.8 16.0,1.8 15.5,2.2 15.7,2.8 15.2,2.4 14.7,2.8 14.9,2.2 14.4,1.8 15.0,1.8\'/%3E%3Cpolygon points=\'18.4,1.2 18.6,1.8 19.2,1.8 18.7,2.2 18.9,2.8 18.4,2.4 17.9,2.8 18.1,2.2 17.6,1.8 18.2,1.8\'/%3E%3Cpolygon points=\'21.6,1.2 21.8,1.8 22.4,1.8 21.9,2.2 22.1,2.8 21.6,2.4 21.1,2.8 21.3,2.2 20.8,1.8 21.4,1.8\'/%3E%3Cpolygon points=\'10.4,3.4 10.6,4.0 11.2,4.0 10.7,4.4 10.9,5.0 10.4,4.6 9.9,5.0 10.1,4.4 9.6,4.0 10.2,4.0\'/%3E%3Cpolygon points=\'13.6,3.4 13.8,4.0 14.4,4.0 13.9,4.4 14.1,5.0 13.6,4.6 13.1,5.0 13.3,4.4 12.8,4.0 13.4,4.0\'/%3E%3Cpolygon points=\'16.8,3.4 17.0,4.0 17.6,4.0 17.1,4.4 17.3,5.0 16.8,4.6 16.3,5.0 16.5,4.4 16.0,4.0 16.6,4.0\'/%3E%3Cpolygon points=\'20,3.4 20.2,4.0 20.8,4.0 20.3,4.4 20.5,5.0 20,4.6 19.5,5.0 19.7,4.4 19.2,4.0 19.8,4.0\'/%3E%3Cpolygon points=\'8.8,5.6 9.0,6.2 9.6,6.2 9.1,6.6 9.3,7.2 8.8,6.8 8.3,7.2 8.5,6.6 8.0,6.2 8.6,6.2\'/%3E%3Cpolygon points=\'12,5.6 12.2,6.2 12.8,6.2 12.3,6.6 12.5,7.2 12,6.8 11.5,7.2 11.7,6.6 11.2,6.2 11.8,6.2\'/%3E%3Cpolygon points=\'15.2,5.6 15.4,6.2 16.0,6.2 15.5,6.6 15.7,7.2 15.2,6.8 14.7,7.2 14.9,6.6 14.4,6.2 15.0,6.2\'/%3E%3Cpolygon points=\'18.4,5.6 18.6,6.2 19.2,6.2 18.7,6.6 18.9,7.2 18.4,6.8 17.9,7.2 18.1,6.6 17.6,6.2 18.2,6.2\'/%3E%3Cpolygon points=\'21.6,5.6 21.8,6.2 22.4,6.2 21.9,6.6 22.1,7.2 21.6,6.8 21.1,7.2 21.3,6.6 20.8,6.2 21.4,6.2\'/%3E%3Cpolygon points=\'10.4,7.8 10.6,8.4 11.2,8.4 10.7,8.8 10.9,9.4 10.4,9.0 9.9,9.4 10.1,8.8 9.6,8.4 10.2,8.4\'/%3E%3Cpolygon points=\'13.6,7.8 13.8,8.4 14.4,8.4 13.9,8.8 14.1,9.4 13.6,9.0 13.1,9.4 13.3,8.8 12.8,8.4 13.4,8.4\'/%3E%3Cpolygon points=\'16.8,7.8 17.0,8.4 17.6,8.4 17.1,8.8 17.3,9.4 16.8,9.0 16.3,9.4 16.5,8.8 16.0,8.4 16.6,8.4\'/%3E%3Cpolygon points=\'20,7.8 20.2,8.4 20.8,8.4 20.3,8.8 20.5,9.4 20,9.0 19.5,9.4 19.7,8.8 19.2,8.4 19.8,8.4\'/%3E%3Cpolygon points=\'8.8,10.0 9.0,10.6 9.6,10.6 9.1,11.0 9.3,11.6 8.8,11.2 8.3,11.6 8.5,11.0 8.0,10.6 8.6,10.6\'/%3E%3Cpolygon points=\'12,10.0 12.2,10.6 12.8,10.6 12.3,11.0 12.5,11.6 12,11.2 11.5,11.6 11.7,11.0 11.2,10.6 11.8,10.6\'/%3E%3Cpolygon points=\'15.2,10.0 15.4,10.6 16.0,10.6 15.5,11.0 15.7,11.6 15.2,11.2 14.7,11.6 14.9,11.0 14.4,10.6 15.0,10.6\'/%3E%3Cpolygon points=\'18.4,10.0 18.6,10.6 19.2,10.6 18.7,11.0 18.9,11.6 18.4,11.2 17.9,11.6 18.1,11.0 17.6,10.6 18.2,10.6\'/%3E%3Cpolygon points=\'21.6,10.0 21.8,10.6 22.4,10.6 21.9,11.0 22.1,11.6 21.6,11.2 21.1,11.6 21.3,11.0 20.8,10.6 21.4,10.6\'/%3E%3C/g%3E%3C/g%3E%3Cline x1=\'0\' y1=\'30\' x2=\'60\' y2=\'0\' stroke=\'%23fff\' stroke-width=\'1\'/%3E%3C/svg%3E")',
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
                    <span style={{ position: 'relative', zIndex: 1, fontSize: '2em', fontWeight: '700' }}>GB/US</span>
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
