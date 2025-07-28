"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ImageCardProps = {
  title: string;
  description1: string;
  description2?: string;
  imageUrl: string;
  width?: string;
  height?: string;
  background?: string;
  blackText?: boolean;
  rounded?: string;
};

export default function ImageCard({
  title,
  description1,
  description2,
  imageUrl,
  width = "w-full",
  height = "h-[360px] sm:h-[500px] md:h-[600px]",
  background = "bg-white",
  blackText = true,
  rounded = "",
}: ImageCardProps) {
  const [isToggled, setIsToggled] = useState(false);

  const textClass = blackText ? "text-gray-700" : "text-white";

  return (
    <div
      className={`relative ${width} ${height} ${rounded} shadow-md overflow-hidden group mb-12`}
    >
      <button
        onClick={() => setIsToggled((prev) => !prev)}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-md"
        aria-label="Toggle Image View"
      >
        <ChevronDown
          className={`w-6 h-6 transition-transform ${
            isToggled ? "rotate-180 text-blue-600" : "text-gray-700"
          }`}
        />
      </button>

      <div
        className={`absolute inset-0 ${background} flex flex-col items-center justify-center p-6 text-center z-0`}
      >
        <h2 className={`text-3xl font-bold m-4 ${textClass}`}>{title}</h2>
        <p className={`text-sm max-w-xl mb-2 ${textClass}`}>{description1}</p>
        {description2 && (
          <p className={`text-sm max-w-xl ${textClass}`}>{description2}</p>
        )}
      </div>

      <motion.div
        initial={{
          width: "100%",
          height: "100%",
          borderRadius: "0rem",
          translateX: "0%",
          translateY: "0%",
          opacity: 1,
        }}
        animate={
          isToggled
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
        className="absolute z-10 overflow-hidden ${rounded}"
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
