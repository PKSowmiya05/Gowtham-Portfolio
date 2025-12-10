import React, { useEffect, useState } from 'react';
import '../home.css';
import Card from '../components/Card';
import { FaCogs, FaAward, FaLightbulb, FaRobot, FaDownload, FaArrowRight } from 'react-icons/fa';

const typingList = [
  'Embedded Systems',
  'Robotics',
  'IoT Systems',
  'PID & Motion Control'
];

function Typing() {
  const [i, setI] = useState(0);
  const [pos, setPos] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      if (forward) {
        if (pos < typingList[i].length) setPos((p) => p + 1);
        else setForward(false);
      } else {
        if (pos > 0) setPos((p) => p - 1);
        else {
          setForward(true);
          setI((x) => (x + 1) % typingList.length);
        }
      }
    }, 120);
    return () => clearInterval(t);
  }, [i, pos, forward]);

  return <span className="typing">{typingList[i].slice(0, pos)}<span className="cursor">|</span></span>;
}

export default function Home() {
  return (
    <section className="home reveal site-padding">
      <div className="home-layout">
        <aside className="home-left">
          <div className="profile-wrap">
            <img src="/assets/profile.jpeg" alt="Gowtham" className="profile" />
          </div>

          <div className="left-buttons">
            <a className="btn futuristic" href="/assets/Gowtham_Resume.pdf"><FaDownload className="btn-icon"/>Download Resume</a>
            <a className="btn futuristic ghost" href="/projects"><FaArrowRight className="btn-icon"/>View My Work</a>
          </div>
        </aside>

        <section className="home-right">
          <h1 className="name reveal">GOWTHAM C</h1>
          <h3 className="subtitle reveal">Electronics &amp; Communication Engineering | Embedded &amp; Robotics Developer</h3>

          <div className="intro">
            <p className="intro-paragraph reveal">
              Electronics and Communication Engineering student with strong skills in <span className="highlight-red">embedded systems</span>, <span className="highlight-red">robotics</span>, and IoT development.
              Experienced in <span className="highlight-red">real-time systems</span> and <span className="highlight-red">microcontrollers</span> for sensor-based automation.
            </p>
            <p className="intro-paragraph reveal">
              Recognized at e-Yantra Innovation Challenge, IIT Bombay. Patent holder for an acoustic rootworm repellent solution and
              practical experience building autonomous systems and robotic manipulators.
            </p>
          </div>

          <div className="typing-row">
            <Typing />
          </div>

          <div className="stacks">
            <Card title="Technical Strengths" subtitle="Embedded, Control, Sensors" icon={FaCogs}>
              <p>Embedded systems, PID control, sensor fusion, firmware for microcontrollers and low-level hardware interfaces.</p>
            </Card>

            <Card title="Achievements" subtitle="Awards & Recognitions" icon={FaAward}>
              <p>e-Yantra Innovation Challenge Awardee, PALS InnoWAH Competition finalist, various innovation incubator recognitions.</p>
            </Card>

            <Card title="Patent" subtitle="Real time system for rootworm repellence" icon={FaLightbulb}>
              <p>Patent no. 202544096163 — Smart acoustic pest-control leveraging ESP32 and wireless sensing for sustainable farming.</p>
            </Card>

            <Card title="Robotics Projects" subtitle="Delta Arm, Self-balancing" icon={FaRobot}>
              <p>Worked on delta robotic manipulators, biomedical sorting systems, and self-balancing robots with control systems.</p>
            </Card>
          </div>
        </section>
      </div>
    </section>
  );
}
