import React, { useState, useEffect } from 'react';
import { GitHub, Linkedin, MessageCircle } from 'react-feather';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full-stack Developer';
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);

        if (index === fullText.length - 1) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 1) {
          setIsDeleting(false);
        }
      }

      // Adjust typing speed
      setTypingSpeed(isDeleting ? 100 : 150);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, typingSpeed, fullText]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`} id="home">
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon pop-up">
          <Linkedin size={24} />
        </a>
        <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer" className="social-icon pop-up">
          <MessageCircle size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon pop-up">
          <GitHub size={24} />
        </a>
      </div>
      
      <div className="hero-content">
        <h1 className="pop-up">Muhammad Rizky</h1>
        <h2 className="typing-text pop-up">{text}<span className="cursor">|</span></h2>
        <button className="contact-button pop-up" onClick={handleContactClick}>
          Hubungi Saya
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="profile-image pop-up">
        <img src="/images/about.jpg" alt="Rizky" />
      </div>
    </section>
  );
}

export default Hero;
