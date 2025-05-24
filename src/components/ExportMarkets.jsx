import React from 'react';
import './ExportMarkets.css';
import { motion } from 'framer-motion';

import southAsia from '../assets/flags/south-asia.jpeg';
import middleEast from '../assets/flags/middle-east.png';
import centralAsia from '../assets/flags/central-asia.png';
import africa from '../assets/flags/africa.jpeg';
import europe from '../assets/flags/europe.jpeg';
import northAmerica from '../assets/flags/north-america.png';

const markets = [
  { region: 'South Asia', flag: southAsia },
  { region: 'Middle East', flag: middleEast },
  { region: 'Central Asia', flag: centralAsia },
  { region: 'Africa', flag: africa },
  { region: 'Europe', flag: europe },
  { region: 'North America', flag: northAmerica },
];

const ExportMarkets = () => {
  return (
    <section className="export-section" id="export">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Export Markets 🌍
        </motion.h2>

        <motion.p
          className="intro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Silverstone Enterprises proudly exports to these global regions. We ensure <strong>safe packaging</strong>,
          <strong> efficient documentation</strong>, and <strong>reliable logistics</strong>.
        </motion.p>

        <div className="export-grid">
          {markets.map((market, index) => (
            <motion.div
              className="export-card"
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={market.flag} alt={market.region} />
              <h4>{market.region}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportMarkets;
