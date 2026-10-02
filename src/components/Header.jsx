import React, { useState, useEffect } from 'react';
import { Shield, Menu as MenuIcon, X, FileText } from 'lucide-react';

export default function Header({ onOpenCv }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'skills', 'experiences', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experiences', href: '#experiences', id: 'experiences' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#059669]/20 shadow-sm h-[75px]">
        {/* CENTERED CONTAINER ALIGNED WITH 1200px MAIN SITE GRID */}
        <div className="flex flex-row items-center justify-between h-full px-4 md:px-8 max-w-[1200px] mx-auto w-full">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 cursor-pointer text-[#1f2937] hover:text-[#059669] transition-colors shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#059669] to-[#10b981] text-white flex items-center justify-center font-bold shadow-md shadow-[#059669]/20">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-extrabold tracking-tight text-lg sm:text-xl">Harshni Couppoussamy</span>
          </a>

          {/* Navigation Links & Primary Top CV Button */}
          <div className="flex items-center gap-3 md:gap-4 xl:gap-6">
            
            {/* Nav Items (Desktop) */}
            <ul className="hidden xl:flex flex-row gap-5 xl:gap-6 items-center font-medium text-[#1f2937]">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`py-5 text-sm font-semibold transition-all hover:text-[#059669] ${
                      activeSection === item.id ? 'active text-[#059669] border-b-2 border-[#059669]' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* SINGLE DEDICATED PREVIEW / DOWNLOAD CV BUTTON AT THE TOP */}
            <button
              onClick={onOpenCv}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#10b981] hover:from-[#047857] hover:to-[#059669] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#059669]/20 transition-all cursor-pointer shrink-0"
              title="Preview & Download CV"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span><span className="hidden sm:inline">Preview / </span>Download CV</span>
            </button>

            {/* Mobile / Tablet Menu Icon */}
            <div className="xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#059669] hover:text-[#047857]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Spacer for fixed 75px header */}
      <div className="h-[75px]" />

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed top-[75px] left-0 right-0 bg-white border-b border-[#059669]/20 shadow-xl z-40 py-5 px-6">
          <ul className="flex flex-col gap-4 text-center font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-semibold ${
                    activeSection === item.id ? 'text-[#059669] font-bold' : 'text-[#1f2937]'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
