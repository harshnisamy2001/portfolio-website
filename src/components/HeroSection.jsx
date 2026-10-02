import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { LinkedInIcon, MailIcon } from './Icons';
import { personalInfo } from '../data/cvData';

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f8fafc] border-b border-slate-200/80" id="home">
      <main className="flex flex-col gap-10 py-16 sm:py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto md:flex-row-reverse items-center justify-between">
        
        {/* Right Column: Morphing Selfie Image Frame */}
        <div className="flex justify-center items-center md:w-1/2">
          <div id="selfie" title="Harshni Couppoussamy" />
        </div>

        {/* Left Column: Bio & Headline */}
        <div className="flex flex-col gap-5 text-center md:text-left md:w-1/2">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1770b5]/10 border border-[#1770b5]/20 text-[#1770b5] text-xs font-bold w-max mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#1770b5] animate-pulse" />
            London, United Kingdom
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-tight tracking-tight">
            Cyber Security Analyst & IAM Specialist
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Hi, My name is <strong className="text-[#1f2937]">Harshni Couppoussamy</strong>, a Cyber Security Analyst & MSc Cybersecurity Technology student at Northumbria University London, with <span className="text-[#1770b5] font-bold">2.5+ years of experience at Accenture</span>.
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#1770b5] hover:bg-[#1770b5] hover:text-white shadow-sm transition-all flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Academic Email"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#1770b5] hover:bg-[#1770b5] hover:text-white shadow-sm transition-all flex items-center justify-center"
              title="Academic Email (Northumbria)"
            >
              <MailIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.personalEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal Email"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#1770b5] hover:bg-[#1770b5] hover:text-white shadow-sm transition-all flex items-center justify-center"
              title="Personal Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone Call"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#1770b5] hover:bg-[#1770b5] hover:text-white shadow-sm transition-all flex items-center justify-center"
              title="Phone Contact"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

        </div>

      </main>
    </section>
  );
}
