import { useState } from 'react';
import { ArrowRight, ShieldCheck, Activity, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  onOpenAuditModal: () => void;
  onExploreTopologies: () => void;
}

export function Hero({ onOpenAuditModal, onExploreTopologies }: HeroProps) {
  const [activePin, setActivePin] = useState<number | null>(null);

  const telemetryPins = [
    {
      id: 1,
      x: '28%',
      y: '34%',
      label: 'eBPF Routing Layer',
      metric: '0.4ms packet latency',
      status: 'Active Consensus'
    },
    {
      id: 2,
      x: '64%',
      y: '48%',
      label: 'Distributed Raft Quorum',
      metric: '5-node active-active cluster',
      status: 'Strict Quorum'
    },
    {
      id: 3,
      x: '78%',
      y: '22%',
      label: 'Sovereign HSM Vault',
      metric: 'FIPS 140-3 Level 4',
      status: 'Cryptographic Airgap'
    }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-neutral-900">
      {/* Subtle radial ambient background */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-cyan-950/25 via-neutral-900/10 to-transparent blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          {/* Zero-Pill Unboxed Trust Metadata */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-neutral-400 mb-6">
            <span>ISO 27001 Certified</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>99.999% SLA Architecture</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>34 Sovereign Regions Active</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-cyan-400">Zero Single-Point-of-Failure</span>
          </div>

          {/* Unmistakable Headline with Balance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] [text-wrap:balance]">
            Deterministic distributed systems for inflexible enterprise scale.
          </h1>

          {/* Concrete Value Proposition */}
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            We engineer high-throughput transaction backplanes, resilient multi-cloud topologies, and fault-tolerant streaming pipelines for organizations where latency spikes and system outages are unacceptable.
          </p>

          {/* Primary Action Zone */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-200 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-98 whitespace-nowrap cursor-pointer"
            >
              <span>Request Architecture Audit</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onExploreTopologies}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-6 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-colors hover:bg-neutral-800 hover:text-white whitespace-nowrap cursor-pointer"
            >
              <span>Explore Deployed Topologies</span>
            </button>
          </div>
        </div>

        {/* High-Fidelity 16:9 Hero Visual Anchor */}
        <div className="mt-14 relative rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden shadow-2xl">
          {/* Subtle top frame hairline */}
          <div className="flex items-center justify-between border-b border-neutral-800/80 px-4 py-2.5 bg-neutral-950/70 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE CLUSTER TOPOLOGY · REGION ACTIVE: SWISS-CENTRAL-1</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-neutral-500">
              <span>LATENCY: 0.42ms</span>
              <span>CONSENSUS: 100% QUORUM</span>
            </div>
          </div>

          <div className="relative aspect-16/9 w-full bg-neutral-950 overflow-hidden">
            <img
              src="/src/assets/images/hero_enterprise_architecture_1790437324615.jpg"
              alt="Vanguard Dynamics Enterprise Operations Command Center"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
              loading="eager"
            />

            {/* Gradient scrim for legibility */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

            {/* Interactive Telemetry Pins */}
            {telemetryPins.map((pin) => (
              <div
                key={pin.id}
                style={{ left: pin.x, top: pin.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <button
                  type="button"
                  onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                  onMouseEnter={() => setActivePin(pin.id)}
                  className="group relative flex h-7 w-7 items-center justify-center rounded-full bg-cyan-950/80 border border-cyan-400/60 text-cyan-300 shadow-lg shadow-cyan-950/50 hover:scale-110 transition-transform cursor-pointer"
                  aria-label={`Inspect ${pin.label}`}
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <span className="absolute -inset-1 rounded-full border border-cyan-400/30 animate-ping opacity-60" />
                </button>

                {/* Pin Tooltip Card */}
                {activePin === pin.id && (
                  <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-64 rounded-lg border border-neutral-700 bg-neutral-950/95 p-3.5 shadow-2xl backdrop-blur-md z-20 text-left">
                    <div className="text-xs font-semibold text-white">{pin.label}</div>
                    <div className="mt-1 text-xs font-mono text-cyan-400">{pin.metric}</div>
                    <div className="mt-1 text-[11px] text-neutral-400">{pin.status}</div>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom floating telemetry status bar inside media */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-neutral-800/90 bg-neutral-950/80 px-4 py-3 backdrop-blur-md text-xs">
              <div className="flex items-center gap-6 text-neutral-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium">Zero-Trust Kernel Verified</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Activity className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono tabular-nums">4.8M ops/sec peak load</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-400 font-mono text-[11px]">
                <span>FAILOVER: &lt;60ms</span>
                <span>PARTITIONS: 0 CORRUPTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
