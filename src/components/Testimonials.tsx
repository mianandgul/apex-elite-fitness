import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#08080b] border-b border-[#1f1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block mb-2">
            EXECUTIVE CLIENT FEEDBACK
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4">
            REPUTATION BUILT ON <span className="text-red-500">EXCELLENCE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Read firsthand accounts from surgeons, executives, and founders who trust Coach Vance with their physical health and longevity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#0e0e14] border border-[#202029] hover:border-red-600/40 p-8 rounded-sm flex flex-col justify-between transition-colors relative"
            >
              <Quote className="w-8 h-8 text-red-600/30 mb-4" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-zinc-400 font-bold ml-2">5.0</span>
                </div>

                <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide mb-3">
                  "{test.highlight}"
                </h4>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6 italic">
                  "{test.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#1a1a24] flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-red-500/40"
                />
                <div>
                  <span className="font-display font-bold text-sm text-white uppercase block leading-tight">
                    {test.name}
                  </span>
                  <span className="text-[11px] text-zinc-400 block">
                    {test.role} {test.company ? `• ${test.company}` : ''}
                  </span>
                  <span className="text-[10px] text-red-400 font-semibold block mt-0.5">
                    {test.program}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
