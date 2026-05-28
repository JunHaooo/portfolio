"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
