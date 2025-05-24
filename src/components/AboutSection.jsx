import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/about.jpeg';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Silverstone Enterprises is a trusted name in the mining, processing, and export of high-quality industrial minerals from Pakistan. With decades of experience, we are one of the leading suppliers of Talc (Soapstone), Magnesite, Calcium Carbonate, Feldspar, and Granite, serving diverse industries across the globe.

Our commitment to quality, consistency, and customer satisfaction sets us apart in the global minerals market.

          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About SilverStone Enterprises" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
