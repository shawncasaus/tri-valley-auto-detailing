"use client";

import React, { useEffect, useState } from 'react';

interface NetworkConnection {
  effectiveType?: string;
  saveData?: boolean;
  downlink?: number;
  addEventListener?: (event: string, callback: () => void) => void;
  removeEventListener?: (event: string, callback: () => void) => void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkConnection;
}

interface VideoOptimizationProps {
  children: React.ReactNode;
  mobileSrc?: string;
}

export default function VideoOptimization({ 
  children, 
  mobileSrc
}: VideoOptimizationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    // Detect slow connection
    const checkConnection = () => {
      const navigatorWithConnection = navigator as NavigatorWithConnection;
      const connection = navigatorWithConnection.connection;
      if (connection) {
        const isSlow = connection.effectiveType === 'slow-2g' || 
                      connection.effectiveType === '2g' || 
                      connection.saveData === true ||
                      (connection.downlink !== undefined && connection.downlink < 1.5);
        setIsSlowConnection(!!isSlow);
      }
    };

    checkMobile();
    checkConnection();

    // Listen for connection changes
    const navigatorWithConnection = navigator as NavigatorWithConnection;
    const connection = navigatorWithConnection.connection;
    if (connection && connection.addEventListener) {
      connection.addEventListener('change', checkConnection);
      return () => {
        if (connection.removeEventListener) {
          connection.removeEventListener('change', checkConnection);
        }
      };
    }
  }, []);

  // Clone children and add mobile-specific props
  const optimizedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'video') {
      const videoChild = child as React.ReactElement<React.VideoHTMLAttributes<HTMLVideoElement>>;
      return React.cloneElement(videoChild, {
        ...videoChild.props,
        // Use mobile-optimized source if available
        src: isMobile && mobileSrc ? mobileSrc : videoChild.props.src,
        // Disable autoplay on slow connections
        autoPlay: isSlowConnection ? false : videoChild.props.autoPlay,
        // Add preload optimization
        preload: isSlowConnection ? 'none' : 'metadata',
        // Add poster for slow connections
        poster: isSlowConnection ? videoChild.props.poster : undefined,
      });
    }
    return child;
  });

  return <>{optimizedChildren}</>;
}
