import { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Activity, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { NEWS_ARCHIVE, CLIENT_PARTNERS, NewsItem } from '../data/energyDasData';

interface EnergyHeroProps {
  onOpenAuditModal: () => void;
  onOpenPartnerModal: () => void;
  onSelectNews: (news: NewsItem) => void;
}

export function EnergyHero({ onOpenAuditModal, onOpenPartnerModal, onSelectNews }: EnergyHeroProps) {
  // Live simulated industrial power telemetry
  const [activeTelemetry, setActiveTelemetry] = useState({
    activePower: 418.6,
    voltage: 480.2,
    current: 504.1,
    powerFactor: 0.98,
    frequency: 60.02
  });

  return (
    <section className="bg-slate-950 text-slate-100 pt-6 pb-12 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left 8 cols (Hero Machine & Controls) + Right 4 cols (Partner & News Feed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: energyDAS Controls Hero Feature Box (8 cols) */}
          <div className="lg:col-span-8 rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Top Control Bar with Industrial Badge */}
            <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Industrial Systems & Machine Automation
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display mt-0.5">
                  energyDAS Controls
                </h1>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded border border-slate-800 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE · 50/60Hz AUTO-SYNC</span>
              </div>
            </div>

            {/* Media & Core Value Content Area */}
            <div className="relative">
              {/* High-Impact Industrial Facility & Press Machine Image */}
              <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-slate-950 overflow-hidden">
                <img
                  src="/src/assets/images/hero_energy_controls_factory_1790438072624.jpg"
                  alt="energyDAS Industrial Machine Controls and Factory Automation"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                {/* Legibility Scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent sm:w-3/4 pointer-events-none" />

                {/* Left Floating Content Panel */}
                <div className="absolute inset-y-0 left-0 p-6 sm:p-8 flex flex-col justify-center max-w-xl text-left z-10">
                  <p className="text-sm sm:text-base font-medium text-slate-200 leading-snug">
                    Measure, Monitor & Control from simple submetering systems to complex machines and manufacturing processes.
                  </p>

                  {/* High-Value Technical Spec Bullets (Reproduced directly from reference image) */}
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm font-semibold text-white">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span>Single phase & 3 phase compatible</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span>Universal Voltages for worldwide usage (100V–690V)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span>Auto-sensing 50Hz to 60Hz frequency synchronization</span>
                    </li>
                  </ul>

                  {/* Primary & Secondary Call to Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenAuditModal}
                      className="inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors shadow-lg cursor-pointer whitespace-nowrap"
                    >
                      <span>Request Power Audit</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    <a
                      href="#systems"
                      className="inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>View Specifications</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Strip across the card */}
              <div className="bg-slate-950 border-t border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-yellow-400" />
                    <span>LOAD: <strong className="text-white">{activeTelemetry.activePower} kW</strong></span>
                  </div>
                  <div className="hidden sm:inline text-slate-500">·</div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <span>BUS: <strong className="text-white">{activeTelemetry.voltage} V</strong></span>
                  </div>
                  <div className="hidden md:inline text-slate-500">·</div>
                  <div className="hidden md:flex items-center gap-1.5">
                    <span>PF: <strong className="text-emerald-400">{activeTelemetry.powerFactor}</strong></span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  ACCURACY: <span className="text-cyan-400 font-bold">ANSI C12.20 CLASS 0.2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Partner Callout & Newsfeed (4 cols, directly from reference image) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* 1. energyDAS Partner Card (as seen in top right of reference) */}
            <div className="rounded-xl border border-blue-800/80 bg-gradient-to-br from-blue-900/40 via-slate-900 to-slate-950 p-5 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display">
                    <span className="text-lg font-bold text-white">energyDAS</span>
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-blue-700 text-white uppercase tracking-wider">
                      Partner®
                    </span>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Join the Certified energyDAS Integration Network for electrical contractors, energy engineers, and OEM equipment builders.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">OEM & Integrator Access</span>
                <button
                  onClick={onOpenPartnerModal}
                  className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* 2. NEWS & ARCHIVES Panel (Directly reflecting the NEWS widget in reference image) */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 flex-1 p-5 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Company News
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  </div>
                  <a 
                    href="#news" 
                    className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Archives »
                  </a>
                </div>

                {/* News Items List */}
                <div className="space-y-3.5">
                  {NEWS_ARCHIVE.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onSelectNews(item)}
                      className="w-full text-left group p-2 rounded hover:bg-slate-800/60 transition-colors cursor-pointer"
                    >
                      <div className="text-[11px] font-mono text-cyan-400">
                        {item.date}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-200 group-hover:text-white line-clamp-2 leading-snug">
                        {item.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                <a
                  href="#news"
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  View All Contract & Technology Announcements →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Client & Utility Partner Logo Bar (Directly from reference screenshot) */}
        <div className="mt-10 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 sm:p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
            Deployed Across Premier Industrial, Automotive & Utility Facilities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-slate-300">
            {CLIENT_PARTNERS.map((partner, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 hover:text-white transition-colors cursor-default"
              >
                <span>{partner.name}</span>
                {idx < CLIENT_PARTNERS.length - 1 && (
                  <span className="text-slate-600 hidden sm:inline">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
