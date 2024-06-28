import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Uwezo Youth Empowerment</p>
      <nav className="footer-nav">
        <a href="#about-us">About Us</a>
        <a href="#donate">Donate</a>
      </nav>
    </footer>
  );
};

export default Footer;
