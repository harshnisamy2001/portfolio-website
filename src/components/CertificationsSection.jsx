import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle2, Shield, Calendar, MapPin } from 'lucide-react';
import { certifications, education, volunteering } from '../data/cvData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-slate-950/60 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Credentials & Education</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Certifications, Academic & Community Impact
          </h2>
          <p>
            Official Salesforce credentials, UK post-graduate master's degree, and dedicated volunteer governance.
          </p>
        </div>

        {/* 1. Salesforce Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white font-heading text-left mb-8 flex items-center gap-2">
            <Award className="w-5 h-5 text-sky-400" />
            4x Salesforce Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-card p-6 text-left space-y-4 hover:border-sky-500/50 group transition-all">
                
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold font-mono group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Award className="w-6 h-6" />
                </div>

                <div>
                  <span className="badge badge-emerald text-[11px] mb-2">Verified Credential</span>
                  <h4 className="text-base font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-sky-400 font-mono mt-0.5">{cert.issuer}</p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* 2. Education & Volunteering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Education Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              Academic Degrees
            </h3>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card p-6 space-y-3 hover:border-sky-500/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="badge badge-cyan text-xs mb-1">{edu.status}</span>
                      <h4 className="text-lg font-bold text-white font-heading">{edu.degree}</h4>
                      <p className="text-xs font-semibold text-sky-400 font-heading">{edu.institution}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering & Community Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-400" />
              Volunteering & Ethics
            </h3>

            {volunteering.map((vol, idx) => (
              <div key={idx} className="glass-card p-6 space-y-4 hover:border-emerald-500/40">
                <div>
                  <span className="badge badge-emerald text-xs mb-2">Social Impact</span>
                  <h4 className="text-base font-bold text-white font-heading">{vol.role}</h4>
                  <p className="text-xs font-semibold text-emerald-400 font-heading">{vol.organization} ({vol.location})</p>
                  <p className="text-xs font-mono text-slate-400 mt-1">{vol.period}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {vol.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
