import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single Text Element Brand Wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 font-display"
        >
          Vanguard Dynamics
        </a>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#capabilities" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#estimator" className="hover:text-white transition-colors">
            Estimator
          </a>
          <a href="#cases" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#philosophy" className="hover:text-white transition-colors">
            Principles
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Due Diligence
          </a>
        </nav>

        {/* Zone 3: Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenAuditModal}
            className="group inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-900 transition-all hover:bg-white hover:shadow-lg hover:shadow-cyan-500/10 active:scale-98 whitespace-nowrap cursor-pointer"
          >
            <span>Request Architecture Audit</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-6 py-5">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-300">
            <a 
              href="#capabilities" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Capabilities
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              System Estimator
            </a>
            <a 
              href="#cases" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Case Studies
            </a>
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Principles
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Due Diligence
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full rounded-lg bg-neutral-100 py-2.5 text-center text-xs font-semibold text-neutral-900"
              >
                Request Architecture Audit
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
