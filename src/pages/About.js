import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about reveal container about-vertical">
      <h2 className="page-title highlight">ABOUT</h2>

      {/* WHO AM I container */}
      <div className="robotics-panel reveal about-card glass">
        <div className="robotics-inner">
          <h3 className="robotics-title">WHO AM I</h3>
          <p className="who-text">
            I'm an Electronics & Robotics developer focused on embedded systems, sensor fusion, and real-time controls. I build
            production-minded firmware and prototypes with emphasis on robust hardware–software integration, low-latency control loops,
            and energy-efficient designs. Recognized at e-Yantra (IIT Bombay) for robotics work and involved in multiple autonomous systems.
          </p>

          <div className="who-meta">
          </div>
        </div>
      </div>

      {/* Technical Skills container (unique parallelogram) */}
      <div className="skills-panel reveal about-card">
        <div className="skills-tilt">
          <div className="skills-content">
            <h4 className="skills-title">TECHNICAL SKILLS</h4>

            <div className="skills-grid" role="list">
              <div className="skill-box">Firmware (C / C++)</div>
              <div className="skill-box">Sensor Fusion (IMU, Encoders)</div>

              <div className="skill-box">Control Systems (PID, LQR)</div>
              <div className="skill-box">Embedded RTOS, HW Debug</div>

              <div className="skill-box full">Protocols: UART, I2C, SPI</div>
            </div>

            <div className="skills-meta-card">
              <div className="skills-domain"><strong>Domain:</strong> Robotics • Embedded • Controls</div>
              <div className="skills-tools"><strong>Tools:</strong> STM32 • ESP32 • Keil • MATLAB</div>
            </div>

          </div>
        </div>
      </div>

      {/* Robotics / Embedded container */}
      <div className="robotics-panel reveal about-card glass">
        <div className="robotics-inner">
          <h4 className="robotics-title">ROBOTICS / EMBEDDED</h4>
          <p className="muted small">Autonomous vehicles, delta-robot arms, field-deployable sensing, and patented acoustic actuation work. Strong emphasis on robust and energy-efficient designs.</p>
        </div>
      </div>
    </section>
  );
}
