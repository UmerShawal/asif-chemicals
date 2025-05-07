import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nps6eqi',
      'template_mslk2lk',
      form.current,
      '-V8f-h18qbK49FaF1'
    )
      .then(() => {
        toast.success('✅ Message sent successfully!');
        setStatusMessage('✅ Your message was sent successfully.');
        form.current.reset();
      })
      .catch(() => {
        toast.error('❌ Failed to send message. Please try again.');
        setStatusMessage('❌ Message failed to send. Please try again.');
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you. Send us a message below.</p>

          <div className="contact-content">
            {/* Left: Contact Form */}
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Your Name" required />
              <input type="email" name="from_email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
              {/* Inline message */}
              {statusMessage && <p className="form-status">{statusMessage}</p>}
            </form>

            {/* Right: Contact Info */}
            <div className="contact-info">
              <p><FaEnvelope className="contact-icon" /> <strong>Email:</strong> shalikhokhar302@gmail.com</p>
              <p><FaPhoneAlt className="contact-icon" /> <strong>Phone:</strong> +92 300 1234567</p>
              <p><FaMapMarkerAlt className="contact-icon" /> <strong>Address:</strong> Lahore, Pakistan</p>
              <p>We respond to all queries within 24 hours.</p>

              {/* Working Google Map */}
              <div className="map-container">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27214.183604805254!2d74.30846037004161!3d31.520369616482732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1683617328389!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: '0', borderRadius: '8px', marginTop: '20px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001234567"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
};

export default Contact;
