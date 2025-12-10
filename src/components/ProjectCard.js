import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import PropTypes from 'prop-types';
import '../styles/Projects.css';

export default function ProjectCard({ p, index }) {
  const { title, desc, link, image } = p || {};

  // derive bullets based on title as before
  const bullets = title.includes('Rootworm')
    ? [
        'ESP32, acoustic driver, low-frequency design',
        'ESP-NOW wireless comms for field units',
        'Energy-efficient waveform generation'
      ]
    : title.includes('Delta')
    ? ['Delta kinematics and inverse kinematics', 'Camera-based part detection and servo control']
    : title.includes('Self-Balancing')
    ? ['IMU sensor fusion, encoder feedback', 'PID & LQR controllers and obstacle avoidance']
    : title.includes('LED Matrix')
    ? ['STM32F411RE, 74HC595 shift-register multiplexing', 'Bitwise buffers and animation timing']
    : [];

  return (
    <article className={`project-card reveal`} style={{ ['--delay']: `${index * 140}ms` }}>
      <div className="project-split">
        <div className="project-media" aria-hidden={image ? 'false' : 'true'}>
          {image ? (
            <img src={image} alt={title} className="project-image" />
          ) : (
            <div className="media-layer">
              <div className="media-accent">{title.split(' ')[0]}</div>
            </div>
          )}
        </div>

        <div className="project-info">
          <div>
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{desc}</p>

            {bullets && bullets.length > 0 && (
              <ul className="project-bullets">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="project-links">
            <a className="view-btn" href={link || '#'} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="view-icon" />
              View
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  p: PropTypes.object.isRequired,
  index: PropTypes.number
};

