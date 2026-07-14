"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Project } from "@/types/project.types";

interface ProjectCardProps {
  project: Project;
  size: "large" | "small";
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  size,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden group rounded-xl
        ${size === "large" ? "h-100 sm:h-112.5" : "h-75 sm:h-87.5"}
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:shadow-(--accent)/20
      `}
    >
      {/* Project Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="
          absolute inset-0 
          bg-linear-to-t 
          from-(--bg-0) 
          via-(--bg-0)/60 
          to-transparent 
          opacity-80 
          group-hover:opacity-90 
          transition-opacity 
          duration-500
        " />
      </div>


      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">

        {/* Tags */}
        {project.tags && (
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`
                  px-3 py-1 
                  text-xs 
                  font-semibold 
                  rounded-full 
                  backdrop-blur-sm 
                  border
                  ${
                    i % 2 === 0
                      ? "bg-(--accent)/20 text-(--accent-light) border-(--accent)/30"
                      : "bg-(--accent-2)/15 text-(--accent-2-light) border-(--accent-2)/30"
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}


        {/* Title */}
        <h3
          className="
            text-2xl 
            sm:text-3xl 
            lg:text-4xl 
            font-bold 
            text-white 
            mb-3 
            transform 
            transition-transform 
            duration-500 
            group-hover:translate-x-2
          "
        >
          {project.name}
        </h3>


        {/* Footer */}
        <div className="flex items-center justify-between">

          {project.year && (
            <span className="text-sm text-gray-400 font-medium">
              {project.year}
            </span>
          )}


          {/* Links */}
          <div className="flex items-center gap-3">

            {/* Github */}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 
                  rounded-full 
                  bg-white/10 
                  backdrop-blur-sm
                "
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,107,74,0.3)",
                }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
            )}


            {/* Live Demo */}
            {project.deployUrl && (
              <motion.a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 
                  rounded-full 
                  bg-white/10 
                  backdrop-blur-sm
                "
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.5,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(45,212,191,0.3)",
                }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.a>
            )}

          </div>

        </div>

      </div>


      {/* Hover Effect */}
      <div
        className="
          absolute 
          top-0 
          right-0 
          w-32 
          h-32 
          bg-linear-to-br 
          from-(--accent)/20 
          to-transparent 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-500 
          blur-2xl
        "
      />

    </motion.div>
  );
};