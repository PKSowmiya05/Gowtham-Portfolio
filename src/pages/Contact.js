import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section className="contact reveal container">
  <h2 className="page-title highlight">Contact</h2>
      <div className="contact-grid">
        <form className="contact-form card">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
          <label>Message</label>
          <textarea placeholder="Write a message..." rows="6" />
          <button type="button" className="btn neon">Send (UI Only)</button>
        </form>

        <div className="contact-info card">
          <h3>Get in touch</h3>
          <p><strong>GOWTHAM.C</strong></p>
          <p>Email: <a href="mailto:gowtham66247@gmail.com">gowtham66247@gmail.com</a></p>
          <p>Phone: <a href="tel:+916384744186">+91 63847 44186</a></p>
          <p>Location: Coimbatore, India</p>
          <div className="small muted">Electronics & Communication Engineering student — Embedded & Robotics Developer</div>
        </div>
      </div>

      <div className="map card">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Tamil+nadu&output=embed"
          width="100%"
          height="250"
        />
      </div>
    </section>
  );
}
