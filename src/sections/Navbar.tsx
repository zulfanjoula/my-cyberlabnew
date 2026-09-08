import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CERTIFICATES', href: '#certificates' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b09]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0e1713] border border-emerald-500/40 flex items-center justify-center text-[#00ff66] shadow-glow-sm group-hover:border-emerald-400 group-hover:shadow-glow-neon transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-zinc-100 tracking-wider flex items-center gap-1.5">
              <span>ZULFAN JAULA</span>
              <span className="text-xs px-1.5 py-0.2 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                STUDENT
              </span>
            </span>
            <span className="text-[10px] font-mono text-zinc-500 tracking-tight">
              &gt; learning &amp; defense
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-1.5 font-mono text-xs tracking-wider transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-[#00ff66] font-semibold bg-emerald-950/40 border border-emerald-500/30 shadow-glow-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-emerald-950/20'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff66] mr-1.5 animate-pulse-subtle" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Status indicator on desktop */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1512] border border-emerald-500/25 text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-glow-sm animate-pulse-subtle" />
          <span className="text-zinc-400">status:</span>
          <span className="text-emerald-400 font-medium">active_learning</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-emerald-500/20 bg-[#0d1512] text-zinc-300 hover:text-white hover:border-emerald-500/50 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#080d0b]/95 border-b border-emerald-500/25 backdrop-blur-xl transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-4 py-2 rounded-lg font-mono text-sm tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-950/60 text-[#00ff66] border border-emerald-500/40 font-semibold shadow-glow-sm'
                      : 'text-zinc-300 hover:bg-emerald-950/20 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />}
                </a>
              );
            })}
            
            <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs font-mono text-zinc-400 px-3">
              <span>● CURRENTLY LEARNING</span>
              <span className="text-emerald-400">Cybersecurity &amp; Networking</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
