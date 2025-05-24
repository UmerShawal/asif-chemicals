import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo-link">
          <img src={logo} alt="Asif Chemicals Logo" className="logo animated-logo" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleClose}>Home</a></li>
          <li><a href="#products" onClick={handleClose}>Products</a></li>
          <li><a href="#services" onClick={handleClose}>Services</a></li>
          <li><a href="#exports" onClick={handleClose}>Export</a></li>
          <li><a href="#about" onClick={handleClose}>About</a></li>
          <li><a href="#contact" onClick={handleClose}>Contact</a></li>
        </ul>

        <div className="hamburger" onClick={handleToggle}>
          <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'hide' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
