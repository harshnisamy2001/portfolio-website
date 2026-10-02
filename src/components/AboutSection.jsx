import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200/80 scroll-mt-[75px]" id="about">
      <main className="flex flex-col gap-10 py-20 sm:py-24 px-4 md:px-8 max-w-[1200px] mx-auto text-center items-center">
        
        {/* Section Header Tag */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-[#059669] font-bold mx-auto pb-1 w-max">
            About
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] max-w-3xl mx-auto">
            A Cybersecurity Specialist Engineering Zero-Trust Identity & Audit-Ready Compliance
          </h3>
        </div>

        {/* Content Box: Photo & Narrative */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full">
          
          {/* Photo */}
          <div className="w-full max-w-[320px] lg:max-w-[360px] shrink-0 flex justify-center mx-auto">
            <img
              src="/images/about.jpg"
              alt="Harshni Couppoussamy"
              className="w-full h-auto object-cover rounded-2xl shadow-xl border-2 border-[#059669]/30 max-h-[440px]"
            />
          </div>

          {/* Narrative Paragraphs (Left-aligned for long-form reading comfort) */}
          <div className="flex flex-col gap-4 text-left text-slate-600 text-sm sm:text-base leading-relaxed flex-1 min-w-0">
            <p>
              Hi, I am <strong className="text-[#111827]">Harshni Couppoussamy</strong>, located in London, United Kingdom. My passion lies in Cyber Security, Identity & Access Management (IAM), and Risk Governance. I ensure that security is engineered directly into live enterprise platforms to safeguard sensitive corporate and customer data.
            </p>
            <p>
              With 2.5 years as an Advanced App Engineering Analyst & Associate at Accenture in India, I architected zero-trust Salesforce access controls across profiles, permission set groups, and sharing rules. I deployed multi-factor authentication (MFA) across production orgs, authored audit logging standards mapped to ISO/IEC 27001 and SOC 2, and embedded automated security checks into DevSecOps CI/CD pipelines.
            </p>
            <p>
              Currently completing my MSc in Cybersecurity Technology with Advanced Practice at Northumbria University London, my dissertation focuses on explainable deep learning (CNN-LSTM networks + SHAP force plots) for Security Operations Center (SOC) intrusion detection. I am seeking a UK-based Cyber Security Analyst, IAM, GRC, or Risk role starting October 2026.
            </p>
          </div>

        </div>

      </main>
    </section>
  );
}
