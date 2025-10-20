"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageCardProps = {
  title: string;
  description1: string;
  description2?: string;
  imageUrl: string;
  width?: string;
  background?: string;
  blackText?: boolean;
  rounded?: string;
  heightRatio?: number;
};

export default function ImageCard({
  title,
  description1,
  description2,
  imageUrl,
  width = "w-full",
  background = "bg-white",
  blackText = true,
  rounded = "",
  heightRatio = 0.66,
}: ImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("auto");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        setHeight(`${width * heightRatio}px`);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [heightRatio]);

  const textClass = blackText ? "text-gray-700" : "text-white";

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="img"
      aria-label={`${title} auto detailing showcase. Focus or tap to animate image.`}
      className={`relative ${width} ${rounded} shadow-md overflow-hidden group outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
      style={{ height }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div
        className={`absolute inset-0 ${background} flex flex-col items-center justify-center p-4 sm:p-6 text-center z-0`}
        aria-hidden="true"
      >
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 ${textClass}`}
        >
          {title}
        </h2>
        <p
          className={`text-xs sm:text-sm max-w-sm sm:max-w-xl mb-1 sm:mb-2 ${textClass}`}
        >
          {description1}
        </p>
        {description2 && (
          <p className={`text-xs sm:text-sm max-w-sm sm:max-w-xl ${textClass}`}>
            {description2}
          </p>
        )}
      </div>

      {/* Click indicator overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      />
      
      {/* Click hint text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 z-30 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium pointer-events-none"
      >
        Click to animate
      </motion.div>

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
          isClicked
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
        className={`absolute z-10 overflow-hidden ${rounded}`}
        style={{ bottom: 0, left: 0 }}
      >
        <Image
          src={imageUrl}
          alt={`${title} auto detailing work - ${description1}`}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
