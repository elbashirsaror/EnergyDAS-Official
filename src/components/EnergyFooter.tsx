import { Phone, Mail, Globe, Shield, ExternalLink } from 'lucide-react';

interface EnergyFooterProps {
  onOpenPortalModal: () => void;
  onOpenContactModal: () => void;
}

export function EnergyFooter({ onOpenPortalModal, onOpenContactModal }: EnergyFooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 border-2 border-blue-500 shadow-inner">
                <div className="h-5 w-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                </div>
              </div>
              <div className="flex items-baseline font-display">
                <span className="text-xl font-bold text-white tracking-tight">energy</span>
                <span className="text-xl font-extrabold text-red-500 tracking-tight">DAS</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400 leading-relaxed max-w-sm">
              Measure, Monitor & Control from simple submetering systems to complex machines and manufacturing processes. Universal voltages, 50Hz/60Hz synchronization.
            </p>

            <div className="mt-6 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>Toll Free Sales & Dispatch: (800) 380-1121</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>sales@energydas.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span>Headquarters: Elkhart, Indiana · Dallas, Texas</span>
              </div>
            </div>
          </div>

          {/* Systems Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Hardware Systems
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#systems" className="hover:text-cyan-400 transition-colors">
                  Wireless PLC Controllers
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-cyan-400 transition-colors">
                  Class 0.2 Revenue Submeters
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-cyan-400 transition-colors">
                  Digital Solid-State Relays
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-cyan-400 transition-colors">
                  Industrial Power Supplies
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-cyan-400 transition-colors">
                  BACnet & Modbus Gateways
                </a>
              </li>
            </ul>
          </div>

          {/* Software & Engineering Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Software & Audits
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onOpenPortalModal} 
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  energyDAS Portal (Cloud SCADA)
                </button>
              </li>
              <li>
                <a href="#studio" className="hover:text-cyan-400 transition-colors">
                  energyDAS Studio™ (3D Modeling)
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenContactModal} 
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  ASHRAE Level I, II, III Audits
                </button>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Peak Demand ROI Calculator
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-cyan-400 transition-colors">
                  Smartgrid Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Certifications & Standards
            </h4>
            <ul className="space-y-1.5 text-[11px] font-mono text-slate-400">
              <li className="text-slate-300">ANSI C12.20 Class 0.2</li>
              <li className="text-slate-300">UL 61010-1 Listed</li>
              <li className="text-slate-300">CE Mark & RoHS Compliant</li>
              <li className="text-slate-300">BACnet IP & MSTP Tested</li>
              <li className="text-slate-300">Modbus TCP / RTU Native</li>
              <li className="text-slate-300">MQTT Sparkplug B Ready</li>
              <li className="text-slate-300">ISO 50001 Energy Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching screenshot footer: 2017-2026 www.energydas.com | All Rights Reserved */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 font-mono">
            2017-2026 www.energydas.com | All Rights Reserved
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={onOpenContactModal}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onOpenContactModal}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Supply
            </button>
            <button 
              onClick={onOpenContactModal}
              className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-semibold"
            >
              24/7 Technical Dispatch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
