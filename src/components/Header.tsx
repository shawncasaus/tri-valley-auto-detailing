"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50" role="banner">
      <div className="bg-primary/80 backdrop-blur-md text-white rounded-b-xl shadow-xl px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-6xl mx-auto gap-2 sm:gap-0">
          <Link 
            href="/" 
            className="mx-auto sm:mx-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded-full"
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
                width={200}
                height={58}
                className="rounded-full"
                priority
              />
            </motion.div>
          </Link>

          <nav 
            className="flex justify-center space-x-4 text-sm sm:text-base font-medium text-secondary"
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
      </div>
    </header>
  );
}
