import React from 'react';
import './Products.css';

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';

const products = [
  {
    name: 'SOAPSTONE (TALC)',
    image: product1,
    short: 'Sourced from 1,500+ acres in Sherwan (KPK) and Nangarhar (Afghanistan). Renowned for brightness, softness, and purity.',
    long: 'Applications: Cosmetics, pharmaceuticals, ceramics, paints, plastics, rubber.'
  },
  {
    name: 'MAGNESITE',
    image: product2,
    short: 'We operate Pakistan’s largest reserves — 100+ million tons of high-grade magnesite.',
    long: 'Applications: Refractory, steel manufacturing, and chemical industries.'
  },
  {
    name: 'CALCIUM CARBONATE (GCC)',
    image: product3,
    short: 'Marble sourced from Ziarat & Muhammad Agency (Pakistan) and imports from Afghanistan for high-purity processing.',
    long: 'Applications: Paper, paints, plastics, food-grade uses.'
  },
  {
    name: 'FELDSPAR',
    image: product4,
    short: 'Supplying potash and soda feldspar processed to meet strict industry standards.',
    long: 'Applications: Glass manufacturing, ceramics, tiles, and enamel.'
  },
  {
    name: 'GRANITE',
    image: product5,
    short: 'Natural granite blocks and slabs known for durability, beauty, and strength.',
    long: 'Applications: Countertops, flooring, cladding, monuments, construction.'
  },
  {
    name: 'QUARTZ',
    image: product6,
    short: 'Highly resistant mineral, ideal for industrial and electronic use.',
    long: 'Applications: Sand, glass, electronics, and precision optics.'
  },
];

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.short}</p>
              <p className="product-app">{product.long}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
