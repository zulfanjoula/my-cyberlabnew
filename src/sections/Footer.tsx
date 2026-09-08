import React from 'react';
import { profileData } from '../data/profile';
import { Terminal, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-500/15 bg-[#050807] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
              <Terminal className="w-4 h-4 text-[#00ff66]" />
              <span>{profileData.name}</span>
            </div>
            <div className="text-xs font-mono text-zinc-400">
              {profileData.role}
            </div>
            <div className="text-xs font-mono text-emerald-400/80">
              Learning • Practicing • Building
            </div>
          </div>

          {/* Terminal Exit Message */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1 font-mono text-xs">
            <div className="px-3 py-1 rounded bg-[#0b1310] border border-emerald-500/20 text-[#00ff66] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse-subtle" />
              <span>&gt; connection closed successfully.</span>
            </div>
            <div className="text-[11px] text-zinc-500 pt-1">
              &copy; {currentYear} {profileData.name}. All educational rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
