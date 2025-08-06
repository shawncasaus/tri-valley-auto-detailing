"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  points: string[];
  imageUrl: string;
  rounded?: string;
};

export default function ServiceCard({
  title,
  points,
  imageUrl,
  rounded = "rounded-none",
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const toggleOverlay = () => {
    if (isTouch) setIsHovered((prev) => !prev);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Service card for ${title}. Tap, hover or focus to reveal more.`}
      className={`relative w-full aspect-[3/2] m-2 shadow-sm overflow-hidden flex flex-col justify-end cursor-pointer group ${rounded} outline-none focus:ring-2 focus:ring-primary`}
      onClick={toggleOverlay}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={() => !isTouch && setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-5 pointer-events-none" />
      </div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h4 className="text-3xl sm:text-4xl font-semibold text-offwhite drop-shadow-md text-center px-4">
          {title}
        </h4>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
          >
            <div className="flex flex-col justify-center items-center w-full h-full">
              <ul className="list-disc list-inside space-y-3 text-white text-base sm:text-lg text-left max-w-[85%]">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
