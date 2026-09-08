import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { StatusBadge } from '../components/common/StatusBadge';
import { GlowCard } from '../components/common/GlowCard';
import { ProjectModal } from '../components/ui/ProjectModal';
import { ArrowUpRight, FolderGit2, Cpu, Wrench } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>03 // HANDS-ON LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects &amp; Labs
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 opacity-60" />
          
          <p className="mt-4 text-xs sm:text-sm font-mono text-zinc-400 max-w-xl text-center">
            Educational labs and technical practice environments. Designed to document methodology and real hands-on experimentation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <GlowCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col justify-between group cursor-pointer border-emerald-500/20"
            >
              <div>
                {/* Top: Category & Status */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} size="sm" />
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-[#00ff66] transition-colors flex items-center justify-between">
                  <span>{project.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00ff66] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-300/90 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tools List */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#0b1310] border border-emerald-500/25 text-xs font-mono text-emerald-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: View Details CTA */}
              <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                  View Lab Details &amp; Objectives
                </span>
                <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
                  &gt;&gt;
                </span>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Modal for Lab Details */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
