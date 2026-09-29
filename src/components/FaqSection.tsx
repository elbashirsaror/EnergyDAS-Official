import { useState } from 'react';
import { FAQ_DATA } from '../data/landingData';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Technical Due Diligence & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Frequently addressed engineering questions.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Direct clarity on intellectual property rights, security audits, engagement structures, and operational models.
          </p>
        </div>

        <div className="mt-14 divide-y divide-neutral-800 border-y border-neutral-800">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="pr-6">
                    <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm text-neutral-300 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
