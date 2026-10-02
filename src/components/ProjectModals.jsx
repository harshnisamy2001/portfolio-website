import React, { useState } from 'react';
import { X, ShieldAlert, Cpu, Lock, CheckCircle2, AlertTriangle, Play, BarChart2, Eye, FileText, RefreshCw, Key } from 'lucide-react';

export default function ProjectModals({ activeProject, onClose }) {
  if (!activeProject) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>

        {activeProject.modalType === 'gap-analysis' && <GapAnalysisSimulator project={activeProject} />}
        {activeProject.modalType === 'cnn-lstm' && <CnnLstmShapSimulator project={activeProject} />}
        {activeProject.modalType === 'encryption' && <EncryptionStegoSimulator project={activeProject} />}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------
 * 1. Gap Analysis Simulator Component
 * ------------------------------------------------------------------- */
function GapAnalysisSimulator({ project }) {
  const [selectedStandard, setSelectedStandard] = useState('iso27001');

  const labFindings = [
    { id: 1, name: 'Web Portal Injection Vulnerability', cvss: 9.8, severity: 'Critical', standard: 'ISO 27001 A.8.28 / OWASP', status: 'Remediation Roadmapped', owner: 'AppSec Lead' },
    { id: 2, name: 'Over-Provisioned Admin Privileges', cvss: 8.5, severity: 'High', standard: 'ISO 27001 A.9.2.3 / Least Privilege', status: 'Access Review In Progress', owner: 'IAM Analyst (Harshni)' },
    { id: 3, name: 'Unencrypted Offsite Backups', cvss: 7.4, severity: 'High', standard: 'UK GDPR / NCSC CAF', status: 'AES-256 Enforced', owner: 'Infrastructure Lead' },
    { id: 4, name: 'Missing MFA for Remote Access', cvss: 7.2, severity: 'High', standard: 'Cyber Essentials Plus', status: 'MFA Deployed', owner: 'IAM Team' },
  ];

  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="badge badge-cyan text-xs mb-2">Interactive Consultancy Simulator</span>
        <h3 className="text-2xl font-bold text-white font-heading">{project.title}</h3>
        <p className="text-sm text-slate-400">{project.subtitle}</p>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">
        This simulated managed security provider (MSP) serving Healthcare, CNI, and Financial Services clients underwent a rigorous ISO/IEC 27001:2022 and UK GDPR gap analysis led by Harshni Couppoussamy.
      </p>

      {/* Interactive Risk Register Table */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-sky-400" />
            Live Audit Risk Register Matrix
          </h4>
          <span className="text-xs font-mono text-emerald-400">4 Critical Findings Catalogued</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
              <tr>
                <th className="p-2.5">Vulnerability / Gap</th>
                <th className="p-2.5">CVSS Rating</th>
                <th className="p-2.5">Compliance Standard</th>
                <th className="p-2.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {labFindings.map((finding) => (
                <tr key={finding.id} className="hover:bg-slate-800/50">
                  <td className="p-2.5 font-semibold text-white">{finding.name}</td>
                  <td className="p-2.5 font-mono">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      finding.cvss >= 9 ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}>
                      CVSS {finding.cvss} ({finding.severity})
                    </span>
                  </td>
                  <td className="p-2.5 text-slate-400">{finding.standard}</td>
                  <td className="p-2.5 font-mono text-sky-400">{finding.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Phased Roadmap Viewer */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
        <h4 className="text-xs font-bold text-white font-heading uppercase tracking-wider">Co-Authored Remediation Roadmap</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-sky-400 font-bold font-mono">Phase 1 (Immediate)</span>
            <p className="text-slate-300 font-semibold">Access Control & MFA</p>
            <p className="text-slate-400 text-[11px]">Deploy mandatory MFA, revoke over-provisioned profiles.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold font-mono">Phase 2 (30 Days)</span>
            <p className="text-slate-300 font-semibold">CVSS 9.8 Remediation</p>
            <p className="text-slate-400 text-[11px]">Patch injection vulnerabilities & apply secure coding guidelines.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-purple-400 font-bold font-mono">Phase 3 (90 Days)</span>
            <p className="text-slate-300 font-semibold">Continuous Audit Log</p>
            <p className="text-slate-400 text-[11px]">Enforce automated backup encryption & ISO 27001 logging.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------
 * 2. CNN-LSTM SHAP Simulator Component
 * ------------------------------------------------------------------- */
function CnnLstmShapSimulator({ project }) {
  const [packetType, setPacketType] = useState('ddos');
  const [analyzing, setAnalyzing] = useState(false);

  const trafficScenarios = {
    ddos: {
      name: 'UDP Flood DDoS Exploit',
      classification: 'HIGH THREAT (DDoS)',
      probability: 99.4,
      features: [
        { name: 'packet_rate', value: '45,000 pkts/sec', shap: '+0.42 (High Risk)', color: 'text-red-400' },
        { name: 'flow_duration', value: '0.002s (Micro bursts)', shap: '+0.31 (Anomaly)', color: 'text-red-400' },
        { name: 'destination_port', value: 'Port 80', shap: '+0.15', color: 'text-amber-400' },
        { name: 'tcp_flags', value: 'SYN Flag Only', shap: '+0.10', color: 'text-amber-400' }
      ]
    },
    gan_synthetic: {
      name: 'GAN Synthesized Stealth Exfiltration',
      classification: 'RARE ATTACK CLASS (Exfiltration)',
      probability: 97.8,
      features: [
        { name: 'bytes_sent_ratio', value: '98.2% Outbound', shap: '+0.48 (Data Leak)', color: 'text-red-400' },
        { name: 'session_interval', value: 'Calculated Jitter', shap: '+0.25 (Stealth Bot)', color: 'text-red-400' },
        { name: 'destination_port', value: 'Port 443 (TLS)', shap: '+0.12', color: 'text-amber-400' }
      ]
    },
    normal: {
      name: 'Legitimate HTTPS Web Session',
      classification: 'BENIGN TRAFFIC',
      probability: 0.2,
      features: [
        { name: 'packet_rate', value: '42 pkts/sec', shap: '-0.45 (Safe)', color: 'text-emerald-400' },
        { name: 'tls_handshake', value: 'Valid RSA Certificate', shap: '-0.38 (Safe)', color: 'text-emerald-400' },
        { name: 'flow_duration', value: '12.4s', shap: '-0.10 (Normal)', color: 'text-emerald-400' }
      ]
    }
  };

  const current = trafficScenarios[packetType];

  const handleSimulate = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 600);
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="badge badge-purple text-xs mb-2">MSc Dissertation Research Demo</span>
        <h3 className="text-2xl font-bold text-white font-heading">{project.title}</h3>
        <p className="text-sm text-slate-400">{project.subtitle}</p>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">
        This interactive tool demonstrates how Harshni's MSc dissertation model uses CNN spatial feature extraction, LSTM sequence analysis, and SHAP Explainable AI (XAI) to help SOC analysts interpret intrusion flags.
      </p>

      {/* Scenario Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { setPacketType('ddos'); handleSimulate(); }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
            packetType === 'ddos' ? 'bg-red-500 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          Simulate UDP Flood DDoS
        </button>
        <button
          onClick={() => { setPacketType('gan_synthetic'); handleSimulate(); }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
            packetType === 'gan_synthetic' ? 'bg-purple-500 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          Simulate GAN Stealth Leak
        </button>
        <button
          onClick={() => { setPacketType('normal'); handleSimulate(); }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-heading transition-all ${
            packetType === 'normal' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          Simulate Normal Traffic
        </button>
      </div>

      {/* Analysis Output Box */}
      <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs text-slate-400 font-mono">CNN-LSTM Model Output:</span>
            <h4 className="text-base font-bold text-white font-heading">{current.name}</h4>
          </div>
          <div className="text-right">
            <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
              current.probability > 50 ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
            }`}>
              {current.classification}
            </span>
          </div>
        </div>

        {/* SHAP Feature Attribution Force Plot Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4 text-sky-400" />
              SHAP XAI Feature Attribution Breakdown
            </span>
            <span className="font-mono text-sky-400">Model Anomaly Score: {current.probability}%</span>
          </div>

          {analyzing ? (
            <div className="py-8 text-center space-y-2">
              <RefreshCw className="w-6 h-6 text-sky-400 animate-spin mx-auto" />
              <p className="text-xs font-mono text-slate-400">Computing SHAP KernelExplainer Values...</p>
            </div>
          ) : (
            <div className="space-y-2">
              {current.features.map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-white font-semibold">{feat.name}</span>
                    <span className="text-slate-400 ml-2">({feat.value})</span>
                  </div>
                  <span className={`font-mono font-bold ${feat.color}`}>{feat.shap}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------
 * 3. Encryption Steganography Simulator Component
 * ------------------------------------------------------------------- */
function EncryptionStegoSimulator({ project }) {
  const [secretText, setSecretText] = useState('CONFIDENTIAL_AUDIO_VOICE_NOTE_092.WAV');
  const [encrypted, setEncrypted] = useState(false);

  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="badge badge-emerald text-xs mb-2">Cryptography Lab Demo</span>
        <h3 className="text-2xl font-bold text-white font-heading">{project.title}</h3>
        <p className="text-sm text-slate-400">{project.subtitle}</p>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">
        Developed at Puducherry Technological University, this system conceals audio payloads within cover images using AES-256 symmetric encryption and RSA key exchange.
      </p>

      {/* Interactive Stego Form */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        <div>
          <label className="block text-xs font-bold text-white font-heading mb-1">
            Secret Audio File Name / Payload String:
          </label>
          <input
            type="text"
            value={secretText}
            onChange={(e) => setSecretText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 font-mono focus:border-sky-400 focus:outline-none"
          />
        </div>

        <button
          onClick={() => setEncrypted(!encrypted)}
          className="btn btn-primary text-xs py-2 w-full justify-center"
        >
          <Lock className="w-4 h-4" />
          <span>{encrypted ? 'Reset Steganographic Container' : 'Execute AES-256 + RSA Steganography'}</span>
        </button>

        {encrypted && (
          <div className="p-4 rounded-lg bg-slate-950 border border-sky-500/40 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Steganographic Embedding Complete
              </span>
              <span>AES-256 Key: 2048-bit RSA Encrypted</span>
            </div>

            <div className="p-3 rounded bg-slate-900 font-mono text-[11px] text-slate-400 break-all space-y-1">
              <p className="text-sky-400">Ciphertext Payload Hash (AES-256-CBC):</p>
              <p className="text-slate-300">8f9b2c4e1a0d3f7e6b5c4a2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4a3d2e</p>
            </div>
            <p className="text-xs text-slate-400">
              The cover image visual histogram remains unchanged to prevent LSB (Least Significant Bit) steganalysis detection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
