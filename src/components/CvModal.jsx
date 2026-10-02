import React from 'react';
import { X, Download, Shield, ExternalLink, FileText } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pdfUrl = "/Harshni_Couppoussamy_CV.pdf";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 text-slate-800 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 px-6 py-4 bg-white z-10 gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base text-[#111827] font-heading block">
                Harshni Couppoussamy — Original Curriculum Vitae
              </span>
              <span className="text-xs text-slate-500 font-mono">Original Document Preview (PDF)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="Harshni_Couppoussamy_CV.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Original PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Original PDF Viewer */}
        <div className="flex-1 bg-slate-100 relative w-full h-full">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Harshni Couppoussamy Original CV PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 shrink-0">
          <span>Harshni Couppoussamy — Cyber Security Analyst CV</span>
          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#059669] font-bold hover:underline flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>
            <a
              href={pdfUrl}
              download="Harshni_Couppoussamy_CV.pdf"
              className="px-4 py-1.5 rounded-lg bg-[#059669] text-white font-bold text-xs hover:bg-[#047857] transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
