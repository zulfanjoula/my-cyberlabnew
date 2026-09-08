import React from 'react';
import { profileData } from '../data/profile';
import { Quote, Sparkles, Terminal } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-[#0e1713] via-[#09110d] to-[#070b09] p-8 sm:p-12 overflow-hidden shadow-glow-sm">
          
          {/* Subtle Cyber Accents in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#00ff66]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#111e17] border border-emerald-500/40 flex items-center justify-center text-[#00ff66] shadow-glow-sm">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {profileData.philosophyTitle}
            </h3>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-sans leading-relaxed">
              &ldquo;{profileData.philosophyText}&rdquo;
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              <span>DEDICATED TO HONEST PROGRESSION &amp; PRACTICAL MASTERY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
