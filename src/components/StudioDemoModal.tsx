import { useState, useEffect } from 'react';
import { X, Building2, Sun, CloudRain, Zap, ArrowRight, Layers, Sliders } from 'lucide-react';

interface StudioDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsult: () => void;
}

export function StudioDemoModal({ isOpen, onClose, onConsult }: StudioDemoModalProps) {
  const [solarPvKw, setSolarPvKw] = useState(250);
  const [bessCapacityKwh, setBessCapacityKwh] = useState(500);
  const [selectedSeason, setSelectedSeason] = useState<'summer' | 'winter'>('summer');

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

  // Modeling calculations
  const baselinePeak = selectedSeason === 'summer' ? 840 : 690;
  const solarContribution = Math.round(solarPvKw * 0.75);
  const batteryPeakClip = Math.round(bessCapacityKwh * 0.25);
  const netPeak = Math.max(220, baselinePeak - solarContribution - batteryPeakClip);
  const netReductionPct = Math.round(((baselinePeak - netPeak) / baselinePeak) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          aria-label="Close studio modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="h-10 w-10 rounded-full bg-blue-950 border border-blue-600 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-white font-display">
                energyDAS Studio™ 3D Modeler
              </h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-950 border border-blue-700 text-cyan-400">
                ASHRAE 90.1 Engine
              </span>
            </div>
            <div className="text-xs text-slate-400">
              8,760 Hourly Thermodynamic Load, Solar PV & Battery Peak Demand Simulator
            </div>
          </div>
        </div>

        {/* 3D Wireframe Visualizer & Simulation Parameters */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Model Wireframe Display (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-16/10 w-full bg-slate-950 overflow-hidden">
              <img
                src="/src/assets/images/studio_building_energy_model_1790438111503.jpg"
                alt="energyDAS Studio 3D Wireframe Simulation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-700 px-3 py-1 rounded text-[11px] font-mono text-cyan-300">
                CAMPUS SIMULATION · 140,000 SQ FT
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Baseline Peak: <strong className="text-red-400">{baselinePeak} kW</strong></span>
                <span>Net Model Peak: <strong className="text-emerald-400">{netPeak} kW</strong></span>
              </div>
            </div>

            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Climate Zone:</span>
                <span className="font-semibold text-white">Zone 4A (Mixed-Humid)</span>
              </div>
              <div className="font-mono text-emerald-400 font-bold">
                -{netReductionPct}% Peak Demand Shaved
              </div>
            </div>
          </div>

          {/* Right: Simulation Controls (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-3">
                Simulation Variables
              </span>

              {/* Season Selection */}
              <div className="mb-4">
                <label className="block text-xs text-slate-300 font-semibold mb-1">
                  Season Profile:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSeason('summer')}
                    className={`py-1.5 px-3 rounded text-xs font-bold transition-colors cursor-pointer ${
                      selectedSeason === 'summer'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-950 border border-slate-800 text-slate-400'
                    }`}
                  >
                    Summer High Peak
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSeason('winter')}
                    className={`py-1.5 px-3 rounded text-xs font-bold transition-colors cursor-pointer ${
                      selectedSeason === 'winter'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-950 border border-slate-800 text-slate-400'
                    }`}
                  >
                    Winter Heating Load
                  </button>
                </div>
              </div>

              {/* Solar PV slider */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                  <span>Solar PV Array:</span>
                  <span className="font-mono text-cyan-400 font-bold">{solarPvKw} kW DC</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="600"
                  step="25"
                  value={solarPvKw}
                  onChange={(e) => setSolarPvKw(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
              </div>

              {/* BESS Battery Storage slider */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                  <span>Battery Storage (BESS):</span>
                  <span className="font-mono text-cyan-400 font-bold">{bessCapacityKwh} kWh</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1200"
                  step="50"
                  value={bessCapacityKwh}
                  onChange={(e) => setBessCapacityKwh(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onConsult();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-blue-600 hover:bg-blue-500 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                <span>Request energyDAS Studio™ Demo License</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
