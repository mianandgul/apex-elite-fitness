import React, { useState } from 'react';
import { ArrowRight, Trophy, TrendingDown, TrendingUp, Dumbbell, Star, Sparkles } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/content';
import { ASSETS } from '../data/assets';

interface TransformationsProps {
  onOpenBooking: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'fat-loss' | 'muscle-gain' | 'athletic-recomp'>('all');
  const [activeViewMode, setActiveViewMode] = useState<Record<string, 'after' | 'before'>>({
    'david-m': 'after',
    'marcus-k': 'after',
    'james-t': 'after',
  });

  const toggleView = (id: string, mode: 'after' | 'before') => {
    setActiveViewMode((prev) => ({ ...prev, [id]: mode }));
  };

  const filteredItems = TRANSFORMATIONS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="transformations" className="py-24 bg-[#070709] border-b border-[#1f1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block mb-2">
              CLINICAL PROOF & DOCUMENTED CASE STUDIES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
              VERIFIED CLIENT <span className="text-red-500">RESULTS</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg mt-3">
              Real executives, founders, and professionals who committed to the Vance Athletics standard. Every result backed by body composition data.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#0f0f14] border border-[#22222d] rounded-sm self-start md:self-end">
            {[
              { id: 'all', label: 'ALL PROOF' },
              { id: 'fat-loss', label: 'FAT SHRED' },
              { id: 'muscle-gain', label: 'HYPERTROPHY' },
              { id: 'athletic-recomp', label: 'RECOMP' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const currentMode = activeViewMode[item.id] || 'after';
            const displayImg = currentMode === 'after' ? item.afterImg : item.beforeImg;

            return (
              <div
                key={item.id}
                className="bg-[#0c0c11] border border-[#1f1f28] hover:border-red-600/40 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group"
              >
                {/* Visual Area with Toggle Buttons */}
                <div className="relative aspect-[4/3] bg-[#121218] overflow-hidden">
                  <img
                    src={displayImg}
                    alt={`${item.name} ${currentMode} transformation`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c11] via-transparent to-transparent pointer-events-none" />

                  {/* Before / After Switch Pills */}
                  <div className="absolute top-3 right-3 flex items-center bg-[#07070a]/90 backdrop-blur-md p-1 rounded-sm border border-white/10 z-10">
                    <button
                      onClick={() => toggleView(item.id, 'before')}
                      className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                        currentMode === 'before'
                          ? 'bg-zinc-700 text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      BEFORE
                    </button>
                    <button
                      onClick={() => toggleView(item.id, 'after')}
                      className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                        currentMode === 'after'
                          ? 'bg-red-600 text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      AFTER
                    </button>
                  </div>

                  {/* Timeframe Tag */}
                  <div className="absolute top-3 left-3 bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm">
                    {item.timeframe} PROTOCOL
                  </div>

                  {/* Client Identification over lower image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-red-400 font-medium">
                      {item.role}, Age {item.age}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metrics Dashboard */}
                    <div className="grid grid-cols-3 gap-2 p-3 bg-[#070709] border border-[#1c1c24] rounded-sm mb-4 text-center">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-zinc-400 block truncate">
                          WEIGHT DELTA
                        </span>
                        <span className="font-display font-black text-xs sm:text-sm text-red-500 block mt-0.5">
                          {item.metrics.weightDelta}
                        </span>
                      </div>
                      <div className="border-x border-[#1c1c24] px-1">
                        <span className="text-[9px] uppercase font-bold text-zinc-400 block truncate">
                          BODY FAT %
                        </span>
                        <span className="font-display font-black text-xs sm:text-sm text-white block mt-0.5">
                          {item.metrics.bodyFatDelta}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold text-zinc-400 block truncate">
                          STRENGTH
                        </span>
                        <span className="font-display font-black text-xs sm:text-sm text-zinc-200 block mt-0.5">
                          {item.metrics.strengthDelta}
                        </span>
                      </div>
                    </div>

                    {/* Goal & Quote */}
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                        PRIMARY OBJECTIVE:
                      </span>
                      <p className="text-xs font-semibold text-zinc-200">{item.goal}</p>
                    </div>

                    <blockquote className="text-xs text-zinc-400 italic leading-relaxed border-l-2 border-red-600 pl-3 mb-4">
                      "{item.quote}"
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-[#181822] flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-[10px] text-zinc-400 ml-1">Verified Client</span>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <span>Start Similar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Aggregate Stats Proof Banner */}
        <div className="mt-16 rounded-sm bg-[#0e0e14] border border-[#22222d] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                AVERAGE 12-WEEK CLIENT METRICS
              </h4>
              <p className="text-xs text-zinc-400">
                Aggregated from 650+ documented in-person and hybrid coaching cases over 12 years.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 text-center">
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-red-500 block leading-none">
                -16.4 LBS
              </span>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                AVG. FAT LOST
              </span>
            </div>
            <div className="w-px h-8 bg-[#262633]" />
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-white block leading-none">
                +42 LBS
              </span>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                AVG. STRENGTH GAIN
              </span>
            </div>
            <div className="w-px h-8 bg-[#262633]" />
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-red-500 block leading-none">
                98.4%
              </span>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                GOAL COMPLETION
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
