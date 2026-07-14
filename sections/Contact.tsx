"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

import { FaMediumM } from "react-icons/fa";
const interests = [
  "UI DESIGN",
  "FRONTEND DEVELOPMENT",
  "BACKEND DEVELOPMENT",
  "API INTEGRATION",
  "MACHINE LEARNING",
  "DIGITAL SOLUTIONS",
];

export default function Contact() {
  const handleContactClick = () => {
    window.location.assign("mailto:shashikaladilini11@gmail.com");
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero2.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-(--bg-0)/70 via-(--bg-1)/75 to-(--bg-2)/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24">

     

        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center max-w-6xl"
        >

          <p className="uppercase tracking-[0.45em] text-sm text-gray-400 mb-8">
            LET'S WORK TOGETHER
          </p>
<h1 className="font-bold leading-none tracking-tight">

  <span className="block text-white text-[52px] sm:text-7xl md:text-8xl lg:text-[120px]">
    Building digital
  </span>

  <span className="block text-gray-500 text-[52px] sm:text-7xl md:text-8xl lg:text-[120px]">
    experiences.
  </span>

</h1>

          <p className="mt-10 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-9">
            I'm always open to discussing new projects,
            creative ideas, or opportunities to build
            something meaningful together.
          </p>
        </motion.div>

        {/* Spacer */}

        <div className="h-32" />

        {/* Bottom Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl border-t border-white/20 pt-12"
        >

          <div className="grid md:grid-cols-3 gap-12">  {/* Email */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
    className="flex items-start gap-5"
  >
    <div className="rounded-xl border border-white/20 p-4">
      <Mail size={26} className="text-white" />
    </div>

    <div>
      <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
        Email
      </p>

      <a
        href="mailto:sudeepa1234nisal@gmail.com"
        className="text-xl md:text-2xl text-white hover:text-gray-300 transition"
      >
        shashikaladilini11@gmail.com
      </a>
    </div>
  </motion.div>

  {/* Phone */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
    className="flex items-start gap-5"
  >
    <div className="rounded-xl border border-white/20 p-4">
      <Phone size={26} className="text-white" />
    </div>

    <div>
      <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
        Phone
      </p>

      <a
        href="tel:+94712345678"
        className="text-xl md:text-2xl text-white hover:text-gray-300 transition"
      >
        (+94) 774379113
      </a>
    </div>
  </motion.div>

  {/* Location */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    className="flex items-start gap-5"
  >
    <div className="rounded-xl border border-white/20 p-4">
      <MapPin size={26} className="text-white" />
    </div>

    <div>
      <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
        Location
      </p>

      <p className="text-xl md:text-2xl text-white">
        Colombo, Sri Lanka
      </p>
    </div>
  </motion.div>
</div>

{/* Footer */}
<div className="mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-10">
  <a
    href="https://github.com/Dilini-Shashikala-Gnanarathne"
    target="_blank"
    rel="noopener noreferrer"
    className="uppercase tracking-[0.25em] text-sm text-gray-400 hover:text-white transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/dilini-gnanarathne-352a67227/"
    target="_blank"
    rel="noopener noreferrer"
    className="uppercase tracking-[0.25em] text-sm text-gray-400 hover:text-white transition"
  >
    LinkedIn
  </a>

  <a
    href="https://medium.com/@shashikaladilini11"
    target="_blank"
    rel="noopener noreferrer"
    className="uppercase tracking-[0.25em] text-sm text-gray-400 hover:text-white transition"
  >
    Medium
  </a>
</div>

{/* ====================== FOOTER ====================== */}

<footer className="w-full mt-24 border-t border-white/10">

  <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

    {/* Left */}
    <div>

      <h2 className="text-4xl font-bold text-white mb-6">
        Dilini.
      </h2>

    <p className="text-gray-400 leading-8 max-w-sm">
  Software Engineer and AI Researcher passionate about building scalable
  applications, intelligent systems, and impactful digital experiences through
  innovative technology and user-focused design.
</p>

    </div>

    {/* Quick Links */}

    <div>

      <h3 className="uppercase tracking-[0.2em] text-gray-500 mb-8">
        QUICK LINKS
      </h3>

      <div className="flex flex-col gap-4">

        <a href="#about" className="hover:text-white transition">
          About Me
        </a>

        <a href="#portfolio" className="hover:text-white transition">
          Portfolio
        </a>

        <a href="#resume" className="hover:text-white transition">
          Resume
        </a>

        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>

      </div>

    </div>

    {/* Connect */}

    <div>

      <h3 className="uppercase tracking-[0.2em] text-gray-500 mb-8">
        CONNECT
      </h3>

      <div className="flex gap-4">

        <a
          href="https://www.linkedin.com/in/dilini-gnanarathne-352a67227/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="https://medium.com/@shashikaladilini11"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <FaMediumM size={20} />
        </a>

        <a
          href="https://github.com/Dilini-Shashikala-Gnanarathne"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <Github size={22} />
        </a>

      </div>

    </div>

  </div>

  {/* Bottom */}

  <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

    <p className="text-gray-500">
      © {new Date().getFullYear()} All rights reserved.
    </p>

    <p className="text-gray-500">
      Designed & Developed by
      <span className="text-white font-medium"> Dilini Gnanarathne</span>
    </p>

  </div>

</footer>

        </motion.div>
      </div>
    </section>
  );
}