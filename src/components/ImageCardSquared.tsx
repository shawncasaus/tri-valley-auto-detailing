"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ImageCardSquaredProps = {
  title: string;
  description1: string;
  description2?: string;
  imageUrl: string;
  width?: string;
  height?: string;
  background?: string;
  blackText?: boolean;
};

export default function ImageCardSquared({
  title,
  description1,
  description2,
  imageUrl,
  width = "w-full",
  height = "h-[360px] sm:h-[500px] md:h-[600px]",
  background = "bg-white",
  blackText = true,
}: ImageCardSquaredProps) {
  const [isToggled, setIsToggled] = useState(false);

  const textClass = blackText ? "text-gray-700" : "text-white";

  return (
    <div
      className={`relative ${width} ${height} shadow-md overflow-hidden group mb-12`}
    >
      <button
        onClick={() => setIsToggled((prev) => !prev)}
        className="absolute top-3 right-3 z-20 p-1 rounded-full bg-white/80 hover:bg-white"
        aria-label="Toggle Image View"
      >
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
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
