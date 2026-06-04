"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              width={128}
              height={128}
              className="mx-auto rounded-full border-4 border-primary/20 object-cover w-32 h-32"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Hi, I&apos;m{" "}
            <span className="text-primary">{personalInfo.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            {personalInfo.tagline}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors inline-flex items-center gap-2"
          >
            <FiDownload size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-5 mt-8"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href={personalInfo.socials.email}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
