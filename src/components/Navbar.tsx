import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Shield, ArrowRight, PhoneCall } from 'lucide-react';
import { BRAND } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'CALCULATOR', href: '#calculator' },
    { label: 'TRANSFORMATIONS', href: '#transformations' },
    { label: 'THE COACH', href: '#coach' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Urgency Ticker Banner */}
      <div id="announcement-bar" className="bg-[#14080a] border-b border-red-950/60 text-xs py-2 px-4 text-center font-medium text-zinc-300 flex items-center justify-center gap-2 tracking-wider uppercase">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 font-bold border border-red-500/30">
          <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          Q4 ADMISSIONS
        </span>
        <span className="hidden sm:inline text-zinc-400">Strictly accepting only 4 private clients this month.</span>
        <button
          onClick={onOpenBooking}
          className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-4 ml-1 flex items-center gap-1 transition-colors"
        >
          Apply for Consultation <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-navigation"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070709]/95 backdrop-blur-md border-b border-[#23232b] shadow-2xl py-3.5'
            : 'bg-[#070709]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-black text-white text-xl tracking-tighter shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform duration-200">
              <span className="font-display font-black text-2xl tracking-tighter">VA</span>
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white block leading-none">
                VANCE<span className="text-red-500">.</span>ATHLETICS
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-400 block mt-0.5">
                ELITE PERFORMANCE COACHING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase font-bold tracking-widest text-zinc-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Contact Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:3108449210"
              className="text-xs font-semibold text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-500" />
              <span className="hidden xl:inline">(310) 844-9210</span>
            </a>
            <button
              id="header-booking-btn"
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-sm bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-display font-bold uppercase tracking-wider text-sm shadow-lg shadow-red-900/30 border border-red-500 hover:border-red-400 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>APPLY FOR COACHING</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-sm bg-red-600 text-white font-display font-bold text-xs uppercase tracking-wider"
            >
              APPLY
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden bg-[#0a0a0e] border-b border-[#23232b] px-5 py-6 space-y-4 animate-in fade-in duration-200"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase font-bold tracking-wider text-zinc-300 hover:text-red-400 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-[#1c1c24] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Shield className="w-4 h-4 text-red-500" />
                <span>Private Studio in West Hollywood, CA</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-sm bg-red-600 text-white font-display font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/50"
              >
                <span>BOOK INITIAL CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
