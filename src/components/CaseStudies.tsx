import { useState } from 'react';
import { CASE_STUDIES_DATA, CaseStudyItem } from '../data/landingData';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenCaseModal: (study: CaseStudyItem) => void;
}

export function CaseStudies({ onOpenCaseModal }: CaseStudiesProps) {
  const [filter, setFilter] = useState<'all' | 'fintech' | 'logistics' | 'industrial'>('all');

  const filteredStudies = filter === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((item) => item.sector === filter);

  return (
    <section id="cases" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-900">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              Audited Case Studies & Quantified Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Production evidence from mission-critical deployments.
            </h2>
            <p className="mt-4 text-base text-neutral-400 leading-relaxed">
              Every deployment is measured by verified throughput, zero-loss durability, and hard financial return on infrastructure investment.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons with click handlers) */}
          <div className="inline-flex p-1 bg-neutral-900 rounded-lg border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Sectors
            </button>
            <button
              onClick={() => setFilter('fintech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'fintech'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Financial Infrastructure
            </button>
            <button
              onClick={() => setFilter('logistics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'logistics'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Maritime Logistics
            </button>
            <button
              onClick={() => setFilter('industrial')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'industrial'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Semiconductor Robotics
            </button>
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 overflow-hidden transition-all duration-300 hover:border-neutral-700 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* 4:3 Aspect Ratio Image with Scrim & Fallback */}
                <div className="relative aspect-4/3 w-full bg-neutral-950 overflow-hidden border-b border-neutral-800/80">
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed metadata overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                    <span className="font-mono text-[11px] text-cyan-300">{study.sectorLabel}</span>
                    <span className="text-neutral-400 text-[11px]">{study.region}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Client name as clean unboxed text */}
                  <div className="text-xs font-medium text-neutral-400">
                    {study.client}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white leading-snug">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>

                  {/* Quantified Metrics Grid */}
                  <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-neutral-800/80 font-mono">
                    {study.outcomes.map((outcome, idx) => (
                      <div key={idx} className="bg-neutral-950/60 p-2.5 rounded border border-neutral-900">
                        <div className="text-sm sm:text-base font-bold text-white tabular-nums">
                          {outcome.metric}
                        </div>
                        <div className="mt-1 text-[10px] text-neutral-400 leading-tight">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Attributable Quote */}
                  <blockquote className="mt-6 border-l-2 border-cyan-500/40 pl-3 text-xs text-neutral-300 italic">
                    "{study.quote.text}"
                    <footer className="mt-1 text-[11px] not-italic text-neutral-400">
                      — {study.quote.author}
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* Card Footer with Modal Trigger */}
              <div className="p-6 pt-0 border-t border-neutral-800/60 mt-4">
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-neutral-400 truncate max-w-[65%]">
                    {study.technologies.slice(0, 3).join(' · ')}
                  </div>
                  <button
                    onClick={() => onOpenCaseModal(study)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
