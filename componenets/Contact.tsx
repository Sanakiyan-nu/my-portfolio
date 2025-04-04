"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="overflow-x-clip py-32 text-white max-w-[1400px] mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Contact Details */}
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl space-y-8 shadow-lg"
          >
            {/* Phone */}
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+919342858846"
                className="text-xl md:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +91 9342858846 <span className="text-gray-500">↗</span>
              </a>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:asanakiyan2003@gmail.com"
                className="text-xl md:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                asanakiyan2003@gmail.com <span className="text-gray-500">↗</span>
              </a>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Address</p>
              <address className="text-lg md:text-xl not-italic leading-relaxed">
                63/3, Tamil Salai Street, <br />
                Egmore, Chennai, <br />
                Tamil Nadu - 600008
              </address>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5182443061466!2d80.2538627!3d13.0717874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267fd1e8fbc11%3A0xd853436c435e2fb!2sA%20Class%20Xerox!5e0!3m2!1sen!2sin!4v1712123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
