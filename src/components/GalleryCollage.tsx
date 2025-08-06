"use client";

import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

export default function GalleryCollage() {
  return (
    <section className="px-4 sm:px-8 py-8 mb-32 w-full">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="E36 M3"
              imageUrl="/images/collage-photos/img1.jpg"
              description1="Pristine detailing and paint correction work."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="GT3 RS"
              imageUrl="/images/collage-photos/img2.jpg"
              description1="Track-ready shine with advanced ceramic coating."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="FD RX-7"
              imageUrl="/images/collage-photos/img3.jpg"
              description1="Engine bay and rotary-specific cosmetic restoration."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="R32 GTR"
              imageUrl="/images/collage-photos/img8.jpg"
              description1="Iconic JDM legend brought back to glory."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="E46 M3"
              imageUrl="/images/collage-photos/img5.png"
              description1="Refined interior and exterior with stage 2 polish."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="MK4 Supra"
              imageUrl="/images/collage-photos/img7.png"
              description1="Glass-like finish with wheel brightening."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="GR Yaris"
              imageUrl="/images/collage-photos/img6.jpg"
              description1="Daily driven and always dialed in."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="911 GT3"
              imageUrl="/images/collage-photos/img9.jpg"
              description1="Track prep and full body detail."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCard
              title="R32 GTR"
              imageUrl="/images/collage-photos/img4.jpg"
              description1="Iconic JDM legend brought back to glory."
              background="bg-primary"
              blackText={false}
              rounded="rounded-xl"
              heightRatio={0.66}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
