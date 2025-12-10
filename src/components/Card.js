import React, { useRef } from 'react';
import { IconContext } from 'react-icons';
import './Card.css';

export default function Card({ title, subtitle, children, icon: Icon, className = '' }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = -y * 8; // rotateX
    const ry = x * 10; // rotateY
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    el.style.boxShadow = '0 20px 50px rgba(255,46,46,0.06)';
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
  }

  return (
    <div
      ref={ref}
      className={`cyber-card ${className} reveal`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="cyber-card-inner">
        <div className="cyber-card-header">
          {Icon ? (
            <IconContext.Provider value={{ size: '26px', className: 'card-icon' }}>
              <Icon />
            </IconContext.Provider>
          ) : null}
          <div>
            <h3 className="card-title">{title}</h3>
            {subtitle && <div className="card-sub">{subtitle}</div>}
          </div>
        </div>

        <div className="card-divider" />
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
