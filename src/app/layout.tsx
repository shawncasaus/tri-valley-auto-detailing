"use client";

import "./globals.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // clean up
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
