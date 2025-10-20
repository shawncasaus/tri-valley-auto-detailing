"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [stepIndex, setStepIndex] = useState(0);
  const [showCallToAction, setShowCallToAction] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const steps = [
    <span
      key="step1"
      className="flex text-[8vw] sm:text-[6vw] md:text-[4vw] items-center justify-center"
    >
      WE&rsquo;RE MORE THAN A CAR WASH...
    </span>,
    <span
      key="step2"
      className="flex text-[10vw] sm:text-[8vw] md:text-[6vw] items-center justify-center"
    >
      WE&rsquo;RE DETAILERS!
    </span>,
    <motion.span
      key="step3"
      className="flex text-[18vw] sm:text-[12vw] md:text-[10vw] items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="inline-block align-baseline opacity-90 mx-[0.05em]"
        style={{ width: "1.6em", height: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.6, delay: 0.2 }}
      />
    </motion.span>,
  ];

  useEffect(() => {
    if (stepIndex === steps.length - 1) {
      // Show call-to-action after logo appears and stays for 3 seconds
      const timer = setTimeout(() => {
        setShowCallToAction(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev + 1 >= steps.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [stepIndex, steps.length]);

  const handlePhoneClick = () => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, open the phone dialer
      window.location.href = 'tel:+19252626058';
    } else {
      // On desktop, show modal
      setShowPhoneModal(true);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
               <source src="/media/hero-loop-compressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex h-full backdrop-blur-sm backdrop-brightness-75 bg-black/60 items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-7xl text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={stepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="font-bold leading-none text-glow-animated"
            >
              {steps[stepIndex]}
            </motion.h1>
          </AnimatePresence>
          
          {/* Call to Action */}
          <AnimatePresence>
            {showCallToAction && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4"
              >
                <motion.a
                  href="#contact"
                  className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center min-h-[44px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Detail Today
                </motion.a>
                <motion.a
                  href="/gallery"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center min-h-[44px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.a>
                <motion.button
                  onClick={handlePhoneClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center min-h-[44px] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call Now
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-offwhite text-xl">
        ↓
      </div>

      {/* Phone Modal */}
      <AnimatePresence>
        {showPhoneModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPhoneModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us Now!</h3>
              <p className="text-gray-600 mb-6">Ready to book your detail? Give us a call!</p>
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-lg font-semibold text-gray-900">(925) 262-6058</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPhoneModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
                <a
                  href="tel:+19252626058"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
