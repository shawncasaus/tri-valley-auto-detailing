"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="bg-primary/60 backdrop-blur-md text-white rounded-b-2xl shadow-xl px-6 py-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/#">
            <Image
              src="/logo-alt.png"
              alt="Logo"
              width={200}
              height={58}
              className="rounded-full cursor-pointer"
            />
          </Link>
          <nav className="space-x-6 text-sm sm:text-base font-medium text-secondary">
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
