import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Moon, Sun, Menu, X } from 'react-feather';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">Rizky.</div>
        {isMobile ? (
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div className="nav-links desktop">
            <a href="#home" className="active">Home</a>
            <a href="#about">Tentang Saya</a>
            <a href="#skills">Keahlian</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        )}
      </div>
      {isMobile && (
        <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
          <a href="#home">Home</a>
          <a href="#tentangsaya">About</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

