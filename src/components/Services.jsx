import React from 'react';
import './Services.css';
import { FaFlask, FaRecycle, FaTruck, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-intro">
          We offer a range of professional services in the chemical industry with guaranteed quality.
        </p>
        <div className="services-cards">
          <div className="service-card">
            <FaFlask className="service-icon" />
            <h3>Quality Products</h3>
            <p>We ensure high-quality and lab-tested chemical supplies for various industries.</p>
          </div>
          <div className="service-card">
            <FaRecycle className="service-icon" />
            <h3>Eco-Friendly Solutions</h3>
            <p>All our products are safe for the environment and meet international standards.</p>
          </div>
          <div className="service-card">
            <FaTruck className="service-icon" />
            <h3>Timely Delivery</h3>
            <p>We offer fast and reliable delivery services across all major locations.</p>
          </div>
          <div className="service-card">
            <FaShieldAlt className="service-icon" />
            <h3>Safety Guaranteed</h3>
            <p>Proper safety measures and secure packaging to handle chemical materials responsibly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
