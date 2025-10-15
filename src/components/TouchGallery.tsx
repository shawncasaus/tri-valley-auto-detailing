"use client";

import { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import ImageCardAlt from "./ImageCardAlt";
import { GallerySkeleton, MobileCarouselSkeleton } from "./SkeletonLoaders";
import { useLoadingState, useMobileDetection } from "@/hooks/useLoadingStates";

interface GalleryImage {
  imageUrl: string;
  description: string;
  heightRatio?: number;
  isTall?: boolean;
}

interface TouchGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function TouchGallery({ images, className = "" }: TouchGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobileDetection();
  const { isLoading } = useLoadingState({ delay: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: unknown, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (velocity > 0 || offset > threshold) {
        // Swipe right - go to previous image
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (velocity < 0 || offset < -threshold) {
        // Swipe left - go to next image
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Show loading state
  if (isLoading) {
    return (
      <section className={`px-4 sm:px-8 py-8 mb-32 w-full ${className}`}>
        <div className="w-full max-w-[1920px] mx-auto">
          {isMobile ? (
            <MobileCarouselSkeleton />
          ) : (
            <GallerySkeleton count={images.length} />
          )}
        </div>
      </section>
    );
  }

  // Desktop grid view
  if (!isMobile) {
    return (
      <section className={`px-4 sm:px-8 py-8 mb-32 w-full ${className}`}>
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="col-span-1"
              >
                <ImageCardAlt
                  imageUrl={image.imageUrl}
                  description={image.description}
                  rounded="rounded-xl"
                  heightRatio={image.heightRatio || 0.66}
                  isTall={image.isTall}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Mobile carousel view
  return (
    <section className={`px-4 py-8 mb-32 w-full ${className}`}>
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Mobile Carousel */}
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="overflow-hidden rounded-xl"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ touchAction: "pan-x" }}
          >
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full"
                  >
                    <ImageCardAlt
                      imageUrl={image.imageUrl}
                      description={image.description}
                      rounded="rounded-xl"
                      heightRatio={image.heightRatio || 0.66}
                      isTall={image.isTall}
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? "bg-primary" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-4 text-sm text-gray-600">
          {currentIndex + 1} of {images.length}
        </div>

        {/* Swipe Instructions */}
        <div className="text-center mt-2 text-xs text-gray-500">
          Swipe left or right to navigate
        </div>
      </div>
    </section>
  );
}
