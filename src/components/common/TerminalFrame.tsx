import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalFrameProps {
  title?: string;
  children: React.ReactNode;
  copyText?: string;
  className?: string;
  minHeight?: string;
}

export const TerminalFrame: React.FC<TerminalFrameProps> = ({
  title = 'student@cyberlab: ~',
  children,
  copyText,
  className = '',
  minHeight = 'auto'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyText) return;
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-xl overflow-hidden border border-emerald-500/20 bg-[#0c120f]/90 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-emerald-500/35 hover:shadow-glow-sm ${className}`}
      style={{ minHeight }}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090d0b] border-b border-emerald-500/15 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/70 border border-rose-600/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70 border border-amber-600/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-600/50" />
          <span className="ml-2 text-xs font-mono text-emerald-400/80 flex items-center gap-1.5 font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
            {title}
          </span>
        </div>

        {copyText && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors px-2 py-0.5 rounded hover:bg-emerald-950/40"
            title="Copy terminal content"
            aria-label="Copy terminal content"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#00ff66]" />
                <span className="text-[#00ff66]">copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-sm leading-relaxed text-zinc-300">
        {children}
      </div>
    </div>
  );
};
