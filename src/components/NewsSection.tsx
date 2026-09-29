import { NEWS_ARCHIVE, NewsItem } from '../data/energyDasData';
import { Newspaper, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  onSelectNews: (item: NewsItem) => void;
}

export function NewsSection({ onSelectNews }: NewsSectionProps) {
  return (
    <section id="news" className="py-20 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Corporate Dispatches & Industry Recognition
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white font-display">
              energyDAS News & Partner Announcements
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Contract milestones, awards, and global industrial microgrid deployments.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ARCHIVE.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin className="h-3 w-3 text-slate-400" />
                  <span>{item.location}</span>
                </span>

                <button
                  type="button"
                  onClick={() => onSelectNews(item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
