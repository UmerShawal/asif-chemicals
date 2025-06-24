import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>SilverStone Enterprises</h3>
          <p>
            Silverstone Enterprises provides reliable mineral and chemical solutions for industries and households. We are committed to delivering top-tier quality, prioritizing safety, and embracing eco‑friendly practices across all operations.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>Email: silverstonenterprises11@gmail.com</p>
          <p>Phone: +92 345 9096945</p>
          <p>Location: Abbattabad, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SilverStone Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
