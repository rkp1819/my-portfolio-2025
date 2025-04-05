"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.p
                className="mb-4 text-pretty"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                With 6 years of experience in Frontend and Web Development, I
                specialize in building dynamic, high-performance user interfaces
                using Next.js, React.js, Redux, TypeScript, JavaScript, HTML,
                and CSS.
              </motion.p>

              <motion.p
                className="mb-4 text-pretty"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                My expertise spans client interaction, requirement gathering,
                Agile methodology, and feature/integration testing. I have a
                foundational understanding of AWS and actively leverage GenAI
                tools like Cursor Composer to enhance productivity.
              </motion.p>

              <motion.p
                className="mb-4 text-pretty"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Key achievements include designing and optimizing UI/UX, making
                critical technical decisions, and collaborating
                cross-functionally to deliver seamless features. With a strong
                programming foundation, validated by my GATE 2020 qualification,
                I am committed to delivering impactful solutions and driving
                team success.
              </motion.p>
            </div>

            <motion.div
              className="bg-secondary p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>

              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Name:</span>
                  <span>Raj Kumar Panda</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Email:</span>
                  <a
                    href="mailto:rkp1819@gmail.com"
                    className="text-primary hover:underline"
                  >
                    rkp1819@gmail.com
                  </a>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Phone:</span>
                  <span>(+91) 9777830889</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Location:</span>
                  <span>Berhampur, India</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Experience:</span>
                  <span>6+ Years</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Languages:</span>
                  <span>English, Hindi, Telugu, Oriya</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium min-w-32">Education:</span>
                  <span>
                    B.Tech, National Institute of Science and Technology,
                    Berhampur
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
