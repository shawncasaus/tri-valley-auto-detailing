"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [stepIndex, setStepIndex] = useState(0);
  const [showCallToAction, setShowCallToAction] = useState(false);

  const steps = [
    <span
      key="step1"
      className="flex text-[8vw] sm:text-[6vw] md:text-[4vw] items-center justify-center"
    >
      WE&rsquo;RE MORE THAN A CAR WASH...
    </span>,
    <span
      key="step2"
      className="flex text-[10vw] sm:text-[8vw] md:text-[6vw] items-center justify-center"
    >
      WE&rsquo;RE DETAILERS!
    </span>,
    <motion.span
      key="step3"
      className="flex text-[18vw] sm:text-[12vw] md:text-[10vw] items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="inline-block align-baseline opacity-90 mx-[0.05em]"
        style={{ width: "1.6em", height: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.6, delay: 0.2 }}
      />
    </motion.span>,
  ];

  useEffect(() => {
    if (stepIndex === steps.length - 1) {
      // Show call-to-action after logo appears and stays for 3 seconds
      const timer = setTimeout(() => {
        setShowCallToAction(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev + 1 >= steps.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [stepIndex, steps.length]);

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

      <div className="relative z-10 flex h-full backdrop-blur-sm backdrop-brightness-75 bg-black/60 items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-7xl text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={stepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="font-bold leading-none text-glow-animated"
            >
              {steps[stepIndex]}
            </motion.h1>
          </AnimatePresence>
          
          {/* Call to Action */}
          <AnimatePresence>
            {showCallToAction && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              >
                <motion.a
                  href="#contact"
                  className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Detail Today
                </motion.a>
                <motion.a
                  href="/gallery"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-offwhite text-xl">
        ↓
      </div>
    </section>
  );
}
