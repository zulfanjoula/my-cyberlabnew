import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  target,
  rel,
  download
}) => {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-mono',
    md: 'px-5 py-2.5 text-sm font-mono',
    lg: 'px-6 py-3 text-base font-mono'
  };

  const variantStyles = {
    primary:
      'bg-emerald-500 hover:bg-[#00ff66] text-[#06100b] font-semibold shadow-glow-sm hover:shadow-glow-neon border border-emerald-400/50 hover:border-[#00ff66]',
    secondary:
      'bg-[#101b16] hover:bg-[#14241d] text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 hover:border-emerald-500/60 shadow-sm',
    outline:
      'bg-transparent hover:bg-emerald-950/30 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400',
    ghost:
      'bg-transparent hover:bg-emerald-950/30 text-zinc-300 hover:text-emerald-300'
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-95 select-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-[#070a09]';

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClass}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
