import { useState, useEffect } from 'react';
import { X, Activity, Download, ShieldCheck, Zap, AlertTriangle, RefreshCw, Layers } from 'lucide-react';

interface PortalDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsult: () => void;
}

export function PortalDemoModal({ isOpen, onClose, onConsult }: PortalDemoModalProps) {
  const [loadShedActive, setLoadShedActive] = useState(false);
  const [exportNotice, setExportNotice] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalKw = loadShedActive ? 324.2 : 418.6;

  const handleExportCsv = () => {
    // Generate real CSV download
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Timestamp,Circuit,Voltage_V,Current_A,ActivePower_kW,PowerFactor\n"
      + "2026-09-26 08:40:00,Main Switchgear 480V,480.2,504.1,418.6,0.98\n"
      + "2026-09-26 08:40:00,Chiller Plant #1,479.8,138.2,114.2,0.96\n"
      + "2026-09-26 08:40:00,Press Line Automation,480.4,224.5,186.4,0.99\n"
      + "2026-09-26 08:40:00,Air Compressor 100HP,480.1,110.8,92.1,0.95\n"
      + "2026-09-26 08:40:00,Facility High-Bay LED,277.2,54.1,25.9,0.99\n";

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "energyDAS_Telemetry_Export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          aria-label="Close portal modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-950 border border-blue-600 flex items-center justify-center">
              <Zap className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-white font-display">
                  energyDAS Portal
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-400">
                  Cloud Live Feed
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Authenticated Operator: <strong className="text-white">fgoto@energydas.com</strong> · Facility #42-Elkhart
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLoadShedActive(!loadShedActive)}
              className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                loadShedActive
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {loadShedActive ? 'Shedding Engaged (-94 kW)' : 'Test Peak Load Shed'}
            </button>
            <button
              onClick={handleExportCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-xs font-bold uppercase text-white transition-colors cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {exportNotice && (
          <div className="mt-3 p-2.5 rounded bg-emerald-950/80 border border-emerald-600 text-xs text-emerald-300 flex items-center justify-between">
            <span>energyDAS_Telemetry_Export.csv generated and saved successfully.</span>
          </div>
        )}

        {/* Live Gauges & Power Indicators */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Total Facility Demand</span>
            <div className="text-2xl font-extrabold text-cyan-300 mt-1">
              {totalKw.toFixed(1)} kW
            </div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Peak Limit: 550.0 kW</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Bus Voltage (L-L)</span>
            <div className="text-2xl font-extrabold text-white mt-1">
              480.2 V
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Frequency: 60.01 Hz</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Operating Power Factor</span>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">
              0.98 PF
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">Zero Utility Penalty</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Wireless Nodes Active</span>
            <div className="text-2xl font-extrabold text-white mt-1">
              18 / 18
            </div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Mesh Status: Optimal</div>
          </div>
        </div>

        {/* Real Submeter Circuit Breakdown */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            <span>Multi-Circuit Submeter Feeds (ANSI Class 0.2 Revenue Grade)</span>
            <span className="text-cyan-400 font-mono">Refresh Rate: 1.0s</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div>
                <strong className="text-white block">Press Line #1 & Stamping Automation</strong>
                <span className="text-[11px] text-slate-400 font-mono">CT Circuit 01-03 · 480V 3-Phase · 224.5 A</span>
              </div>
              <div className="text-right font-mono">
                <span className="text-sm font-bold text-white">186.4 kW</span>
                <span className="text-[10px] text-emerald-400 block">Status: Running Normal</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div>
                <strong className="text-white block">Central HVAC Chiller Plant & Cooling Towers</strong>
                <span className="text-[11px] text-slate-400 font-mono">CT Circuit 04-06 · 480V 3-Phase · 138.2 A</span>
              </div>
              <div className="text-right font-mono">
                <span className="text-sm font-bold text-white">114.2 kW</span>
                <span className="text-[10px] text-emerald-400 block">Status: Modulating Load</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div>
                <strong className="text-white block">Main Air Compressor Bank (100 HP Rotary)</strong>
                <span className="text-[11px] text-slate-400 font-mono">CT Circuit 07-09 · 480V 3-Phase · 110.8 A</span>
              </div>
              <div className="text-right font-mono">
                <span className={`text-sm font-bold ${loadShedActive ? 'text-amber-400' : 'text-white'}`}>
                  {loadShedActive ? '0.0 kW (Shed)' : '92.1 kW'}
                </span>
                <span className="text-[10px] text-slate-400 block">
                  {loadShedActive ? 'Staged via PLC-840 Relay' : 'Operating in Band'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div>
                <strong className="text-white block">High-Bay LED & Facility Ancillary Circuits</strong>
                <span className="text-[11px] text-slate-400 font-mono">CT Circuit 10-12 · 277V Single-Phase · 54.1 A</span>
              </div>
              <div className="text-right font-mono">
                <span className="text-sm font-bold text-white">25.9 kW</span>
                <span className="text-[10px] text-emerald-400 block">Status: Scheduled Dimming</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Want to connect this cloud portal to your facility's existing meters or PLCs?
          </div>
          <button
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors cursor-pointer"
          >
            <span>Request Full Enterprise Trial</span>
          </button>
        </div>
      </div>
    </div>
  );
}
