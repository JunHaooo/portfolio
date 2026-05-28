"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>

        <a
          href={personalInfo.socials.email}
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity mb-8"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiGithub size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiLinkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href={personalInfo.socials.email}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiMail size={20} />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
