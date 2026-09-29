import { useEffect } from 'react';
import { X, Cpu, Download, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ProductCodeItem } from '../data/energyDasData';

interface ProductDetailModalProps {
  product: ProductCodeItem | null;
  onClose: () => void;
  onRequestQuote: (code: string) => void;
}

export function ProductDetailModal({ product, onClose, onRequestQuote }: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          aria-label="Close product dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-extrabold text-cyan-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-700">
            {product.code}
          </span>
          <span className="text-[11px] uppercase font-mono text-slate-400">
            {product.category}
          </span>
        </div>

        <h3 className="mt-2 text-2xl font-bold text-white font-display">
          {product.name}
        </h3>

        <div className="mt-6 space-y-4 text-xs">
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-slate-400 font-bold uppercase block mb-1">
              Voltage & Frequency Rating
            </span>
            <span className="text-white font-mono text-sm">{product.voltage}</span>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-slate-400 font-bold uppercase block mb-1">
              Technical Specifications & I/O
            </span>
            <span className="text-slate-200 leading-relaxed block">{product.specs}</span>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-slate-400 font-bold uppercase block mb-1">
              Target Field Applications
            </span>
            <span className="text-slate-200 leading-relaxed block">{product.applications}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              alert(`Downloading engineering datasheet for ${product.code}`);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white"
          >
            <Download className="h-4 w-4 text-cyan-400" />
            <span>Download Engineering PDF</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(product.code);
            }}
            className="inline-flex items-center gap-1.5 rounded bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors"
          >
            <span>Request Official Pricing</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
