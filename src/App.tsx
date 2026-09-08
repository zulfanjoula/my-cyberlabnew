import React, { useState, useEffect } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Certificates } from './sections/Certificates';
import { Journey } from './sections/Journey';
import { TerminalShowcase } from './sections/TerminalShowcase';
import { Philosophy } from './sections/Philosophy';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { BackgroundEffects } from './components/common/BackgroundEffects';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070a09] text-[#e2e8f0] cyber-grid overflow-x-hidden selection:bg-emerald-500/20 selection:text-[#00ff66]">
      {/* Background Effects: Mouse-following green glow + interactive subtle grid */}
      <BackgroundEffects />

      {/* Ambient Cyber Radial Glows */}
      <div className="cyber-radial-glow fixed inset-0 pointer-events-none z-0" />
      <div className="cyber-radial-glow-bottom fixed inset-0 pointer-events-none z-0" />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Page Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Journey />
          <TerminalShowcase />
          <Philosophy />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
