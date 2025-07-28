"use client";

import { motion } from "framer-motion";
import AboutMissionSection from "@/components/AboutMissionSection";
import ImageCard from "@/components/ImageCard";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="py-16 px-4">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 items-start mx-auto sm:w-[80%] mt-12">
          <div className="flex-1">
            <AboutMissionSection />
          </div>

          <motion.div
            className="flex-1 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ImageCard
              title="E36 M3"
              imageUrl="/images/about-photo.jpg"
              description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo eu nulla gravida tincidunt. Curabitur tincidunt, odio sit amet pretium varius, lacus sem euismod nulla, sit amet dignissim tortor nulla a est."
              background="bg-[#1E1A19]"
              blackText={false}
              rounded="rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
