"use client";

import { motion } from "framer-motion";
import AboutMissionSection from "@/components/AboutMissionSection";
import ImageCardAlt from "@/components/ImageCardAlt";

export default function AboutPage() {
  return (
    <section className="bg-white min-h-screen flex items-center pt-25">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-start justify-start w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="w-full sm:w-1/2">
          <AboutMissionSection />
        </div>

        <motion.div
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ImageCardAlt
            imageUrl="/images/about-photo.jpg"
            description="Our experienced team brings years of expertise in automotive detailing, using premium products and advanced techniques to restore your vehicle to showroom condition. We're passionate about delivering exceptional results that exceed your expectations."
            rounded="rounded-xl"
            heightRatio={0.66}
          />
        </motion.div>
      </div>
    </section>
  );
}