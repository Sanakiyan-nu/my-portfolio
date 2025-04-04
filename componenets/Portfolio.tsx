"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import mockup1 from '@/assets/mockups1.png';
import mockup2 from '@/assets/mockups2.png';
import project3 from '@/assets/proj5.png';
import project4 from '@/assets/proj6.png';
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const projects = [
  {
    id: 1,
    date: "10/2024",
    title: "E-Learning Website",
    descrip: "Designed an intuitive e-learning website prototype in Figma with interactive wireframes, ensuring a seamless and engaging user experience.",
    img: mockup1,
  },
  {
    id: 2,
    date: "11/2024",
    title: "Hospital Management System Website",
    descrip: "Developed a responsive frontend using React.js and Tailwind CSS with features like patient registration and real-time appointment scheduling.",
    img: mockup2,
  },
  {
    id: 3,
    date: "12/2024",
    title: "Bus Booking Website",
    descrip: "Designed and developed an intuitive UI for booking, seat selection, and payment flow using React, Vite, and Tailwind CSS.",
    img: project3,
  },
  {
    id: 4,
    date: "01/2025",
    title: "Personal Portfolio Website",
    descrip: "Built a sleek, interactive portfolio showcasing projects, skills, and contact forms using Next.js and Tailwind CSS.",
    img: project4,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color} )`;

  return (
    <motion.section
      id="portfolio"
      style={{ backgroundImage }}
      className="py-24 lg:py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Project List */}
        <div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 lg:mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-6 lg:mb-8 group transition-all duration-300"
            >
              <p className="text-gray-400 text-sm lg:text-lg mb-2">
                {project.date}
              </p>
              <h3
                className={`text-2xl lg:text-3xl font-semibold group-hover:text-purple-400 transition-colors duration-300 ${
                  selectedProject.id === project.id ? "text-gray-200" : ""
                }`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-purple-200 my-3"></div>
                  <p className="text-purple-400 transition-all text-sm lg:text-base">
                    {project.descrip}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Project Image */}
        <div className="flex justify-center">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              className="rounded-xl shadow-lg max-w-full h-auto object-cover transition-opacity duration-500 ease-in-out"
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
