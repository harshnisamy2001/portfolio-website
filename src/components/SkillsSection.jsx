import React from 'react';
import { raifStyleSkills } from '../data/cvData';

export default function SkillsSection() {
  return (
    <section className="w-full bg-[#f8fafc] border-b border-slate-200/80" id="skills">
      <main className="flex flex-col gap-10 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-[#1770b5] font-bold mx-auto pb-1 w-max">
            Skills
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937]">
            Technical Expertise & Framework Mastery
          </h3>
        </div>

        {/* Skills Progress Bars Grid */}
        <div className="flex flex-row flex-wrap gap-8 justify-between">
          {raifStyleSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-2 w-full md:w-[calc(50%-1rem)] text-left">
              
              <div className="flex flex-row justify-between font-semibold text-sm text-[#1f2937]">
                <span>{skill.name}</span>
                <span className="font-bold text-[#1770b5]">{skill.percentage}%</span>
              </div>

              {/* Bar track */}
              <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-[#1770b5] h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              {/* Badges row */}
              <div className="flex flex-row gap-2 pt-1">
                <span className="bg-[#1770b5] rounded text-white text-xs font-semibold px-2.5 py-0.5">
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
