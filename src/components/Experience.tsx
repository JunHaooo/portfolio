"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
        Experience
      </h2>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              <div className="absolute left-2.5 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5" />

              <div
                className={`md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-6">
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-card-foreground mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {exp.company} &middot; {exp.location}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
