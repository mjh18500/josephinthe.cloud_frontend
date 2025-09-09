"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./darkmodetoggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 shadow-sm border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <span className="text-lg font-bold text-foreground">
          Joseph <span className="text-blue-600 dark:text-blue-400">Hernandez</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-foreground font-medium">
          <a href="#hero" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#certs" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</a>
          <DarkModeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="icon-button md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-t border-border px-4 py-3 space-y-2"
          >
            <a href="#hero" className="block text-foreground hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            <a href="#skills" className="block text-foreground hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
            <a href="#certs" className="block text-foreground hover:text-blue-500 dark:hover:text-blue-400">Certifications</a>
            <a href="#contact" className="block text-foreground hover:text-blue-500 dark:hover:text-blue-400">Blog</a>
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
