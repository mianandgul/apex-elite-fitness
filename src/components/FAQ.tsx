import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/content';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0e] border-b border-[#1f1f26] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#180a0d] border border-red-900/50 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
              CLARITY & STANDARDS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4">
            FREQUENTLY ASKED <span className="text-red-500">QUESTIONS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our coaching methodology, private facility access, nutrition calibration, and guarantees.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#0e0e14] border border-[#20202a] hover:border-red-600/40 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-sm bg-[#161620] border border-[#262636] flex items-center justify-center text-zinc-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-red-600/20 text-red-400 border-red-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-zinc-300 text-sm leading-relaxed border-t border-[#181822]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-sm bg-[#12080a] border border-red-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-display text-lg font-bold text-white uppercase block">
              HAVE A SPECIFIC INJURY OR SCHEDULE CONSTRAINT?
            </span>
            <span className="text-xs text-zinc-400">
              Speak directly with Coach Vance during your private 20-minute assessment call.
            </span>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-sm bg-red-600 hover:bg-red-500 text-white font-display font-bold uppercase text-xs tracking-wider flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
          >
            <span>BOOK INTAKE CALL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
