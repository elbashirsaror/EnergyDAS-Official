import { TESTIMONIALS_DATA } from '../data/landingData';
import { Quote } from 'lucide-react';

export function Philosophy() {
  const principles = [
    {
      number: '01',
      title: 'Zero Single-Point-of-Failure by Design',
      description: 'We do not rely on cloud provider availability zones to protect critical business operations. Every architecture is validated against adversarial network partitions, datacenter power cuts, and software regressions.'
    },
    {
      number: '02',
      title: 'Absolute Ownership & Zero Vendor Lock-in',
      description: 'Proprietary cloud locks degrade enterprise enterprise valuation over time. We construct all platforms on open, portable foundations: Kubernetes, eBPF, OpenTelemetry, and standard Linux primitives.'
    },
    {
      number: '03',
      title: 'Deterministic State & Mathematical Verification',
      description: 'Race conditions are not solved with retry loops. We employ formal specification models (TLA+) and lock-free concurrency primitives that guarantee transaction ordering regardless of load.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Architectural Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Engineering principles that outlast framework hype.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Enterprise infrastructure should be boring in its predictability, ruthless in its efficiency, and mathematically verifiable under catastrophic failure conditions.
          </p>
        </div>

        {/* 3 Principles Horizontal Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div 
              key={p.number}
              className="border-t border-neutral-800 pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-mono text-cyan-400">
                  {p.number}.
                </span>
                <h3 className="mt-4 text-lg font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Testimonials Strip */}
        <div className="mt-20 pt-16 border-t border-neutral-900">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-8">
            Executive Endorsements & Peer Verification
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-neutral-800/80 bg-neutral-900/30 p-6 flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-5 w-5 text-neutral-600 mb-4" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80">
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-neutral-400">
                    {t.role}, {t.company}
                  </div>
                  <div className="mt-2 text-[11px] font-mono text-cyan-400">
                    {t.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
