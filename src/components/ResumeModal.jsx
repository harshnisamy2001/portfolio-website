import React from 'react';
import { X, Download, Printer, Shield, Mail, Phone, MapPin, Globe, CheckCircle2, Award, Calendar } from 'lucide-react';
import { personalInfo, experiences, projects, education, certifications, volunteering } from '../data/cvData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-4xl max-h-[92vh] overflow-y-auto text-left bg-slate-950 p-6 md:p-10 border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-bold text-white font-heading">Curriculum Vitae — Harshni Couppoussamy</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="modal-close-btn relative top-0 right-0"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="bg-slate-900/90 rounded-xl p-8 border border-slate-800 space-y-8 text-slate-200 text-sm leading-relaxed">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white font-heading">{personalInfo.name}</h1>
            <p className="text-sm font-semibold text-sky-400 font-heading">{personalInfo.title}</p>
            
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-purple-400" /> {personalInfo.location}</span>
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-blue-400" /> {personalInfo.linkedinHandle}</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Profile</h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {personalInfo.profileSummary}
            </p>
          </div>

          {/* Key Skills */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Key Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <p><strong className="text-white">Identity and Access:</strong> IAM, RBAC, multi-factor authentication, least privilege, access reviews</p>
              <p><strong className="text-white">Governance, Risk & Compliance:</strong> ISO/IEC 27001, SOC 2, NCSC CAF, Cyber Essentials Plus, UK GDPR, risk register, gap analysis</p>
              <p><strong className="text-white">Risk and Vulnerability:</strong> risk assessment, threat modelling, vulnerability assessment, CVSS, OWASP</p>
              <p><strong className="text-white">Data Protection:</strong> encryption, key management, data classification, API security</p>
              <p><strong className="text-white">Detection & Response:</strong> incident response, intrusion detection, audit logging, monitoring</p>
              <p><strong className="text-white">Engineering & Cloud:</strong> DevSecOps, CI/CD, secure code review, AWS, Salesforce</p>
              <p><strong className="text-white">Machine Learning:</strong> CNN-LSTM, GAN data augmentation, SHAP, CIC-IDS2017</p>
              <p><strong className="text-white">Soft Skills:</strong> communication, teamwork, leadership, problem solving, attention to detail, stakeholder management</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Professional Experience</h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-heading">
                  <h3 className="font-bold text-white">{exp.role}</h3>
                  <span className="font-mono text-slate-400">{exp.period}</span>
                </div>
                <p className="text-sky-400 font-semibold text-xs">{exp.company}, {exp.location}</p>

                {exp.award && (
                  <p className="text-xs text-amber-300 font-semibold bg-amber-500/10 p-2 rounded border border-amber-500/30">
                    • {exp.award}
                  </p>
                )}

                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs pl-1">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Projects</h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs sm:text-sm">
                <h3 className="font-bold text-white">{proj.title} <span className="font-normal text-slate-400">— {proj.subtitle}</span></h3>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs pl-1">
                  {proj.keyPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Education</h2>

            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-white">{edu.degree}</h3>
                  <p className="text-slate-400">{edu.institution}</p>
                </div>
                <span className="font-mono text-slate-400">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Certifications</h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert.title} ({cert.issuer})</li>
              ))}
            </ul>
          </div>

          {/* Volunteering */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-white font-heading uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">Volunteering</h2>
            {volunteering.map((vol, idx) => (
              <div key={idx} className="text-xs text-slate-300 space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{vol.role} — {vol.organization}</span>
                  <span className="font-mono text-slate-400">{vol.period}</span>
                </div>
                <p>{vol.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
