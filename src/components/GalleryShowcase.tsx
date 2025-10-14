"use client";

import ImageCard from "./ImageCard";
import TextHero from "./TextHero";
import { motion } from "framer-motion";

export default function GalleryShowcase() {
  return (
    <section className="mb-12 w-full">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mx-auto items-stretch">
        <div className="w-full md:w-1/3 flex items-center justify-center bg-white ">
          <TextHero className="text-left whitespace-pre-line text-6xl sm:text-7xl leading-tight">
            {"A CURATED\nGLIMPSE\nINTO\nOUR\nCRAFT"}
          </TextHero>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-2/3"
        >
          <ImageCard
            title="E36 M3"
            imageUrl="/images/showcase.jpg"
            description1="This classic BMW E36 M3 received our premium paint correction and ceramic coating treatment. The vehicle's original Estoril Blue paint was meticulously restored to its former glory, removing years of oxidation and swirl marks."
            description2="Our multi-stage paint correction process brought back the deep, rich color that makes this iconic sports car truly shine. The ceramic coating provides long-lasting protection while enhancing the paint's depth and clarity."
            background="bg-[#1E1A19]"
            blackText={false}
            rounded="rounded-xl"
            heightRatio={0.66}
          />
        </motion.div>
      </div>
    </section>
  );
}
