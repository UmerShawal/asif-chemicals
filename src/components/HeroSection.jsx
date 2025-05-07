import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero-bg.jpeg';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content fade-in">
        <div className="hero-text">
          <h1>Welcome to Asif Chemicals</h1>
          <p>
            We provide premium industrial minerals and chemical solutions
            to leading industries across Pakistan — trusted for over 30 years.
          </p>
          <a href="#products">
            <button>Explore Our Products</button>
          </a>
        </div>
        <div className="hero-image">
        <img src={heroImg} alt="Chemical Industry" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
