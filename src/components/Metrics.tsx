export function Metrics() {
  const stats = [
    {
      value: '$4.8B+',
      label: 'Annual Transaction Volume',
      detail: 'Protected across high-speed financial settlement rails and clearing houses.'
    },
    {
      value: '42ms',
      label: 'Global P99 Latency',
      detail: 'Median lock-free consensus propagation across transatlantic node clusters.'
    },
    {
      value: '99.999%',
      label: 'Audited Uptime SLA',
      detail: 'Maintained through active-active multi-region failover and chaos engineering.'
    },
    {
      value: '180+',
      label: 'Platforms Deployed',
      detail: 'Mission-critical systems across banking, maritime logistics, and semiconductor robotics.'
    }
  ];

  const enterpriseClients = [
    'Apex Institutional Clearing',
    'Horizon Global Maritime',
    'Aethel Robotics & Fab',
    'Nordic Sovereign Grid',
    'Vortex Capital Group',
    'OmniChain Network'
  ];

  return (
    <section className="border-b border-neutral-900 bg-neutral-950 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Metric Grid with Quantitative Rigor */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="border-l border-neutral-800 pl-6 py-2 transition-colors hover:border-cyan-500/50"
            >
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-neutral-200">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-neutral-400 leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Client / Partner Enterprise Strip */}
        <div className="mt-16 pt-12 border-t border-neutral-900">
          <p className="text-xs font-medium text-neutral-300 text-center uppercase tracking-wider">
            Trusted by infrastructure leaders across mission-critical domains
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {enterpriseClients.map((client, idx) => (
              <div 
                key={idx} 
                className="text-xs sm:text-sm font-medium text-neutral-300 tracking-wide hover:text-white transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
