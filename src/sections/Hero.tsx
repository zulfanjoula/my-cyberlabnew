import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { Button } from '../components/common/Button';
import { TerminalFrame } from '../components/common/TerminalFrame';
import { ArrowRight, Award, Shield, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [profileImgError, setProfileImgError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-[#00ff66]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Personal Branding & Introduction */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Small Terminal Status */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-md bg-[#0a120e] border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse-subtle" />
              <span>{profileData.systemStatus}</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <span className="block">{profileData.name}</span>
              </h1>
              
              {/* Supporting Headline */}
              <p className="mt-3 text-lg sm:text-xl font-medium text-emerald-300/90 leading-relaxed font-sans">
                {profileData.supportingHeadline}
              </p>
            </div>

            {/* Personal Branding Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-sans">
              {profileData.brandingParagraph}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('projects')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollToSection('certificates')}
                icon={<Award className="w-4 h-4" />}
              >
                View Certificates
              </Button>
            </div>

            {/* Secondary Small Status */}
            <div className="pt-3 border-t border-emerald-500/15 flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-glow-sm" />
                <span className="font-semibold text-zinc-300">CURRENTLY LEARNING:</span>
                <span className="text-emerald-400 font-medium">{profileData.currentlyLearning}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Profile Image Area */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Ambient Green Halo behind image frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-[#00ff66]/15 to-teal-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Profile Card Frame */}
              <div className="relative rounded-2xl border border-emerald-500/30 bg-[#0d1612] p-4 sm:p-5 shadow-2xl backdrop-blur-md">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/15 font-mono text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <Shield className="w-3.5 h-3.5" />
                    LAB IDENTITY
                  </span>
                  <span className="text-zinc-500">ID: SEC-STU-2026</span>
                </div>

                {/* Profile Image Viewport */}
                <div className="relative aspect-[3/4] sm:aspect-square w-full rounded-xl overflow-hidden border border-emerald-500/25 bg-[#080d0b] flex items-center justify-center">
                  <img
                    src={profileData.profileImage}
                    alt={`${profileData.name} - Profile`}
                    onError={(e) => {
                      // Fallback if path differs
                      (e.target as HTMLImageElement).src = '/images/profile.svg';
                    }}
                    className="w-full h-full object-cover object-top rounded-xl transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle scanline line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent pointer-events-none" />
                </div>

                {/* Bottom Frame Info */}
                <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
                    <span className="font-semibold text-white">{profileData.name}</span>
                  </div>
                  <span className="text-emerald-400/90 text-[11px]">Linux • Labs • Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO TERMINAL SECTION (Authentic, Clean Terminal UI) */}
        <div className="mt-14 lg:mt-18">
          <TerminalFrame
            title="zulfan@cyberlab: ~/portfolio"
            copyText={`whoami\n${profileData.name} — Cybersecurity Student\n\nskills\nLinux\nNetworking\nNmap\nWireshark\nBurp Suite\nWeb Security\nCTF\nPython\n\nstatus\nlearning...`}
          >
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {/* Prompt 1 */}
              <div>
                <div className="text-emerald-500/80">
                  ┌──[<span className="text-emerald-300 font-medium">zulfan@cyberlab</span>]─[<span className="text-zinc-400">~/portfolio</span>]
                </div>
                <div className="text-zinc-300 flex items-center gap-2 mt-0.5">
                  <span className="text-emerald-500">└─$</span>
                  <span className="text-white font-semibold">whoami</span>
                </div>
                <div className="mt-1.5 pl-4 text-emerald-400 font-medium flex items-center gap-2">
                  <span className="text-white font-bold">{profileData.name}</span>
                  <span className="text-zinc-500">—</span>
                  <span>Cybersecurity Student</span>
                </div>
              </div>

              {/* Prompt 2 */}
              <div>
                <div className="text-zinc-300 flex items-center gap-2">
                  <span className="text-emerald-500">└─$</span>
                  <span className="text-white font-semibold">skills</span>
                </div>
                <div className="mt-2 pl-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-zinc-300">
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Linux
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Networking
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Nmap
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Wireshark
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Burp Suite
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Web Security
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> CTF
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-200">
                    <ChevronRight className="w-3 h-3 text-emerald-400" /> Python
                  </span>
                </div>
              </div>

              {/* Prompt 3 */}
              <div>
                <div className="text-zinc-300 flex items-center gap-2">
                  <span className="text-emerald-500">└─$</span>
                  <span className="text-white font-semibold">status</span>
                </div>
                <div className="mt-1.5 pl-4 flex items-center gap-2 text-emerald-400">
                  <span>learning...</span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </TerminalFrame>
        </div>

      </div>
    </section>
  );
};
