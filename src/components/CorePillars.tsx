import { useState } from 'react';
import { ArrowUpRight, Check, Eye, Cpu, HardHat, Building2, Monitor } from 'lucide-react';
import { PILLARS_DATA } from '../data/energyDasData';

interface CorePillarsProps {
  onOpenPortalDemo: () => void;
  onOpenAuditModal: () => void;
  onOpenStudioDemo: () => void;
  onOpenSystemsSpecs: () => void;
}

export function CorePillars({
  onOpenPortalDemo,
  onOpenAuditModal,
  onOpenStudioDemo,
  onOpenSystemsSpecs
}: CorePillarsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getPillarAction = (id: string) => {
    switch (id) {
      case 'portal':
        return onOpenPortalDemo;
      case 'systems':
        return onOpenSystemsSpecs;
      case 'engineering':
        return onOpenAuditModal;
      case 'studio':
      default:
        return onOpenStudioDemo;
    }
  };

  const getPillarActionLabel = (id: string) => {
    switch (id) {
      case 'portal':
        return 'Launch Cloud Demo';
      case 'systems':
        return 'Hardware Specs';
      case 'engineering':
        return 'Schedule Site Audit';
      case 'studio':
      default:
        return 'Open 3D Modeler';
    }
  };

  return (
    <section id="applications" className="py-20 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            The Complete energyDAS Platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Integrated Energy Hardware, Cloud SCADA & Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Four unified pillars delivering complete visibility from machine-level submetering up to whole-enterprise energy modeling.
          </p>
        </div>

        {/* 4 Pillars Card Grid (Reproducing the 4 cards from the reference screenshot) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar) => {
            const handleAction = getPillarAction(pillar.id);
            const actionLabel = getPillarActionLabel(pillar.id);

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-lg hover:border-cyan-500 hover:shadow-cyan-950/40 transition-all duration-300"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-display tracking-wide">
                      {pillar.badge}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-cyan-300">
                      {pillar.id}
                    </span>
                  </div>

                  {/* 4:3 Aspect Ratio Image with Interactive Overlay */}
                  <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden border-b border-slate-800">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-2.5 left-3 right-3 text-xs font-mono text-cyan-300">
                      {pillar.highlight}
                    </div>
                  </div>

                  {/* Description & Feature bullets */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white font-display">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {pillar.tagline}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-3 text-[11px] text-slate-300">
                      {pillar.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={handleAction}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-sm"
                  >
                    <span>{actionLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
