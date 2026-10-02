import React from 'react';
import { X, Printer, Download, Shield, Mail, Phone, MapPin, Globe, CheckCircle2, Award } from 'lucide-react';
import { personalInfo, experiences, portfolioProjects, education, certifications } from '../data/cvData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 text-slate-800 p-6 md:p-10 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10 py-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1770b5] text-white flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-base text-[#1f2937] font-heading">
              Harshni Couppoussamy — Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1770b5] hover:bg-[#135c96] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Paper Sheet */}
        <div className="bg-white p-6 sm:p-8 border border-slate-200 rounded-xl space-y-6 text-sm text-slate-700 leading-relaxed shadow-inner font-sans">
          
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-[#1f2937] tracking-tight">{personalInfo.name}</h1>
            <p className="text-xs sm:text-sm font-semibold text-[#1770b5]">
              {personalInfo.email} | {personalInfo.personalEmail} | {personalInfo.phoneFormatted} | {personalInfo.location}
            </p>
            <p className="text-xs text-[#1770b5] font-semibold underline">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedinHandle}
              </a>
            </p>
          </div>

          {/* Profile */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Analytical cyber security analyst with two and a half years at Accenture. Engineered security into live Salesforce CRM and CPQ platforms for global clients, covering identity and access management, risk assessment, incident response and audit-ready governance. Currently completing MSc Cybersecurity Technology at Northumbria University London. Seeking a UK cyber security analyst, IAM, GRC or risk role from October 2026.
            </p>
          </div>

          {/* Key Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Key Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              <p><strong className="text-[#1f2937]">Identity and access:</strong> IAM, RBAC, multi-factor authentication, least privilege, access reviews</p>
              <p><strong className="text-[#1f2937]">Governance, risk and compliance:</strong> ISO/IEC 27001, SOC 2, NCSC CAF, Cyber Essentials Plus, UK GDPR, risk register, gap analysis</p>
              <p><strong className="text-[#1f2937]">Risk and vulnerability:</strong> risk assessment, threat modelling, vulnerability assessment, CVSS, OWASP</p>
              <p><strong className="text-[#1f2937]">Data protection:</strong> encryption, key management, data classification, API security</p>
              <p><strong className="text-[#1f2937]">Detection and response:</strong> incident response, intrusion detection, audit logging, monitoring</p>
              <p><strong className="text-[#1f2937]">Engineering and cloud:</strong> DevSecOps, CI/CD, secure code review, AWS, Salesforce</p>
              <p><strong className="text-[#1f2937]">Machine learning:</strong> CNN-LSTM, GAN data augmentation, SHAP, CIC-IDS2017</p>
              <p><strong className="text-[#1f2937]">Soft skills:</strong> communication, teamwork, leadership, problem solving, attention to detail, stakeholder management</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-5">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Professional Experience
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-[#1f2937]">
                  <h3>{exp.role}</h3>
                  <span className="text-slate-500 font-mono text-xs font-normal">{exp.period}</span>
                </div>
                <p className="text-xs font-semibold text-[#1770b5]">{exp.company}, {exp.location}</p>

                {exp.award && (
                  <p className="text-xs font-semibold text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                    • {exp.award}
                  </p>
                )}

                <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Projects
            </h2>

            {portfolioProjects.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                <h3 className="font-bold text-[#1f2937]">{proj.title} <span className="font-normal text-slate-500">— {proj.subtitle}</span></h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                  {proj.details.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Education
            </h2>

            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-[#1f2937]">{edu.degree}</h3>
                  <p className="text-slate-600 text-xs">{edu.institution}</p>
                </div>
                <span className="text-slate-500 font-mono text-xs">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              {certifications.map((cert, idx) => (
                <li key={idx}><strong className="text-[#1f2937]">{cert.title}</strong> ({cert.issuer})</li>
              ))}
            </ul>
          </div>

          {/* Volunteering */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-[#1770b5] uppercase tracking-wider border-b border-slate-200 pb-1">
              Volunteering
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div className="flex justify-between font-bold text-[#1f2937]">
                <span>Front of House Volunteer — LHA London Ltd, London</span>
                <span className="text-slate-500 font-mono font-normal">January 2026 – Present</span>
              </div>
              <p>Welcome residents and visitors at a supported-housing charity, handling enquiries and personal information with discretion.</p>
            </div>
          </div>

        </div>

        {/* Footer Close Controls */}
        <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Close Preview
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1770b5] hover:bg-[#135c96] text-white text-xs font-bold transition-colors shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
