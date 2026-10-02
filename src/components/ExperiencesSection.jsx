import React from 'react';
import { ExternalLink, Award, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences, education, certifications } from '../data/cvData';

export default function ExperiencesSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200/80" id="experiences">
      <main className="flex flex-col gap-16 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        
        {/* Subsection 1: Work Experience */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-sm uppercase text-[#1770b5] font-bold mx-auto pb-1 w-max">
              Experiences
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937]">
              Work Experience
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col gap-3 rounded-xl p-6 md:p-8 border border-[#1770b5]/20 bg-white shadow-sm text-left hover:border-[#1770b5] transition-all"
              >
                <div className="bg-[#1770b5] text-white rounded-full py-1 px-3.5 w-max text-xs font-bold font-mono">
                  {exp.period}
                </div>

                <h4 className="text-2xl font-bold text-[#1f2937]">
                  {exp.role}
                </h4>

                <div className="flex items-center gap-2 text-[#1770b5] font-semibold text-sm">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                {exp.award && (
                  <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{exp.award}</span>
                  </div>
                )}

                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider pt-2">Key Accomplishments & Scope:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Education */}
        <div className="space-y-8 pt-6 border-t border-slate-100">
          <div className="text-center">
            <h2 className="text-sm uppercase text-[#1770b5] font-bold mx-auto pb-1 w-max">
              Experiences
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937]">
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 rounded-xl p-6 md:p-8 border border-[#1770b5]/20 bg-white shadow-sm text-left hover:border-[#1770b5] transition-all"
              >
                <div className="bg-[#1770b5] text-white rounded-full py-1 px-3.5 w-max text-xs font-bold font-mono">
                  {edu.period}
                </div>

                <h4 className="text-xl font-bold text-[#1f2937]">
                  {edu.degree}
                </h4>

                <span className="text-[#1770b5] font-semibold text-sm">
                  {edu.institution}
                </span>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection 3: Certifications */}
        <div className="space-y-8 pt-6 border-t border-slate-100">
          <div className="text-center">
            <h2 className="text-sm uppercase text-[#1770b5] font-bold mx-auto pb-1 w-max">
              Experiences
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937]">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between gap-3 rounded-xl p-5 border border-[#1770b5]/20 bg-white shadow-sm text-left hover:border-[#1770b5] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1770b5]/10 text-[#1770b5] flex items-center justify-center font-bold mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#1f2937]">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#1770b5] font-semibold mt-1">{cert.issuer}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </section>
  );
}
