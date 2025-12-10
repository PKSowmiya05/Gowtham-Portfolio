import React, { useEffect, useRef } from 'react';
import '../styles/Education.css';

export default function Education() {
  const rootRef = useRef(null);

  useEffect(() => {
    const visited = localStorage.getItem('educationVisited');
    if (rootRef.current) {
      rootRef.current.classList.add('active');
    }
    if (!visited) localStorage.setItem('educationVisited', '1');
  }, []);

  return (
    <section ref={rootRef} className="education reveal container">
      <h2 className="page-title highlight">Education</h2>

      <div className="timeline-wrapper">
        <div className="timeline-line" />

        <article className="timeline-card card zoom-in">
          <div className="dot" />
          <div className="content">
            <h3>KIT - Kalaignar Karunanidhi Institution of Technology</h3>
            <p className="muted">B.E. Electronics and Communication Engineering</p>
            <p className="muted small">Nov 2022 – May 2026 — Coimbatore, India</p>
            <p>
              Coursework highlights: Control Systems, Embedded Systems, Digital Signal Processing. Active in robotics projects, sensor
              fusion and embedded firmware development.
            </p>
          </div>
        </article>

        <article className="timeline-card card zoom-in">
          <div className="dot" />
          <div className="content">
            <h3>AKT Academy Matriculation Higher Secondary School</h3>
            <p className="muted small">Jun 2021 – Apr 2022 — Kallakurichi, India</p>
            <p>Completed higher secondary education with focus on mathematics and physics which provided foundation for engineering studies.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
