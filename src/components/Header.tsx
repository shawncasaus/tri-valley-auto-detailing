"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-primary/80 backdrop-blur-md text-white rounded-2xl shadow-xl px-6 py-2">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <Link href="#services" className="hover:underline text-offwhite">
            Services
          </Link>
          <Link href="#reviews" className="hover:underline text-offwhite">
            Reviews
          </Link>
          <Link href="#contact" className="hover:underline text-offwhite">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
