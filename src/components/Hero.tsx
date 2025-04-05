"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I&apos;m</span>
            <span className="text-primary">Raj Kumar Panda</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-balance">
            Senior Software Engineer specializing in Frontend and Web
            Development
          </h2>
          <p className="mb-8 max-w-lg mx-auto md:mx-0 text-pretty">
            With 6 years of experience building dynamic, high-performance user
            interfaces using Next.js, React.js, Redux, TypeScript, JavaScript,
            HTML, and CSS.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
            >
              View Projects
            </Link>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/rajkumarpanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:rkp1819@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            {/* Replace with actual profile image */}
            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="text-xl font-bold">Profile Image</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
