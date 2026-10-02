import React from 'react';
import { raifStyleSkills } from '../data/cvData';

export default function SkillsSection() {
  return (
    <section className="w-full bg-[#f0fdf4]/50 border-b border-emerald-100" id="skills">
      <main className="flex flex-col gap-10 py-20 sm:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-[#059669] font-bold mx-auto pb-1 w-max">
            Skills
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Technical Expertise & Framework Mastery
          </h3>
        </div>

        {/* Skills Progress Bars Grid */}
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
          {raifStyleSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-2 w-full md:w-[calc(50%-1rem)] text-center items-center">
              
              <div className="flex flex-row justify-between font-semibold text-sm text-[#111827] w-full">
                <span className="text-center">{skill.name}</span>
                <span className="font-bold text-[#059669]">{skill.percentage}%</span>
              </div>

              {/* Bar track */}
              <div className="bg-slate-200 rounded-full h-3 overflow-hidden w-full">
                <div
                  className="bg-[#059669] h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              {/* Badges row - Centered */}
              <div className="flex flex-row gap-2 pt-1 justify-center items-center">
                <span className="bg-[#059669] rounded text-white text-xs font-semibold px-2.5 py-0.5">
                  {skill.level}
                </span>
                <span className="bg-slate-700 rounded text-white text-xs font-semibold px-2.5 py-0.5">
                  {skill.experience}
                </span>
              </div>

            </div>
          ))}
        </div>

      </main>
    </section>
  );
}
