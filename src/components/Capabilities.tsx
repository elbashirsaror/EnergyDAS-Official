import { useState } from 'react';
import { CAPABILITIES_DATA, CapabilityItem } from '../data/landingData';
import { ChevronRight, ArrowUpRight, Terminal, Server, Shield, Database } from 'lucide-react';

interface CapabilitiesProps {
  onSelectCapability: (capability: CapabilityItem) => void;
  onOpenAuditModal: () => void;
}

export function Capabilities({ onSelectCapability, onOpenAuditModal }: CapabilitiesProps) {
  const [selectedId, setSelectedId] = useState<string>(CAPABILITIES_DATA[0].id);

  const activeCapability = CAPABILITIES_DATA.find((c) => c.id === selectedId) || CAPABILITIES_DATA[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'distributed-systems':
        return <Terminal className="h-5 w-5 text-cyan-400" />;
      case 'sovereign-cloud':
        return <Server className="h-5 w-5 text-emerald-400" />;
      case 'data-mesh':
        return <Database className="h-5 w-5 text-amber-400" />;
      case 'legacy-modernization':
      default:
        return <Shield className="h-5 w-5 text-indigo-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Core Architectural Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Engineered for deterministic scale and zero transaction loss.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            We avoid generic cloud templates. Every system topology is tailored to the exact throughput profile, latency budget, and regulatory boundaries of your enterprise.
          </p>
        </div>

        {/* Asymmetric Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Navigation (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CAPABILITIES_DATA.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-neutral-700 bg-neutral-900/90 shadow-lg shadow-black/40'
                      : 'border-neutral-900 bg-neutral-950/60 hover:border-neutral-800 hover:bg-neutral-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400">
                      {item.index}.
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-neutral-800/60">
                    <span className="text-[11px] font-mono text-neutral-400">
                      {item.benchmark}
                    </span>
                    <span className={`text-xs font-medium flex items-center gap-1 ${
                      isSelected ? 'text-white' : 'text-neutral-500'
                    }`}>
                      <span>Inspect Topology</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Deep Dive Inspector (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                  {getIcon(activeCapability.id)}
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">
                    SPECIFICATION · {activeCapability.index}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {activeCapability.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => onSelectCapability(activeCapability)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>Full Blueprint</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Architecture Overview */}
            <p className="mt-6 text-sm text-neutral-300 leading-relaxed">
              {activeCapability.summary}
            </p>

            {/* System Blueprint Diagram Visualizer */}
            <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-950 p-5 font-mono">
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-900">
                <span className="text-neutral-400">RUNTIME TOPOLOGY LAYER</span>
                <span className="text-cyan-400">{activeCapability.diagram.throughput}</span>
              </div>

              <div className="mt-4 flex flex-col gap-2.5">
                {activeCapability.diagram.layers.map((layer, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between rounded border border-neutral-800/80 bg-neutral-900/60 px-3.5 py-2.5 text-xs text-neutral-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-neutral-400 text-[11px]">0{idx + 1}</span>
                      <span>{layer}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span>Failover Latency:</span>
                <span className="text-white font-semibold">{activeCapability.diagram.failover}</span>
              </div>
            </div>

            {/* Engineering Deliverables */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Deliverables & Guarantees
              </h4>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-300">
                {activeCapability.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">·</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Text List (No Pill Clutter) */}
            <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="font-semibold text-neutral-300">Tech Stack:</span>
                <span className="font-mono text-neutral-300">
                  {activeCapability.stack.join(' · ')}
                </span>
              </div>

              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-3.5 py-2 text-xs font-medium text-white hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <span>Audit Workload</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
