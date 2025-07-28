"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  points: string[];
  imageUrl: string;
};

export default function ServiceCard({
  title,
  points,
  imageUrl,
}: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-0 m-2 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-end min-h-[300px] sm:min-h-[340px] cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/20 z-5 pointer-events-none" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h4 className="text-3xl sm:text-4xl font-semibold text-offwhite drop-shadow-md text-center px-4">
          {title}
        </h4>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
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
