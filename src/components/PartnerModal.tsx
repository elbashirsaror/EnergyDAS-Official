import { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export function PartnerModal({ isOpen, onClose, onContact }: PartnerModalProps) {
  const [partnerType, setPartnerType] = useState('integrator');
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');

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

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          aria-label="Close partner dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {partnerSubmitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white font-display">
              Partner Application Transmitted
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{contactName}</span>. The energyDAS Partner Channel director will review your qualifications and send integrator pricing to <span className="text-cyan-300">{email}</span>.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-bold">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified Integration Network</span>
            </div>

            <h3 className="mt-1 text-2xl font-extrabold text-white font-display">
              Become an energyDAS Certified Partner™
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Deliver turnkey energy submetering, machine automation, and 3D modeling services to your enterprise clients with factory-direct engineering support.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-white block">OEM Volume Pricing</strong>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Tiered discounts on wireless PLCs and Class 0.2 meters.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-white block">Portal White-Label</strong>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Branded client energy dashboards and automated billing.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <strong className="text-white block">Priority Dispatch</strong>
                <span className="text-[11px] text-slate-400 mt-0.5 block">Direct engineering liaison for project submittals.</span>
              </div>
            </div>

            <form onSubmit={handlePartnerSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Partner Lead / Contractor"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Electrical Systems LLC"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Primary Business Focus
                  </label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="integrator">Systems Integrator / Contractor</option>
                    <option value="oem">Machine Builder / OEM Equipment</option>
                    <option value="consultant">Energy Engineering Consultant</option>
                    <option value="utility">Electric Utility / Co-op</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 py-2.5 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-lg"
                >
                  <span>Submit Partner Application</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
