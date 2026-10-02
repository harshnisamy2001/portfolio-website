import React, { useState } from 'react';
import { ShieldCheck, Cpu, Code, Database, Key, Server, Lock, Layers } from 'lucide-react';
import { skillsCategories } from '../data/cvData';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="expertise" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Technical Matrix</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Key Competencies & Tooling
          </h2>
          <p>
            Proven expertise spanning enterprise access control, international cybersecurity compliance standards, vulnerability remediation, and explainable deep learning.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold font-heading transition-all ${
              activeCategory === 'all'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Competencies
          </button>
          {skillsCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold font-heading transition-all ${
                activeCategory === category.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="glass-card p-6 text-left space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  {cat.name}
                </h3>
                <span className="text-xs font-mono text-slate-400">{cat.skills.length} Skills</span>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-sky-400 font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Methodology Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-heading">Core Professional & Stakeholder Leadership Skills</h4>
            <p className="text-xs text-slate-400">Communication, Cross-Functional Team Leadership, Critical Problem Solving, Auditing Handover, Executive Presentation.</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="badge badge-cyan text-xs">Cross-Functional Lead</span>
            <span className="badge badge-emerald text-xs">Audit Documentation</span>
            <span className="badge badge-purple text-xs">Stakeholder Alignment</span>
          </div>
        </div>

      </div>
    </section>
  );
}
