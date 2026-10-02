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
      <header className="flex flex-row items-center justify-between bg-white border-b border-[#1770b5]/20 px-4 md:px-8 fixed w-full h-[75px] z-50 shadow-sm top-0 left-0">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 cursor-pointer text-[#1f2937] hover:text-[#1770b5] transition-colors shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#1770b5] text-white flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-extrabold tracking-tight text-lg sm:text-xl">Harshni Couppoussamy</span>
        </a>

        {/* Navigation Links & Primary Top CV Button */}
        <div className="flex items-center gap-6">
          
          {/* Nav Items (Desktop & Tablet) */}
          <ul className="hidden lg:flex flex-row gap-6 items-center font-medium text-[#1f2937]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`py-5 text-sm font-semibold transition-all hover:text-[#1770b5] ${
                    activeSection === item.id ? 'active text-[#1770b5] border-b-2 border-[#1770b5]' : ''
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
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1770b5] hover:bg-[#135c96] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0"
            title="Preview & Download CV"
          >
            <FileText className="w-4 h-4" />
            <span>Preview / Download CV</span>
          </button>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1770b5] hover:text-[#135c96]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </header>

      {/* Spacer for fixed 75px header */}
      <div className="h-[75px]" />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[75px] left-0 right-0 bg-white border-b border-[#1770b5]/20 shadow-xl z-40 py-5 px-6">
          <ul className="flex flex-col gap-4 text-center font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-semibold ${
                    activeSection === item.id ? 'text-[#1770b5] font-bold' : 'text-[#1f2937]'
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
