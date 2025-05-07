import React from 'react';
import './Clients.css';

import pakistansteel from '../assets/clients/pakistansteel.png';
import aghasteelmil from '../assets/clients/aghasteelmil.jpg';
import amrelisteelmil from '../assets/clients/amrelisteelmil.jpg';
import mughalsteel from '../assets/clients/mughalsteel.png';
import heavymechanicalcomplex from '../assets/clients/heavymechanicalcomplex.png';
import itefaqsteelmil from '../assets/clients/itefaqsteelmil.jpg';
import brightopaint from '../assets/clients/brightopaint.jpg';
import diamondpaint from '../assets/clients/diamondpaint.png';
import happillacpaint from '../assets/clients/happillacpaint.png';
import masterpaint from '../assets/clients/masterpaint.png';
import marvelpaint from '../assets/clients/masterpaint.png';
import bullehshah from '../assets/clients/bullehshah.png';
import alkaram from '../assets/clients/alkaram.jpg';
import fazalpaper from '../assets/clients/fazalpaper.png';
import Mandialipaper from '../assets/clients/Mandialipaper.jpg';

// 🔁 Add more industry logos below if needed

const industries = [
  {
    title: "STEEL MILLS AND FOUNDARIES",
    logos: [
      pakistansteel,
      aghasteelmil,
      amrelisteelmil,
      mughalsteel,
      heavymechanicalcomplex,
      itefaqsteelmil,
    ],
  },

  {
    title: "PAINT INDUSTRIES",
    logos: [
      brightopaint,
      diamondpaint,
      happillacpaint,
      masterpaint,
      marvelpaint,
    ],
  },

  {
    title: "PAPER INDUSTRIES",
    logos: [
      bullehshah,
      alkaram,
      fazalpaper,
      Mandialipaper,
    ],
  },

  // ➕ Add other industries here later (CERAMIC, PAINT, etc.)
];

const Clients = () => {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-header">
        <h1>CLIENTS</h1>
        <div className="clients-divider"></div>
        <p>
          We have been serving to more than 100 Government, national and multinational
          companies for the last 30 Years, by providing them best quality and service.
        </p>
      </div>

      <div className="clients-container">
        {industries.map((industry, index) => (
          <div key={index} className="industry-group">
            <h2>{industry.title}</h2>
            <div className="clients-logos">
              {industry.logos.map((logo, idx) => (
                <img src={logo} alt={`Client ${idx + 1}`} key={idx} />
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
