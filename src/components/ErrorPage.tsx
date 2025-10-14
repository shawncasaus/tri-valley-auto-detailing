"use client";

interface ErrorPageProps {
  error: Error;
  resetError: () => void;
}

export default function ErrorPage({ resetError }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-600 mb-6">
          We&apos;re experiencing some technical difficulties. Our team has been notified and is working to fix this issue.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={resetError}
            className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors duration-200"
          >
            Go Home
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need immediate assistance? 
            <a href="#contact" className="text-primary hover:underline ml-1">
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
