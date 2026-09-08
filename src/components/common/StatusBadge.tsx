import React from 'react';
import { SkillLevel, ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: SkillLevel | ProjectStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm' }) => {
  const getStyles = () => {
    switch (status) {
      case 'FOUNDATION':
        return {
          bg: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30',
          dot: 'bg-cyan-400',
          label: 'FOUNDATION'
        };
      case 'LEARNING':
        return {
          bg: 'bg-amber-950/40 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400',
          label: 'LEARNING'
        };
      case 'PRACTICING':
      case 'PRACTICE':
        return {
          bg: 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40 shadow-glow-sm',
          dot: 'bg-[#00ff66]',
          label: status === 'PRACTICE' ? 'PRACTICE' : 'PRACTICING'
        };
      case 'BASIC':
        return {
          bg: 'bg-slate-800/60 text-slate-300 border-slate-600/40',
          dot: 'bg-slate-400',
          label: 'BASIC'
        };
      case 'COMPLETED':
        return {
          bg: 'bg-green-950/50 text-green-300 border-green-500/40',
          dot: 'bg-green-400',
          label: 'COMPLETED'
        };
      default:
        return {
          bg: 'bg-zinc-800 text-zinc-300 border-zinc-700',
          dot: 'bg-zinc-400',
          label: status
        };
    }
  };

  const { bg, dot, label } = getStyles();
  const padding = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full border transition-colors ${bg} ${padding}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse-subtle`} />
      <span>{label}</span>
    </span>
  );
};
