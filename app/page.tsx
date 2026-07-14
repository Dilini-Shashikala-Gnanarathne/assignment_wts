"use client";

import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import ResumePage from "@/sections/Resume";
import { useState } from "react";

export default function Home() {
  const [showHeroText, setShowHeroText] = useState(true);
  return (
    <>
      <Hero
        rolefirstname="Software"
        rolesecondname="Engineer"
        description="I'M A SOFTWARE DEVELOPER BASED IN SRI LANKA, PASSIONATE ABOUT BUILDING MODERN DIGITAL EXPERIENCES. I ENJOY CREATING CLEAN, MINIMAL DESIGNS AND SPENDING MY FREE TIME EXPLORING NATURE, FILMS, AND BOOKS."
        buttontext="CONTACT ME"
        showText={showHeroText}
      />
      <AboutMe
        firstname="Hello I'm Dilini"
        fullname="Dilini Shashikala"
        description="A passionate software engineering enthusiast crafting fast, user-focused web applications."
        caption=""
        statuename=""
      />
      <Projects />
      <Skills />
      <ResumePage />
      <Contact />
    </>
  );
}
