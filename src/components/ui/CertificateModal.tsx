import React, { useState } from 'react';
import { Certificate } from '../../types';
import { Modal } from '../common/Modal';
import { ExternalLink, Calendar, Building, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  const [imgError, setImgError] = useState(false);

  if (!certificate) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="CERTIFICATE VERIFICATION & DETAILS"
      maxWidth="max-w-5xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Certificate Image Viewport */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full relative rounded-xl overflow-hidden border border-emerald-500/25 bg-[#090e0c] shadow-lg group">
            <div className="aspect-[4/3] w-full flex items-center justify-center p-2 bg-[#060a08]">
              <img
                src={imgError ? '/images/certificates/cert-placeholder.svg' : certificate.image}
                alt={certificate.title}
                onError={() => setImgError(true)}
                className="max-h-full max-w-full object-contain rounded transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="px-3 py-2 bg-[#0a100d] border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Award className="w-3.5 h-3.5" />
                <span>{certificate.category}</span>
              </span>
              <span className="text-zinc-500 truncate max-w-[200px]">
                {certificate.image}
              </span>
            </div>
          </div>

          <div className="mt-2 text-[11px] font-mono text-emerald-400/80 text-center flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>Verified Coursework &amp; Credential</span>
          </div>
        </div>

        {/* Right Column: Structured Information */}
        <div className="lg:col-span-5 flex flex-col space-y-5">
          <div>
            <span className="inline-block px-2.5 py-0.5 mb-2 rounded font-mono text-xs uppercase tracking-wider bg-emerald-950/60 text-[#00ff66] border border-emerald-500/30">
              CERTIFICATE
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
              {certificate.title}
            </h4>
          </div>

          {/* Issuer & Date Metadata */}
          <div className="space-y-2.5 p-3.5 rounded-lg bg-[#090f0c] border border-emerald-500/15 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <Building className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-zinc-500">Issued by:</span>
              <span className="text-zinc-200 font-semibold">{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Calendar className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-zinc-500">Date:</span>
              <span className="text-zinc-200">{certificate.date}</span>
            </div>
          </div>

          {/* Detailed Reflection */}
          <div>
            <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              About This Certificate:
            </h5>
            <div className="text-sm text-zinc-300 leading-relaxed font-sans space-y-3 bg-[#0a110e]/70 p-4 rounded-lg border border-emerald-500/10">
              <p>{certificate.fullDescription}</p>
            </div>
          </div>

          {/* Topics Covered */}
          {certificate.skillsCovered && certificate.skillsCovered.length > 0 && (
            <div>
              <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Key Topics & Tools:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skillsCovered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0f1915] border border-emerald-500/20 text-xs font-mono text-emerald-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#00ff66]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* External Verification CTA */}
          {certificate.credentialUrl && (
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href={certificate.credentialUrl}
                target="_blank"
                icon={<ExternalLink className="w-4 h-4" />}
                className="w-full"
              >
                Verify Certificate
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
