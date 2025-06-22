import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero-bg.png'; 

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
        <h1>Welcome to SilverStone Enterprises</h1>
        <p>Your Global Partner in Premium Industrial Minerals</p>
      </div>
    </section>
  );
};

export default HeroSection;
