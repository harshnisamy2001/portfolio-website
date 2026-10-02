export const personalInfo = {
  name: "Harshni Couppoussamy",
  title: "Cyber Security Analyst & IAM Specialist",
  tagline: "Hi, My name is Harshni Couppoussamy, a Cyber Security Analyst & MSc Cybersecurity Technology student at Northumbria University London with 2.5+ years of experience at Accenture.",
  email: "harshni.couppoussamy@northumbria.ac.uk",
  personalEmail: "harshnisamy2001@gmail.com",
  phone: "07799663823",
  phoneFormatted: "+44 7799 663823",
  location: "London, United Kingdom",
  linkedin: "https://www.linkedin.com/in/harshni-couppoussamy/",
  linkedinHandle: "linkedin.com/in/harshni-couppoussamy",
  availability: "Seeking UK Cyber Security Analyst, IAM, GRC, or Risk roles starting October 2026",
  statusBadge: "Available for UK Roles (Oct 2026)",
  mscDegree: "MSc Cybersecurity Technology Candidate @ Northumbria University London",
  accentureYears: "2.5+ Years Cyber Security Engineering at Accenture",
  profileSummary: "Analytical cyber security analyst with two and a half years at Accenture. Engineered security into live Salesforce CRM and CPQ platforms for global clients, covering identity and access management, risk assessment, incident response and audit-ready governance. Currently completing MSc Cybersecurity Technology at Northumbria University London. Seeking a UK cyber security analyst, IAM, GRC or risk role from October 2026."
};

export const services = [
  {
    id: "iam",
    title: "Identity & Access Management (IAM)",
    icon: "Key",
    description: "I design zero-trust access controls, RBAC hierarchies, least privilege enforcement, Salesforce profiles & sharing rules, and production MFA deployments to prevent over-provisioned credential risks."
  },
  {
    id: "grc",
    title: "Governance, Risk & Compliance (GRC)",
    icon: "ShieldAlert",
    description: "I perform enterprise gap analysis and map technical security controls to international frameworks including ISO/IEC 27001:2022, SOC 2 Type II, NCSC CAF, Cyber Essentials Plus, and UK GDPR."
  },
  {
    id: "vulnerability",
    title: "Vulnerability Assessment & Threat Modelling",
    icon: "ShieldCheck",
    description: "I conduct comprehensive risk assessments, STRIDE/OWASP threat modelling, CVSS 9.8 vulnerability prioritization, and lead incident response containment for enterprise platforms."
  },
  {
    id: "devsecops",
    title: "DevSecOps & Secure Engineering",
    icon: "Lock",
    description: "I embed automated security testing, SAST/DAST, secure code reviews, AWS cloud security, and encryption key management (AES-256, RSA) directly into continuous CI/CD deployment pipelines."
  }
];

export const raifStyleSkills = [
  { name: "Identity & Access Management (IAM)", percentage: 95, level: "Professional", experience: "2.5 years experience" },
  { name: "ISO/IEC 27001 & SOC 2 GRC", percentage: 92, level: "Professional", experience: "2.5 years experience" },
  { name: "Salesforce Security & Sharing Rules", percentage: 96, level: "Professional", experience: "2.5 years experience" },
  { name: "Risk Assessment & Threat Modelling", percentage: 90, level: "Professional", experience: "2.5 years experience" },
  { name: "DevSecOps & CI/CD Security", percentage: 85, level: "Intermediate", experience: "2.5 years experience" },
  { name: "Explainable AI (SHAP) & CNN-LSTM", percentage: 88, level: "Intermediate", experience: "1.5 years experience" },
  { name: "AES-256 / RSA Encryption & Steganography", percentage: 88, level: "Intermediate", experience: "2 years experience" },
  { name: "Python & Cyber Security Scripting", percentage: 85, level: "Intermediate", experience: "2 years experience" }
];

export const experiences = [
  {
    id: "exp-1",
    role: "Advanced App Engineering Analyst – Salesforce Security and IAM",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "2024 - 2025",
    type: "Full-Time",
    highlights: [
      "Architected end-to-end Salesforce security across profiles, permission sets, role hierarchy and sharing rules, enforcing least privilege and closing over-provisioned access paths found in review.",
      "Deployed multi-factor authentication and IAM controls across production orgs, reducing credential-based risk without disrupting delivery.",
      "Protected sensitive customer and commercial data through encryption, data classification, key management and secure API integrations.",
      "Conducted risk assessments, vulnerability analysis and threat modelling across CRM and CPQ, prioritising findings by severity and driving remediation with platform owners.",
      "Led incident response for platform security events, shortening time to containment and feeding root causes back into preventative controls.",
      "Authored access control standards, security policies and audit logging documentation, mapped to ISO/IEC 27001 and SOC 2 for client audits.",
      "Embedded security into DevSecOps and CI/CD pipelines through secure deployments, security testing and code review."
    ],
    techStack: ["Salesforce CRM/CPQ", "IAM / RBAC", "ISO/IEC 27001", "SOC 2", "MFA", "DevSecOps", "CI/CD", "Threat Modelling"]
  },
  {
    id: "exp-2",
    role: "Advanced App Engineering Associate – CPQ/CLM Delivery and Data Security",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "2022 - 2024",
    type: "Full-Time",
    award: "Received Accenture's Promising Talent Award (July 2023) for consistently exceeding performance targets.",
    highlights: [
      "Configured and maintained Conga CPQ and CLM solutions for enterprise clients under contractual and regulatory constraints.",
      "Applied access controls and data-handling rules to contract data, aligning lifecycle management with privacy standards.",
      "Gathered requirements from stakeholders and translated them into secure, compliant designs documented for audit and handover.",
      "Collaborated with QA and business teams to test releases and manage delivery risk ahead of go-live.",
      "Delivered technical support and training on secure use of CPQ/CLM tooling for client users and internal teams."
    ],
    techStack: ["Conga CPQ & CLM", "Data Security", "Privacy Standards", "Stakeholder Mgmt", "Delivery Risk", "QA Testing"]
  }
];

export const portfolioProjects = [
  {
    id: "proj-gap-analysis",
    title: "Risk & Compliance Gap Analysis",
    subtitle: "MSc Cybersecurity Technology Consultancy Project (2026)",
    image: "/assets/project_risk_gap.jpg",
    description: "I conducted a comprehensive risk and compliance gap analysis for a simulated managed security provider (MSP) serving Healthcare, Critical National Infrastructure (CNI), and Financial Services clients against ISO/IEC 27001:2022 and UK GDPR standards.",
    details: [
      "Built the risk register and gap analysis against ISO/IEC 27001:2022 and UK GDPR.",
      "Ranked lab findings, including injection flaws rated CVSS 9.8, as business risks with clear ownership.",
      "Kept confirmed client gaps separate from lab-only evidence.",
      "Co-authored a phased remediation roadmap covering access control, incident response, backup and monitoring."
    ]
  },
  {
    id: "proj-cnn-lstm",
    title: "Hybrid CNN-LSTM Intrusion Detection with SHAP",
    subtitle: "MSc Dissertation | Northumbria University London (2026)",
    image: "/assets/project_shap_ai.jpg",
    description: "I engineered a deep learning intrusion detection model on the CIC-IDS2017 dataset, combining CNN spatial feature recognition with LSTM temporal sequence analysis and SHAP explainable AI for SOC analysts.",
    details: [
      "Built deep learning model combining CNN pattern recognition with LSTM sequence analysis.",
      "Applied GAN data augmentation to catch rare attack classes (e.g. stealth exfiltration).",
      "Used SHAP (SHapley Additive exPlanations) force plots so SOC analysts can inspect why traffic was flagged.",
      "Evaluated accuracy, precision, recall, and false-positive rates."
    ]
  },
  {
    id: "proj-encryption",
    title: "Audio-in-Image Encryption System",
    subtitle: "Puducherry Technological University, India",
    image: "/assets/project_risk_gap.jpg",
    description: "I developed a secure steganographic data hiding system that embeds sensitive audio payloads inside digital image cover files, protected with AES-256 symmetric and RSA asymmetric key encryption.",
    details: [
      "Developed a system hiding audio inside image files.",
      "Protected payloads with dual AES-256 and RSA encryption for secure data transfer.",
      "Maintained visual image quality to prevent steganalysis detection."
    ]
  },
  {
    id: "proj-salesforce-security",
    title: "Salesforce Enterprise IAM & DevSecOps",
    subtitle: "Accenture Enterprise Delivery",
    image: "/assets/project_shap_ai.jpg",
    description: "I architected end-to-end Salesforce security across profiles, permission sets, role hierarchy, and sharing rules, enforcing least privilege and embedding security checks into CI/CD pipelines.",
    details: [
      "Deployed MFA across production orgs, reducing credential risks.",
      "Authored access control standards mapped to ISO/IEC 27001 and SOC 2 for client audits.",
      "Embedded automated security testing into DevSecOps deployments."
    ]
  }
];

export const education = [
  {
    degree: "MSc Cybersecurity Technology with Advanced Practice",
    institution: "Northumbria University, London, UK",
    period: "2025 - 2026",
    details: "Focusing on enterprise risk assessment, ISO 27001 auditing, cloud security, machine learning in threat detection (CNN-LSTM + SHAP), and UK GDPR compliance."
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Puducherry Technological University, India",
    period: "2018 - 2022",
    details: "Foundational coursework in computer networking, signal processing, hardware security, data structures, and cryptography."
  }
];

export const certifications = [
  { title: "Salesforce Certified Administrator", issuer: "Salesforce" },
  { title: "Salesforce Certified Platform Developer I", issuer: "Salesforce" },
  { title: "Salesforce Certified Platform App Builder", issuer: "Salesforce" },
  { title: "Salesforce Certified Associate", issuer: "Salesforce" }
];
