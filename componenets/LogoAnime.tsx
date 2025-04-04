"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "@/assets/udemy.png";
import fiverr from "@/assets/fiverr.png";
import elementor from "@/assets/elementor.png";
import logitech from "@/assets/logitech.png";
import oracle from "@/assets/oracle.png";

const images = [
  { src: udemy, alt: "Udemy" },
  { src: fiverr, alt: "Fiverr" },
  { src: elementor, alt: "Elementor" },
  { src: logitech, alt: "Logitech" },
  { src: oracle, alt: "Oracle" },
  { src: udemy, alt: "Udemy" },
  { src: fiverr, alt: "Fiverr" },
  { src: elementor, alt: "Elementor" },
  { src: logitech, alt: "Logitech" },
  { src: oracle, alt: "Oracle" },
  { src: udemy, alt: "Udemy" },
  { src: fiverr, alt: "Fiverr" },
  { src: elementor, alt: "Elementor" },
  { src: logitech, alt: "Logitech" },
  { src: oracle, alt: "Oracle" },
  { src: udemy, alt: "Udemy" },
  { src: fiverr, alt: "Fiverr" },
  { src: elementor, alt: "Elementor" },
  { src: logitech, alt: "Logitech" },
  { src: oracle, alt: "Oracle" },
];

export const LogoAnime = () => {
  return (
    <div className=" glass py-8 bg-purple-200/10 backdrop-blur-lg opacity-80">
      <div className="container mx-auto overflow-hidden">
        <div className="relative w-full">
          <motion.div
            className="flex gap-16 items-center flex-nowrap"
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                width={90}
                height={90}
                alt={image.alt}
                className="object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
