"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Document Collaboration Platform",
      description:
        "Developed a comprehensive document collaboration platform with real-time editing features, version history, and commenting capabilities. Integrated CKEditor for rich text editing and PDF.js for document previews.",
      image: "/project-placeholder.jpg",
      technologies: [
        "Next.js",
        "React",
        "Redux",
        "TypeScript",
        "Tailwind CSS",
        "CKEditor",
      ],
      liveLink: "https://example.com/docplatform",
    },
    {
      title: "E-Learning Portal",
      description:
        "Built a feature-rich e-learning platform with course management, user tracking, and assessments. Implemented interactive learning modules and progress tracking features.",
      image: "/project-placeholder.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
      github: "https://github.com/username/elearning",
      liveLink: "https://example.com/elearning",
    },
    {
      title: "Workflow Builder",
      description:
        "Created a drag-and-drop workflow builder for business process automation. Users can create complex workflows with conditional logic, approvals, and notifications.",
      image: "/project-placeholder.jpg",
      technologies: [
        "React",
        "TypeScript",
        "React Flow",
        "Redux",
        "Styled Components",
      ],
      github: "https://github.com/username/workflow-builder",
    },
    {
      title: "Personal Portfolio",
      description:
        "Designed and developed this responsive portfolio website with PWA capabilities. Features smooth animations, dark/light mode, and optimized performance.",
      image: "/project-placeholder.jpg",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/username/portfolio",
      liveLink: "/",
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-md flex flex-col h-full"
              >
                <div className="relative h-36 sm:h-40 md:h-48 w-full bg-secondary/50">
                  {/* Project image placeholder - would be replaced with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary font-medium text-sm md:text-base">
                    {project.title} Screenshot
                  </div>
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
