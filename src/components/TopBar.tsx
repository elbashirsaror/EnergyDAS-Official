import { useState } from 'react';
import { Search, Phone, Mail, User, LogIn, Globe, Shield, X, ArrowRight } from 'lucide-react';
import { PRODUCT_CATALOG, ProductCodeItem } from '../data/energyDasData';

interface TopBarProps {
  onOpenPortalModal: () => void;
  onOpenContactModal: () => void;
  onSelectProduct: (product: ProductCodeItem) => void;
}

export function TopBar({ onOpenPortalModal, onOpenContactModal, onSelectProduct }: TopBarProps) {
  {/* const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ProductCodeItem[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [voltageStandard, setVoltageStandard] = useState<'us' | 'global'>('us');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = PRODUCT_CATALOG.filter(
      (item) =>
        item.code.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.specs.toLowerCase().includes(q)
    );
    setSearchResults(results);
    setShowSearchResults(true);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      {/* 1. Utility Top Ribbon (Directly reflecting the energyDAS reference layout) */}
      <div className="bg-blue-900/90 border-b border-blue-800/60 px-4 py-1.5 text-xs text-blue-100">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-y-1">
          {/* Left: User Auth links */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="text-blue-200">Welcome Guest</span>
            <span className="text-blue-400">|</span>
            <button 
              onClick={onOpenContactModal} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Register Account
            </button>
            <span className="text-blue-400">|</span>
            <button 
              onClick={onOpenPortalModal} 
              className="flex items-center gap-1 font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <LogIn className="h-3 w-3" />
              <span>Portal Login</span>
            </button>
          </div>

          {/* Center: Toll-Free Hotline & Sales Dispatch */}
          <div className="hidden lg:flex items-center gap-5 text-xs">
            <a 
              href="tel:18003801121" 
              className="flex items-center gap-1.5 text-cyan-200 hover:text-white transition-colors font-mono"
            >
              <Phone className="h-3.5 w-3.5 text-cyan-300" />
              <span>Toll Free: (800) 380-1121</span>
            </a>
            <span className="text-blue-400">|</span>
            <a 
              href="mailto:sales@energydas.com" 
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-cyan-300" />
              <span>sales@energydas.com</span>
            </a>
          </div>

          {/* Right: Voltage Standard & Region Toggle */}
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => setVoltageStandard(voltageStandard === 'us' ? 'global' : 'us')}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-700/50 hover:bg-blue-800 transition-colors cursor-pointer text-[11px]"
              title="Toggle Regional Voltage & Frequency Standard"
            >
              <Globe className="h-3 w-3 text-cyan-400" />
              <span>
                {voltageStandard === 'us' ? 'Standard: 🇺🇸 US 480V/60Hz' : 'Standard: 🌐 EU 400V/50Hz'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Logo, Links & Product Code Search */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo with Concentric Ring Icon & Tagline */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              {/* Concentric Target Sensor Rings Icon */}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 border-2 border-blue-500 shadow-inner group-hover:scale-105 transition-transform">
                <div className="h-6 w-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-sm shadow-red-500" />
                </div>
              </div>

              {/* Brand Typography & Tagline */}
              <div>
                <div className="flex items-baseline tracking-tight font-display">
                  <span className="text-2xl font-bold text-white tracking-tight">energy</span>
                  <span className="text-2xl font-extrabold text-red-500 tracking-tight">DAS</span>
                  <span className="ml-1 text-[10px] text-slate-400 font-mono">®</span>
                </div>
                <div className="text-[10px] uppercase font-semibold tracking-wider text-cyan-300 -mt-0.5">
                  Measure. Monitor. Manage.
                </div>
              </div>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-200">
            <a href="#systems" className="hover:text-cyan-400 transition-colors py-1">
              Systems
            </a>
            <a href="#engineering" className="hover:text-cyan-400 transition-colors py-1">
              Engineering
            </a>
            <a href="#applications" className="hover:text-cyan-400 transition-colors py-1">
              Applications
            </a>
            <a href="#studio" className="hover:text-cyan-400 transition-colors py-1">
              Studio™
            </a>
            <a href="#news" className="hover:text-cyan-400 transition-colors py-1">
              News
            </a>
            <a href="#catalog" className="hover:text-cyan-400 transition-colors py-1">
              Products
            </a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors py-1">
              ROI Tool
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors py-1">
              Contact Us
            </a>
          </nav>

          {/* Right: Product Code / Keyword Search Bar */}
          <div className="relative flex items-center gap-3">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Keyword or Product Code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-44 sm:w-56 rounded-l-md border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-r-md bg-blue-600 px-3 py-1.5 text-xs font-bold uppercase text-white hover:bg-blue-500 transition-colors cursor-pointer"
              >
                GO
              </button>
            </form>

            <button
              onClick={onOpenContactModal}
              className="hidden sm:inline-flex items-center gap-1 rounded-md bg-red-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Live Search Results Dropdown */}
        {showSearchResults && (
          <div className="absolute left-4 right-4 sm:left-auto sm:right-8 sm:w-[480px] top-full mt-2 rounded-lg border border-slate-700 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-md z-50">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                CATALOG SEARCH RESULTS ({searchResults.length})
              </span>
              <button
                onClick={() => setShowSearchResults(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {searchResults.length === 0 ? (
              <p className="text-xs text-slate-400 py-2">
                No matching product code found. Try "PLC", "MTR", "Relay", or "Studio".
              </p>
            ) : (
              <div className="max-h-72 overflow-y-auto space-y-2">
                {searchResults.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setShowSearchResults(false);
                      onSelectProduct(item);
                    }}
                    className="w-full text-left p-2.5 rounded bg-slate-950/60 border border-slate-800 hover:border-cyan-500 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-300">
                        {item.code}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">{item.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {item.specs}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );*/}
}
