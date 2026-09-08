import React from 'react';
import { profileData } from '../data/profile';
import { TerminalFrame } from '../components/common/TerminalFrame';

export const TerminalShowcase: React.FC = () => {
  const terminalText = `zulfan@cyberlab:~$ cat goals.txt\n\n${profileData.goalsTerminal
    .map((g) => `> ${g}`)
    .join('\n')}`;

  return (
    <section className="py-14 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header Info */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>06 // LEARNING DIRECTIVE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Terminal Directive
          </h3>
        </div>

        {/* Large Decorative Terminal Frame */}
        <TerminalFrame
          title="zulfan@cyberlab"
          copyText={terminalText}
          className="border-emerald-500/30 shadow-glow-sm"
        >
          <div className="space-y-4 font-mono text-xs sm:text-sm">
            {/* Command prompt */}
            <div className="text-zinc-400">
              <span className="text-emerald-400 font-semibold">zulfan@cyberlab</span>
              <span className="text-zinc-500">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-emerald-400 font-bold">$</span> cat goals.txt
            </div>

            {/* Goals Output */}
            <div className="space-y-2 pl-3 py-1 text-zinc-200">
              {profileData.goalsTerminal.map((goal, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#00ff66] font-bold">&gt;</span>
                  <span className="text-emerald-300/95 font-medium">{goal}</span>
                </div>
              ))}
            </div>

            {/* Waiting prompt with blinking cursor */}
            <div className="pt-2 text-zinc-400 flex items-center">
              <span className="text-emerald-400 font-semibold">zulfan@cyberlab</span>
              <span className="text-zinc-500">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-emerald-400 font-bold mr-2">$</span>
              <span className="terminal-cursor" />
            </div>

            {/* Subtle Terminal Status Bar */}
            <div className="pt-4 border-t border-emerald-500/15 text-[11px] text-zinc-500 flex flex-wrap items-center justify-between gap-2">
              <span>STATUS: SHELL_ACTIVE</span>
              <span>ENVIRONMENT: ISOLATED_LAB</span>
              <span>MODE: READ_ONLY</span>
            </div>
          </div>
        </TerminalFrame>

      </div>
    </section>
  );
};
