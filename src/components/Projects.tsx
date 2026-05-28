"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0 ml-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <FiGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
