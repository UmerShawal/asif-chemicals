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
            Asif Chemical Industries founded by Mr. Abdul Rasheed Khan in 1973. Over the years ACI has transformed from traditional Mining company to Pakistan’s largest producers of minerals producing industry. By the grace of Allah ACI has always been a leader & trend setter in Pakistan, progressing day & night to stay on top providing its excellence time & time again. We have our own mining area of talc (soap stone) over 1500 acres in Sherwan Abbottabad, KPK, Pakistan & Nangarhar, Afghanistan which are rich with best quality in the world. We have Pakistan’s largest deposit of magnesite, which have the reserves up to 100 Million Tons of top quality raw magnesite.High quality marble reserves are being maintained by us in Ziarat area, Muhammand Agency of Pakistan & being imported from Afghanistan for production of best quality of calcium carbonate for our plant.    
            As Asif Chemicals we are now in our 47th consecutive year operating as one of the leading mining and mineral processing company of Pakistan. Our key business activities are the mining and processing of industrial minerals.  The company has established mineral deposits and supplying, Talc (Soap Stone), Magnesite and Calcium carbonate. Company processes these various minerals at the main factory complex in Hattar Industrial Estate, KPK, Pakistan.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Asif Chemicals" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
