import React from 'react';
import { Phone } from 'lucide-react';
import { LinkedInIcon, MailIcon } from './Icons';
import { personalInfo } from '../data/cvData';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0fdf4] to-white border-b border-emerald-100" id="home">
      <main className="flex flex-col gap-10 py-16 sm:py-24 px-4 md:px-8 max-w-[1200px] mx-auto items-center text-center">
        
        {/* Morphing Selfie Image Frame - Centered */}
        <div className="flex justify-center items-center w-full">
          <div id="selfie" title="Harshni Couppoussamy" />
        </div>

        {/* Bio & Headline - Centered */}
        <div className="flex flex-col gap-5 text-center items-center max-w-3xl mx-auto w-full">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] text-xs font-bold w-max mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            London, United Kingdom
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight tracking-tight text-center">
            Cyber Security Analyst & IAM Specialist
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-center">
            Hi, My name is <strong className="text-[#111827]">Harshni Couppoussamy</strong>, a Cyber Security Analyst & MSc Cybersecurity Technology student at Northumbria University London, with <span className="text-[#059669] font-bold">2.5+ years of experience at Accenture</span>.
          </p>

          {/* Social Icons Row - Centered */}
          <div className="flex items-center justify-center gap-3 pt-2 mx-auto">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#059669] hover:bg-[#059669] hover:text-white shadow-sm transition-all flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Academic Email"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#059669] hover:bg-[#059669] hover:text-white shadow-sm transition-all flex items-center justify-center"
              title="Academic Email (Northumbria)"
            >
              <MailIcon className="w-5 h-5" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone Call"
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#059669] hover:bg-[#059669] hover:text-white shadow-sm transition-all flex items-center justify-center"
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
