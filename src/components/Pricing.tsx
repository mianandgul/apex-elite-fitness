import React from 'react';
import { Check, ArrowRight, ShieldCheck, Flame, Star, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingProps {
  onOpenBooking: (planTitle?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-24 bg-[#070709] border-b border-[#1f1f26] relative overflow-hidden">
      {/* Red Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#180a0d] border border-red-900/50 mb-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
              TRANSPARENT VALUE ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4">
            CHOOSE YOUR <span className="text-red-500">COMMITMENT LEVEL</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Investment in executive health, physical vitality, and longevity. All programs include our 30-Day Measurable Results Guarantee.
          </p>
        </div>

        {/* Pricing Cards Grid (Featuring the bright red feature card) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`relative rounded-sm flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-red-600 via-red-700 to-red-900 text-white shadow-2xl shadow-red-950/80 border-2 border-red-400 p-8 sm:p-9 transform lg:-translate-y-3'
                    : 'bg-[#0e0e14] hover:bg-[#121219] border border-[#22222e] hover:border-zinc-700 p-8 text-zinc-200'
                }`}
              >
                {/* Feature Pill on Standout Card */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-red-900 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                    MOST POPULAR & HIGHEST RESULTS
                  </div>
                )}

                <div>
                  {/* Tier / Title */}
                  <div className="mb-4">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${
                        isFeatured ? 'text-red-200' : 'text-red-500'
                      }`}
                    >
                      {plan.tier}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-white/10">
                    <span className="font-display text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs uppercase font-bold tracking-wider ${
                        isFeatured ? 'text-red-200' : 'text-zinc-400'
                      }`}
                    >
                      / {plan.period}
                    </span>
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      isFeatured ? 'text-red-100' : 'text-zinc-400'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-[11px] uppercase font-black tracking-wider block ${
                        isFeatured ? 'text-white' : 'text-zinc-300'
                      }`}
                    >
                      WHAT IS INCLUDED:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-white/20 text-white border border-white/30'
                              : 'bg-red-600/20 text-red-500 border border-red-500/30'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={isFeatured ? 'text-white font-medium' : 'text-zinc-300'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Target & Action */}
                <div className="pt-6 border-t border-white/10">
                  <div
                    className={`text-[11px] mb-4 ${
                      isFeatured ? 'text-red-200' : 'text-zinc-400'
                    }`}
                  >
                    <strong className={isFeatured ? 'text-white' : 'text-zinc-200'}>
                      Target:
                    </strong>{' '}
                    {plan.idealFor}
                  </div>

                  <button
                    onClick={() => onOpenBooking(plan.name)}
                    className={`w-full py-4 rounded-sm font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isFeatured
                        ? 'bg-white hover:bg-zinc-100 text-red-900 shadow-xl font-black'
                        : 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/60 border border-red-500'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 100% Commitment Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#0e0e14] border border-[#202029] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h4 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-1">
              THE VANCE 30-DAY PERFORMANCE GUARANTEE
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              If you adhere to your training sessions and log your nutrition protocols as prescribed, yet do not experience measurable improvement in body composition or physical performance in the first 30 days, you will receive a full 100% refund. No disputes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
