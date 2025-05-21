import React, { useState, useRef } from 'react';
import './Products.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import logo from '../assets/logo.png';

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';

const products = [
  { name: 'SOAPSTONE (TALC)', image: product1, short: 'High purity talc...', full: 'Talc is a versatile mineral...' },
  { name: 'FELDSPAR', image: product2, short: 'Alumina-rich feldspar...', full: 'Feldspar is the name given...' },
  { name: 'MAGNESITE', image: product3, short: 'Magnesium-rich mineral...', full: 'Magnesite is a magnesium carbonate...' },
  { name: 'CALCIUM CARBONATE (GCC)', image: product4, short: 'Used in construction...', full: 'Grounded Calcium Carbonate is...' },
  { name: 'GRANITE', image: product5, short: 'Hard rock...', full: 'Granite is a light-colored...' },
  { name: 'QUARTZ', image: product6, short: 'Resistant mineral...', full: 'Quartz is one of the most...' },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const form = useRef();

  const openModal = (product) => {
    setSelectedProduct(product);
    setSuccessMessage('');
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSuccessMessage('');
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      unit: formData.get("unit"),
      message: formData.get("message")
    };

    try {
      // 1️⃣ Save to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbzAK7GuX8NTblc33XOY7qrqUxUBu3LoVO45mbaLOkWS6byMUNDnV5HN4i2YMNP6fvfB/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // 2️⃣ Create PDF Invoice
      const pdf = new jsPDF();
      const img = new Image();
      img.src = logo;
      pdf.addImage(img, 'PNG', 15, 10, 40, 20);
      pdf.setFontSize(16);
      pdf.text("Invoice - Asif Chemicals", 70, 25);
      pdf.setLineWidth(0.5);
      pdf.line(15, 35, 195, 35);
      pdf.setFontSize(12);

      let y = 50;
      pdf.text(`Date: ${new Date().toLocaleDateString()}`, 15, y);
      y += 10;

      Object.entries(payload).forEach(([key, value]) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        pdf.text(`${label}:`, 15, y);
        pdf.text(`${value}`, 60, y);
        y += 10;
      });

      const pdfBlob = pdf.output('blob');
      const pdfFile = new File([pdfBlob], `Invoice_${payload.name}.pdf`, { type: 'application/pdf' });

      // 3️⃣ Send invoice via Node.js backend
      const response = await fetch('https://your-render-url.onrender.com/api/send-invoice', {
        method: 'POST',
        body: (() => {
          const f = new FormData();
          f.append('to', payload.email);
          f.append('name', payload.name);
          f.append('file', pdfFile);
          return f;
        })()
      });

      if (!response.ok) throw new Error("Backend invoice email failed");

      toast.success('✅ Order placed and invoice sent!');
      setSuccessMessage('Thank you! Your order was submitted successfully.');
      form.current.reset();
    } catch (err) {
      console.error(err);
      toast.error('❌ Failed to process order. Try again.');
    }
  };

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
              <button onClick={() => openModal(product)}>View & Order</button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="order-modal" onClick={closeModal}>
            <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={closeModal}>&times;</span>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.full}</p>
              <form ref={form} onSubmit={sendOrder}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="tel" name="phone" placeholder="Phone Number" required />
                <input type="text" name="product" value={selectedProduct.name} readOnly />
                <div className="quantity-row">
                  <input type="number" name="quantity" placeholder="Quantity" required />
                  <select name="unit" required>
                    <option value="tons">Tons</option>
                    <option value="kg">KG</option>
                    <option value="grams">Grams</option>
                  </select>
                </div>
                <textarea name="message" rows="4" placeholder="Additional Notes"></textarea>
                <button type="submit">Submit Order</button>
                {successMessage && <p className="success-text">{successMessage}</p>}
              </form>
            </div>
          </div>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default Products;
