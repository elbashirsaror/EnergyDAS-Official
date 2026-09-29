import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Shield, Phone, Mail, Building } from 'lucide-react';

interface EngineeringQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFillSpecs?: {
    facility: string;
    voltage: string;
    peakKw: number;
    savings: string;
  } | null;
  productCode?: string | null;
}

export function EngineeringQuoteModal({
  isOpen,
  onClose,
  preFillSpecs,
  productCode
}: EngineeringQuoteModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('audit');
  const [voltage, setVoltage] = useState('480V 3-Phase');
  const [notes, setNotes] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dossierId, setDossierId] = useState('');

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

  useEffect(() => {
    if (preFillSpecs) {
      setNotes(
        `Pre-configured via energyDAS ROI Sizing Tool:\n· Facility: ${preFillSpecs.facility}\n· Voltage: ${preFillSpecs.voltage}\n· Billing Peak: ${preFillSpecs.peakKw} kW\n· Projected Demand Savings: ${preFillSpecs.savings}`
      );
      setServiceType('quote');
    } else if (productCode) {
      setNotes(`Requesting official specification sheet, CAD models & pricing for Product Code: ${productCode}`);
      setServiceType('quote');
    }
  }, [preFillSpecs, productCode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setDossierId(`EDAS-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
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
          aria-label="Close quote modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white font-display">
              Technical Request Received
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{fullName}</span>. An energyDAS systems applications engineer has been assigned to your facility dossier.
            </p>

            <div className="mt-6 inline-block rounded-lg border border-slate-800 bg-slate-950 px-5 py-3 font-mono text-xs text-slate-300">
              <span>FACILITY AUDIT DOSSIER ID: </span>
              <span className="font-bold text-cyan-400">{dossierId}</span>
            </div>

            <div className="mt-6 text-xs text-slate-400 max-w-sm mx-auto">
              Confirmation and dispatch schedule sent to <span className="text-white">{email}</span>. Direct assistance available 24/7 at (800) 380-1121.
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-bold">
              <span>energyDAS Engineering & Systems Dispatch</span>
            </div>
            <h3 className="mt-1 text-2xl font-extrabold text-white font-display">
              Request Technical Proposal or Power Audit
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Single-phase & 3-phase universal voltage energy submetering, wireless PLC retrofits, or site-specific engineering analysis.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Chief Engineer / Facility Director"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@facility.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Facility / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Patrick Industries / Plant #4"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Request Scope
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="audit">On-Site Energy & Power Quality Audit</option>
                    <option value="quote">Hardware Submeter & PLC Pricing Quote</option>
                    <option value="portal">energyDAS Portal Cloud Subscription</option>
                    <option value="studio">energyDAS Studio™ 3D Modeling License</option>
                    <option value="partner">Certified Partner Program Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Facility Voltage & Service
                  </label>
                  <select
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="480V 3-Phase">480V 3-Phase (60Hz US Standard)</option>
                    <option value="208V 3-Phase">208V 3-Phase (60Hz US)</option>
                    <option value="600V Industrial">600V 3-Phase (Heavy Industrial)</option>
                    <option value="400V 50Hz">400V 3-Phase (50Hz Global / EU)</option>
                    <option value="Single Phase">120V / 240V Single Phase</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  System Specifications & Facility Requirements
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Detail machine loads, number of monitoring circuits, current peak demand kW, or product codes required..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 py-3 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Transmitting to Engineering Committee...</span>
                  ) : (
                    <>
                      <span>Submit Facility Engineering Request</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <div className="mt-2 text-center text-[10px] text-slate-400">
                  Toll-Free Direct Line: (800) 380-1121 · sales@energydas.com · Mutual NDA Standard
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
