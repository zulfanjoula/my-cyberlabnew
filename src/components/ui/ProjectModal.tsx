import React from 'react';
import { Project } from '../../types';
import { Modal } from '../common/Modal';
import { StatusBadge } from '../common/StatusBadge';
import { Target, Lightbulb, Terminal, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`LAB DETAILS // ${project.category}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Title & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-500/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              {project.category}
            </span>
            <h4 className="text-2xl font-bold text-zinc-100">{project.name}</h4>
          </div>
          <StatusBadge status={project.status} size="md" />
        </div>

        {/* Overview */}
        <div>
          <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            Lab Overview
          </h5>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans bg-[#090e0c] p-4 rounded-lg border border-emerald-500/15">
            {project.description}
          </p>
        </div>

        {/* Tools Used */}
        <div>
          <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            Tools & Technologies Involved
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-[#0f1b16] border border-emerald-500/30 text-xs font-mono text-emerald-300 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        {project.objectives && project.objectives.length > 0 && (
          <div>
            <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#00ff66]" />
              Learning Objectives
            </h5>
            <ul className="space-y-2 text-sm text-zinc-300">
              {project.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-mono text-xs mt-1">▸</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Takeaways */}
        {project.keyTakeaways && project.keyTakeaways.length > 0 && (
          <div>
            <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              Key Takeaways & Lessons
            </h5>
            <ul className="space-y-2 text-sm text-zinc-300">
              {project.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-mono text-xs mt-1">✓</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Commands Practiced */}
        {project.commandsPracticed && project.commandsPracticed.length > 0 && (
          <div>
            <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Key Syntax & Commands Practiced
            </h5>
            <div className="bg-[#080d0b] border border-emerald-500/20 rounded-lg p-3 space-y-1.5 font-mono text-xs text-emerald-300">
              {project.commandsPracticed.map((cmd, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="text-zinc-200">{cmd}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Educational Lab Notice */}
        {project.labNotes && (
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-zinc-400">
            <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>{project.labNotes}</span>
          </div>
        )}
      </div>
    </Modal>
  );
};
