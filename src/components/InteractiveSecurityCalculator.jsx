import React, { useState } from 'react';
import { ShieldAlert, Calculator, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function InteractiveSecurityCalculator() {
  const [accessControl, setAccessControl] = useState('overprovisioned');
  const [mfaStatus, setMfaStatus] = useState('partial');
  const [isoAuditStatus, setIsoAuditStatus] = useState('unmapped');

  // Compute calculated risk score
  let riskScore = 40;
  let riskLevel = 'Moderate';
  let recommendations = [];

  if (accessControl === 'overprovisioned') {
    riskScore += 30;
    recommendations.push('Enforce least privilege: Convert standard profiles into minimal baseline + permission set groups.');
  } else {
    riskScore -= 10;
  }

  if (mfaStatus === 'none') {
    riskScore += 25;
    recommendations.push('Critical: Enforce SSO + contextual MFA across all user logins immediately.');
  } else if (mfaStatus === 'partial') {
    riskScore += 10;
    recommendations.push('Extend MFA coverage to all production and sandbox org administrators.');
  } else {
    riskScore -= 15;
  }

  if (isoAuditStatus === 'unmapped') {
    riskScore += 20;
    recommendations.push('Perform ISO/IEC 27001:2022 gap assessment and author control mapping documentation.');
  } else {
    riskScore -= 10;
  }

  riskScore = Math.max(10, Math.min(99, riskScore));

  if (riskScore >= 70) riskLevel = 'HIGH RISK';
  else if (riskScore >= 45) riskLevel = 'MEDIUM RISK';
  else riskLevel = 'LOW / AUDIT READY';

  return (
    <section id="calculator" className="section-padding bg-slate-950/80 relative border-t border-b border-slate-800/80">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Executive Toolkit</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Interactive Security Posture Assessor
          </h2>
          <p>
            Evaluate your platform's security controls and generate instant IAM & GRC remediation steps based on Harshni's Accenture & ISO 27001 framework methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <Calculator className="w-5 h-5 text-sky-400" />
              Configure Assessment Parameters
            </h3>

            {/* Parameter 1: Access Control */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-white font-heading uppercase tracking-wider">
                1. Identity & Sharing Rules Configuration:
              </label>
              <select
                value={accessControl}
                onChange={(e) => setAccessControl(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-sky-400 focus:outline-none"
              >
                <option value="overprovisioned">Over-provisioned Admin Profiles & Open External Sharing</option>
                <option value="least_privilege">Strict Role Hierarchy & Private Sharing Controls (Least Privilege)</option>
              </select>
            </div>

            {/* Parameter 2: MFA */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-white font-heading uppercase tracking-wider">
                2. Multi-Factor Authentication (MFA) Deployment:
              </label>
              <select
                value={mfaStatus}
                onChange={(e) => setMfaStatus(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-sky-400 focus:outline-none"
              >
                <option value="none">No MFA Enforced (Password-Only Authentication)</option>
                <option value="partial">Partial MFA (Enforced Only for Admins)</option>
                <option value="full">100% Production MFA & Conditional Access Rules</option>
              </select>
            </div>

            {/* Parameter 3: ISO 27001 */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-white font-heading uppercase tracking-wider">
                3. ISO 27001 & SOC 2 Audit Alignment:
              </label>
              <select
                value={isoAuditStatus}
                onChange={(e) => setIsoAuditStatus(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-sky-400 focus:outline-none"
              >
                <option value="unmapped">No Formal ISO 27001 Control Mapping or Audit Logs</option>
                <option value="audited">Full ISO 27001 / SOC 2 Controls Mapped & Audit Logging Active</option>
              </select>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              * Assessment algorithms mirror standard ISO 27005 and NCSC risk scoring principles.
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase">Calculated Security Posture</span>
              
              <div className="my-4 flex items-center justify-between">
                <div>
                  <p className="text-4xl font-extrabold font-heading text-white">{riskScore} <span className="text-sm font-normal text-slate-400">/ 100 Risk</span></p>
                  <p className={`text-xs font-bold font-mono mt-1 ${
                    riskScore >= 70 ? 'text-red-400' : riskScore >= 45 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {riskLevel}
                  </p>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  riskScore >= 70 ? 'bg-red-500/20 text-red-400 border border-red-500/40' : riskScore >= 45 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                }`}>
                  {riskScore >= 70 ? <ShieldAlert className="w-7 h-7" /> : <ShieldCheck className="w-7 h-7" />}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-white font-heading uppercase">Recommended Security Actions:</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#contact"
              className="btn btn-primary w-full justify-center text-xs py-2.5"
            >
              <span>Book Formal Security Audit with Harshni</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
