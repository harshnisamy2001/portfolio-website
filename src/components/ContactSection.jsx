import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { LinkedInIcon, MailIcon } from './Icons';
import { personalInfo } from '../data/cvData';

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f0fdf4]/50 border-b border-emerald-100 scroll-mt-[75px]" id="contact">
      <main className="flex flex-col gap-10 py-20 sm:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-[#059669] font-bold mx-auto pb-1 w-max">
            Contact
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Let's connect and discuss cybersecurity opportunities
          </h3>
        </div>

        {/* Contact Pill Buttons Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto pt-2 w-full">
          
          {/* LinkedIn Pill */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex bg-[#059669] hover:bg-[#047857] border border-[#059669] rounded-2xl overflow-hidden shadow-md group transition-all w-full sm:w-auto"
          >
            <div className="p-3.5 bg-white relative right-arrow flex items-center justify-center shrink-0">
              <LinkedInIcon className="w-6 h-6 text-[#059669] group-hover:scale-110 transition-transform" />
            </div>
            <div className="py-3.5 px-6 sm:px-8 self-center text-white font-bold text-sm sm:text-base text-center w-full">
              LinkedIn Profile
            </div>
          </a>

          {/* Academic Email Pill */}
          <a
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Academic Email"
            className="flex bg-[#059669] hover:bg-[#047857] border border-[#059669] rounded-2xl overflow-hidden shadow-md group transition-all w-full sm:w-auto"
          >
            <div className="p-3.5 bg-white relative right-arrow flex items-center justify-center shrink-0">
              <MailIcon className="w-6 h-6 text-[#059669] group-hover:scale-110 transition-transform" />
            </div>
            <div className="py-3.5 px-6 sm:px-8 self-center text-white font-bold text-sm sm:text-base text-center w-full">
              Academic Mail
            </div>
          </a>

          {/* Phone Call Pill */}
          <a
            href={`tel:${personalInfo.phone}`}
            aria-label="Phone"
            className="flex bg-[#059669] hover:bg-[#047857] border border-[#059669] rounded-2xl overflow-hidden shadow-md group transition-all w-full sm:w-auto"
          >
            <div className="p-3.5 bg-white relative right-arrow flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#059669] group-hover:scale-110 transition-transform" />
            </div>
            <div className="py-3.5 px-6 sm:px-8 self-center text-white font-bold text-sm sm:text-base text-center w-full">
              Call: {personalInfo.phone}
            </div>
          </a>

        </div>

      </main>
    </section>
  );
}
