import React from 'react';
import './WhyChoose.css';
import { FaCheckCircle } from 'react-icons/fa';

const points = [
  "Over 50 years of mining and mineral expertise",
  "Largest reserves of Magnesite and Soapstone in Pakistan",
  "State-of-the-art processing and strict quality control",
  "Trusted by clients in 6+ global regions",
  "On-time delivery with global logistics support",
];

const WhyChoose = () => (
  <section className="why-choose-section" id="why-choose">
    <div className="container">
      <h2 className="section-title">Why Choose Silverstone Enterprises?</h2>
      <ul className="choose-list">
        {points.map((point, index) => (
          <li key={index}><FaCheckCircle className="icon" /> {point}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChoose;
