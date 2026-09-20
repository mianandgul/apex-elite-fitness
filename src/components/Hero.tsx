import React from 'react';
import { ArrowRight, Trophy, CheckCircle2, Dumbbell, Flame } from 'lucide-react';
import { BRAND } from '../data/content';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#070709] overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-[#1f1f26]">
      {/* Background Red Ambient Glow Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f28_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Credential Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#170a0c] border border-red-900/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-red-400">
                PRIVATE COACHING • WEST HOLLYWOOD & GLOBAL
              </span>
            </div>

            {/* Giant Athletic Typography Heading */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] mb-6">
              ENGINEERED <span className="text-red-500 text-glow-red">STRENGTH.</span>
              <br />
              RELENTLESS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400">
                TRANSFORMATION.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed mb-8">
              Bespoke biomechanical training and clinical nutrition architecture for executives, founders, and driven individuals who refuse average results.
            </p>

            {/* Dual CTAs & Urgency note */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                id="hero-cta-apply"
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-sm bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-display font-black uppercase tracking-wider text-lg shadow-xl shadow-red-950/70 border border-red-500 hover:border-red-400 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>APPLY FOR PRIVATE COACHING</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#transformations"
                id="hero-cta-results"
                className="px-6 py-4 rounded-sm bg-[#121217] hover:bg-[#1a1a22] text-zinc-200 hover:text-white font-display font-bold uppercase tracking-wider text-base border border-[#272733] hover:border-zinc-500 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>VIEW CASE STUDIES</span>
              </a>
            </div>

            {/* Quick Trust Checks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 text-xs text-zinc-400 border-t border-[#1f1f28] pt-6 w-full max-w-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Private 1-on-1 Bay</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>No Starvation Diets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Athletic Image Showcase with Red Rim Lighting */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Red Accent Frame Behind */}
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-red-600/30 rounded-sm pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-red-600/20 blur-2xl pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-sm overflow-hidden border border-[#262633] bg-[#111116] shadow-2xl">
                <img
                  src={ASSETS.heroTrainer}
                  alt="Marcus Vance - Elite Strength and Performance Coach in Dark Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center max-h-[640px] transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Corner Red Accent Badge */}
                <div className="absolute top-4 right-4 bg-[#0a0a0f]/90 backdrop-blur-md border border-red-500/40 px-3 py-1.5 rounded-sm flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500 animate-bounce" />
                  <span className="font-display font-bold uppercase text-xs tracking-wider text-white">
                    {BRAND.stats[3].value} SPOTS REMAINING
                  </span>
                </div>

                {/* Bottom Floating Stats Bar */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0d0d12]/90 backdrop-blur-md border border-[#252530] shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block">
                        HEAD COACH
                      </span>
                      <span className="font-display font-extrabold text-xl text-white tracking-wide block">
                        {BRAND.coachName}
                      </span>
                      <span className="text-xs text-red-400 font-medium">
                        CSCS • Master Performance Specialist
                      </span>
                    </div>

                    <div className="text-right pl-4 border-l border-[#272736]">
                      <span className="font-display font-black text-2xl text-red-500 block leading-none">
                        98.4%
                      </span>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                        SUCCESS RATE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#121217] border border-red-900/60 p-3.5 rounded-sm shadow-2xl items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-sm bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Biomechanical Precision</span>
                  <span className="text-[11px] text-zinc-400">Zero joint wear • Maximum hyper-growth</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:mt-20 pt-8 border-t border-[#1f1f28]">
          {BRAND.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-sm bg-[#0d0d12] border border-[#1b1b22] hover:border-red-900/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-extrabold text-red-500 tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 font-medium mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
