import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  // Reveal observer: run on mount and whenever the route changes so new page elements are observed
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.12 }
    );

    // Observe current reveal elements
    const els = Array.from(document.querySelectorAll('.reveal'));
    els.forEach((el) => {
      // If element already visible (e.g., resumed), add active immediately
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('active');
      }
      io.observe(el);
    });

    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-root">
      <Navbar />
      <ScrollToTop />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
