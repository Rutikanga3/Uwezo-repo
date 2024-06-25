import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Uwezo</div>
      <nav className="nav">
        <a href="#about-us">About Us</a>
        <a href="#our-vision">Our Vision</a>
        <a href="#focus-area">Focus Area</a>
        <a href="#success-stories">Success Stories</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
