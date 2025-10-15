"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

export function Skeleton({ 
  className = "", 
  height = "h-4", 
  width = "w-full", 
  rounded = "rounded" 
}: SkeletonProps) {
  return (
    <div
      className={`${height} ${width} ${rounded} bg-gray-200 animate-pulse ${className}`}
      aria-hidden="true"
    />
  );
}

interface ImageSkeletonProps {
  heightRatio?: number;
  rounded?: string;
  className?: string;
}

export function ImageSkeleton({ 
  heightRatio = 0.66, 
  rounded = "rounded-xl", 
  className = "" 
}: ImageSkeletonProps) {
  return (
    <div className={`relative w-full ${rounded} overflow-hidden ${className}`}>
      <div 
        className={`w-full bg-gray-200 animate-pulse ${rounded}`}
        style={{ 
          height: `${heightRatio * 100}%`,
          aspectRatio: `1/${heightRatio}`
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      </div>
    </div>
  );
}

interface CardSkeletonProps {
  heightRatio?: number;
  rounded?: string;
  className?: string;
  showText?: boolean;
}

export function CardSkeleton({ 
  heightRatio = 0.66, 
  rounded = "rounded-xl", 
  className = "",
  showText = true
}: CardSkeletonProps) {
  return (
    <div className={`relative w-full ${rounded} shadow-md overflow-hidden ${className}`}>
      {/* Image skeleton */}
      <div 
        className={`w-full bg-gray-200 animate-pulse ${rounded}`}
        style={{ 
          height: `${heightRatio * 100}%`,
          aspectRatio: `1/${heightRatio}`
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      </div>
      
      {/* Text skeleton */}
      {showText && (
        <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gray-100/90 px-4 py-3 flex flex-col justify-center">
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded animate-pulse w-3/4" />
            <div className="h-2 bg-gray-300 rounded animate-pulse w-1/2" />
          </div>
        </div>
      )}
    </div>
  );
}

interface GallerySkeletonProps {
  count?: number;
  className?: string;
}

export function GallerySkeleton({ count = 6, className = "" }: GallerySkeletonProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="col-span-1"
        >
          <CardSkeleton heightRatio={0.66} />
        </motion.div>
      ))}
    </div>
  );
}

interface MobileCarouselSkeletonProps {
  className?: string;
}

export function MobileCarouselSkeleton({ className = "" }: MobileCarouselSkeletonProps) {
  return (
    <div className={`px-4 py-8 mb-32 w-full ${className}`}>
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div className="flex">
              <div className="w-full flex-shrink-0 px-2 flex items-center justify-center">
                <div className="relative w-full">
                  <CardSkeleton heightRatio={0.66} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation skeleton */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full animate-pulse w-10 h-10" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full animate-pulse w-10 h-10" />
        </div>

        {/* Dots skeleton */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-3 h-3 rounded-full bg-gray-300 animate-pulse" />
          ))}
        </div>

        {/* Counter skeleton */}
        <div className="text-center mt-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse w-16 mx-auto" />
        </div>
      </div>
    </div>
  );
}
