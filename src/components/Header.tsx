"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50" role="banner">
      <div className="bg-primary/80 backdrop-blur-md text-white rounded-b-xl shadow-xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded-full"
            aria-label="Tri-Valley Auto Detailing - Go to homepage"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="rounded-full cursor-pointer"
            >
              <Image
                src="/logo-alt.png"
                alt="Tri-Valley Auto Detailing Logo"
                width={160}
                height={46}
                className="rounded-full sm:w-[200px] sm:h-[58px]"
                priority
              />
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav 
            className="hidden sm:flex space-x-4 text-sm sm:text-base font-medium text-secondary"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link 
              href="/gallery" 
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1 transition-all duration-200"
              aria-label="View our gallery of auto detailing work"
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1 transition-all duration-200"
              aria-label="Learn about our auto detailing services"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-2 py-1 transition-all duration-200"
              aria-label="Contact us for auto detailing services"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden mt-4 pt-4 border-t border-white/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3">
              <Link 
                href="/gallery" 
                className="text-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2 text-lg font-medium transition-all duration-200"
                aria-label="View our gallery of auto detailing work"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className="text-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2 text-lg font-medium transition-all duration-200"
                aria-label="Learn about our auto detailing services"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded px-3 py-2 text-lg font-medium transition-all duration-200"
                aria-label="Contact us for auto detailing services"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
