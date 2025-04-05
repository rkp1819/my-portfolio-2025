"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Hirarky Solutions",
      position: "Senior Software Engineer",
      period: "Apr 2023 - Present",
      description: [
        "Developed performant and scalable user interfaces from Figma designs, integrating APIs to ensure smooth functionality across all environments.",
        "Made critical UI/UX decisions in areas lacking design specifications, ensuring consistency and usability.",
        "Collaborated closely with teams to discuss upcoming features and strategize their implementation.",
        "Built and integrated features for document signing (Docuseal), real-time document collaboration (CKEditor), and PDF content highlighting (PDF.js).",
        "Developed complex tables with support for filters, views, and pagination.",
        "Implemented a custom workflow builder using React Flow.",
        "Created multiple reusable UI components to streamline development.",
        "Wrote comprehensive unit and end-to-end tests using Cypress to ensure code quality and stability.",
      ],
    },
    {
      company: "ValueLabs",
      position: "Senior Software Engineer",
      period: "Jan 2022 - Apr 2023",
      description: [
        "Integrated Intercom chat service to improve real-time customer support.",
        "Implemented Rollbar log service for efficient error tracking and debugging.",
        "Developed internal file storage module using AWS S3 bucket, resulting in improved file management and access.",
        "Automated the process of generating and downloading various types of reports, improving data accessibility and decision-making.",
        "Designed and implemented social interaction page to enhance user engagement.",
        "Created course creation module to facilitate easy development and management of courses.",
        "Developed learning module to enhance the learning experience for users.",
      ],
    },
    {
      company: "Wipro",
      position: "Senior Software Engineer-IT",
      period: "May 2019 - Jan 2022",
      description: [
        "Implemented 3D secure module into Frontend app to enhance security and provide a seamless payment experience for users.",
        "Designed and developed user registration and login modules with multi-language support for over 30 locales.",
        "Added new features as per project requirements to enhance overall functionality and user experience.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-primary/20 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 z-10 md:flex items-center justify-center hidden">
                  <FaBriefcase className="text-white" />
                </div>

                <div
                  className={`${index % 2 === 0 ? "md:text-right" : ""} ${
                    index % 2 !== 0
                      ? "md:col-start-2 md:col-end-3 row-start-1"
                      : "md:col-start-1 md:col-end-2 row-start-1"
                  }`}
                >
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <h4 className="text-lg text-primary font-medium">
                    {exp.position}
                  </h4>
                  <p className="text-sm opacity-80 my-1">{exp.period}</p>
                </div>

                <div
                  className={`bg-white dark:bg-secondary/50 p-5 rounded-lg shadow-md ${
                    index % 2 === 0
                      ? "md:col-start-2 md:col-end-3 row-start-1"
                      : "md:col-start-1 md:col-end-2 row-start-1"
                  }`}
                >
                  <ul className="space-y-2 list-disc pl-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-pretty">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
