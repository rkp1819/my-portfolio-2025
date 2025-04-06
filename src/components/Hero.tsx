"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            <span className="text-primary">Raj Kumar Panda</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-6 text-balance">
            Senior Software Engineer specializing in Frontend and Web
            Development
          </h2>
          <p className="mb-5 md:mb-8 max-w-lg mx-auto md:mx-0 text-pretty text-sm md:text-base">
            With 6 years of experience building dynamic, high-performance user
            interfaces using Next.js, React.js, Redux, TypeScript, JavaScript,
            HTML, and CSS.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-5 md:mb-8">
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm md:text-base w-32 md:w-auto"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="bg-secondary text-secondary-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors text-sm md:text-base w-32 md:w-auto"
            >
              View Projects
            </Link>
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/raj-kumar-panda-48b6a5141/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/rkp1819"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:rkp1819@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2 mb-4 md:mb-0"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            {!imageError ? (
              <Image
                src="/profile_image.png"
                alt="Raj Kumar Panda"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">RKP</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
