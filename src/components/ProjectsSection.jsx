import React, { useState } from 'react';
import { Cpu, ShieldAlert, Lock, ArrowUpRight, Play, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { projects } from '../data/cvData';
import ProjectModals from './ProjectModals';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Research & Projects</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Featured Projects & Applied AI Research
          </h2>
          <p>
            Demonstrating expertise across enterprise GRC consultancy, deep learning intrusion detection, and cryptographic steganography.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card flex flex-col justify-between overflow-hidden group hover:border-sky-500/50 transition-all">
              
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-cyan text-xs">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4 text-left">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-sky-400 font-mono mt-1">{proj.subtitle}</p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {proj.keyPoints.slice(0, 3).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Tags & Interactive Demo Trigger */}
              <div className="p-6 pt-0 space-y-4 text-left border-t border-slate-800/60 mt-4">
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-400 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="btn btn-secondary w-full justify-center text-xs py-2.5 flex items-center gap-2 group/btn"
                >
                  <Terminal className="w-4 h-4 text-sky-400 group-hover/btn:rotate-12 transition-transform" />
                  <span>Launch Interactive Simulator</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-sky-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModals
        activeProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
