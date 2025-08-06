"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-primary/80 backdrop-blur-md text-white rounded-b-xl shadow-xl px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-6xl mx-auto gap-2 sm:gap-0">
          <Link href="/#" className="mx-auto sm:mx-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="rounded-full cursor-pointer"
            >
              <Image
                src="/logo-alt.png"
                alt="Logo"
                width={200}
                height={58}
                className="rounded-full"
              />
            </motion.div>
          </Link>

          <nav className="flex justify-center space-x-4 text-sm sm:text-base font-medium text-secondary">
            <Link href="/gallery" className="hover:underline">
              Gallery
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/#contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
