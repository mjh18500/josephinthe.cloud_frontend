"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* Background Cloud */}
      <motion.img
        src="/banner/cloud-cartoon.svg"
        alt="Floating cloud background"
        className="absolute inset-0 w-full h-full object-cover
                  "
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Foreground Content */}
    <div className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
         {/* Main Domain Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight"
            > 
            Joseph <span className="text-blue-600">in the</span>{" "}
            <span className="text-blue-800">.Cloud</span>
          </motion.h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 mt-4">
            Cloud Engineer • DevOps • IT Infrastructure Specialist
          </p>
        </div>
      </div>
    </section>
  );
}
