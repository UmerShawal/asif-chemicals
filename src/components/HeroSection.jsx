import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero-bg.jpeg'; // ✅ import the image

const HeroSection = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Asif Chemicals</h1>
        <p>We provide high-quality chemical solutions</p>
      </div>
    </section>
  );
};

export default HeroSection;
