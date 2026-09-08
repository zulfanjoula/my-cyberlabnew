import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { GlowCard } from '../components/common/GlowCard';
import { Button } from '../components/common/Button';
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageSquareCode
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>07 // TRANSMISSION &amp; NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 opacity-60" />
          
          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-xl text-center font-sans leading-relaxed">
            {profileData.contactIntro}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* GitHub Card */}
          <GlowCard className="flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#111c16] border border-emerald-500/30 flex items-center justify-center text-[#00ff66] mb-4 group-hover:border-emerald-400 group-hover:shadow-glow-sm transition-all">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-[#00ff66] transition-colors">
                GitHub
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans">
                Explore repository write-ups, lab code, notes, and automation scripts.
              </p>
              <div className="mt-3 text-xs font-mono text-emerald-400/80 truncate">
                {profileData.socials.github.replace('https://', '')}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/15">
              <Button
                variant="secondary"
                size="sm"
                href={profileData.socials.github}
                target="_blank"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                className="w-full text-xs"
              >
                Visit GitHub
              </Button>
            </div>
          </GlowCard>

          {/* LinkedIn Card */}
          <GlowCard className="flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#111c16] border border-emerald-500/30 flex items-center justify-center text-[#00ff66] mb-4 group-hover:border-emerald-400 group-hover:shadow-glow-sm transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-[#00ff66] transition-colors">
                LinkedIn
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans">
                Connect professionally, share learning milestones, and network with peers.
              </p>
              <div className="mt-3 text-xs font-mono text-emerald-400/80 truncate">
                {profileData.socials.linkedin.replace('https://', '').replace('www.', '')}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/15">
              <Button
                variant="secondary"
                size="sm"
                href={profileData.socials.linkedin}
                target="_blank"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                className="w-full text-xs"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </GlowCard>

          {/* Direct Email Card */}
          <GlowCard className="flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#111c16] border border-emerald-500/30 flex items-center justify-center text-[#00ff66] mb-4 group-hover:border-emerald-400 group-hover:shadow-glow-sm transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-[#00ff66] transition-colors">
                Email
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans">
                Send a direct message for discussions, study groups, or opportunities.
              </p>
              <div className="mt-3 text-xs font-mono text-emerald-400/80 truncate">
                {profileData.socials.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/15 flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                href={`mailto:${profileData.socials.email}`}
                icon={<Mail className="w-3.5 h-3.5" />}
                className="flex-1 text-xs"
              >
                Send Email
              </Button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#0e1713] border border-emerald-500/30 text-zinc-300 hover:text-[#00ff66] hover:border-emerald-400 transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#00ff66]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </GlowCard>

        </div>

      </div>

      </div>
    </section>
  );
};
