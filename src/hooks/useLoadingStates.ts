"use client";

import { useState, useEffect } from 'react';

interface UseLoadingStateOptions {
  initialLoading?: boolean;
  delay?: number;
}

export function useLoadingState(options: UseLoadingStateOptions = {}) {
  const { initialLoading = true, delay = 0 } = options;
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [delay]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}

interface UseImageLoadingOptions {
  src: string;
  delay?: number;
}

export function useImageLoading({ src, delay = 0 }: UseImageLoadingOptions) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsImageLoading(false);
      return;
    }

    setIsImageLoading(true);
    setHasError(false);

    const img = new Image();
    
    const handleLoad = () => {
      setTimeout(() => {
        setIsImageLoading(false);
      }, delay);
    };

    const handleError = () => {
      setHasError(true);
      setIsImageLoading(false);
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, delay]);

  return {
    isImageLoading,
    hasError,
  };
}

interface UseMobileDetectionOptions {
  threshold?: number;
}

export function useMobileDetection(options: UseMobileDetectionOptions = {}) {
  const { threshold = 768 } = options;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < threshold);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [threshold]);

  return isMobile;
}
