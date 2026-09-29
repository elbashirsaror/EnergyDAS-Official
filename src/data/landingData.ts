export interface CapabilityItem {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  stack: string[];
  benchmark: string;
  diagram: {
    layers: string[];
    throughput: string;
    failover: string;
  };
}

export interface CaseStudyItem {
  id: string;
  sector: 'fintech' | 'logistics' | 'industrial' | 'all';
  sectorLabel: string;
  client: string;
  region: string;
  title: string;
  image: string;
  challenge: string;
  architecture: string;
  outcomes: {
    label: string;
    metric: string;
    detail: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
  technologies: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  metric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'distributed-systems',
    index: '01',
    category: 'High-Concurrency Core',
    title: 'High-Throughput Distributed Systems',
    summary: 'Deterministic, low-latency transaction processing and streaming state machines engineered for sub-millisecond execution without single points of failure.',
    deliverables: [
      'Lock-free consensus protocol implementations (Raft, Paxos variants)',
      'Sub-5ms global ledger propagation and dispute reconciliation engines',
      'Fault injection validation and automated Jepsen partition testing',
      'Event-sourced state machine backplanes handling >5M msgs/sec'
    ],
    stack: ['Rust', 'Go', 'Apache Kafka', 'WasmEdge', 'eBPF', 'ClickHouse'],
    benchmark: '42ms Global P99 at 1.8M events/sec',
    diagram: {
      layers: ['Client Ingress & TLS Termination (eBPF)', 'Zero-Copy Ringbuffer Consensus (Rust)', 'Distributed Write-Ahead Log Partition', 'Active Storage Replication Mesh'],
      throughput: '2,400,000 ops/sec',
      failover: '< 60ms automated leader election'
    }
  },
  {
    id: 'sovereign-cloud',
    index: '02',
    category: 'Infrastructure & Resilience',
    title: 'Multi-Region Active-Active Cloud Architecture',
    summary: 'Decentralized cloud topologies and sovereign deployments that guarantee business continuity across regulatory jurisdictions and public clouds.',
    deliverables: [
      'Multi-cloud Kubernetes fleet orchestration with automated traffic shifting',
      'Zero-trust hardware security module (HSM) key isolation',
      'Cryptographically partitioned data residency complying with EU GDPR & Swiss DPA',
      'Chaos-engineered disaster recovery with sub-minute RPO and RTO'
    ],
    stack: ['Kubernetes', 'Terraform', 'Cilium', 'Cosmos / Spanner', 'Envoy', 'Vault'],
    benchmark: '99.999% SLA across 4 continents',
    diagram: {
      layers: ['Anycast Geo-DNS Router', 'Multi-Region Mesh (Cilium / Wireguard)', 'Sovereign Enclave Execution (Confidential Compute)', 'Cross-Region Quorum Storage'],
      throughput: 'Active in 34 global regions',
      failover: '< 180ms seamless route failover'
    }
  },
  {
    id: 'data-mesh',
    index: '03',
    category: 'Real-Time Intelligence',
    title: 'Deterministic Data Streaming & Edge Ingestion',
    summary: 'Zero-drop sensor and event ingestion architectures with edge-local consensus and autonomous anomaly mitigation.',
    deliverables: [
      'Industrial IoT telemetry buses handling intermittent satellite uplinks',
      'Conflict-free Replicated Data Types (CRDTs) for offline-first edge nodes',
      'Real-time stream processing with exactly-once semantic guarantees',
      'Hardware-accelerated edge inference on FPGA and embedded TPU chips'
    ],
    stack: ['Apache Flink', 'Vector / Rust', 'MQTT-SN', 'CRDTs', 'Redpanda', 'DuckDB'],
    benchmark: 'Zero event loss during 72-hour simulated blackouts',
    diagram: {
      layers: ['Edge Sensory Bus (MQTT / CAN bus)', 'Local Ring Buffer & CRDT Resolver', 'Opportunistic Batch Uplink (Satellite/5G)', 'Central Streaming Ledger'],
      throughput: '120M daily telemetry bursts',
      failover: '100% offline partition tolerance'
    }
  },
  {
    id: 'legacy-modernization',
    index: '04',
    category: 'Enterprise Transformation',
    title: 'Core Decoupling & Monolith Migration',
    summary: 'Strangler-fig refactoring strategies that extract mission-critical services from legacy mainframes without maintenance downtime or transaction loss.',
    deliverables: [
      'Shadow-run verification harness validating 100% parity before cutover',
      'Change Data Capture (CDC) streaming pipelines from legacy databases',
      'Domain-Driven microservice slicing with strict bounded contexts',
      'Zero-downtime database schema migration and state transformation'
    ],
    stack: ['Debezium', 'Kafka Connect', 'OpenTelemetry', 'Temporal', 'PostgreSQL', 'Golang'],
    benchmark: 'Zero downtime across 14 enterprise migrations',
    diagram: {
      layers: ['Legacy Mainframe / DB', 'Real-Time CDC Stream Pipe', 'Parity Verification Harness', 'Isolated Modern Microservices'],
      throughput: '100% parallel verification',
      failover: 'Zero-risk rollback guarantee'
    }
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'apex-clearing',
    sector: 'fintech',
    sectorLabel: 'Financial Infrastructure',
    client: 'Apex Global Clearing Rail',
    region: 'Frankfurt & Zurich',
    title: 'Zero-Loss Ledger Migration Under 10x Volatility Surge',
    image: '/src/assets/images/case_study_fintech_settlement_1790437338329.jpg',
    challenge: 'A tier-1 institutional settlement rail was encountering 1,400ms queue bottlenecks and risk of dropped settlement confirmations during peak market open volatility.',
    architecture: 'Vanguard engineered a lock-free distributed ledger pipeline using Rust and custom eBPF packet routing, coupled with multi-master Raft consensus across Swiss and German data centers.',
    outcomes: [
      { label: 'Throughput Increase', metric: '+340%', detail: 'Processed 8.4M transactions/hr peak' },
      { label: 'P99 Latency', metric: '24ms', detail: 'Down from 1,420ms legacy batch delay' },
      { label: 'Zero Losses', metric: '100.0%', detail: 'Audited across 2.8B consecutive transactions' }
    ],
    quote: {
      text: 'Vanguard’s engineering team demonstrated mathematical precision. Our clearing volume doubled within four months without a single queue backlog.',
      author: 'Dr. Florian Weber',
      title: 'Head of Core Infrastructure, Apex Clearing'
    },
    technologies: ['Rust', 'eBPF', 'Apache Kafka', 'PostgreSQL', 'Prometheus']
  },
  {
    id: 'horizon-marine',
    sector: 'logistics',
    sectorLabel: 'Global Logistics & Maritime',
    client: 'Horizon Global Fleet Systems',
    region: 'Rotterdam & Singapore',
    title: 'Autonomous Telemetry Mesh Across 4,200 Container Vessels',
    image: '/src/assets/images/case_study_logistics_telemetry_1790437351219.jpg',
    challenge: 'Intermittent satellite connectivity caused asynchronous vessel routing failures, resulting in inefficient port docking queues and significant fuel variance.',
    architecture: 'Deployed an offline-first CRDT synchronization mesh with edge-compiled SQLite running onboard each vessel, automatically syncing to global logistics hubs upon connectivity recovery.',
    outcomes: [
      { label: 'Fuel Variance Reduction', metric: '-18.4%', detail: 'Saved $14.2M in annual fuel consumption' },
      { label: 'Berth Turnaround', metric: '+31%', detail: 'Optimized port slot scheduling' },
      { label: 'Offline Syncing', metric: '100%', detail: 'Zero lost operational logs across 4,200 ships' }
    ],
    quote: {
      text: 'Our captains and port managers now work from identical real-time truth regardless of mid-ocean satellite dropouts.',
      author: 'Arend van Dijk',
      title: 'VP of Marine Operations, Horizon Global'
    },
    technologies: ['Go', 'CRDTs', 'SQLite Edge', 'MQTT-SN', 'Google Cloud']
  },
  {
    id: 'aethel-industrial',
    sector: 'industrial',
    sectorLabel: 'Precision Manufacturing',
    client: 'Aethel Semiconductor Fabrication',
    region: 'Dresden & Austin',
    title: 'Sub-Millisecond Defect Classification on Edge FPGA Robotics',
    image: '/src/assets/images/case_study_industrial_edge_1790437362956.jpg',
    challenge: 'Cleanroom robotic lines produced false positive defect stops costing over $55,000/hour due to latency in centralized computer vision processing.',
    architecture: 'Designed a real-time hardware-accelerated pipeline processing 4K optical sensory feeds directly on edge FPGA units, communicating via ultra-reliable deterministic Ethernet (TSN).',
    outcomes: [
      { label: 'Classification Accuracy', metric: '99.98%', detail: 'Reduced false positive halts by 89%' },
      { label: 'Inference Latency', metric: '4.8ms', detail: 'Deterministic edge classification' },
      { label: 'Annual Uptime Gain', metric: '340 hrs', detail: 'Preserving over $18M in fab productivity' }
    ],
    quote: {
      text: 'The edge architecture eliminated our cleanroom bottlenecks completely. Vanguard delivered the exact reliability we required.',
      author: 'Ing. Claire Dupont',
      title: 'Director of Advanced Robotics, Aethel Semiconductor'
    },
    technologies: ['C++', 'FPGA / Verilog', 'TSN Ethernet', 'OpenVINO', 'Grafana']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: 'Vanguard re-architected our transaction settlement pipeline with unprecedented rigor. Their senior engineers operated like internal co-founders with world-class domain knowledge.',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Vortex Capital Group',
    location: 'Zurich, Switzerland',
    metric: '$4.2B daily throughput handled with 0 downtime'
  },
  {
    quote: 'Most consultancies recommend bloated frameworks. Vanguard stripped out two layers of unnecessary middleware, cutting our compute bill by 44% while boosting P99 throughput tenfold.',
    author: 'Julian Thorne',
    role: 'VP of Platform Engineering',
    company: 'Strata Cloud Solutions',
    location: 'London, United Kingdom',
    metric: '44% infrastructure cost reduction'
  },
  {
    quote: 'Their formal verification process caught three critical race conditions that had plagued our legacy database for four years. The peace of mind is immeasurable.',
    author: 'Siddharth Nair',
    role: 'Principal Systems Architect',
    company: 'OmniChain Logistics',
    location: 'Singapore',
    metric: 'Zero edge data corruption incidents'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Engagement & Model',
    question: 'How does Vanguard integrate with our internal engineering team?',
    answer: 'We deploy in compact, senior-level strike teams (Principal Systems Architect, Senior Distributed Systems Engineer, Staff Infrastructure Specialist). We work directly inside your codebase and version control systems, establishing automated verification suites, architectural decision records (ADRs), and thorough knowledge transfer.'
  },
  {
    category: 'IP & Security',
    question: 'Who retains Intellectual Property and proprietary algorithmic code?',
    answer: 'All architectural designs, custom algorithms, source code, deployment scripts, and documentation developed during the engagement are 100% owned exclusively by your organization upon delivery. We operate under strict mutual non-disclosure agreements with defense-grade IP assignment.'
  },
  {
    category: 'Infrastructure & Lock-in',
    question: 'Do you enforce specific third-party clouds or proprietary tooling?',
    answer: 'No. Our core architectural philosophy is strict zero vendor lock-in. We build on open cloud-native standards (Kubernetes, Envoy, OpenTelemetry, standard Linux primitives, eBPF) ensuring your platform can run on AWS, Google Cloud, Azure, Equinix Bare Metal, or private sovereign data centers.'
  },
  {
    category: 'Security & Certifications',
    question: 'What security standards and regulatory frameworks do you support?',
    answer: 'Our architectures are engineered to comply with ISO 27001, SOC 2 Type II, PCI-DSS Level 1, HIPAA, GDPR, Swiss FINMA, and FedRAMP High. Every deployment includes automated security scanning, tamper-evident audit logging, and automated cryptographic key rotation.'
  },
  {
    category: 'Timelines & SLAs',
    question: 'What is the typical timeframe for an Architectural Audit and Core Modernization?',
    answer: 'A comprehensive Architecture Audit delivers complete diagnostic benchmarks, bottleneck heatmaps, and actionable remediation blueprints within 10 to 14 business days. Core system modernization engagements typically range between 8 and 20 weeks with staged, zero-downtime milestone releases.'
  }
];

export const OFFICE_HUBS = [
  { city: 'Zurich', country: 'Switzerland', address: 'Bahnhofstrasse 45, 8001 Zurich', timezone: 'CET (UTC+1)' },
  { city: 'San Francisco', country: 'United States', address: '555 Mission St, San Francisco, CA', timezone: 'PST (UTC-8)' },
  { city: 'London', country: 'United Kingdom', address: '100 Bishopsgate, London EC2N 4AG', timezone: 'GMT (UTC+0)' },
  { city: 'Singapore', country: 'Singapore', address: '1 Marina Boulevard, Singapore 018989', timezone: 'SGT (UTC+8)' }
];
