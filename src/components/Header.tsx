"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-primary/80 backdrop-blur-md text-white rounded-2xl shadow-xl px-6 py-2">
      <div className="flex justify-between items-center mt-5 mb-5 opacity-80">
        <Link href="/#">
          <Image
            src="/logo-alt.png"
            alt="Logo"
            width={200}
            height={58}
            className="rounded-full cursor-pointer"
          />
        </Link>
        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <Link href="/gallery" className="hover:underline text-secondary">
            Gallery
          </Link>
          <Link href="/about" className="hover:underline text-secondary">
            About
          </Link>
          <Link href="#contact" className="hover:underline text-secondary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
