import React, { useState } from 'react';
import { certificatesData } from '../data/certificates';
import { Certificate, CertificateCategory } from '../types';
import { CertificateModal } from '../components/ui/CertificateModal';
import { Button } from '../components/common/Button';
import { Award, Calendar, Building, Eye, Filter } from 'lucide-react';

const categories: ('All' | CertificateCategory)[] = [
  'All',
  'Cybersecurity',
  'Networking',
  'Linux',
  'Web Security',
  'Programming'
];

interface CertificateCardProps {
  certificate: Certificate;
  onOpenModal: (cert: Certificate) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onOpenModal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onOpenModal(certificate)}
      className="group relative flex flex-col justify-between rounded-xl border border-emerald-500/20 bg-[#0d1512] overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-glow-sm hover:-translate-y-1.5 cursor-pointer"
    >
      <div>
        {/* Certificate Image Thumbnail - Aspect ratio preserved & contained */}
        <div className="relative w-full aspect-[4/3] bg-[#070b09] p-3 flex items-center justify-center border-b border-emerald-500/15 overflow-hidden">
          <img
            src={imgError ? '/images/certificates/cert-placeholder.svg' : certificate.image}
            alt={certificate.title}
            onError={() => setImgError(true)}
            className="max-h-full max-w-full object-contain rounded transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
            loading="lazy"
          />
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#09110e]/90 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
            {certificate.issuer}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-[#00ff66] transition-colors line-clamp-2">
            {certificate.title}
          </h3>

          {/* Issuer & Date Metadata */}
          <div className="mt-2.5 space-y-1 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 truncate">
              <Building className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="text-zinc-500">Issuer:</span>
              <span className="text-zinc-300 truncate">{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="text-zinc-500">Date:</span>
              <span className="text-zinc-300">{certificate.date}</span>
            </div>
          </div>

          {/* Short Description */}
          <p className="mt-3 text-xs sm:text-sm text-zinc-300/80 line-clamp-2 font-sans leading-relaxed">
            {certificate.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 pb-5 pt-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={(e) => {
            e?.stopPropagation();
            onOpenModal(certificate);
          }}
          icon={<Eye className="w-3.5 h-3.5" />}
          className="w-full text-xs"
        >
          View Certificate Details
        </Button>
      </div>
    </div>
  );
};

export const Certificates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | CertificateCategory>('All');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const filteredCertificates = certificatesData.filter((cert) => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="certificates" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1713] border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
            <span>04 // CREDENTIALS &amp; STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certificates &amp; Learning
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 opacity-60" />
          
          <p className="mt-4 text-xs sm:text-sm font-mono text-zinc-400 max-w-xl text-center">
            Structured learning completions and validated coursework. Click any card to inspect full certificate details and topic breakdowns.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="hidden sm:flex items-center gap-1 text-xs font-mono text-zinc-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-emerald-400" /> filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-950/80 text-[#00ff66] border border-emerald-500/50 shadow-glow-sm font-semibold'
                  : 'bg-[#0a110e] text-zinc-400 border border-emerald-500/15 hover:border-emerald-500/30 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onOpenModal={(c) => setActiveModalCert(c)}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-xl bg-[#0b120f] border border-emerald-500/15 font-mono text-xs text-zinc-400">
            No certificates found in category: &quot;{selectedCategory}&quot;.
          </div>
        )}

        {/* Certificate Modal / Lightbox */}
        <CertificateModal
          certificate={activeModalCert}
          isOpen={!!activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />

      </div>
    </section>
  );
};
