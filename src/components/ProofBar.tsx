import React from 'react';
import { Award, ShieldCheck, Dumbbell, Activity, HeartPulse } from 'lucide-react';
import { CERTIFICATIONS } from '../data/content';

export const ProofBar: React.FC = () => {
  const certIcons = [Award, Dumbbell, HeartPulse, Activity, ShieldCheck];

  return (
    <div className="bg-[#0a0a0f] border-b border-[#1b1b24] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase font-black tracking-[0.25em] text-red-500 block mb-1">
              CLINICAL ACCREDITATION
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
              GOLD-STANDARD CREDENTIALS & SPECIALIZATIONS
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full md:w-auto">
            {CERTIFICATIONS.map((cert, index) => {
              const Icon = certIcons[index % certIcons.length];
              return (
                <div
                  key={cert.name}
                  className="px-3.5 py-2.5 rounded-sm bg-[#111116] border border-[#22222b] hover:border-red-600/40 transition-colors flex items-center gap-2.5"
                >
                  <Icon className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight font-display tracking-wide">
                      {cert.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 block truncate max-w-[130px]">
                      {cert.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
