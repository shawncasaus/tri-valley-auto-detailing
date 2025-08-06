"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageCardAltProps = {
  description: string;
  imageUrl: string;
  width?: string;
  rounded?: string;
  heightRatio?: number;
};

export default function ImageCardAlt({
  description,
  imageUrl,
  width = "w-full",
  rounded = "",
  heightRatio = 0.66,
}: ImageCardAltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("auto");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

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

  const handleClick = () => {
    if (isTouch) setIsHovered((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`Focus or tap to animate.`}
      className={`relative ${width} ${rounded} shadow-md overflow-hidden group outline-none focus:ring-2 focus:ring-primary`}
      style={{ height }}
      onClick={handleClick}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={() => !isTouch && setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={description}
        fill
        priority
        className="object-cover"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
        className={`absolute left-0 bottom-0 w-full h-1/3 bg-black/60 bg-opacity-90 text-white px-4 py-3 flex flex-col justify-center text-start z-20`}
      >
        <p className="text-sm mt-1">{description}</p>
      </motion.div>
    </div>
  );
}
