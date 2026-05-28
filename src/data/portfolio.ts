export const personalInfo = {
  name: "Jun Hao Low",
  tagline: "Software Engineer & CS Student",
  bio: "A passionate computer science student with hands-on experience in full-stack development. I enjoy building elegant solutions to complex problems and am always eager to learn new technologies.",
  email: "junhao@example.com",
  location: "Singapore",
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/junhao",
    linkedin: "https://linkedin.com/in/junhao",
    email: "mailto:junhao@example.com",
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
    title: "Software Engineering Intern",
    company: "Tech Company",
    location: "Singapore",
    period: "May 2025 – Aug 2025",
    description: [
      "Developed and maintained RESTful APIs serving 10,000+ daily requests",
      "Collaborated with a cross-functional team of 5 engineers on microservices architecture",
      "Implemented automated testing pipeline reducing bug reports by 30%",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Teaching Assistant",
    company: "University",
    location: "Singapore",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Conducted weekly lab sessions for 30+ students in Data Structures & Algorithms",
      "Designed and graded programming assignments and exams",
    ],
    technologies: ["Java", "Python", "Algorithms"],
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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/junhao/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    githubUrl: "https://github.com/junhao/taskmanager",
    featured: true,
  },
  {
    title: "ML Image Classifier",
    description:
      "A machine learning model that classifies images into 50+ categories with 94% accuracy, deployed as a web API.",
    technologies: ["Python", "TensorFlow", "Flask", "Docker"],
    githubUrl: "https://github.com/junhao/image-classifier",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive with dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/junhao/portfolio",
    liveUrl: "https://junhao.vercel.app",
    featured: false,
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "Flask", "TailwindCSS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Concepts",
    skills: [
      "REST APIs",
      "System Design",
      "CI/CD",
      "Agile",
      "Data Structures",
      "Algorithms",
    ],
  },
];
