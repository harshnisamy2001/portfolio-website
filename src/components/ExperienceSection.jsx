import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Shield, ChevronRight } from 'lucide-react';
import { experiences } from '../data/cvData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-slate-950/60 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Career Record</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Professional Experience at Accenture
          </h2>
          <p>
            2.5 years engineering zero-trust Salesforce access, enterprise data security, and audit-ready governance for global corporate clients.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-12">
          
          {/* Vertical Timeline Bar */}
          <div className="absolute top-0 bottom-0 left-6 md:left-8 w-0.5 bg-slate-800 pointer-events-none" />

          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-16 md:pl-20 text-left group">
              
              {/* Timeline Icon Node */}
              <div className="absolute left-3.5 md:left-5 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-500 text-sky-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-lg shadow-sky-500/20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Main Glass Card */}
              <div className="glass-card p-8 space-y-6 hover:border-sky-500/40 transition-all">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="badge badge-cyan text-xs mb-2">{exp.type}</span>
                    <h3 className="text-xl font-bold text-white font-heading">{exp.role}</h3>
                    <p className="text-sm font-semibold text-sky-400 font-heading">{exp.company}</p>
                  </div>
                  <div className="text-xs text-slate-400 font-mono space-y-1 md:text-right">
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Promising Talent Award Callout Card (if present) */}
                {exp.award && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/30 flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-300 font-heading">Accenture Promising Talent Award (July 2023)</p>
                      <p className="text-xs text-amber-200/80">Recognized for consistently exceeding performance targets, leading security handovers, and outstanding client delivery.</p>
                    </div>
                  </div>
                )}

                {/* Key Bullet Achievements */}
                <ul className="space-y-3 text-sm text-slate-300">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies & Standards:</span>
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
