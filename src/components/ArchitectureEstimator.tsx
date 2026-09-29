import { useState } from 'react';
import { Sliders, CheckCircle2, ArrowRight, ShieldCheck, Zap, Database } from 'lucide-react';

interface EstimatorProps {
  onPreFillAudit: (specs: {
    scale: string;
    latency: string;
    topology: string;
    compliance: string;
  }) => void;
}

export function ArchitectureEstimator({ onPreFillAudit }: EstimatorProps) {
  const [throughputIndex, setThroughputIndex] = useState<number>(2); // 500k ops/sec
  const [latencyTier, setLatencyTier] = useState<'ultra' | 'low' | 'standard'>('ultra');
  const [topologyType, setTopologyType] = useState<'multi-region' | 'sovereign' | 'hybrid'>('multi-region');
  const [compliance, setCompliance] = useState<'soc2' | 'pci' | 'iso'>('soc2');

  const throughputScales = [
    { label: '50,000 ops/sec', value: '50k', nodes: '3 Nodes', egress: '1.2 GB/s' },
    { label: '200,000 ops/sec', value: '200k', nodes: '5 Nodes', egress: '4.8 GB/s' },
    { label: '1,000,000 ops/sec', value: '1M', nodes: '9 Nodes (Active Quorum)', egress: '24 GB/s' },
    { label: '5,000,000+ ops/sec', value: '5M+', nodes: '15+ Distributed Shards', egress: '120 GB/s' }
  ];

  const currentThroughput = throughputScales[throughputIndex];

  // Derived calculations
  const calculateFailover = () => {
    if (topologyType === 'sovereign') return '< 120ms (Confidential HSM)';
    if (topologyType === 'hybrid') return '< 240ms (Cross-Fabric)';
    return '< 60ms (Zero-Loss Raft)';
  };

  const calculateAuditDays = () => {
    if (throughputIndex >= 3) return '14 business days';
    if (throughputIndex >= 2) return '10 business days';
    return '7 business days';
  };

  const getRecommendedCore = () => {
    if (latencyTier === 'ultra') {
      return 'Rust Native State Machine + eBPF Direct-Packet Ingress + NVMe WAL Journaling';
    }
    if (latencyTier === 'low') {
      return 'Go Distributed Actors + Apache Kafka Backplane + Active-Active Multi-Master';
    }
    return 'Event-Sourced Microservices + Managed Quorum Streams + Global Anycast Mesh';
  };

  const handleApplyToAudit = () => {
    onPreFillAudit({
      scale: currentThroughput.label,
      latency: latencyTier === 'ultra' ? 'Sub-5ms Ultra Low' : latencyTier === 'low' ? 'Sub-25ms Low Latency' : 'Sub-100ms Standard',
      topology: topologyType === 'multi-region' ? 'Multi-Region Active-Active' : topologyType === 'sovereign' ? 'Sovereign On-Prem / Cloud' : 'Hybrid Bare-Metal',
      compliance: compliance === 'soc2' ? 'SOC 2 Type II' : compliance === 'pci' ? 'PCI-DSS Level 1' : 'ISO 27001'
    });
  };

  return (
    <section id="estimator" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Interactive Architecture Playground
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Estimate your workload topology and consensus requirements.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Adjust your target scale and resiliency constraints to preview the recommended architectural tier, node topology, and failover budget.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div className="space-y-8">
              {/* Scale Slider */}
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-neutral-200">
                    Peak Concurrency & Throughput
                  </span>
                  <span className="font-mono text-cyan-400 font-bold tabular-nums">
                    {currentThroughput.label}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={throughputIndex}
                  onChange={(e) => setThroughputIndex(parseInt(e.target.value))}
                  className="mt-4 w-full accent-cyan-400 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
                  aria-label="Throughput scale slider"
                />
                <div className="mt-2 flex justify-between text-[11px] font-mono text-neutral-300">
                  <span>50k ops/sec</span>
                  <span>200k ops/sec</span>
                  <span>1M ops/sec</span>
                  <span>5M+ ops/sec</span>
                </div>
              </div>

              {/* Latency Sensitivity Segmented Controls */}
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-3">
                  P99 Latency Budget
                </label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setLatencyTier('ultra')}
                    className={`py-2 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      latencyTier === 'ultra'
                        ? 'bg-neutral-800 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Ultra-Low (&lt;5ms)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLatencyTier('low')}
                    className={`py-2 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      latencyTier === 'low'
                        ? 'bg-neutral-800 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Low (&lt;25ms)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLatencyTier('standard')}
                    className={`py-2 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      latencyTier === 'standard'
                        ? 'bg-neutral-800 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Standard (&lt;100ms)
                  </button>
                </div>
              </div>

              {/* Multi-Region / Sovereign Topology Selection */}
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-3">
                  Resiliency & Data Sovereignty
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTopologyType('multi-region')}
                    className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                      topologyType === 'multi-region'
                        ? 'border-cyan-500/60 bg-cyan-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">Active-Active Cloud</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Multi-region quorum</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTopologyType('sovereign')}
                    className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                      topologyType === 'sovereign'
                        ? 'border-cyan-500/60 bg-cyan-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">Sovereign Enclave</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Strict jurisdictional residency</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTopologyType('hybrid')}
                    className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                      topologyType === 'hybrid'
                        ? 'border-cyan-500/60 bg-cyan-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">Hybrid Bare-Metal</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Colocation + Cloud mesh</div>
                  </button>
                </div>
              </div>

              {/* Regulatory Compliance Framework */}
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-3">
                  Compliance Boundary
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setCompliance('soc2')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                      compliance === 'soc2'
                        ? 'border-neutral-600 bg-neutral-800 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    SOC 2 Type II
                  </button>
                  <button
                    type="button"
                    onClick={() => setCompliance('pci')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                      compliance === 'pci'
                        ? 'border-neutral-600 bg-neutral-800 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    PCI-DSS Level 1
                  </button>
                  <button
                    type="button"
                    onClick={() => setCompliance('iso')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                      compliance === 'iso'
                        ? 'border-neutral-600 bg-neutral-800 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    ISO 27001 / Swiss FINMA
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time Topology Output Blueprint (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono text-cyan-400">
                  ESTIMATED SYSTEM BLUEPRINT
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  SLO: 99.999%
                </span>
              </div>

              {/* Core Output Specs */}
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">
                    Recommended Core Engine
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white leading-snug">
                    {getRecommendedCore()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3.5">
                    <div className="text-[10px] text-neutral-400 uppercase">Cluster Quorum</div>
                    <div className="mt-1 text-xs sm:text-sm font-bold text-white tabular-nums">
                      {currentThroughput.nodes}
                    </div>
                  </div>

                  <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3.5">
                    <div className="text-[10px] text-neutral-400 uppercase">Automated Failover</div>
                    <div className="mt-1 text-xs sm:text-sm font-bold text-emerald-400 tabular-nums">
                      {calculateFailover()}
                    </div>
                  </div>

                  <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3.5">
                    <div className="text-[10px] text-neutral-400 uppercase">Est. Egress Bandwidth</div>
                    <div className="mt-1 text-xs sm:text-sm font-bold text-white tabular-nums">
                      {currentThroughput.egress}
                    </div>
                  </div>

                  <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3.5">
                    <div className="text-[10px] text-neutral-400 uppercase">Audit Timeframe</div>
                    <div className="mt-1 text-xs sm:text-sm font-bold text-cyan-400 tabular-nums">
                      {calculateAuditDays()}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-800/80 bg-neutral-950/80 p-3.5 text-xs text-neutral-400">
                  <div className="flex items-center gap-2 text-neutral-300 font-medium mb-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Deterministic Guarantee</span>
                  </div>
                  Zero queue drop-off under 300% sudden traffic spikes with lock-free backpressure propagation.
                </div>
              </div>
            </div>

            {/* Action to Pre-Fill Audit Consultation */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <button
                type="button"
                onClick={handleApplyToAudit}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-xs font-semibold text-neutral-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-950/60 cursor-pointer"
              >
                <span>Transfer Specifications to Audit Scope</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
