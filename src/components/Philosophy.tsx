import React from 'react';
import { ShieldAlert, ArrowRight, Zap, Target, Apple, Moon } from 'lucide-react';
import { PILLARS } from '../data/content';
import { ASSETS } from '../data/assets';

interface PhilosophyProps {
  onOpenBooking: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onOpenBooking }) => {
  const pillarIcons = [Target, Zap, Apple, Moon];

  return (
    <section id="philosophy" className="py-24 bg-[#08080b] border-b border-[#1f1f26] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#16090b] border border-red-900/50 mb-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
              THE VANCE METHODOLOGY
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4">
            SCIENCE-ENGINEERED TO <span className="text-red-500">DEMOLISH PLATEAUS</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Most gym routines fail because they rely on random workouts and generic motivation. Our 4-Pillar System treats your physiology as a precision machine, combining biomechanical mechanics with clinical nutrition.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.number}
                className="group relative bg-[#0e0e14] hover:bg-[#12121a] border border-[#20202a] hover:border-red-600/60 p-7 rounded-sm transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Corner Red Line Indicator */}
                <div className="absolute top-0 left-0 w-8 h-1 bg-red-600 group-hover:w-full transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-black text-red-600/60 group-hover:text-red-500 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#181822] border border-[#262636] group-hover:border-red-500/40 flex items-center justify-center text-zinc-300 group-hover:text-red-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1c1c26]">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 block mb-2">
                    CORE DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5">
                    {pillar.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Split Banner: The Training Environment */}
        <div className="rounded-sm bg-gradient-to-r from-[#120a0d] via-[#101017] to-[#0c0c11] border border-[#261f23] p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase font-black tracking-[0.25em] text-red-400 block mb-2">
                ZERO COMPROMISE STANDARDS
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mb-4">
                WE DO NOT RENT GYM FLOORS. YOU TRAIN IN PRIVATE PRECISION.
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 max-w-xl">
                Commercial gyms have waiting lines, crowds, and distractions that destroy training density. In our private facility, your bay is prepped before you step through the doors. Every dumbbell, Eleiko bar, and cable attachment is sterilized and calibrated for your working sets.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-sm bg-red-600 hover:bg-red-500 text-white font-display font-bold uppercase tracking-wider text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/40"
                >
                  <span>TOUR FACILITY & APPLY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-zinc-400 font-medium">
                  West Hollywood, CA • Private Access Only
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-sm overflow-hidden border border-[#2b252c] shadow-2xl relative">
                <img
                  src={ASSETS.trainingAction}
                  alt="High Intensity Strength Training with Barbell"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-zinc-200 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-white/10">
                  Heavy barbell deadlift execution with instantaneous velocity and bar-path tracking.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
