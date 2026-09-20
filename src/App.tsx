import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { Philosophy } from './components/Philosophy';
import { Programs } from './components/Programs';
import { TransformationCalculator } from './components/TransformationCalculator';
import { Transformations } from './components/Transformations';
import { CoachBio } from './components/CoachBio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const [blueprintNote, setBlueprintNote] = useState<string | undefined>(undefined);

  const handleOpenBooking = (programName?: string) => {
    setSelectedProgram(programName);
    setBlueprintNote(undefined);
    setIsBookingOpen(true);
  };

  const handleApplyWithBlueprint = (blueprintText: string) => {
    setBlueprintNote(blueprintText);
    setSelectedProgram(undefined);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Proof / Certifications */}
        <ProofBar />

        {/* The 4 Pillars / Methodology */}
        <Philosophy onOpenBooking={() => handleOpenBooking('Philosophy & Studio')} />

        {/* Signature Programs */}
        <Programs onOpenBooking={(prog) => handleOpenBooking(prog)} />

        {/* Interactive Transformation Calculator */}
        <TransformationCalculator onApplyWithBlueprint={handleApplyWithBlueprint} />

        {/* Verified Client Transformations & Case Studies */}
        <Transformations onOpenBooking={() => handleOpenBooking('Custom Transformation')} />

        {/* Head Coach Marcus Vance & Private Studio */}
        <CoachBio onOpenBooking={() => handleOpenBooking('Train with Coach Vance')} />

        {/* Pricing & Tiered Packages (with standout red card) */}
        <Pricing onOpenBooking={(plan) => handleOpenBooking(plan)} />

        {/* Wall of Client Proof */}
        <Testimonials />

        {/* Accordion FAQs */}
        <FAQ onOpenBooking={() => handleOpenBooking('Intake FAQ')} />

        {/* High-Converting Closing Call to Action */}
        <ClosingCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation & Assessment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProgram={selectedProgram}
        initialBlueprint={blueprintNote}
      />
    </div>
  );
}

