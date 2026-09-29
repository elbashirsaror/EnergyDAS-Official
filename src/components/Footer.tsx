import { useState } from 'react';
import { OFFICE_HUBS } from '../data/landingData';
import { ArrowRight, Check } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <a 
              href="#" 
              className="text-lg font-bold tracking-tight text-white font-display"
            >
              Vanguard Dynamics
            </a>
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Architecting high-throughput distributed systems, sovereign multi-cloud topologies, and fault-tolerant infrastructure for global enterprise platforms.
            </p>

            <div className="mt-6">
              <span className="text-xs font-semibold text-neutral-300 block mb-2">
                Distributed Systems Whitepaper Dispatch
              </span>
              <p className="text-[11px] text-neutral-400 mb-3">
                Quarterly technical monographs on lock-free concurrency, Raft consensus benchmarks, and sovereign infrastructure.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <Check className="h-4 w-4" />
                  <span>Subscribed to Engineering Dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                  <input
                    type="email"
                    required
                    placeholder="architect@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3.5 py-2 text-xs font-semibold text-neutral-900 hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Architecture
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Distributed Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Sovereign Cloud
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Edge Ingestion
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Legacy Decoupling
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  System Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Proof & Evidence Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Evidence & Cases
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  FinTech Settlement Rail
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Maritime Logistics Mesh
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Semiconductor Robotics
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Design Principles
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Governance & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Global Tech Hubs Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Global Hubs
            </h4>
            <div className="mt-4 space-y-3 text-xs">
              {OFFICE_HUBS.map((hub) => (
                <div key={hub.city}>
                  <div className="font-semibold text-neutral-300">
                    {hub.city}, {hub.country}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {hub.timezone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Vanguard Dynamics AG. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400">ISO 27001 Certified</span>
            <span className="hover:text-neutral-400">SOC 2 Type II</span>
            <span className="hover:text-neutral-400">Mutual NDA Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
