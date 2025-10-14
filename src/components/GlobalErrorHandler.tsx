"use client";

import { useEffect } from 'react';

export default function GlobalErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // Prevent the default browser behavior
      event.preventDefault();
      
      // You could send this to an error reporting service here
      // Example: errorReportingService.captureException(event.reason);
    };

    // Handle uncaught errors
    const handleError = (event: ErrorEvent) => {
      console.error('Uncaught error:', event.error);
      
      // You could send this to an error reporting service here
      // Example: errorReportingService.captureException(event.error);
    };

    // Add event listeners
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    // Cleanup function
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  // This component doesn't render anything
  return null;
}
