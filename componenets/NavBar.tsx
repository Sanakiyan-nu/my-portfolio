"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLink = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      {/* Desktop Navbar */}
      <div className="border border-white/20 mt-8 bg-white/10 backdrop-blur-3xl rounded-3xl hidden sm:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLink.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:text-purple-500/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleNav}
        className="sm:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2 cursor-pointer"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 top-0 w-full h-full bg-black/90 flex items-center justify-center"
          >
            <ul className="flex flex-col items-center justify-center space-y-8 h-full">
              {navLink.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={closeNav}
                    className="text-4xl text-white hover:text-purple-400 transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


