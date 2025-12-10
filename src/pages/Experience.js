import React from 'react';
import '../styles/Experience.css';
import { FaRobot, FaCogs } from 'react-icons/fa';

const experiences = [
  {
    company: 'e-Yantra (IIT Bombay)',
    role: 'Robotics Intern',
    location: 'IIT Bombay, Mumbai',
    duration: 'May — July 2025',
    icon: <FaRobot />,
    points: [
      'Built a self-balancing robot with PID control for real-time stability.',
      'Implemented autonomous navigation and obstacle avoidance pipelines.',
      'Applied sensor-fusion (IMU + encoders) and robust feedback control.'
    ]
  },
  {
    company: 'Pumo Technovation',
    role: 'Embedded Systems Trainee',
    location: 'Coimbatore',
    duration: 'Jul — Oct 2025',
    icon: <FaCogs />,
    points: [
      'Hands-on development with 8051, PIC, ARM Cortex and STM32 platforms.',
      'Developed firmware, hardware interfacing and debugging workflows.',
      'Used Keil, MPLAB, STM32CubeIDE and Proteus for verification and testing.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience reveal container">
      <h2 className="page-title highlight">Experience</h2>

      <div className="cards stacked">
        {experiences.map((e, idx) => (
          <article className="exp-card glass" key={idx}>
            <div className="exp-head">
              <div className="exp-icon">{e.icon}</div>
              <div className="exp-meta">
                <h3 className="exp-company">{e.company}</h3>
                <div className="exp-role">{e.role} • <span className="muted">{e.location}</span></div>
              </div>
              <div className="exp-duration muted">{e.duration}</div>
            </div>

            <div className="exp-divider" />

            <ul className="exp-list">
              {e.points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
