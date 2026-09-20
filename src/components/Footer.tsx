import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, Phone, Instagram, Youtube, Linkedin, Shield, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/content';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#050507] text-zinc-400 text-xs border-t border-[#1a1a24]">
      
      {/* Newsletter Dispatch Strip */}
      <div className="border-b border-[#14141d] py-12 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500 block mb-1">
                WEEKLY INTEL FOR HIGH PERFORMERS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                JOIN "THE DISCIPLINE DISPATCH"
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Receive weekly biomechanics teardowns, executive macro protocols, and training methods straight from Coach Vance’s desk. Zero spam.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-3.5 bg-red-950/30 border border-red-500/50 rounded-sm text-red-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="font-medium text-xs">
                    You are subscribed. Check your inbox for the "12-Week Biomechanics Primer" guide.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 bg-[#101018] border border-[#262638] focus:border-red-500 focus:outline-none px-4 py-3 rounded-sm text-xs text-white placeholder-zinc-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-sm bg-red-600 hover:bg-red-500 text-white font-display font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-colors"
                  >
                    <span>SUBSCRIBE FREE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Navigation & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-red-600 flex items-center justify-center text-white font-display font-black text-lg">
                VA
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                VANCE<span className="text-red-500">.</span>ATHLETICS
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Elite private strength, conditioning, and physique transformation coaching. Dedicated to building indestructible human performance through science and discipline.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-[#12121a] hover:bg-red-600/20 hover:text-red-400 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-[#12121a] hover:bg-red-600/20 hover:text-red-400 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-[#12121a] hover:bg-red-600/20 hover:text-red-400 flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs Nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              COACHING
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#programs" className="hover:text-red-400 transition-colors">1-on-1 Private In-Studio</a></li>
              <li><a href="#programs" className="hover:text-red-400 transition-colors">12-Week Rebuild</a></li>
              <li><a href="#programs" className="hover:text-red-400 transition-colors">Athletic Longevity</a></li>
              <li><a href="#programs" className="hover:text-red-400 transition-colors">Elite Remote Protocol</a></li>
              <li><a href="#pricing" className="hover:text-red-400 transition-colors">VIP Executive Concierge</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              SYSTEM & PROOF
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#philosophy" className="hover:text-red-400 transition-colors">The 4 Pillars</a></li>
              <li><a href="#calculator" className="hover:text-red-400 transition-colors">Transformation Calculator</a></li>
              <li><a href="#transformations" className="hover:text-red-400 transition-colors">Client Case Studies</a></li>
              <li><a href="#coach" className="hover:text-red-400 transition-colors">Coach Marcus Vance</a></li>
              <li><a href="#faq" className="hover:text-red-400 transition-colors">FAQs & Guarantees</a></li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              PRIVATE FACILITY
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                <strong>Hours:</strong> Mon–Sat 5:30 AM – 8:30 PM (Appointment Only)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Hostinger Production Ready Note */}
        <div className="mt-12 pt-8 border-t border-[#15151f] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Vance Athletics LLC. All Rights Reserved. Engineered for Peak Human Performance.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-400 cursor-pointer">Medical Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
