import React from 'react';
import { portfolioProjects } from '../data/cvData';

export default function PortfolioSection() {
  return (
    <section className="w-full bg-[#f0fdf4]/50 border-b border-emerald-100" id="portfolio">
      <main className="flex flex-col gap-10 py-20 sm:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-[#059669] font-bold mx-auto pb-1 w-max">
            Portfolio
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Key Security Projects & Applied Research
          </h3>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between card-hover-expand text-left"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="px-2.5 py-1 rounded bg-[#059669] text-white text-xs font-semibold font-mono">
                      {proj.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-[#111827]">
                    {proj.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {proj.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          ✓
                        </span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </section>
  );
}
