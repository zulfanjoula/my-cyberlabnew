import React from 'react';
import { journeyMilestones } from '../data/journey';
import { GlowCard } from '../components/common/GlowCard';
import { Compass, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>05 // PROGRESSION &amp; PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Cybersecurity Journey
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 opacity-60" />
          
          <p className="mt-4 text-xs sm:text-sm font-mono text-zinc-400 max-w-xl text-center">
            A step-by-step roadmap from early curiosities to practical lab execution and continuous technical mastery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500/80 via-emerald-500/40 to-teal-500/20 shadow-glow-sm" />

          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12">
            {journeyMilestones.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-0`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#09110d] border-2 border-[#00ff66] flex items-center justify-center text-[#00ff66] font-mono text-xs font-bold shadow-glow-sm">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Spacer for the opposite side on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Milestone Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <GlowCard className="border-emerald-500/20 bg-[#0d1612]">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                          PHASE 0{step.stepNumber}
                        </span>
                        
                        {step.status === 'completed' && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-300">
                            <CheckCircle className="w-3 h-3 text-[#00ff66]" /> Done
                          </span>
                        )}
                        {step.status === 'in-progress' && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300">
                            <Clock className="w-3 h-3 text-amber-400" /> In Progress
                          </span>
                        )}
                        {step.status === 'upcoming' && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-300">
                            <Sparkles className="w-3 h-3 text-cyan-400" /> Next
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-zinc-100">{step.title}</h3>
                      <h4 className="text-xs font-mono text-zinc-400 mt-0.5">{step.subtitle}</h4>

                      <p className="mt-3 text-xs sm:text-sm text-zinc-300/90 leading-relaxed font-sans">
                        {step.description}
                      </p>

                      {/* Key Topics Covered */}
                      {step.keyTopics && (
                        <div className="mt-4 pt-3 border-t border-emerald-500/10 flex flex-wrap gap-1.5">
                          {step.keyTopics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-[#09110d] border border-emerald-500/20 text-[11px] font-mono text-emerald-400"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlowCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
