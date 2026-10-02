import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ExperiencesSection from './components/ExperiencesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleOpenCv = () => {
    setCvModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1770b5] selection:text-white">
      <Header onOpenCv={handleOpenCv} />
      <main>
        <HeroSection onOpenCv={handleOpenCv} />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <SkillsSection />
        <ExperiencesSection />
        <ContactSection onOpenCv={handleOpenCv} />
      </main>
      <Footer onOpenCv={handleOpenCv} />

      {/* CV Modal Preview & Print PDF */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
