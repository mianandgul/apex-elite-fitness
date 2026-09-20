import React from 'react';
import { ArrowRight, Flame, ShieldCheck, PhoneCall } from 'lucide-react';
import { BRAND } from '../data/content';
import { ASSETS } from '../data/assets';

interface ClosingCTAProps {
  onOpenBooking: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 bg-[#0a0608] border-b border-[#1f1f26] overflow-hidden">
      {/* Background Photography with Heavy Dark/Red Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.conditioningFocus}
          alt="Athletic Conditioning in Studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/90 to-[#0e0709]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-red-600/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#1e0a0d] border border-red-600/60 mb-6">
          <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-400">
            LIMITED ENROLLMENT • 4 SLOTS OPEN
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.92] mb-6">
          STOP WAITING FOR <span className="text-red-500 text-glow-red">"THE RIGHT TIME."</span>
          <br />
          BUILD THE STANDARD TODAY.
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Every month of hesitation is another month of stagnant energy, lingering joint discomfort, and missed potential. Take the step into high-performance training with Coach Vance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-display font-black uppercase tracking-wider text-lg shadow-2xl shadow-red-950/80 border border-red-400 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>APPLY FOR YOUR CONSULTATION</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:3108449210"
            className="w-full sm:w-auto px-6 py-4 rounded-sm bg-[#121218] hover:bg-[#1a1a24] text-zinc-300 hover:text-white font-display font-bold uppercase tracking-wider text-base border border-[#272736] transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-red-500" />
            <span>CALL (310) 844-9210</span>
          </a>
        </div>

        {/* Guarantee Badge */}
        <div className="inline-flex items-center gap-2 text-xs text-zinc-400 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span>Backed by our 30-Day Full Refund Performance Guarantee. Zero financial risk.</span>
        </div>

      </div>
    </section>
  );
};
