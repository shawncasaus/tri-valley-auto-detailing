"use client";

import { useEffect } from 'react';
import ErrorPage from '@/components/ErrorPage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Next.js Error Boundary caught an error:', error);
  }, [error]);

  return <ErrorPage error={error} resetError={reset} />;
}
