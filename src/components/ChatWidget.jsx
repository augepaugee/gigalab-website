import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatWidget.css';
import { useLanguage } from '../i18n/LanguageContext';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const { t } = useLanguage();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Send welcome message when chat is first opened
            setTimeout(() => {
                setMessages([{
                    text: t.chat?.welcome || "Hello! How can we help you today?",
                    sender: 'bot',
                    timestamp: new Date()
                }]);
            }, 500);
        }
    }, [isOpen, messages.length, t.chat]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot response (you can replace this with actual API call)
        setTimeout(() => {
            const botResponse = {
                text: getBotResponse(inputValue),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        
        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || 
            lowerMessage.includes('labas') || lowerMessage.includes('sveiki') || lowerMessage.includes('good morning') ||
            lowerMessage.includes('good afternoon') || lowerMessage.includes('good evening')) {
            return t.chat?.greeting || "Hello! How can I assist you today?";
        } 
        
        // About Company
        else if (lowerMessage.includes('about') || lowerMessage.includes('who are you') || lowerMessage.includes('apie') || 
                 lowerMessage.includes('kas j?s') || lowerMessage.includes('your company') || lowerMessage.includes('giggalab') ||
                 lowerMessage.includes('tell me about') || lowerMessage.includes('company info')) {
            return t.chat?.aboutResponse || "GIGGALAB is a technology company based in Vilnius, Lithuania. We're passionate about helping businesses grow through innovative digital solutions!";
        }
        
        // Location
        else if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('kur') || 
                 lowerMessage.includes('address') || lowerMessage.includes('vieta') || lowerMessage.includes('based') ||
                 lowerMessage.includes('office')) {
            return t.chat?.locationResponse || "We're located in Vilnius, Lithuania, in the heart of the European Union!";
        }
        
        // Team
        else if (lowerMessage.includes('team') || lowerMessage.includes('komanda') || lowerMessage.includes('who works') || 
                 lowerMessage.includes('staff') || lowerMessage.includes('people') || lowerMessage.includes('developers')) {
            return t.chat?.teamResponse || "We're a team of passionate developers, designers, and technology experts dedicated to delivering excellence!";
        }
        
        // Business Hours
        else if (lowerMessage.includes('hours') || lowerMessage.includes('when') || lowerMessage.includes('open') || 
                 lowerMessage.includes('darbo laikas') || lowerMessage.includes('available') || lowerMessage.includes('working hours')) {
            return t.chat?.hoursResponse || "Our support team is available Monday to Friday, 9:00 AM - 6:00 PM (GMT+2). For urgent matters, email us at team@giggalab.com!";
        }
        
        // Services
        else if (lowerMessage.includes('service') || lowerMessage.includes('paslaugos') || 
                 lowerMessage.includes('what do you do') || lowerMessage.includes('k? darote') ||
                 lowerMessage.includes('what can you') || lowerMessage.includes('offer')) {
            return t.chat?.servicesResponse || "We offer web development, mobile apps, AI/ML solutions, and more. Visit our Services page for details!";
        } 
        
        // Pricing
        else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('kaina') || 
                 lowerMessage.includes('kiek kainuoja') || lowerMessage.includes('how much') || lowerMessage.includes('pricing') ||
                 lowerMessage.includes('budget') || lowerMessage.includes('quote') || lowerMessage.includes('biudžetas') ||
                 lowerMessage.includes('estimate') || lowerMessage.includes('fee') || lowerMessage.includes('expensive')) {
            return t.chat?.priceResponse || "Our pricing varies based on project scope and requirements. For a detailed quote, contact us at team@giggalab.com!";
        } 
        
        // Experience & Expertise
        else if (lowerMessage.includes('experience') || lowerMessage.includes('patirtis') || lowerMessage.includes('expertise') || 
                 lowerMessage.includes('skills') || lowerMessage.includes('qualified') || lowerMessage.includes('capability')) {
            return t.chat?.experienceResponse || "We have extensive experience in web development, mobile apps, AI/ML solutions, and digital transformation!";
        }
        
        // Industries
        else if (lowerMessage.includes('industr') || lowerMessage.includes('sector') || lowerMessage.includes('pramon?') || 
                 lowerMessage.includes('client') || lowerMessage.includes('work with')) {
            return t.chat?.industriesResponse || "We work with businesses across various industries including e-commerce, healthcare, fintech, education, and more!";
        }
        
        // Technologies
        else if (lowerMessage.includes('technolog') || lowerMessage.includes('tech stack') || lowerMessage.includes('tools') || 
                 lowerMessage.includes('framework') || lowerMessage.includes('programming') || lowerMessage.includes('languages')) {
            return t.chat?.technologiesResponse || "We use cutting-edge technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms, and more!";
        }
        
        // Process
        else if (lowerMessage.includes('process') || lowerMessage.includes('how do you work') || lowerMessage.includes('metodas') || 
                 lowerMessage.includes('workflow') || lowerMessage.includes('approach') || lowerMessage.includes('methodology')) {
            return t.chat?.processResponse || "Our process: Discover ? Strategize ? Execute ? Grow. Visit our website to learn more!";
        }
        
        // Timeline
        else if (lowerMessage.includes('how long') || lowerMessage.includes('timeline') || lowerMessage.includes('kiek laiko') || 
                 lowerMessage.includes('duration') || lowerMessage.includes('trukm?') || lowerMessage.includes('time frame') ||
                 lowerMessage.includes('delivery')) {
            return t.chat?.timelineResponse || "Project timelines vary based on scope. Simple projects: 2-4 weeks, complex solutions: 2-6 months. Contact us for specifics!";
        }
        
        // Support
        else if (lowerMessage.includes('support') || lowerMessage.includes('pagalba') || lowerMessage.includes('help') || 
                 lowerMessage.includes('assist') || lowerMessage.includes('after launch') || lowerMessage.includes('post-launch')) {
            return t.chat?.supportResponse || "We offer 24/7 technical support, regular updates, security monitoring, and performance optimization!";
        }
        
        // Maintenance
        else if (lowerMessage.includes('maintenance') || lowerMessage.includes('prieži?ra') || lowerMessage.includes('upkeep') || 
                 lowerMessage.includes('updates') || lowerMessage.includes('ongoing')) {
            return t.chat?.maintenanceResponse || "Our maintenance includes regular updates, security patches, performance monitoring, and feature enhancements!";
        }
        
        // Why Choose Us
        else if (lowerMessage.includes('why choose') || lowerMessage.includes('kod?l pasirinkti') || lowerMessage.includes('why you') || 
                 lowerMessage.includes('what makes you') || lowerMessage.includes('different') || lowerMessage.includes('advantage')) {
            return t.chat?.whyChooseResponse || "We're different because your success is literally our mission. We become your technology partner!";
        }
        
        // Getting Started
        else if (lowerMessage.includes('get started') || lowerMessage.includes('start') || lowerMessage.includes('prad?ti') || 
                 lowerMessage.includes('begin') || lowerMessage.includes('first step') || lowerMessage.includes('onboard')) {
            return t.chat?.startResponse || "Getting started is easy! Contact us at team@giggalab.com or fill out our Contact form for a free consultation!";
        }
        
        // Quality/Guarantee
        else if (lowerMessage.includes('quality') || lowerMessage.includes('guarantee') || lowerMessage.includes('kokyb?') || 
                 lowerMessage.includes('reliable') || lowerMessage.includes('trust') || lowerMessage.includes('assurance')) {
            return t.chat?.guaranteeResponse || "We're committed to delivering high-quality solutions and work closely with you to meet your expectations!";
        }
        
        // Contact
        else if (lowerMessage.includes('contact') || lowerMessage.includes('kontaktai') || lowerMessage.includes('email') ||
                 lowerMessage.includes('reach') || lowerMessage.includes('get in touch') || lowerMessage.includes('susisiekti') ||
                 lowerMessage.includes('phone') || lowerMessage.includes('telefonas') || lowerMessage.includes('call')) {
            return t.chat?.contactResponse || "You can reach us at team@giggalab.com or through our Contact page. We'll get back to you within 24 hours!";
        } 
        
        // Portfolio
        else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('darbai') ||
                 lowerMessage.includes('project') || lowerMessage.includes('projektas') || lowerMessage.includes('example') ||
                 lowerMessage.includes('previous') || lowerMessage.includes('showcase')) {
            return t.chat?.portfolioResponse || "Check out our Portfolio page to see our latest projects!";
        } 
        
        // Default
        else {
            return t.chat?.defaultResponse || "Thank you for your message! For specific inquiries, please contact us at team@giggalab.com or visit our Contact page.";
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                className={`chat-button ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open chat"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    <circle cx="12" cy="10" r="1"/>
                    <circle cx="8" cy="10" r="1"/>
                    <circle cx="16" cy="10" r="1"/>
                </svg>
            </button>

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="chat-header">
                    <div className="chat-header-content">
                        <div className="chat-avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                        </div>
                        <div className="chat-header-text">
                            <h3>{t.chat?.title || "GigaLab Support"}</h3>
                            <span className="chat-status">{t.chat?.status || "Online"}</span>
                        </div>
                    </div>
                    <button
                        className="chat-close-button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close chat"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            <div className="message-content">
                                {message.text}
                            </div>
                            <div className="message-timestamp">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="chat-message bot-message">
                            <div className="message-content typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form className="chat-input-container" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        className="chat-input"
                        placeholder={t.chat?.placeholder || "Type your message..."}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="chat-send-button"
                        disabled={!inputValue.trim()}
                        aria-label="Send message"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChatWidget;
