import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Sparkles, Share2 } from 'lucide-react';
import { insightsArticles } from '../data/cvData';

export default function SecurityInsightsSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="insights" className="section-padding relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Thought Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Cyber Security Insights & Articles
          </h2>
          <p>
            Technical articles exploring zero-trust architecture, explainable AI in SOC detection, and DevSecOps compliance mapping.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsArticles.map((art) => (
            <div key={art.id} className="glass-card p-6 flex flex-col justify-between text-left hover:border-sky-500/50 group transition-all">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{art.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-sky-400 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setActiveArticle(art)}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 font-heading flex items-center gap-2 group/btn"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Full Reader Modal */}
      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div
            className="modal-content text-left max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="modal-close-btn"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-sky-400 mb-2">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-heading leading-snug">
                  {activeArticle.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">Authored by Harshni Couppoussamy</p>
              </div>

              <div className="prose prose-invert prose-sky max-w-none text-sm text-slate-300 space-y-4 leading-relaxed border-t border-b border-slate-800 py-6">
                {activeArticle.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('###')) {
                    return <h4 key={idx} className="text-lg font-bold text-white font-heading mt-4 mb-2">{paragraph.replace('###', '')}</h4>;
                  }
                  if (paragraph.startsWith('* ')) {
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-1 my-2 text-slate-300">
                        {paragraph.split('\n').map((li, lidx) => (
                          <li key={lidx}>{li.replace('* ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="badge badge-cyan text-xs">Category: Technical Security Insight</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="btn btn-secondary text-xs py-2 px-4"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
