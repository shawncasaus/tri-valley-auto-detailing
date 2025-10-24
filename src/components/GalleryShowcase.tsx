"use client";

import ImageCard from "./ImageCard";
import TextHero from "./TextHero";
import { motion } from "framer-motion";

export default function GalleryShowcase() {
    return (
        <section className="mb-12 w-full">
            <div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mx-auto items-stretch">
                <div className="w-full md:w-1/3 flex items-center justify-center bg-white ">
                    <TextHero className="text-left whitespace-pre-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
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
                        title="1989 BMW 3 Series"
                        imageUrl="/images/showcase.jpg"
                        description1="This BMW was a special project. It took 2 days to clean and restore it. We did a full undercarriage detail removing years and years of dirt and grime in order to prep it for auction on Bring A Trailer. Not only did the auction go fantastic, but he broke the record for the highest non m3 BMW ever sold. Over 100k. Very proud to know the owner and to help with all his projects and be trusted with such machinery."
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
