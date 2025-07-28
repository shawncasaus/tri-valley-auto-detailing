"use client";

import { motion } from "framer-motion";

export default function Hero() {
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

      <div className="relative z-10 flex h-full backdrop-blur-sm backdrop-brightness-75 bg-black/60">
        <div className="w-1/2 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-1/2 flex items-center justify-center p-6"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="max-w-[250px] w-full h-auto opacity-90"
            />
          </motion.div>
        </div>

        <div className="w-1/2 flex flex-col gap-4 items-center sm:items-start justify-center text-center sm:text-left px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-glow-animated">
            MORE THAN
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-glow-animated">
            A CAR WASH...
          </h1>
          <br />
          <br />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-glow-animated">
            WE&apos;RE DETAILERS!
          </h1>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-offwhite text-xl">
        ↓
      </div>
    </section>
  );
}
