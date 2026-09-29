import { useEffect } from 'react';
import { X, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { NewsItem } from '../data/energyDasData';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  onConsult: () => void;
}

export function NewsDetailModal({ news, onClose, onConsult }: NewsDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (news) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [news, onClose]);

  if (!news) return null;

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
          aria-label="Close news dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <Calendar className="h-3.5 w-3.5" />
          <span>{news.date}</span>
          <span>·</span>
          <span className="uppercase text-slate-400">{news.category}</span>
        </div>

        <h3 className="mt-2 text-xl font-bold text-white font-display leading-snug">
          {news.title}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <MapPin className="h-3.5 w-3.5 text-red-500" />
          <span>{news.location}</span>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 leading-relaxed">
          {news.summary}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Official energyDAS Release</span>
          <button
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="inline-flex items-center gap-1.5 rounded bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500 transition-colors"
          >
            Inquire About Technology
          </button>
        </div>
      </div>
    </div>
  );
}
