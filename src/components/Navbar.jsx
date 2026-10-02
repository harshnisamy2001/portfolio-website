import React, { useState, useEffect } from 'react';
import { Shield, FileText, Menu, X, CheckCircle, ExternalLink, Download } from 'lucide-react';
import { personalInfo } from '../data/cvData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects & AI', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Insights', href: '#insights' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Shield className="w-5.5 h-5.5" />
          </div>
          <div>
            <span className="font-bold text-lg text-white font-heading tracking-tight group-hover:text-sky-400 transition-colors block">
              HARSHNI <span className="text-sky-400">COUPPOUSSAMY</span>
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Cyber Security & GRC Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="btn btn-secondary text-sm py-2 px-4 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>View CV</span>
          </button>
          <a
            href="#contact"
            className="btn btn-primary text-sm py-2 px-4"
          >
            Hire / Consult
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-slate-800">
              <span className="badge badge-emerald text-xs mb-2">
                <CheckCircle className="w-3.5 h-3.5" />
                {personalInfo.statusBadge}
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-sky-400 font-medium text-base py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary w-full justify-center text-sm py-2.5"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View & Download CV</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full justify-center text-sm py-2.5"
              >
                Hire / Consult
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
