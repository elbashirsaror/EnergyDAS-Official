import { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { CapabilityItem, CaseStudyItem } from '../data/landingData';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  capability?: CapabilityItem | null;
  caseStudy?: CaseStudyItem | null;
  onConsult: () => void;
}

export function ArchitectureModal({
  isOpen,
  onClose,
  capability,
  caseStudy,
  onConsult
}: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {capability && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>SPECIFICATION BLUEPRINT</span>
              <span>·</span>
              <span>INDEX {capability.index}</span>
            </div>

            <h3 className="mt-2 text-2xl font-bold text-white font-display">
              {capability.title}
            </h3>

            <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
              {capability.summary}
            </p>

            {/* Architecture Layers */}
            <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-2 border-b border-neutral-900">
                <span>VERIFIED TOPOLOGICAL STACK</span>
                <span className="text-cyan-400">{capability.diagram.throughput}</span>
              </div>

              <div className="space-y-2">
                {capability.diagram.layers.map((layer, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-200 font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-400 font-bold">L{idx + 1}</span>
                      <span>{layer}</span>
                    </div>
                    <span className="text-emerald-400 text-[10px] uppercase font-semibold">
                      Hot Standby
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span>Automated Failover:</span>
                <span className="text-white font-mono font-bold">{capability.diagram.failover}</span>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Key Engineering Guarantees
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                {capability.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                <span className="text-neutral-300 font-semibold mr-2">Engine:</span>
                <span className="font-mono text-neutral-300">{capability.stack.join(' · ')}</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onConsult();
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <span>Audit This Stack</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {caseStudy && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>AUDITED CASE DOSSIER</span>
              <span>·</span>
              <span>{caseStudy.client}</span>
            </div>

            <h3 className="mt-2 text-2xl font-bold text-white font-display">
              {caseStudy.title}
            </h3>

            <div className="mt-4 text-xs text-neutral-400 font-mono">
              Deployment Region: {caseStudy.region} · Domain: {caseStudy.sectorLabel}
            </div>

            <div className="mt-6 space-y-4 text-sm text-neutral-300">
              <div>
                <strong className="text-white block mb-1">Production Challenge:</strong>
                <p className="text-neutral-400 text-xs leading-relaxed">{caseStudy.challenge}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">Vanguard Engineered Architecture:</strong>
                <p className="text-neutral-400 text-xs leading-relaxed">{caseStudy.architecture}</p>
              </div>
            </div>

            {/* Quantified Outcomes */}
            <div className="mt-6 grid grid-cols-3 gap-3 font-mono">
              {caseStudy.outcomes.map((out, idx) => (
                <div key={idx} className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
                  <div className="text-lg font-bold text-white">{out.metric}</div>
                  <div className="text-[11px] text-cyan-400 font-semibold mt-0.5">{out.label}</div>
                  <div className="text-[10px] text-neutral-400 mt-1">{out.detail}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-6 rounded-lg border-l-2 border-cyan-500 bg-neutral-950/60 p-4 text-xs text-neutral-300 italic">
              "{caseStudy.quote.text}"
              <footer className="mt-2 not-italic text-[11px] font-bold text-white">
                — {caseStudy.quote.author} ({caseStudy.quote.title})
              </footer>
            </blockquote>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between">
              <div className="text-xs text-neutral-400 font-mono">
                Tech: {caseStudy.technologies.join(' · ')}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onConsult();
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <span>Request Case Architecture Brief</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
