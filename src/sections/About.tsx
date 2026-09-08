import React from 'react';
import { profileData } from '../data/profile';
import { TerminalFrame } from '../components/common/TerminalFrame';
import { GlowCard } from '../components/common/GlowCard';
import { BookOpen, Cpu, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>01 // PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 opacity-60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Professional Narrative & Core Focus */}
          <div className="lg:col-span-7 space-y-6">
            <GlowCard hoverEffect={false} className="border-emerald-500/20">
              <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>Student Philosophy &amp; Journey</span>
              </h3>
              
              <div className="space-y-4 text-zinc-300 font-sans leading-relaxed text-sm sm:text-base">
                <p>{profileData.aboutIntro}</p>
                <p>
                  My goal isn’t to claim unwarranted titles or pretend to be a veteran penetration tester. Instead, I focus on authentic growth: setting up virtual machine environments, dissecting network packets, learning Bash utilities, and solving Capture The Flag challenges that force me to research, think, and troubleshoot systematically.
                </p>
                <p>
                  Every concept I explore—whether it is IPv4 subnetting, HTTP headers, or service enumeration—is backed by real lab notes, hands-on practice, and structured learning programs.
                </p>
              </div>

              {/* Core Tenets Badges */}
              <div className="mt-6 pt-5 border-t border-emerald-500/15 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Linux First</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Networking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Hands-on Labs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Ethics &amp; Defense</span>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Right: Polished Terminal Card */}
          <div className="lg:col-span-5">
            <TerminalFrame
              title="zulfan@cyberlab: ~"
              copyText={`zulfan@cyberlab:~$ cat about.txt\n\n${profileData.aboutTerminal.join('\n')}`}
            >
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="text-zinc-400">
                  <span className="text-emerald-400 font-semibold">zulfan@cyberlab</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-emerald-400 font-bold">$</span> cat about.txt
                </div>

                <div className="pl-2 pt-2 space-y-2 border-l border-emerald-500/30 ml-1">
                  {profileData.aboutTerminal.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-200">
                      <span className="text-[#00ff66] font-bold">›</span>
                      <span className="text-emerald-300 font-medium">{line}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-emerald-500/15 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span>FILE: about.txt [RO]</span>
                  <span>LINES: 5 | ENCODING: UTF-8</span>
                </div>
              </div>
            </TerminalFrame>
          </div>

        </div>

      </div>
    </section>
  );
};
