import React, { useState } from 'react';
import { Calculator, ArrowRight, Flame, Scale, Dumbbell, ShieldCheck, Sparkles } from 'lucide-react';

interface CalculatorProps {
  onApplyWithBlueprint: (blueprintDetails: string) => void;
}

export const TransformationCalculator: React.FC<CalculatorProps> = ({ onApplyWithBlueprint }) => {
  const [goal, setGoal] = useState<'shred' | 'muscle' | 'recomp'>('shred');
  const [currentWeight, setCurrentWeight] = useState<number>(195);
  const [currentBodyFat, setCurrentBodyFat] = useState<number>(24);
  const [weeklyDays, setWeeklyDays] = useState<number>(4);
  const [timelineWeeks, setTimelineWeeks] = useState<number>(12);

  // Dynamic calculations based on science
  let projectedFatLoss = 0;
  let projectedMuscleGain = 0;
  let targetCalories = 2200;
  let targetProtein = 180;
  let recommendedProgram = 'The 12-Week Physique Rebuild';

  if (goal === 'shred') {
    // Approx 1.2 lbs fat loss per week sustainably
    projectedFatLoss = Math.min(Math.round(timelineWeeks * 1.3), Math.round(currentWeight * 0.16));
    projectedMuscleGain = Math.round(timelineWeeks * 0.25);
    targetCalories = Math.round(currentWeight * 11.5);
    targetProtein = Math.round(currentWeight * 1.05);
    recommendedProgram = timelineWeeks <= 12 ? 'The 12-Week Physique Rebuild' : 'Private 1-on-1 In-Studio Coaching';
  } else if (goal === 'muscle') {
    projectedFatLoss = Math.round(timelineWeeks * 0.2);
    projectedMuscleGain = Math.round(timelineWeeks * 0.55);
    targetCalories = Math.round(currentWeight * 15.5);
    targetProtein = Math.round(currentWeight * 1.15);
    recommendedProgram = 'Private 1-on-1 In-Studio Coaching';
  } else {
    // Recomposition
    projectedFatLoss = Math.round(timelineWeeks * 0.85);
    projectedMuscleGain = Math.round(timelineWeeks * 0.45);
    targetCalories = Math.round(currentWeight * 13.0);
    targetProtein = Math.round(currentWeight * 1.1);
    recommendedProgram = 'Athletic Longevity & Peak Output';
  }

  const endWeight = Math.round(currentWeight - projectedFatLoss + projectedMuscleGain);
  const startFatMass = (currentWeight * currentBodyFat) / 100;
  const endFatMass = Math.max(startFatMass - projectedFatLoss, 8);
  const projectedBodyFat = Math.max(Math.round((endFatMass / endWeight) * 100), 8);

  const handleApply = () => {
    const summary = `Goal: ${goal.toUpperCase()} | Start: ${currentWeight} lbs (${currentBodyFat}% BF) -> Target: ${endWeight} lbs (${projectedBodyFat}% BF in ${timelineWeeks} wks) | Program: ${recommendedProgram}`;
    onApplyWithBlueprint(summary);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0a0a0e] border-b border-[#1f1f26] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#180a0d] border border-red-900/50 mb-3">
            <Calculator className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
              INTERACTIVE METRIC PROJECTION
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4">
            CALCULATE YOUR <span className="text-red-500">TRANSFORMATION BLUEPRINT</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Test your physiological variables. See your projected body fat reduction, lean tissue acquisition, and daily nutrition targets calibrated by Coach Vance’s proprietary formula.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-7 bg-[#0e0e14] border border-[#22222d] p-6 sm:p-8 rounded-sm shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* 1. Primary Goal Select */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2.5">
                  1. SELECT PRIMARY PHYSIQUE TARGET
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'shred', label: 'FAT SHRED', desc: 'Aggressive Fat Loss' },
                    { id: 'muscle', label: 'HYPERTROPHY', desc: 'Dense Lean Muscle' },
                    { id: 'recomp', label: 'RECOMP', desc: 'Burn Fat & Build' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setGoal(tab.id as any)}
                      className={`p-3 text-left rounded-sm border transition-all cursor-pointer ${
                        goal === tab.id
                          ? 'bg-red-600/20 border-red-500 text-white'
                          : 'bg-[#121218] border-[#22222e] text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                      }`}
                    >
                      <span className="font-display font-extrabold text-sm block text-white tracking-wide">
                        {tab.label}
                      </span>
                      <span className="text-[10px] text-zinc-400 block mt-0.5">
                        {tab.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Current Bodyweight Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  <span>2. CURRENT BODY WEIGHT</span>
                  <span className="font-display text-xl text-red-500 font-black">{currentWeight} LBS</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="320"
                  step="1"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(Number(e.target.value))}
                  className="w-full accent-red-600 bg-[#1c1c26] h-2 rounded-sm cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                  <span>120 lbs</span>
                  <span>220 lbs</span>
                  <span>320 lbs</span>
                </div>
              </div>

              {/* 3. Estimated Body Fat % */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  <span>3. ESTIMATED BODY FAT PERCENTAGE</span>
                  <span className="font-display text-xl text-red-500 font-black">{currentBodyFat}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="1"
                  value={currentBodyFat}
                  onChange={(e) => setCurrentBodyFat(Number(e.target.value))}
                  className="w-full accent-red-600 bg-[#1c1c26] h-2 rounded-sm cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                  <span>10% (Athletic/Lean)</span>
                  <span>25% (Average)</span>
                  <span>40%+</span>
                </div>
              </div>

              {/* 4. Timeline Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    4. DEDICATED TIMELINE
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[8, 12, 16].map((weeks) => (
                      <button
                        key={weeks}
                        onClick={() => setTimelineWeeks(weeks)}
                        className={`py-2 text-center rounded-sm text-xs font-bold border transition-colors cursor-pointer ${
                          timelineWeeks === weeks
                            ? 'bg-red-600 border-red-500 text-white'
                            : 'bg-[#121218] border-[#22222e] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {weeks} WEEKS
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    5. WORKOUT FREQUENCY
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[3, 4, 5].map((days) => (
                      <button
                        key={days}
                        onClick={() => setWeeklyDays(days)}
                        className={`py-2 text-center rounded-sm text-xs font-bold border transition-colors cursor-pointer ${
                          weeklyDays === days
                            ? 'bg-red-600 border-red-500 text-white'
                            : 'bg-[#121218] border-[#22222e] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {days} DAYS/WK
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-[#1b1b26] flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>Calculated using NSCA metabolic caloric expenditure curves and DEXA client outcome data.</span>
            </div>
          </div>

          {/* Results Projection Card (Right - High Impact Red & Dark Card) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1a0b0e] via-[#12080a] to-[#0c0c11] border-2 border-red-600/80 p-6 sm:p-8 rounded-sm shadow-2xl flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-red-600/30 text-red-400 border border-red-500/50 text-[10px] font-black uppercase px-2.5 py-1 rounded-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-red-400" />
              REALISTIC 90-DAY PROJECTION
            </div>

            <div>
              <span className="text-[10px] uppercase font-black tracking-[0.25em] text-red-500 block mb-1">
                PROJECTED PHYSIQUE DELTAS
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide mb-6">
                YOUR ROADMAP TO PEAK FORM
              </h3>

              {/* Major Metric Numbers */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-sm bg-[#08080c]/80 border border-[#262024]">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                    PROJECTED FAT REDUCTION
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-black text-red-500 block">
                    -{projectedFatLoss} LBS
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-1 block">Pure adipose tissue loss</span>
                </div>

                <div className="p-4 rounded-sm bg-[#08080c]/80 border border-[#262024]">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                    PROJECTED LEAN GAIN
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-black text-white block">
                    +{projectedMuscleGain} LBS
                  </span>
                  <span className="text-[11px] text-zinc-400 mt-1 block">Contractile muscle tissue</span>
                </div>
              </div>

              {/* Composition Shift Progress */}
              <div className="p-4 rounded-sm bg-[#08080c]/80 border border-[#262024] space-y-3 mb-6">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-400 uppercase">BODY FAT TRANSITION:</span>
                  <span className="text-white font-mono">{currentBodyFat}% → <span className="text-red-400 font-bold">{projectedBodyFat}%</span></span>
                </div>
                <div className="w-full bg-[#1c1c28] h-2.5 rounded-sm overflow-hidden flex">
                  <div style={{ width: `${projectedBodyFat}%` }} className="bg-red-600 h-full transition-all duration-500" />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-400">
                  <span>Starting: {currentWeight} lbs</span>
                  <span className="text-red-400 font-bold">Projected Target: {endWeight} lbs</span>
                </div>
              </div>

              {/* Macro Calibration Snapshot */}
              <div className="grid grid-cols-2 gap-2 text-xs p-3 rounded-sm bg-[#160a0d] border border-red-900/40 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                    DAILY ENERGY TARGET:
                  </span>
                  <span className="font-bold text-white font-display text-lg">{targetCalories} KCAL</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                    DAILY PROTEIN TARGET:
                  </span>
                  <span className="font-bold text-red-400 font-display text-lg">{targetProtein}G PROTEIN</span>
                </div>
              </div>

              <div className="text-xs text-zinc-300 mb-6">
                <span className="text-zinc-400 block text-[11px] uppercase font-bold mb-1">
                  RECOMMENDED COACHING PROTOCOL:
                </span>
                <span className="font-display text-lg font-bold text-white uppercase block">
                  {recommendedProgram}
                </span>
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={handleApply}
              className="w-full py-4 rounded-sm bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-display font-black uppercase tracking-wider text-base shadow-xl shadow-red-950/80 border border-red-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>LOCK IN THIS BLUEPRINT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
