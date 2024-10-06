import React, { useCallback } from 'react';
import './App.css';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';
import { loadSlim } from "@tsparticles/slim";
import { ToastContainer } from 'react-toastify';
import Certifications from './components/Certifications';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Hero />
      <Experience/>
      <Education />
      <Skills />
      <Projects />
      <Certifications/>
      <ToastContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;