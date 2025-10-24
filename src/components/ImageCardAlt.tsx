"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ImageCardAltProps = {
  description: string;
  imageUrl: string;
  width?: string;
  rounded?: string;
  heightRatio?: number;
  isTall?: boolean;
};

export default function ImageCardAlt({
  description,
  imageUrl,
  width = "w-full",
  rounded = "",
  heightRatio = 0.66,
  isTall = false,
}: ImageCardAltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("auto");
  const [isClicked, setIsClicked] = useState(false);

  // effective ratio: double when tall
  const effectiveRatio = useMemo(
    () => heightRatio * (isTall ? 2 : 1),
    [heightRatio, isTall],
  );

  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const w = cardRef.current.offsetWidth;
        setHeight(`${w * effectiveRatio}px`);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (cardRef.current) resizeObserver.observe(cardRef.current);

    return () => resizeObserver.disconnect();
  }, [effectiveRatio]);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="img"
      aria-label={`Auto detailing work image: ${description}`}
      className={`relative ${width} ${rounded} shadow-md overflow-hidden group outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
      style={{ height }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <Image
        src={imageUrl}
        alt={`Auto detailing work showing ${description.toLowerCase()}`}
        fill
        loading="lazy"
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ 
          y: isClicked ? "0%" : "100%"
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
        className="absolute left-0 bottom-0 w-full h-1/3 bg-black/60 bg-opacity-90 text-white px-4 py-3 flex flex-col justify-center text-start z-20"
        aria-hidden="true"
      >
        <p className="text-sm mt-1">{description}</p>
      </motion.div>
    </div>
  );
}
