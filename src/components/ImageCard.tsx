"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ImageCardProps = {
  title: string;
  description1: string;
  description2?: string;
  imageUrl: string;
};

export default function ImageCard({
  title,
  description1,
  description2,
  imageUrl,
}: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-video rounded-4xl shadow-md mb-12 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Text Panel */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 rounded-4xl z-0 text-center">
        <h2 className="text-3xl font-bold text-primary m-4">{title}</h2>
        <p className="text-gray-700 text-sm max-w-xl mb-2">{description1}</p>
        {description2 && (
          <p className="text-gray-700 text-sm max-w-xl">{description2}</p>
        )}
      </div>

      {/* Animated Image Overlay */}
      <motion.div
        animate={
          isHovered
            ? {
                width: "6rem",
                height: "6rem",
                borderRadius: "50%",
                translateX: "-50%",
                translateY: "50%",
                opacity: 0.4,
              }
            : {
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
                translateX: "0%",
                translateY: "0%",
                opacity: 1,
              }
        }
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.6,
        }}
        className="absolute z-10 overflow-hidden"
        style={{
          bottom: 0,
          left: 0,
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
