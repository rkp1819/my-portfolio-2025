"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiCypress,
  SiAmazon,
} from "react-icons/si";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-[#E34F26]" size={32} />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-[#1572B6]" size={32} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" size={32} />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" size={32} />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-[#61DAFB]" size={32} />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-foreground" size={32} />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="text-[#764ABC]" size={32} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" size={32} />,
        },
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        {
          name: "Cypress",
          icon: <SiCypress className="text-[#17202C]" size={32} />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-[#F05032]" size={32} />,
        },
        {
          name: "AWS",
          icon: <SiAmazon className="text-[#FF9900]" size={32} />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#339933]" size={32} />,
        },
        {
          name: "Databases",
          icon: <FaDatabase className="text-[#4479A1]" size={32} />,
        },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Agile Methodology" },
        { name: "Team Collaboration" },
        { name: "Problem Solving" },
        { name: "UI/UX Design" },
        { name: "Client Communication" },
        { name: "Project Management" },
        { name: "Requirements Analysis" },
        { name: "Documentation" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold mb-6 border-b pb-2 border-border">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="bg-secondary p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center"
                    >
                      {skill.icon && <div className="mb-3">{skill.icon}</div>}
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
