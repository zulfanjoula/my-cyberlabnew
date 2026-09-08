import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-xl border border-emerald-500/15 bg-[#0e1613]/80 p-5 sm:p-6
        backdrop-blur-sm transition-all duration-300
        ${hoverEffect ? 'hover:border-emerald-500/40 hover:bg-[#111c17] hover:shadow-glow-sm hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Subtle corner indicator dot */}
      <div className="absolute top-2.5 right-2.5 w-1 h-1 rounded-full bg-emerald-500/30 group-hover:bg-emerald-400" />
      {children}
    </div>
  );
};
