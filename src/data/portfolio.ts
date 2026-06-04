export const personalInfo = {
  name: "Low Jun Hao",
  tagline: "Software Engineer & CS Student at NTU",
  bio: "Computer Science undergraduate at NTU's Renaissance Engineering Programme, pursuing a dual BSc in CS and MSc in Technology Management. I build full-stack applications and data pipelines, with experience spanning government digital infrastructure, autonomous systems, and AI-powered tools.",
  email: "jlow115@e.ntu.edu.sg",
  location: "Singapore",
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/JunHaooo",
    linkedin: "https://www.linkedin.com/in/jun-hao-low-1b7346246/",
    email: "mailto:jlow115@e.ntu.edu.sg",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "GovTech - Digital Economy Products (TradeNet Rebuild)",
    location: "Singapore",
    period: "May 2026 – Present",
    description: [
      "Engineered a Python data-masking pipeline for TradeNet XML/JSON schemas, implementing Format-Preserving Encryption (FPE/FF1) to ensure PII compliance for UAT testing",
      "Designed a deterministic tokenization layer using deferred execution callbacks, maintaining cross-file relational integrity with zero hash collisions across enterprise datasets",
      "Optimized DevEx tooling by implementing stateless idempotency into Git Merge Request automation and deploying static analysis guardrails for an internal AI spec-generation harness",
    ],
    technologies: ["Python", "Git", "XML/JSON", "CI/CD"],
  },
  {
    title: "Software Intern",
    company: "LTA Centre for Autonomous Mobility",
    location: "Singapore",
    period: "Aug 2025",
    description: [
      "Built a full-stack article retrieval system using a Next.js frontend and a Python FastAPI RAG backend to enable semantic search and chat-based querying",
      "Implemented article ingestion from public URLs, extracting metadata and generating embeddings stored in MongoDB and ChromaDB for persistent vector retrieval",
      "Developed user-facing workflows for article upload, preview, and interactive exploration, supporting rapid prototyping in a local development environment",
    ],
    technologies: ["Next.js", "Python", "FastAPI", "MongoDB", "ChromaDB"],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Risk Metric and Portfolio Analysis Tool",
    description:
      "Built a system providing real-time insights into financial portfolios, helping users understand risks and make informed investment decisions. Developed a RESTful API backed by PostgreSQL and optimized with caching via DuckDB. Contributed to CI/CD workflow using GitHub Actions for automated deployment to AWS EC2.",
    technologies: ["PostgreSQL", "DuckDB", "GitHub Actions", "AWS EC2", "RESTful APIs"],
    featured: true,
  },
  {
    title: "Geo-Regulation AI Compliance System",
    description:
      "Created an AI-powered tool that helps companies automatically analyze and comply with global content regulations in real time. Designed a multi-agent system using Python, FastAPI, and multiple LLMs (Gemini, Claude, GPT) integrated through a RAG pipeline for policy reasoning. Built an interactive Streamlit dashboard for real-time compliance visualization.",
    technologies: ["Python", "FastAPI", "LLMs", "RAG", "Streamlit"],
    featured: true,
  },
  {
    title: "Autonomous Agent with Reinforcement Learning",
    description:
      "Developed an autonomous AI agent that learned to navigate a complex multi-agent maze, making real-time decisions under partial observability. Improved agent performance through custom reward shaping, exploration tuning, and policy evaluation strategies.",
    technologies: ["Python", "Reinforcement Learning", "Flask"],
    featured: true,
  },
  {
    title: "SecureaTix - Blockchain Ticketing Platform",
    description:
      "1st Place, NTU Port63 Challenge. Engineered a blockchain-based ticketing system to combat concert ticket scams by issuing secure, verifiable NFT tickets. Deployed smart contracts via Hardhat on XRP Ledger's EVM Sidechain Testnet with Stripe and PayNow fiat payment support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Hardhat", "XRP Ledger", "Stripe"],
    featured: true,
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Java Spring Boot", "RESTful APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git"],
  },
];
