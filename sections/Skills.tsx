"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";
import { skillsData } from "@/data/skills";
import {
  Database,
  Layout,
  Server,
  Sparkles,
  Wrench,
  Cloud,
  ShieldCheck,
  Code2,
} from "lucide-react";

const interests = [
  "UI DESIGN",
  "FRONTEND DEVELOPMENT",
  "BACKEND DEVELOPMENT",
  "API INTEGRATION",
  "MACHINE LEARNING",
  "DIGITAL SOLUTIONS",
];

const skillSections = [
  {
    key: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "text-(--accent)",
  },
  {
    key: "backend",
    title: "Backend Development",
    icon: Server,
    color: "text-(--accent-2)",
  },
  {
    key: "database",
    title: "Database",
    icon: Database,
    color: "text-(--accent)",
  },
  {
    key: "tools",
    title: "Tools & Technologies",
    icon: Wrench,
    color: "text-(--accent-2)",
  },
  {
    key: "cloud",
    title: "Cloud & Deployment",
    icon: Cloud,
    color: "text-(--accent)",
  },
  {
    key: "security",
    title: "Security",
    icon: ShieldCheck,
    color: "text-(--accent-2)",
  },
  {
    key: "core",
    title: "Core Skills",
    icon: Code2,
    color: "text-(--accent)",
  },
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-linear-to-br from-(--bg-0) via-(--bg-1) to-(--bg-2) text-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-96 h-96 bg-(--accent)/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--accent-2)/8 rounded-full blur-3xl" />

      <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 max-w-350 mx-auto">

        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-(--accent)" />
            <span className="text-sm uppercase tracking-widest text-(--accent) font-semibold">
              Tech Stack
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-4">
            Skills & Technologies
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>


        {skillSections.map((section, sectionIndex) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={section.key}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: sectionIndex * 0.1,
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Icon className={`w-6 h-6 ${section.color}`} />

                <h3 className="text-2xl sm:text-3xl font-bold">
                  {section.title}
                </h3>
              </div>


              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {skillsData[section.key].map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}


        {/* Interest Section */}

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-(--accent-2)" />

            <h3 className="text-2xl sm:text-3xl font-bold">
              I'm Always Interested In
            </h3>
          </div>


          <div className="flex flex-wrap gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
                className={`
                  px-7 py-3 rounded-full border uppercase font-semibold 
                  text-sm tracking-wide backdrop-blur-md transition-all 
                  duration-300 cursor-default
                  ${
                    index % 2 === 0
                      ? "border-(--accent)/70 bg-(--accent)/10 hover:bg-(--accent) hover:text-black"
                      : "border-(--accent-2)/70 bg-(--accent-2)/10 hover:bg-(--accent-2) hover:text-black"
                  }
                `}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>


        <div className="h-36" />

      </div>
    </section>
  );
}