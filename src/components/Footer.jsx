import React from 'react';
import { Shield, Mail, ArrowUp } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/cvData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1f2937] text-white" id="footer">
      <main className="flex flex-col gap-10 py-16 px-4 md:px-8 md:max-w-[1200px] md:mx-auto text-left">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-700 pb-8">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1770b5] text-white flex items-center justify-center font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold font-heading block">Harshni Couppoussamy</span>
              <span className="text-xs text-slate-400 font-mono">Cyber Security Analyst & IAM Specialist</span>
            </div>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-[#1770b5] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-[#1770b5] transition-colors"
              aria-label="Academic Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-[#1770b5] transition-colors cursor-pointer"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs text-slate-400">
          <div>
            <div className="uppercase font-bold text-white mb-3 text-sm">Navigation</div>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
            </ul>
          </div>

          <div>
            <div className="uppercase font-bold text-white mb-3 text-sm">Explore</div>
            <ul className="flex flex-col gap-2">
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#experiences" className="hover:text-white">Experiences</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="uppercase font-bold text-white mb-3 text-sm">Location</div>
            <p className="leading-relaxed">
              London, United Kingdom<br />
              Northumbria University London
            </p>
          </div>

          <div>
            <div className="uppercase font-bold text-white mb-3 text-sm">Availability</div>
            <p className="leading-relaxed text-[#38abff] font-semibold">
              Open for UK Roles from Oct 2026
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p>© 2026 Harshni Couppoussamy. All rights reserved.</p>
          <p>Portfolio Website based on raifkaya.nl design</p>
        </div>

      </main>
    </footer>
  );
}
