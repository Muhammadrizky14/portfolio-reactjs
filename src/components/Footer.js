import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://instagram.com/ikikzz.s" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@bwyrufh" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="bi bi-tiktok"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/Muhammadrizky14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <p className="copyright">© {currentYear} Muhammad Rizky Budi S.</p>
      </div>
    </footer>
  );
}

export default Footer;

