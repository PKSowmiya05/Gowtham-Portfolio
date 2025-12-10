import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Acoustic Rootworm Repellent (ESP32)',
    desc: 'ESP32-based real-time system for smart sugarcane farming; low-frequency acoustic signals; ESP-NOW wireless sharing; patented solution.',
    link: 'https://docs.google.com/presentation/d/1nheBo31iTDUk0dFqHpgtkv244UfKZTjK/edit?slide=id.p1#slide=id.p1',
    image: '/assets/1.png'
  },
  {
    title: 'Biomedical Waste Segregation – Delta Robotic Arm',
    desc: 'Automated waste segregation using a delta robotic arm with vision-assisted pick-and-place and PID position control.',
    link: 'https://drive.google.com/file/d/1MPivU_lAiDWhSkrAjfPwE3ipv7cB4fwG/view',
    image: '/assets/2.png'
  },
  {
    title: 'Self-Balancing Robot (PID + LQR)',
    desc: 'Self-balancing mobile robot using PID and LQR control with sensor fusion and encoder-based odometry.',
    link: 'https://drive.google.com/file/d/15VcHYjazOQuUEEnLmVq80m0oB83SbvfL/view',
    image: '/assets/3.png'
  },
  {
    title: 'LED Matrix Display (STM32F411RE)',
    desc: '10x10 LED matrix driven by STM32F411RE with shift-register multiplexing and smooth animations.',
    image: '/assets/4.png'
  }
];

export default function Projects() {
  return (
    <section className="projects reveal container">
      <h2 className="page-title highlight">Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={i} />
        ))}
      </div>
    </section>
  );
}
