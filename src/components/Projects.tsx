"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  liveLink?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "DevRecap - GitHub Year in Review",
      description:
        "A modern web application that transforms GitHub activity into an engaging, visually appealing recap similar to Spotify Wrapped. Provides developers with a beautiful way to visualize their coding journey and achievements throughout the year.",
      images: ["/dev-recap_1.png", "/dev-recap_2.png", "/dev-recap_3.png"],
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GitHub API",
        "Octokit",
      ],
      github: "https://github.com/rkp1819/dev-recap",
      liveLink: "https://dev-recap.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              href="https://github.com/rkp1819"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
            >
              <FaGithub size={18} />
              See More Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-background rounded-lg overflow-hidden shadow-md flex flex-col h-full"
    >
      <div className="relative h-36 sm:h-40 md:h-48 w-full bg-secondary/50 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/70 p-1 rounded-r-md hover:bg-background/90 transition-colors"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-primary" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/70 p-1 rounded-l-md hover:bg-background/90 transition-colors"
              aria-label="Next image"
            >
              <FaChevronRight className="text-primary" />
            </button>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i === currentImageIndex ? "bg-primary" : "bg-background/70"}`}
                />
              ))}
            </div>
          </>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt size={16} className="text-primary" />
          </a>
        )}
      </div>

      <div className="p-3 md:p-5 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">
          {project.title}
        </h3>

        <p className="text-foreground/80 mb-3 md:mb-4 flex-grow text-pretty text-xs md:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-1.5 py-0.5 text-xs font-medium bg-secondary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub size={18} className="md:text-xl" />
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <FaExternalLinkAlt size={16} className="md:text-lg" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
