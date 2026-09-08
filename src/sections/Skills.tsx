import React from 'react';
import { skillsData } from '../data/skills';
import { StatusBadge } from '../components/common/StatusBadge';
import { GlowCard } from '../components/common/GlowCard';
import {
  Terminal,
  Network,
  Radar,
  Activity,
  ShieldAlert,
  Globe,
  Flag,
  Code,
  Info
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Radar: <Radar className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Flag: <Flag className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>02 // TECHNICAL ABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 opacity-60" />
          
          <p className="mt-4 text-xs sm:text-sm font-mono text-zinc-400 max-w-xl text-center">
            Honest learning status indicators representing ongoing practical study and lab application. No inflated percentages.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {skillsData.map((skill) => (
            <GlowCard key={skill.id} className="flex flex-col justify-between group">
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#111e18] border border-emerald-500/30 flex items-center justify-center text-[#00ff66] group-hover:border-emerald-400 group-hover:shadow-glow-sm transition-all">
                    {iconMap[skill.icon] || <Terminal className="w-5 h-5" />}
                  </div>
                  <StatusBadge status={skill.level} size="sm" />
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-[#00ff66] transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-300/90 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Card Footer: Detail Pills */}
              {skill.statusDetail && (
                <div className="mt-4 pt-3 border-t border-emerald-500/10 text-[11px] font-mono text-zinc-400">
                  <span className="text-emerald-400/80">▸ focus:</span> {skill.statusDetail}
                </div>
              )}
            </GlowCard>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 p-4 rounded-xl bg-[#0a110e] border border-emerald-500/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>FOUNDATION: Solid fundamental understanding</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>LEARNING: Actively studying &amp; testing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
            <span>PRACTICING: Regular hands-on lab exercises</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>BASIC: Foundational syntax / usage</span>
          </div>
        </div>

      </div>
    </section>
  );
};
