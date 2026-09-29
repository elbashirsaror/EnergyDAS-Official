import { useState } from 'react';
import { PRODUCT_CATALOG, ProductCodeItem } from '../data/energyDasData';
import { Download, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductCodeItem) => void;
  onRequestSpec: (code: string) => void;
}

export function ProductCatalogSection({ onSelectProduct, onRequestSpec }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ['all', 'Systems', 'Meters', 'Relays', 'Software'];

  const filtered = selectedCategory === 'all'
    ? PRODUCT_CATALOG
    : PRODUCT_CATALOG.filter((item) => item.category === selectedCategory);

  const handleDownload = (code: string) => {
    setDownloadSuccess(code);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 2500);
  };

  return (
    <section id="catalog" className="py-20 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Hardware & Software Directory
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-display">
              energyDAS Product Catalog & Engineering Codes
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              UL-Listed, CE-certified submetering nodes, PLCs, and 3D modeling licenses.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-950 rounded-lg border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Products' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.code}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950 p-6 hover:border-cyan-500 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-cyan-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    {item.code}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>

                <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 font-semibold">Voltage: </span>
                    <span className="font-mono text-white">{item.voltage}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Specifications: </span>
                    <span className="text-slate-300">{item.specs}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Applications: </span>
                    <span className="text-slate-400">{item.applications}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleDownload(item.code)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5 text-cyan-400" />
                  <span>
                    {downloadSuccess === item.code ? 'Spec PDF Ready' : 'Download Spec PDF'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onRequestSpec(item.code)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-400 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>Request Quote</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
