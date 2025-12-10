import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer footer-premium">
      <div className="footer-inner container">
        <div className="col footer-left">
          <div className="footer-name">GOWTHAM C</div>
          <a className="contact-link" href="mailto:gowtham66247@gmail.com">gowtham66247@gmail.com</a>
          <a className="contact-link" href="tel:+916384744186">+91 63847 44186</a>
          <div className="footer-location">Coimbatore, India</div>
        </div>

        <nav className="col footer-center" aria-label="Footer navigation">
          <div className="footer-nav-grid">
            <Link to="/" className="footer-nav-item">Home</Link>
            <Link to="/about" className="footer-nav-item">About</Link>

            <Link to="/education" className="footer-nav-item">Education</Link>
            <Link to="/experience" className="footer-nav-item">Experience</Link>

            <Link to="/projects" className="footer-nav-item">Projects</Link>
            <Link to="/contact" className="footer-nav-item">Contact</Link>
          </div>
        </nav>

        <div className="col footer-right" aria-hidden="false">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/gowtham-chandrasekaran/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="small muted">© {new Date().getFullYear()} GOWTHAM C — All rights reserved</div>
      </div>
    </footer>
  );
}
