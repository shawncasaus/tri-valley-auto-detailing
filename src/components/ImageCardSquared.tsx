"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ImageCardSquaredProps = {
  title: string;
  description1: string;
  description2?: string;
  imageUrl: string;
  width?: string;
  height?: string;
};

export default function ImageCardSquared({
  title,
  description1,
  description2,
  imageUrl,
  width = "w-full",
  height = "h-[360px] sm:h-[500px] md:h-[600px]",
}: ImageCardSquaredProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${width} ${height} shadow-md overflow-hidden group mb-12`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 text-center z-0">
        <h2 className="text-3xl font-bold text-primary m-4">{title}</h2>
        <p className="text-gray-700 text-sm max-w-xl mb-2">{description1}</p>
        <p className="text-gray-700 text-sm max-w-xl mb-2">{description1}</p>
        {description2 && (
          <p className="text-gray-700 text-sm max-w-xl">{description2}</p>
        )}
      </div>

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
                borderRadius: "0rem",
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
        style={{ bottom: 0, left: 0 }}
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
