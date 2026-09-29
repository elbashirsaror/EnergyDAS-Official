import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield, Calendar, Clock, AlertCircle } from 'lucide-react';

interface ConsultationFormProps {
  initialSpecs?: {
    scale: string;
    latency: string;
    topology: string;
    compliance: string;
  } | null;
}

export function ConsultationForm({ initialSpecs }: ConsultationFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Chief Technology Officer');
  const [workloadFocus, setWorkloadFocus] = useState('distributed-systems');
  const [timeframe, setTimeframe] = useState('immediate');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update notes if initialSpecs are passed
  useEffect(() => {
    if (initialSpecs) {
      setNotes(
        `Pre-configured Workload Specifications from Estimator:\n· Scale: ${initialSpecs.scale}\n· Latency Budget: ${initialSpecs.latency}\n· Desired Topology: ${initialSpecs.topology}\n· Compliance Requirement: ${initialSpecs.compliance}`
      );
    }
  }, [initialSpecs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Strict corporate email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please provide a valid corporate email address.');
      return;
    }

    // Basic name validation
    if (fullName.trim().length < 2) {
      setErrorMsg('Please provide your full name.');
      return;
    }

    if (company.trim().length < 2) {
      setErrorMsg('Please specify your organization or company name.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable audit consultation booking
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setConfirmationCode(`VGD-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setNotes('');
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              Direct Engineering Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Speak directly with a Principal Systems Architect.
            </h2>
            <p className="mt-4 text-base text-neutral-400 leading-relaxed">
              We do not route inbound inquiries through junior sales representatives. Your initial 45-minute discovery session is held with senior infrastructure practitioners who analyze system bottlenecks on day one.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-300 leading-relaxed">
                  <strong className="text-white font-semibold">Strict Mutual NDA:</strong> Protected by mutual non-disclosure and defense-grade IP assignment before architectural code review.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-300 leading-relaxed">
                  <strong className="text-white font-semibold">Guaranteed Response SLA:</strong> You will receive technical confirmation and scheduling options within 4 business hours.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-300 leading-relaxed">
                  <strong className="text-white font-semibold">Comprehensive Deliverables:</strong> Preliminary workload sizing, latency projection, and recommended topology blueprint included free of charge.
                </div>
              </div>
            </div>

            {/* Hubs Summary */}
            <div className="mt-10 pt-6 border-t border-neutral-900 text-xs text-neutral-300 font-mono">
              <span className="text-neutral-400">ENGINEERING HUBS:</span> Zurich · San Francisco · London · Singapore
            </div>
          </div>

          {/* Right Column: High-Integrity Consultation Form */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-10 backdrop-blur-sm">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white font-display">
                  Audit Brief Received
                </h3>
                <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. Your brief has been dispatched to our Principal Systems Engineering committee.
                </p>

                <div className="mt-6 inline-block rounded-lg border border-neutral-800 bg-neutral-950 px-5 py-3 font-mono text-xs text-neutral-300">
                  <span>REFERENCE DOSSIER: </span>
                  <span className="font-bold text-cyan-400">{confirmationCode}</span>
                </div>

                <div className="mt-6 text-xs text-neutral-400 max-w-sm mx-auto">
                  A calendar invite and encrypted preliminary technical questionnaire have been transmitted to <span className="text-neutral-200">{email}</span>.
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 px-5 py-2.5 text-xs font-semibold text-neutral-200 hover:bg-neutral-700 hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Katherine Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="k.vance@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Systems AG"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Executive Role */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="Chief Technology Officer">Chief Technology Officer</option>
                      <option value="VP of Infrastructure / Platform">VP of Infrastructure / Platform</option>
                      <option value="Head of Engineering">Head of Engineering</option>
                      <option value="Principal Systems Architect">Principal Systems Architect</option>
                      <option value="Director of Security & Risk">Director of Security & Risk</option>
                      <option value="Founder / CEO">Founder / CEO</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Engagement Area */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Primary Architectural Focus
                    </label>
                    <select
                      value={workloadFocus}
                      onChange={(e) => setWorkloadFocus(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="distributed-systems">High-Throughput Distributed Core</option>
                      <option value="sovereign-cloud">Sovereign Multi-Region Migration</option>
                      <option value="iot-edge">Edge & Real-Time Telemetry Streaming</option>
                      <option value="modernization">Legacy Monolith Decoupling</option>
                      <option value="audit">Comprehensive Architecture Audit</option>
                    </select>
                  </div>

                  {/* Target Timeframe */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Horizon
                    </label>
                    <select
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="immediate">Immediate (&lt; 30 Days)</option>
                      <option value="q1-q2">Next 1–3 Months</option>
                      <option value="planning">Strategic Planning (&gt; 3 Months)</option>
                    </select>
                  </div>
                </div>

                {/* Technical Requirements / Estimator Output */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Architecture Constraints & Workload Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current system bottlenecks, target throughput (ops/sec), data residency constraints, or latency goals..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-500 focus:outline-none transition-colors font-mono text-xs leading-relaxed"
                  />
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-900/50 bg-red-950/30 p-3 text-xs text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors shadow-lg active:scale-98 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
                        <span>Transmitting Brief to Security Committee...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Architecture Audit Request</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-neutral-400">
                    Confidential. No marketing solicitation. Handled directly by Lead Engineers.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
