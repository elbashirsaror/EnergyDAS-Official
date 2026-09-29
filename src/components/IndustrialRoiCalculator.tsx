import { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingDown, Clock, Zap } from 'lucide-react';

interface RoiCalculatorProps {
  onPreFillQuote: (specs: {
    facility: string;
    voltage: string;
    peakKw: number;
    savings: string;
  }) => void;
}

export function IndustrialRoiCalculator({ onPreFillQuote }: RoiCalculatorProps) {
  const [facilityType, setFacilityType] = useState('manufacturing');
  const [voltage, setVoltage] = useState('480v-3phase');
  const [peakKw, setPeakKw] = useState(750);
  const [demandCharge, setDemandCharge] = useState(18); // $18/kW-month

  // Calculations
  // Typically submetering + automated PLC load shedding shaves 12% to 22% of peak demand
  const peakReductionPct = facilityType === 'cold-storage' ? 0.20 : facilityType === 'manufacturing' ? 0.16 : 0.14;
  const shavedKw = Math.round(peakKw * peakReductionPct);
  const monthlySavings = shavedKw * demandCharge;
  const annualSavings = monthlySavings * 12;

  // Estimated system investment based on scale
  const estimatedHardwareCost = Math.round(12000 + peakKw * 14);
  const paybackMonths = (estimatedHardwareCost / monthlySavings).toFixed(1);

  const handleApply = () => {
    onPreFillQuote({
      facility: facilityType === 'manufacturing' ? 'Industrial Manufacturing Plant' : facilityType === 'cold-storage' ? 'Refrigerated Cold Storage' : 'Commercial Facility',
      voltage: voltage === '480v-3phase' ? '480V 3-Phase (60Hz)' : voltage === '208v-3phase' ? '208V 3-Phase (60Hz)' : '400V 3-Phase (50Hz EU)',
      peakKw,
      savings: `$${annualSavings.toLocaleString()} / year`
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            Peak Demand & Submetering ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Calculate Your Facility Demand Charge Savings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Automated machine-level submetering and wireless PLC load shed algorithms eliminate costly 15-minute utility demand ratchet penalties.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Facility Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Facility Classification
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFacilityType('manufacturing')}
                    className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                      facilityType === 'manufacturing'
                        ? 'border-cyan-400 bg-blue-950/60 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-white font-bold">Manufacturing / OEM</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Heavy presses & motors</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFacilityType('cold-storage')}
                    className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                      facilityType === 'cold-storage'
                        ? 'border-cyan-400 bg-blue-950/60 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-white font-bold">Cold Storage / Food</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Compressor sequencing</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFacilityType('commercial')}
                    className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                      facilityType === 'commercial'
                        ? 'border-cyan-400 bg-blue-950/60 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-white font-bold">Commercial Campus</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Central chiller & HVAC</div>
                  </button>
                </div>
              </div>

              {/* Voltage Standard */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Facility Distribution Voltage
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setVoltage('480v-3phase')}
                    className={`py-2 px-3 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                      voltage === '480v-3phase'
                        ? 'border-blue-500 bg-blue-900/60 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    480V 3-Phase (US)
                  </button>
                  <button
                    type="button"
                    onClick={() => setVoltage('208v-3phase')}
                    className={`py-2 px-3 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                      voltage === '208v-3phase'
                        ? 'border-blue-500 bg-blue-900/60 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    208V 3-Phase (US)
                  </button>
                  <button
                    type="button"
                    onClick={() => setVoltage('400v-eu')}
                    className={`py-2 px-3 rounded text-xs font-semibold border transition-colors cursor-pointer ${
                      voltage === '400v-eu'
                        ? 'border-blue-500 bg-blue-900/60 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    400V 50Hz (Global)
                  </button>
                </div>
              </div>

              {/* Peak kW Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-200 uppercase tracking-wider">
                    3. Monthly Peak Billing Demand:
                  </span>
                  <span className="font-mono text-cyan-400 text-sm font-extrabold">
                    {peakKw.toLocaleString()} kW
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="4000"
                  step="50"
                  value={peakKw}
                  onChange={(e) => setPeakKw(parseInt(e.target.value))}
                  className="mt-3 w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="mt-1 flex justify-between text-[10px] font-mono text-slate-400">
                  <span>150 kW</span>
                  <span>1,000 kW</span>
                  <span>2,500 kW</span>
                  <span>4,000 kW</span>
                </div>
              </div>

              {/* Demand Charge Rate ($/kW) */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-200 uppercase tracking-wider">
                    4. Electric Utility Demand Tariff:
                  </span>
                  <span className="font-mono text-cyan-400 text-sm font-extrabold">
                    ${demandCharge.toFixed(2)} / kW-month
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="35"
                  step="1"
                  value={demandCharge}
                  onChange={(e) => setDemandCharge(parseInt(e.target.value))}
                  className="mt-3 w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="mt-1 flex justify-between text-[10px] font-mono text-slate-400">
                  <span>$8.00/kW (Low)</span>
                  <span>$18.00/kW (US Average)</span>
                  <span>$35.00/kW (High Tier)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Projection Card (5 cols) */}
          <div className="lg:col-span-5 rounded-xl border border-blue-900/60 bg-gradient-to-b from-blue-950/60 via-slate-900 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  Projected Demand Savings
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  ANSI C12.20 Model
                </span>
              </div>

              <div className="mt-6">
                <span className="text-xs text-slate-400 uppercase font-semibold">
                  Estimated Annual Utility Savings
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1 text-emerald-400">
                  ${annualSavings.toLocaleString()}
                  <span className="text-xs text-slate-400 font-sans font-normal ml-1">/ yr</span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1">
                  Monthly Run-Rate Savings: ${Math.round(monthlySavings).toLocaleString()}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Peak kW Shaved</div>
                  <div className="text-base font-bold text-white mt-1">
                    -{shavedKw} kW
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Est. Payback</div>
                  <div className="text-base font-bold text-cyan-300 mt-1">
                    {paybackMonths} Months
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                <div className="text-[10px] uppercase font-mono text-slate-400 mb-1">
                  Recommended Hardware Package:
                </div>
                <div className="font-semibold text-white">
                  1x eDAS-PLC-840 Master + {Math.max(4, Math.round(peakKw / 100))}x eDAS-MTR-3000 CT Channels
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Includes energyDAS Portal Cloud License & Modbus BACnet Gateway.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleApply}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-lg"
              >
                <span>Transfer Sizing to Official Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
