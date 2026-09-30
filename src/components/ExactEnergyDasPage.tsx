import { useState } from 'react';
import { Search, Lock, ChevronDown, Check, X, ArrowRight, ExternalLink, Download } from 'lucide-react';
import { NEWS_ARCHIVE, NewsItem } from '../data/energyDasData';

interface ExactEnergyDasPageProps {
  onOpenPortalModal: () => void;
  onOpenPartnerModal: () => void;
  onOpenAuditModal: () => void;
  onOpenStudioModal: () => void;
  onOpenSystemsSpecs: () => void;
  onSelectNews: (news: NewsItem) => void;
}

export function ExactEnergyDasPage({
  onOpenPortalModal,
  onOpenPartnerModal,
  onOpenAuditModal,
  onOpenStudioModal,
  onOpenSystemsSpecs,
  onSelectNews
}: ExactEnergyDasPageProps) {
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  // Portal card mock login state
  const [loginEmail, setLoginEmail] = useState('fgoto@energydas.com');
  const [loginPassword, setLoginPassword] = useState('••••••••');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchFeedback(`Searching for "${searchTerm}" in energyDAS Product Code Directory...`);
      setTimeout(() => {
        onOpenSystemsSpecs();
        setSearchFeedback(null);
      }, 700);
    }
  };

  const handleCardLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenPortalModal();
  };

  return (
    <div className="w-full max-w-[1360px] mx-auto bg-white shadow-2xl border border-slate-300 my-0 sm:my-3">
      {/* 1. TOP BLUE RIBBON BAR */}
      <div className="bg-[#244c8c] text-white px-4 sm:px-6 py-1.5 text-[11px] sm:text-xs font-normal border-b border-[#1b3b6d]">
        <div className="flex flex-wrap items-center justify-between gap-y-1">
          {/* Left: User welcome & login */}
          <div className="flex items-center gap-3">
            <span className="text-slate-200">Welcome Guest</span>
            <button 
              onClick={onOpenAuditModal} 
              className="text-white hover:underline cursor-pointer"
            >
              Register
            </button>
            <button 
              onClick={onOpenPortalModal} 
              className="flex items-center gap-1 text-white hover:underline cursor-pointer"
            >
              <Lock className="h-3 w-3 text-white" />
              <span>Login</span>
            </button>
          </div>

          {/* Center: Phone & Email */}
          <div className="hidden md:flex items-center gap-6">
            <span>Call: (800) 380 1121</span>
            <span>email: sales@energydas.com</span>
          </div>

          {/* Right: Country Flag, Language & Download ZIP */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span>Country</span>
              {/* US Flag SVG Icon */}
              <svg className="w-5 h-3.5 rounded-[1px] shadow-sm inline-block" viewBox="0 0 640 480">
                <g fillRule="evenodd">
                  <path fill="#bd3d44" d="M0 0h640v480H0z"/>
                  <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"/>
                  <path fill="#192f5d" d="M0 0h296v259H0z"/>
                  <circle cx="148" cy="129" r="6" fill="#fff"/>
                </g>
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-slate-200">
              <span>Language</span>
              <ChevronDown className="h-3 w-3" />
            </div>
           
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE NAVIGATION BAR */}
      <div className="bg-white px-4 sm:px-6 py-2.5 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            {/* Concentric Bullseye Rings Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#1d3d70] bg-white shadow-sm">
              <div className="h-6 w-6 rounded-full border-[2.5px] border-[#1d3d70] flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[#cc1b23]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-[#1d3d70] font-sans">energy</span>
                <span className="text-2xl font-black tracking-tight text-[#cc1b23] font-sans">DAS</span>
                {/* Small US Flag next to brand */}
                <svg className="w-4 h-3 rounded-[1px] shadow-xs inline-block ml-0.5" viewBox="0 0 640 480">
                  <path fill="#bd3d44" d="M0 0h640v480H0z"/>
                  <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"/>
                  <path fill="#192f5d" d="M0 0h296v259H0z"/>
                </svg>
              </div>
              <div className="text-[10px] text-[#4a5568] tracking-normal font-sans font-medium -mt-1">
                Measure. Monitor. Manage.
              </div>
            </div>
          </div>

          {/* Navigation Links (Single-Line, Uppercase, Charcoal) */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold tracking-wider text-slate-800">
            <a href="#" className="hover:text-[#244c8c] transition-colors py-1">HOME</a>
            <button onClick={onOpenSystemsSpecs} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">SYSTEMS</button>
            <button onClick={onOpenAuditModal} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">ENGINEERING</button>
            <button onClick={onOpenStudioModal} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">APPLICATIONS</button>
            <button onClick={() => onSelectNews(NEWS_ARCHIVE[0])} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">NEWS</button>
            <button onClick={onOpenAuditModal} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">COMPANY</button>
            <button onClick={onOpenAuditModal} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">CAREERS</button>
            <button onClick={onOpenAuditModal} className="hover:text-[#244c8c] transition-colors cursor-pointer py-1 uppercase">CONTACT US</button>
          </nav>

          {/* Search Box with blue GO button */}
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <div className="relative">
              <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Keyword or Product Code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-48 sm:w-56 pl-8 pr-2 py-1 text-xs border border-slate-300 rounded-l-md bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#244c8c]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#2b5597] hover:bg-[#204279] text-white text-[11px] font-bold px-3 py-1 rounded-r-md uppercase transition-colors cursor-pointer"
            >
              GO
            </button>
          </form>
        </div>

        {searchFeedback && (
          <div className="text-xs text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1.5 mt-2 rounded">
            {searchFeedback}
          </div>
        )}
      </div>

      {/* 3. MAIN WORKSPACE CONTENT CANVAS (With light-gray container styling matching screenshot) */}
      <div className="p-3 sm:p-4 bg-[#f2f4f7] space-y-3 sm:space-y-4">
        {/* ROW A: TOP HERO SECTION + RIGHT NEWS/PARTNER SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          {/* Left Hero Box (76% width / 9 cols) */}
          <div className="lg:col-span-9 bg-white border border-slate-300 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[310px]">
            {/* Split layout: Industrial machinery on the left, copy on the right */}
            <div className="relative w-full h-full min-h-[300px] flex flex-col md:flex-row items-center justify-between">
              {/* Machine Image on Left/Center */}
              <div className="w-full md:w-3/5 h-full min-h-[220px] md:min-h-[300px] relative bg-slate-100 overflow-hidden">
                <img
                  src="/images/hero_energy_controls_factory_1790438072624.jpg"
                  alt="energyDAS Factory Machine Press and Industrial Automation"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/95 hidden md:block" />
              </div>

              {/* Text Copy on Right (Directly matching the screenshot typography) */}
              <div className="w-full md:w-2/5 p-4 sm:p-6 flex flex-col justify-center text-left bg-white/95 md:bg-transparent z-10">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight font-sans">
                  energyDAS Controls
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-[#4b5563] leading-snug">
                  Measure, Monitor & Control from simple systems to complex machines and processes
                </p>

                {/* Bullet List with Dashes */}
                <ul className="mt-4 space-y-1.5 text-xs text-[#374151] font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="font-bold text-[#1f2937]">-</span>
                    <span>Single phase & 3 phase</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="font-bold text-[#1f2937]">-</span>
                    <span>Universal Voltages for worldwide usage</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="font-bold text-[#1f2937]">-</span>
                    <span>50Hz to 60Hz</span>
                  </li>
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  <button
                    onClick={onOpenAuditModal}
                    className="bg-[#244c8c] hover:bg-[#1a3869] text-white text-[11px] font-bold px-3 py-1.5 rounded uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Information
                  </button>
                  <button
                    onClick={onOpenSystemsSpecs}
                    className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-[11px] font-bold px-3 py-1.5 rounded uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Specs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (24% width / 3 cols): energyDAS Partner + NEWS */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {/* Top Box: energyDAS Partner® with red LEARN MORE button */}
            <div className="bg-[#e9ecf0] border border-slate-300 p-2.5 flex items-center justify-between shadow-xs">
              <span className="text-xs font-bold text-[#204279] tracking-tight">
                energyDAS Partner®
              </span>
              <button
                onClick={onOpenPartnerModal}
                className="bg-[#cc1b23] hover:bg-[#a8141b] text-white text-[10px] font-bold px-2 py-1 rounded-[2px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>

            {/* Bottom Box: NEWS with Archives */}
            <div className="bg-[#e9ecf0] border border-slate-300 flex-1 flex flex-col shadow-xs">
              {/* News Header Bar */}
              <div className="px-3 py-1.5 border-b border-slate-300 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-wider text-[11px]">NEWS</span>
                  <div className="w-2.5 h-2.5 border border-slate-400 bg-white flex items-center justify-center text-[7px] text-slate-600">
                    –
                  </div>
                </div>
                <button
                  onClick={() => onSelectNews(NEWS_ARCHIVE[0])}
                  className="text-[11px] text-[#2b5597] hover:underline cursor-pointer"
                >
                  Archives
                </button>
              </div>

              {/* News Rows Container (White background with 3 stories from screenshot) */}
              <div className="bg-white p-2 flex-1 flex flex-col justify-between divide-y divide-slate-100">
                {/* Story 1: Dr. Felix Goto */}
                <div 
                  onClick={() => onSelectNews(NEWS_ARCHIVE[0])}
                  className="py-1.5 flex items-start gap-2 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <img
                    src="/src/assets/images/news_award_dr_goto_1790438491460.jpg"
                    alt="Dr. Felix Goto receiving award"
                    className="w-11 h-11 object-cover border border-slate-300 shrink-0"
                  />
                  <div className="text-[10px] leading-tight">
                    <div className="text-slate-500 font-medium">January 26 2023</div>
                    <div className="text-slate-800 font-normal hover:text-[#244c8c] line-clamp-3">
                      EnergyDAS President, Dr. Felix Goto receives award in Elkhart Indiana, United States
                    </div>
                  </div>
                </div>

                {/* Story 2: GE Smartgrids in Asia */}
                <div 
                  onClick={() => onSelectNews(NEWS_ARCHIVE[1])}
                  className="py-1.5 flex items-start gap-2 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <img
                    src="/src/assets/images/news_smartgrid_substation_1790438502081.jpg"
                    alt="Substation smartgrids Asia"
                    className="w-11 h-11 object-cover border border-slate-300 shrink-0"
                  />
                  <div className="text-[10px] leading-tight">
                    <div className="text-slate-500 font-medium">October 23 2017</div>
                    <div className="text-slate-800 font-normal hover:text-[#244c8c] line-clamp-3">
                      EnergyDAS partners with GE to bring energy smartgrids in Asia
                    </div>
                  </div>
                </div>

                {/* Story 3: Dallas TX Contract */}
                <div 
                  onClick={() => onSelectNews(NEWS_ARCHIVE[2])}
                  className="py-1.5 flex items-start gap-2 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <img
                    src="/src/assets/images/news_dallas_building_1790438513579.jpg"
                    alt="Dallas Texas Building"
                    className="w-11 h-11 object-cover border border-slate-300 shrink-0"
                  />
                  <div className="text-[10px] leading-tight">
                    <div className="text-slate-500 font-medium">October 20 2017</div>
                    <div className="text-slate-800 font-normal hover:text-[#244c8c] line-clamp-3">
                      EnergyDAS wins USD1M contract in Dallas, TX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW B: CLIENT & PARTNER LOGOS BAR */}
        <div className="bg-white border border-slate-300 px-4 py-3 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700">
            {/* USPS Logo representation */}
            <div className="flex items-center gap-1.5 text-slate-800 font-extrabold tracking-tighter">
              <div className="w-10 h-10 bg-[#1e4381] text-white text-[9px] flex items-center justify-center font-bold">
                <img
                  src="/images/clients/USPS.JPG"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                />
              </div>
             
            </div>

            {/* Mercedes-Benz */}
            <div className="flex items-center gap-1 text-slate-800 font-medium">
              <div className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-[10px] font-bold">
                <img
                  src="/images/clients/MERCEDES.png"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                />
              </div>
             
            </div>

            {/* TOYOTA */}
            <div className="flex items-center gap-1 text-[#cc1b23] font-black tracking-tight text-xs">
              <span ><img
                  src="/images/clients/TOYOTA.png"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                /></span>
            </div>

            {/* PATRICK INDUSTRIES, INC. */}
            <div className="flex items-center gap-1 text-slate-800 font-bold tracking-tight text-xs">
              <span>
              <span><img
                  src="/images/clients/Patrick.png"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                /></span>
          
              
            </div>

            {/* NISSAN */}
            <div className="flex items-center gap-1 text-slate-700 font-bold tracking-widest text-[11px]">
              <span><img
                  src="/images/clients/NISSAN.png"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                /></span>
            </div>

            {/* DTE Energy */}
            <div className="flex items-center gap-1 text-[#244c8c] font-black text-xs">
              <span><img
                  src="/images/clients/DTE(2).JPG"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                /></span>
            </div>

            {/* SKYLINE */}
            <div className="flex items-center gap-1 text-slate-800 font-semibold text-[11px]">
              <span><img
                  src="/images/clients/USPS.JPG"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                /></span>
            </div>

            {/* Certified Blue Oval */}
            <div className="flex items-center gap-1 text-slate-800 font-semibold text-[11px]">
              <span><img
                  src="/images/clients/Moryde.JPEG"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-10 h-10 object-cover"
                /></span>
            </div>

          </div>
        </div>

        {/* ROW C: THE 4 CORE SOLUTION PILLARS (Rounded white cards with solid dark bottom banners) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          {/* CARD 1: energyDAS Portal (with Interactive Login Form Mockup) */}
          <div className="bg-white border border-slate-300 rounded-t-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors">
            {/* Top Title */}
            <div className="p-3 text-center border-b border-slate-200">
              <h3 className="text-base font-bold text-[#1d3d70] font-sans">
                energyDAS Portal
              </h3>
            </div>

            {/* Center: Real Mockup of the Login Box as shown in screenshot */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center bg-slate-50/60">
              <form onSubmit={handleCardLogin} className="p-3 rounded border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-700 font-semibold border-b border-slate-100 pb-1">
                  <span>Secure Login</span>
                  <Lock className="h-3 w-3 text-slate-500" />
                </div>

                <div>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full bg-[#fef9c3] border border-amber-300 rounded px-2 py-1 text-[11px] text-slate-800 font-mono focus:outline-none"
                    placeholder="fgoto@energydas.com"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded px-2 py-1 text-[11px] text-slate-800 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-slate-600">
                  <input
                    type="checkbox"
                    id="rememberDevice"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-blue-600 focus:ring-0"
                  />
                  <label htmlFor="rememberDevice" className="cursor-pointer">
                    Remember me in this Device
                  </label>
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-[#244c8c] hover:bg-[#1b3a6d] text-white text-[10px] font-bold px-3 py-1 rounded transition-colors cursor-pointer"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={onOpenPortalModal}
                    className="text-[10px] text-[#244c8c] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Dark Banner */}
            <div 
              onClick={onOpenPortalModal}
              className="bg-[#1f2937] hover:bg-[#111827] text-white p-3.5 text-left cursor-pointer transition-colors"
            >
              <div className="text-xs font-bold font-sans">
                Energy Cloud Dashboard
              </div>
              <div className="text-[10px] text-slate-300 mt-1 leading-snug">
                Cloud-based secure management, control, operations reporting intuitive interface.
              </div>
            </div>
          </div>

          {/* CARD 2: energyDAS Systems */}
          <div className="bg-white border border-slate-300 rounded-t-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors">
            {/* Top Title */}
            <div className="p-3 text-center border-b border-slate-200">
              <h3 className="text-base font-bold text-[#1d3d70] font-sans">
                energyDAS Systems
              </h3>
            </div>

            {/* Center: Hardware Systems Image */}
            <div 
              onClick={onOpenSystemsSpecs}
              className="p-3 sm:p-4 flex-1 flex items-center justify-center bg-slate-50/60 cursor-pointer"
            >
              <div className="w-full aspect-4/3 rounded overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/images/PLC.jpg"
                  alt="energyDAS Systems - Wireless PLC, Metering, Digital Relay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Dark Banner */}
            <div 
              onClick={onOpenSystemsSpecs}
              className="bg-[#1f2937] hover:bg-[#111827] text-white p-3.5 text-left cursor-pointer transition-colors"
            >
              <div className="text-xs font-bold font-sans">
                Systems - Controls & Automation
              </div>
              <div className="text-[10px] text-slate-300 mt-1 leading-snug">
                Wireless PLC, Metering, Digital, Relay, Analog and power supply options.
              </div>
            </div>
          </div>

          {/* CARD 3: energyDAS Engineering */}
          <div className="bg-white border border-slate-300 rounded-t-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors">
            {/* Top Title */}
            <div className="p-3 text-center border-b border-slate-200">
              <h3 className="text-base font-bold text-[#1d3d70] font-sans">
                energyDAS Engineering
              </h3>
            </div>

            {/* Center: Female Engineer Photo */}
            <div 
              onClick={onOpenAuditModal}
              className="p-3 sm:p-4 flex-1 flex items-center justify-center bg-slate-50/60 cursor-pointer"
            >
              <div className="w-full aspect-4/3 rounded overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/images/SmilingEngineer.png"
                  alt="energyDAS Engineering Services and Systems Analysis"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bottom Dark Banner */}
            <div 
              onClick={onOpenAuditModal}
              className="bg-[#1f2937] hover:bg-[#111827] text-white p-3.5 text-left cursor-pointer transition-colors"
            >
              <div className="text-xs font-bold font-sans">
                Energy Engineering Services
              </div>
              <div className="text-[10px] text-slate-300 mt-1 leading-snug">
                Advanced energy engineering services that combine site specific systems analysis.
              </div>
            </div>
          </div>

          {/* CARD 4: energyDAS Studio™ */}
          <div className="bg-white border border-slate-300 rounded-t-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors">
            {/* Top Title */}
            <div className="p-3 text-center border-b border-slate-200">
              <h3 className="text-base font-bold text-[#1d3d70] font-sans">
                energyDAS Studio™
              </h3>
            </div>

            {/* Center: 3D Wireframe Building Blueprint */}
            <div 
              onClick={onOpenStudioModal}
              className="p-3 sm:p-4 flex-1 flex items-center justify-center bg-slate-50/60 cursor-pointer"
            >
              <div className="w-full aspect-4/3 rounded overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/images/Studio.png"
                  alt="energyDAS Studio Whole Building Energy Modeling Software"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Dark Banner */}
            <div 
              onClick={onOpenStudioModal}
              className="bg-[#1f2937] hover:bg-[#111827] text-white p-3.5 text-left cursor-pointer transition-colors"
            >
              <div className="text-xs font-bold font-sans">
                Energy Modeling & Applications
              </div>
              <div className="text-[10px] text-slate-300 mt-1 leading-snug">
                Whole building energy modeling software with Hourly Load and Lighting analysis.
              </div>
            </div>
          </div>
        </div>

        {/* 4. FOOTER (Matching screenshot: social circle icons + copyright text) */}
        <div className="pt-4 pb-3 text-center border-t border-slate-300">
          {/* Social circle icons */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {/* Facebook */}
            <div className="w-7 h-7 rounded-full bg-[#525252] hover:bg-[#3b5998] text-white flex items-center justify-center text-xs font-bold cursor-pointer transition-colors">
              f
            </div>
            {/* Google+ */}
            <div className="w-7 h-7 rounded-full bg-[#525252] hover:bg-[#db4437] text-white flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors">
              g+
            </div>
            {/* LinkedIn */}
            <div className="w-7 h-7 rounded-full bg-[#525252] hover:bg-[#0077b5] text-white flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors">
              in
            </div>
            {/* Pinterest */}
            <div className="w-7 h-7 rounded-full bg-[#525252] hover:bg-[#bd081c] text-white flex items-center justify-center text-xs font-bold cursor-pointer transition-colors font-serif">
              p
            </div>
            {/* Twitter */}
            <div className="w-7 h-7 rounded-full bg-[#525252] hover:bg-[#1da1f2] text-white flex items-center justify-center text-[10px] font-bold cursor-pointer transition-colors">
              🐦
            </div>
          </div>

          {/* Centered copyright notice from screenshot */}
          <div className="text-[11px] text-slate-600 font-sans">
            2017-2024 www.energydas.com | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
