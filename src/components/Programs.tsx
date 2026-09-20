import React, { useState } from 'react';
import { ArrowRight, Check, Flame, Clock, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { PROGRAMS } from '../data/content';
import { Program } from '../types';

interface ProgramsProps {
  onOpenBooking: (programName?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'in-person' | 'hybrid'>('all');

  const filteredPrograms = PROGRAMS.filter((program) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'in-person') return program.format.includes('West Hollywood');
    if (activeTab === 'hybrid') return program.format.includes('Hybrid');
    return true;
  });

  return (
    <section id="programs" className="py-24 bg-[#070709] border-b border-[#1f1f26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block mb-2">
              SIGNATURE COACHING ARCHITECTURE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
              PRECISION TRAINING <span className="text-red-500">PROGRAMS</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg mt-3">
              Every system is customized down to the gram and rep. Choose your commitment level.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101015] border border-[#22222d] rounded-sm self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              ALL PATHS
            </button>
            <button
              onClick={() => setActiveTab('in-person')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeTab === 'in-person'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              IN-STUDIO LA
            </button>
            <button
              onClick={() => setActiveTab('hybrid')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeTab === 'hybrid'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              HYBRID / GLOBAL
            </button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`relative rounded-sm flex flex-col justify-between transition-all duration-300 ${
                program.featured
                  ? 'bg-gradient-to-b from-[#160c0f] to-[#0f0a0d] border-2 border-red-600 shadow-2xl shadow-red-950/40 p-8 sm:p-9'
                  : 'bg-[#0d0d12] hover:bg-[#111117] border border-[#202029] hover:border-zinc-700 p-8'
              }`}
            >
              {/* Featured Badge */}
              {program.featured && (
                <div className="absolute -top-3.5 left-8 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  FLAGSHIP PROGRAM
                </div>
              )}

              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                    {program.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/40 border border-amber-900/60 px-2 py-0.5 rounded-sm">
                    <Clock className="w-3 h-3" />
                    {program.spotsLeft} SPOTS LEFT
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide mb-2">
                  {program.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mb-6">
                  {program.subtitle}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-sm bg-[#08080b] border border-[#1b1b24] mb-6 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                      DURATION:
                    </span>
                    <span className="font-semibold text-zinc-200">{program.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                      COMMITMENT:
                    </span>
                    <span className="font-semibold text-zinc-200">{program.commitment}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase font-black tracking-wider text-white block">
                    PROGRAM ARCHITECTURE:
                  </span>
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Target & Action Button */}
              <div className="pt-6 border-t border-[#1e1e28]">
                <div className="text-[11px] text-zinc-400 mb-4">
                  <strong className="text-zinc-200 font-semibold">Ideal For:</strong> {program.idealFor}
                </div>

                <button
                  onClick={() => onOpenBooking(program.title)}
                  className={`w-full py-3.5 rounded-sm font-display font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    program.featured
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/60 border border-red-500'
                      : 'bg-[#181822] hover:bg-[#20202d] text-white border border-[#2b2b3b] hover:border-red-500/50'
                  }`}
                >
                  <span>APPLY FOR ADMISSION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Studio Bay Showcase */}
        <div className="mt-16 p-6 rounded-sm bg-[#0c0c11] border border-[#1f1f29] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                EXCLUSIVE WEST HOLLYWOOD PRIVATE FACILITY
              </h4>
              <p className="text-xs text-zinc-400">
                742 Ironworks Blvd. By appointment only. Equipped with custom Eleiko competition equipment & infrared recovery bay.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('Facility Tour')}
            className="px-5 py-2.5 rounded-sm bg-[#161620] hover:bg-[#20202c] text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider border border-[#2a2a38] transition-colors shrink-0 cursor-pointer"
          >
            SCHEDULE FACILITY TOUR
          </button>
        </div>

      </div>
    </section>
  );
};
