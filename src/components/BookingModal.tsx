import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Flame, ArrowRight, ShieldCheck, Calendar, Clock, MapPin } from 'lucide-react';
import { BRAND } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
  initialBlueprint?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProgram,
  initialBlueprint,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Fat Loss & Physique Shred',
    experience: 'Intermediate (1-3 yrs lifting)',
    format: 'Private In-Studio (West Hollywood)',
    timeSlot: 'Morning (8:00 AM - 12:00 PM)',
    blueprintNotes: initialBlueprint || '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialBlueprint) {
      setFormData((prev) => ({
        ...prev,
        blueprintNotes: initialBlueprint,
      }));
    }
    if (initialProgram) {
      setFormData((prev) => ({
        ...prev,
        format: initialProgram.includes('Remote')
          ? 'Elite Remote Protocol'
          : 'Private In-Studio (West Hollywood)',
      }));
    }
  }, [initialBlueprint, initialProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Phone).');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c0c12] border-2 border-red-600/70 rounded-sm shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Header Bar */}
        <div className="bg-gradient-to-r from-[#1b0a0e] to-[#12080a] border-b border-[#281b20] p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-red-600 flex items-center justify-center text-white font-display font-black text-xl">
              VA
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block">
                APPLICATION & INTAKE
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide leading-none">
                PRIVATE COACHING ASSESSMENT
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 text-red-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-red-500 block mb-1">
                  APPLICATION RECEIVED
                </span>
                <h4 className="font-display text-3xl font-black uppercase text-white tracking-wide">
                  YOUR CONSULTATION IS SCHEDULED
                </h4>
                <p className="text-zinc-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Coach Marcus Vance or our Head Performance Director will review your physiological profile and reach out via phone/SMS at <strong className="text-white">{formData.phone}</strong> within 12 business hours.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#12121a] border border-[#232333] p-5 rounded-sm max-w-md mx-auto text-left text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                  <span><strong>Format:</strong> {formData.format}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-4 h-4 text-red-500 shrink-0" />
                  <span><strong>Preferred Window:</strong> {formData.timeSlot}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span><strong>Location:</strong> {BRAND.location} (or Secure Zoom)</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 rounded-sm bg-red-600 hover:bg-red-500 text-white font-display font-bold uppercase tracking-wider text-sm cursor-pointer shadow-lg"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Urgency Callout */}
              <div className="p-3.5 bg-[#170a0c] border border-red-900/50 rounded-sm flex items-center gap-3 text-xs text-red-200">
                <Flame className="w-5 h-5 text-red-500 shrink-0" />
                <span>
                  <strong>Strict Capacity:</strong> Only 4 private client spots open for this intake. Serious applicants only.
                </span>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-900/30 border border-red-500 text-red-300 text-xs rounded-sm">
                  {errorMsg}
                </div>
              )}

              {/* Pre-filled Blueprint Alert if from Calculator */}
              {formData.blueprintNotes && (
                <div className="p-3 bg-[#111118] border border-red-600/40 rounded-sm text-xs">
                  <span className="text-red-400 font-bold block uppercase text-[10px] tracking-wider mb-1">
                    ATTACHED CALCULATOR BLUEPRINT:
                  </span>
                  <p className="text-zinc-300 font-mono text-[11px]">{formData.blueprintNotes}</p>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white placeholder-zinc-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@vanguard.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white placeholder-zinc-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    PHONE NUMBER (FOR SMS/CALL) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (310) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white placeholder-zinc-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    PRIMARY OBJECTIVE
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white"
                  >
                    <option value="Fat Loss & Physique Shred">Aggressive Fat Loss & Shred</option>
                    <option value="Dense Lean Muscle Hypertrophy">Dense Lean Muscle Hypertrophy</option>
                    <option value="Athletic Recomposition & Performance">Athletic Recomp & Performance</option>
                    <option value="Executive Energy & Joint Longevity">Executive Energy & Joint Longevity</option>
                  </select>
                </div>
              </div>

              {/* Coaching Format & Timeslot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    PREFERRED COACHING FORMAT
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white"
                  >
                    <option value="Private In-Studio (West Hollywood)">Private 1-on-1 Studio (West Hollywood)</option>
                    <option value="The Vance Method Pro (Hybrid)">The Vance Method Pro (Hybrid)</option>
                    <option value="Elite Remote Protocol">Elite Remote Protocol (Global)</option>
                    <option value="VIP Concierge Private">VIP Concierge Private</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    PREFERRED CALL WINDOW
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM PST)">Morning (8:00 AM - 12:00 PM PST)</option>
                    <option value="Afternoon (12:00 PM - 5:00 PM PST)">Afternoon (12:00 PM - 5:00 PM PST)</option>
                    <option value="Evening (5:00 PM - 8:00 PM PST)">Evening (5:00 PM - 8:00 PM PST)</option>
                  </select>
                </div>
              </div>

              {/* Additional Context or Injuries */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                  CURRENT CHALLENGES, PAST INJURIES, OR SPECIFIC GOALS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details on previous training, joint issues (e.g. lower back, shoulder), or dietary restrictions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#12121a] border border-[#262636] focus:border-red-500 focus:outline-none px-4 py-2.5 rounded-sm text-sm text-white placeholder-zinc-500"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Your information is strictly confidential. Zero spam. Directly reviewed by Coach Vance.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-sm bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-display font-black uppercase tracking-wider text-base shadow-xl shadow-red-950/70 border border-red-500 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>TRANSMITTING ASSESSMENT...</span>
                ) : (
                  <>
                    <span>SUBMIT INTAKE FOR REVIEW</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
