export interface ProductCodeItem {
  code: string;
  name: string;
  category: 'Systems' | 'Meters' | 'Software' | 'Relays';
  voltage: string;
  specs: string;
  applications: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  location: string;
}

export const NEWS_ARCHIVE: NewsItem[] = [
  {
    id: 'news-1',
    date: 'January 26, 2024',
    title: 'energyDAS President Dr. Felix Goto Receives Industrial Energy Innovation Award',
    summary: 'Honored in Elkhart, Indiana for pioneering wireless energy submetering and intelligent machine load controls for North American manufacturing plants.',
    category: 'Corporate Award',
    location: 'Elkhart, Indiana, USA'
  },
  {
    id: 'news-2',
    date: 'October 23, 2023',
    title: 'energyDAS Partners with GE to Deploy Industrial Smartgrids Across Asia Corridors',
    summary: 'Strategic integration brings energyDAS wireless PLCs and submetering nodes into 42 Tier-1 electronics and automotive manufacturing campuses.',
    category: 'Partnership',
    location: 'Singapore & Tokyo'
  },
  {
    id: 'news-3',
    date: 'October 20, 2023',
    title: 'energyDAS Wins USD $1.2M Municipal Energy & Controls Contract in Dallas, TX',
    summary: 'Full-facility turnkey energy modeling, HVAC optimization, and demand-response telemetry across 18 municipal and public utility facilities.',
    category: 'Contract Award',
    location: 'Dallas, Texas, USA'
  },
  {
    id: 'news-4',
    date: 'June 12, 2023',
    title: 'Release of energyDAS Studio™ v5.0 with Hourly Solar & Storage Modeling',
    summary: 'Engineers can now simulate whole-building thermodynamic loads alongside onsite battery energy storage (BESS) peak shaving algorithms.',
    category: 'Product Release',
    location: 'Headquarters'
  }
];

export const CLIENT_PARTNERS = [
  { name: 'Patrick Industries, Inc.', sector: 'Building Materials & Industrial' },
  { name: 'Toyota Motor Manufacturing', sector: 'Automotive OEM' },
  { name: 'DTE Energy', sector: 'Electric Utility & Grid' },
  { name: 'Mercedes-Benz Industrial', sector: 'Precision Manufacturing' },
  { name: 'United States Postal Service (USPS)', sector: 'National Logistics Facilities' },
  { name: 'Nissan North America', sector: 'Automotive Assembly' },
  { name: 'Skyline Champion Corp', sector: 'Modular Architecture' }
];

export const PRODUCT_CATALOG: ProductCodeItem[] = [
  {
    code: 'eDAS-PLC-840',
    name: 'Industrial Wireless PLC Controller',
    category: 'Systems',
    voltage: '85–264V AC / 24V DC',
    specs: '32 Digital I/O, 8 Analog, Modbus TCP/RTU, MQTT Sparkplug B, 900MHz Mesh',
    applications: 'Machine load shedding, automated compressor control, submeter telemetry'
  },
  {
    code: 'eDAS-MTR-3000',
    name: 'Multi-Circuit Class 0.2 Revenue Energy Meter',
    category: 'Meters',
    voltage: '100–690V AC Universal (50/60Hz)',
    specs: 'Up to 48 single-phase or 16 three-phase circuits, THD harmonics to 63rd',
    applications: 'Main switchgear distribution, tenant submetering, machine-level power quality'
  },
  {
    code: 'eDAS-RLY-16X',
    name: 'Solid-State Multi-Channel Load Relay',
    category: 'Relays',
    voltage: 'Universal 120/277/480V AC',
    specs: '16x 20A rated latching relays with manual override levers and current feedback',
    applications: 'Lighting circuits, HVAC stage sequencing, emergency load shedding'
  },
  {
    code: 'eDAS-PORTAL-CLOUD',
    name: 'energyDAS Cloud Dashboard SaaS',
    category: 'Software',
    voltage: 'N/A (Cloud Hosted)',
    specs: 'Real-time telemetry, automated utility billing reconciliation, REST API & Webhooks',
    applications: 'Multi-site enterprise energy management, ESG carbon compliance reporting'
  },
  {
    code: 'eDAS-STUDIO-PRO',
    name: 'energyDAS Studio™ 3D Modeling Suite',
    category: 'Software',
    voltage: 'N/A (Desktop / Web)',
    specs: 'ASHRAE 90.1 compliance, 8760-hour load simulation, peak demand shaving models',
    applications: 'Energy engineers, architects, LEED certification, solar microgrid sizing'
  },
  {
    code: 'eDAS-PWR-24V',
    name: 'DIN-Rail Industrial Power Supply',
    category: 'Systems',
    voltage: 'Universal 85–264V AC (50/60Hz)',
    specs: '24V DC / 10A output, 94% efficiency, Class I Div 2 hazardous rated',
    applications: 'Control panel instrument power, sensor excitation'
  }
];

export const PILLARS_DATA = [
  {
    id: 'portal',
    badge: 'energyDAS Portal',
    title: 'Energy Cloud Dashboard',
    tagline: 'Cloud-based secure management, control & operations reporting with an intuitive interface.',
    image: '/src/assets/images/hero_energy_controls_factory_1790438072624.jpg',
    features: [
      'Encrypted multi-tenant cloud architecture with role-based access',
      'Instant real-time kW, kVAR, power factor, and harmonic distortion graphing',
      'Automated peak demand alert triggers via SMS, email, and automated PLC commands',
      'Utility tariff engine supporting complex Time-of-Use (TOU) and ratchets'
    ],
    highlight: 'Secure Cloud SCADA & Telemetry'
  },
  {
    id: 'systems',
    badge: 'energyDAS Systems',
    title: 'Systems - Controls & Automation',
    tagline: 'Wireless PLC, metering, digital relays, analog I/O and industrial power supply units.',
    image: '/src/assets/images/systems_plc_hardware_1790438086910.jpg',
    features: [
      'Universal voltage input: 100V to 690V single & 3-phase (50Hz / 60Hz)',
      'Class 0.2 revenue-grade precision accuracy compliant with ANSI C12.20',
      'Wireless long-range 900MHz / 2.4GHz mesh eliminates expensive conduit runs',
      'Seamless Modbus TCP/RTU, BACnet IP, and MQTT native integration'
    ],
    highlight: 'Ruggedized Industrial Hardware'
  },
  {
    id: 'engineering',
    badge: 'energyDAS Engineering',
    title: 'Energy Engineering Services',
    tagline: 'Advanced energy engineering services combining site-specific systems analysis and field execution.',
    image: '/src/assets/images/engineering_services_team_1790438099297.jpg',
    features: [
      'Comprehensive on-site ASHRAE Level I, II & III investment-grade energy audits',
      'Power quality analysis, voltage sag recording, and active harmonic filtering design',
      'Turnkey commissioning, sensor calibration, and utility rebate filing',
      'Industrial motor and compressor variable frequency drive (VFD) retrofitting'
    ],
    highlight: 'Licensed Professional Engineers'
  },
  {
    id: 'studio',
    badge: 'energyDAS Studio™',
    title: 'Energy Modeling & Applications',
    tagline: 'Whole-building energy modeling software with 8,760 hourly load and lighting analysis.',
    image: '/src/assets/images/studio_building_energy_model_1790438111503.jpg',
    features: [
      'Full 3D CAD/BIM model importing with hourly solar radiation tracing',
      'Predictive thermal envelope simulation and HVAC chiller plant staging',
      'Interactive peak demand shaving and battery storage ROI forecasting',
      'Automated documentation export for LEED, Title 24, and ISO 50001 compliance'
    ],
    highlight: '3D Simulation & Analysis Engine'
  }
];
