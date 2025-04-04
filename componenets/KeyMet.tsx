"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    id: 1,
    value: "1+",
    label: "Years of Experience",
    descrip: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 2,
    value: "12+",
    label: "Projects Completed",
    descrip: "From small applications to complex web platforms.",
  },
  {
    id: 3,
    value: "10+",
    label: "Technologies Mastered",
    descrip: "Proficient in various programming languages and frameworks.",
  },
  {
    id: 4,
    value: "50+",
    label: "Commits on GitHub",
    descrip: "Active contributor to open-source and personal projects.",
  },
  {
    id: 5,
    value: "90%",
    label: "Code Quality",
    descrip: "Committed to writing clean, efficient, and maintainable code.",
  },
];

export const KeyMet = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="glass px-4 py-32 text-white"
      id="about"
    >
        <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl font-bold mb-12"
      >
        KEY METRICS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="text-5xl font-bold text-purple-500 mb-2"
            >
              {metric.value}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              className="text-xl font-semibold mb-2"
            >
              {metric.label}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="text-gray-400"
            >
              {metric.descrip}
            </motion.p>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
};
