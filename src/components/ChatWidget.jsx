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
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('labas')) {
            return t.chat?.greeting || "Hello! How can I assist you today?";
        } else if (lowerMessage.includes('service') || lowerMessage.includes('paslaugos')) {
            return t.chat?.servicesResponse || "We offer web development, mobile apps, AI/ML solutions, and more. Visit our Services page for details!";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('kaina')) {
            return t.chat?.priceResponse || "Our pricing varies by project. Please contact us through the Contact page for a custom quote!";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('kontaktai')) {
            return t.chat?.contactResponse || "You can reach us through our Contact page or email us directly!";
        } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('darbai')) {
            return t.chat?.portfolioResponse || "Check out our Portfolio page to see our latest projects!";
        } else {
            return t.chat?.defaultResponse || "Thank you for your message! For specific inquiries, please visit our Contact page or email us directly.";
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
