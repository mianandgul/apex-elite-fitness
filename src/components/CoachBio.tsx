import React from 'react';
import { ArrowRight, ShieldCheck, Dumbbell, Award, Flame, Check } from 'lucide-react';
import { BRAND, CERTIFICATIONS } from '../data/content';
import { ASSETS } from '../data/assets';

interface CoachBioProps {
  onOpenBooking: () => void;
}

export const CoachBio: React.FC<CoachBioProps> = ({ onOpenBooking }) => {
  return (
    <section id="coach" className="py-24 bg-[#09090d] border-b border-[#1f1f26] relative overflow-hidden">
      {/* Red Ambient Light */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Coach Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Portrait with Red Rim Lighting */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-red-600/40 rounded-sm pointer-events-none" />
              
              <div className="rounded-sm overflow-hidden border border-[#262633] bg-[#111116] shadow-2xl relative">
                <img
                  src={ASSETS.coachPortrait}
                  alt="Marcus Vance - Master Athletic Performance Specialist"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0a0a0f]/90 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block">
                    FOUNDER & HEAD COACH
                  </span>
                  <h3 className="font-display text-2xl font-extrabold uppercase text-white tracking-wide">
                    {BRAND.coachName}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Former D1 Decathlete • 12+ Years Private Coaching
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Narrative & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#180a0d] border border-red-900/50 mb-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                BEHIND THE STANDARDS
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
              "WE DO NOT LEAVE TRANSFORMATION <span className="text-red-500">TO CHANCE."</span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                "I founded Vance Athletics after a decade in collegiate strength and conditioning, watching commercial gyms scam clients with unscientific routines, untrained floor staff, and no accountability outside the hour session."
              </p>
              <p>
                "True physical transformation is a biological protocol. It requires precise progressive overload matched to individual skeletal levers, non-negotiable recovery protocols, and metabolic fueling that aligns with high-stress corporate or executive schedules."
              </p>
              <p className="text-white font-medium">
                "When you step into my private facility or access our remote portal, you are entering an environment devoid of excuses. If you commit 100%, failure is statistically impossible."
              </p>
            </div>

            {/* Coach Accreditations & Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'National Strength & Conditioning Association (CSCS)',
                'EXOS Athletic Performance Specialist',
                'Precision Nutrition Level 2 Master Certified',
                'Functional Range Conditioning (FRCms) Mobility',
                '650+ Documented High-Net-Worth Client Transformations',
                'Private West Hollywood Facility - 100% Dedicated Bay',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 border border-red-500/30">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-sm bg-red-600 hover:bg-red-500 text-white font-display font-bold uppercase tracking-wider text-base shadow-xl shadow-red-950/70 border border-red-500 flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>APPLY TO TRAIN WITH COACH VANCE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Private Facility Tour Showcase */}
        <div className="rounded-sm bg-[#0e0e14] border border-[#22222d] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            <div className="lg:col-span-6 p-8 sm:p-12">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block mb-2">
                THE IRONWORKS PRIVATE STUDIO
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mb-4">
                BUILT EXCLUSIVELY FOR SERIOUS TRAINING. NO CROWDS. NO NOISE.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Our 4,500 sq ft private coaching compound features Eleiko competition barbells, calibrated steel plates, custom Prime Fitness selectorized machinery, Pit Shark belt squat, private infrared sauna suites, and high-speed bar-path telemetry cameras.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-[#08080c] border border-[#1b1b24] rounded-sm">
                  <span className="text-[10px] uppercase font-bold text-red-500 block">ELEIKO CALIBRATED</span>
                  <span className="text-zinc-200 font-semibold">Competition steel plates & Swedish bars</span>
                </div>
                <div className="p-3 bg-[#08080c] border border-[#1b1b24] rounded-sm">
                  <span className="text-[10px] uppercase font-bold text-red-500 block">PRIVATE SUITES</span>
                  <span className="text-zinc-200 font-semibold">Infrared sauna & cold plunge therapy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 h-full min-h-[320px] relative">
              <img
                src={ASSETS.eliteGymFacility}
                alt="Vance Athletics Private Strength Facility in West Hollywood"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px] lg:min-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e14] via-transparent to-transparent pointer-events-none hidden lg:block" />
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-xs font-semibold text-white">
                Ironworks Blvd • Private Access
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
