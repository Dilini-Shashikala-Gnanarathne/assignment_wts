"use client";

import { motion } from "framer-motion";
import ThreeDModel from "../components/ThreeDModel";

type AboutMeProps = {
  firstname: string;
  fullname: string;
  description: string;
  caption: string;
  statuename: string;
};

export default function AboutMe({
  firstname,
  fullname,
  description,
  caption,
  statuename,
}: AboutMeProps) {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center bg-linear-to-br from-(--bg-0) via-(--bg-1) to-(--bg-2) text-white overflow-hidden py-20"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-(--accent)/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--accent-2)/6 rounded-full blur-3xl" />

      <div className="flex flex-col lg:flex-row w-full px-6 sm:px-8 lg:px-12 xl:px-16 items-center justify-between gap-16 lg:gap-20 max-w-400 mx-auto">
        <motion.div
          className="w-full lg:w-1/2 z-10 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-16 bg-(--accent)" />
            <span className="text-sm uppercase tracking-widest text-(--accent) font-semibold">
              About Me
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-4">
              {firstname}
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-(--accent) tracking-wide">
              {fullname}
            </h3>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="h-px bg-linear-to-r from-(--accent)/50 via-(--accent-2)/30 to-transparent max-w-md"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.div
            className="flex flex-wrap gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="space-y-1">
              <p className="text-3xl font-bold text-(--accent)">2+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-(--accent-2)">20+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-(--accent)">100%</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Passion
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 h-125 sm:h-150 lg:h-175 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <ThreeDModel modelPath="/models/laptop_and_mouse.glb" />
          </div>

          <motion.div
            className="absolute bottom-8 right-8 z-20 backdrop-blur-md bg-(--bg-0)/50 border border-white/10 rounded-2xl p-4 shadow-2xl max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-(--accent)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-400 italic">{caption}</p>
                <p className="text-sm font-bold text-white">{statuename}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-8 left-8 z-20 backdrop-blur-md bg-(--bg-0)/50 border border-white/10 rounded-full px-4 py-2 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            <p className="text-xs text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 bg-(--accent-2) rounded-full animate-pulse" />
              Drag to rotate
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
