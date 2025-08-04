"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [stepIndex, setStepIndex] = useState(0);

  const logo = (
    <img
      src="/logo.png"
      alt="Logo"
      className="inline-block align-baseline opacity-90 mx-[0.05em]"
      style={{ width: "1.3em", height: "auto" }}
    />
  );

  const steps = [
    <span key="step1" className="flex items-center justify-center">
      WE&rsquo;RE
    </span>,
    <span key="step1" className="flex items-center justify-center">
      M{logo}RE
    </span>,
    <span key="step2" className="flex items-center justify-center">
      TH{logo}N
    </span>,
    <span key="step3" className="flex items-center justify-center">
      A
    </span>,
    <span key="step4" className="flex items-center justify-center">
      C{logo}R WASH...
    </span>,
    <span key="step5" className="flex items-center justify-center">
      WE&rsquo;RE DET{logo}ILERS!
    </span>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex h-full backdrop-blur-sm backdrop-brightness-75 bg-black/60 items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl text-center sm:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={stepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-bold leading-none text-glow-animated"
            >
              {steps[stepIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-offwhite text-xl">
        ↓
      </div>
    </section>
  );
}
