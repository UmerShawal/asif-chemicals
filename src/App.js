import React from 'react';
import './App.css';
import './styles/base.css';
import './styles/tablet.css';
import './styles/mobile.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Products from './components/Products';
import ExportMarkets from './components/ExportMarkets';
import WhyChoose from './components/WhyChoose';
import PartnerWithUs from './components/PartnerWithUs';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Products />
     <ExportMarkets />
      <Services />
      <WhyChoose />
      <PartnerWithUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
