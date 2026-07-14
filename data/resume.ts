import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

import { FaMediumM } from "react-icons/fa";


export const resumeData = {

  name: {
    first: "Dilini",
    last: "Gnanarathne",
  },


  title: "Associate Software Engineer",


  summary:
    "Motivated Full-Stack Software Engineer with 1.5+ years of experience designing, developing, and maintaining enterprise ERP applications. Skilled in building scalable web applications using Angular, React, Java, Spring Boot, PostgreSQL, and REST/gRPC APIs. Strong collaborator with experience working in cross-functional teams to deliver reliable, high-quality software aligned with business objectives. Passionate about solving complex engineering challenges, continuously learning new technologies, and applying a research-driven approach to software development.",



  contact: [

    {
      label: "Email",
      value: "shashikaladilini11@gmail.com",
      icon: Mail,
    },

    {
      label: "Phone",
      value: "+94 774379113",
      icon: Phone,
    },


    {
      label: "Location",
      value: "Colombo, Sri Lanka",
      icon: MapPin,
    },


    {
      label: "LinkedIn",
      value: "Dilini Gnanarathne",
      href: "https://linkedin.com",
      icon: Linkedin,
    },


    {
      label: "Github",
      value: "Dilini-Shashikala-Gnanarathne",
      href: "https://github.com",
      icon: Github,
    },


    {
      label: "Portfolio",
      value: "Personal Portfolio",
      href: "#",
      icon: FaMediumM,
    },

  ],



  education: [

    {
      degree:
        "BSc. (Hons) in Computing and Information Systems",

      institute:
        "Sabaragamuwa University of Sri Lanka",

      details:
        "Second Class Upper Division",

      duration:
        "Sep 2021 – Apr 2026",
    },

  ],




  experience: [

    {
      role:
        "Associate Software Engineer (Contract)",

      company:
        "Enxora Group",

      duration:
        "Jun 2025 – Present",


      description: [

        "Develop and maintain backend services for enterprise ERP applications using Java, Spring Boot, and PostgreSQL.",

        "Design scalable RESTful APIs and implement business logic for finance, payroll, and supplier management modules.",

        "Optimize database performance and implement secure gRPC-based microservice communication.",

        "Collaborate in Agile teams, contributing to code reviews, testing, and continuous improvements.",

      ],

    },



    {

      role:
        "Associate Software Engineer",

      company:
        "Rizer",

      duration:
        "Feb 2025 – May 2025",


      description: [

        "Developed backend microservices and RESTful APIs using Java and Spring Boot.",

        "Designed PostgreSQL database schemas and optimized SQL queries for performance.",

        "Implemented gRPC-based service communication and participated in Agile development activities.",

      ],

    },



    {

      role:
        "Software Engineer Intern",

      company:
        "Rizer",

      duration:
        "Aug 2024 – Feb 2025",


      description: [

        "Developed responsive frontend modules using Angular and TypeScript for enterprise ERP applications.",

        "Built reusable UI components and integrated RESTful APIs.",

        "Collaborated with senior engineers to deliver scalable and maintainable software.",

      ],

    },

  ],





  projects: [

    {

      title:
        "AAIB – Enterprise Resource Planning (ERP) System",

      description: [

        "Developed and enhanced an enterprise ERP system for the Agricultural & Agrarian Insurance Board (AAIB).",

        "Implemented Inventory, Purchasing, Fixed Asset Management, and General Ledger modules.",

        "Developed Angular frontend features and Spring Boot backend services.",

        "Optimized database operations using SQL stored procedures and integrated gRPC services.",

      ],


      stack:
        "Angular, Java, Spring Boot, gRPC, PostgreSQL, Git",

      ai:
        "GitHub Copilot",

    },



    {

      title:
        "Serendib Microinsurance System",


      description: [

        "Developed ERP modules including Excess Collection Management and General Ledger functionality.",

        "Implemented security improvements for authentication and authorization.",

        "Optimized database performance using SQL stored procedures and gRPC communication.",

        "Supported debugging, testing, code reviews, and production improvements.",

      ],


      stack:
        "Angular, Java, Spring Boot, gRPC, PostgreSQL, Git",

      ai:
        "GitHub Claude",

    },



    {

      title:
        "Stock Management System",


      description: [

        "Built a full-stack inventory management system with JWT authentication, REST APIs, and React frontend.",

      ],


      stack:
        "MERN, JWT, GitHub, Figma, Azure",

    },


  ],





  skills: {


    languages:
      "Java, SQL, JavaScript, TypeScript, HTML5, CSS3",


    frontend:
      "Angular, React.js",


    backend:
      "Spring Boot, Spring MVC, Spring Data JPA, REST APIs, Microservices, gRPC, Express.js",


    databases:
      "PostgreSQL, MySQL, MongoDB, Oracle Database",


    security:
      "Spring Security, JWT Authentication",


    tools:
      "Git, GitHub, Docker, Maven, Postman, Swagger/OpenAPI",


    core:
      "Backend Development, REST API Development, Object-Oriented Programming, Database Design, SQL Optimization, Distributed Systems, Software Architecture, Agile Development",

  },





  certificates: [

    "React Basics",

    "MongoDB Aggregation with Node.js",

    "Working with Version Control",

    "Web Design for Beginners",

    "Java (Basic) Certificate",

    "AI/ML Engineer - Stage 1",

  ],




  softSkills: [

    "Teamwork",

    "Critical Thinking",

    "Communication",

    "Leadership",

    "Problem Solving",

    "Continuous Learning",

  ],





  publications: [

    {

      type:
        "Full Paper",

      title:
        "Hybrid Approach for Automated University Timetabling using Graph Coloring and Linear Programming Mathematical Model Based Resource Optimization",

      conference:
        "The 3rd International Conference on University-Industry Collaborations for Sustainable Development (ICSD 2026), 2026",

    },


    {

      type:
        "Abstract",

      title:
        "Hybrid Approach for Automated University Academic Timetable using Graph Coloring Techniques and Linear Programming Mathematical Resource Optimization Model",

      conference:
        "Computing Undergraduate Research Symposium (ComURS), January 2026",

    },


  ],


};