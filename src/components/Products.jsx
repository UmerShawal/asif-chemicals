import React, { useState } from 'react';
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
    short: 'High purity talc used in paint, ceramics, rubber and plastics.',
    full: 'Talc is a versatile mineral, widely used in various industrial applications...'
  },
  {
    name: 'FELDSPAR',
    image: product2,
    short: 'Alumina-rich feldspar used in glass and ceramics.',
    full: 'Feldspar is the name given to a group of minerals distinguished...'
  },
  {
    name: 'MAGNESITE',
    image: product3,
    short: 'Magnesium-rich mineral for refractory and fertilizer.',
    full: 'Magnesite is a magnesium carbonate mineral with a chemical composition...'
  },
  {
    name: 'CALCIUM CARBONATE (GCC)',
    image: product4,
    short: 'Used in construction, cement, ceramics, paints.',
    full: 'Grounded Calcium Carbonate is processed through high purity calcite ores...'
  },
  {
    name: 'GRANITE',
    image: product5,
    short: 'Hard rock with coarse grains used in construction.',
    full: 'Granite is a light-colored plutonic rock found throughout...'
  },
  {
    name: 'QUARTZ',
    image: product6,
    short: 'Resistant mineral used in sand, glass, and electronics.',
    full: 'Quartz is one of the most common minerals in the Earth’s crust...'
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpen = (product) => setSelectedProduct(product);
  const handleClose = () => setSelectedProduct(null);

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index} onClick={() => handleOpen(product)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.short}</p>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="product-modal" onClick={handleClose}>
            <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={handleClose}>&times;</span>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.full}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
