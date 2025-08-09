"use client";

import { motion } from "framer-motion";
import ImageCardAlt from "./ImageCardAlt";

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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img1.jpg"
              description="Pristine detailing and paint correction work."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img2.jpg"
              description="Track-ready shine with advanced ceramic coating."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img3.jpg"
              description="Engine bay and rotary-specific cosmetic restoration."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img8.jpg"
              description="Iconic JDM legend brought back to glory."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img5.png"
              description="Refined interior and exterior with stage 2 polish."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img7.png"
              description="Glass-like finish with wheel brightening."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img6.jpg"
              description="Daily driven and always dialed in."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img9.jpg"
              description="Track prep and full body detail."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img4.jpg"
              description="Iconic JDM legend brought back to glory."
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
            <ImageCardAlt
              imageUrl="/images/collage-photos/img10.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img11.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img12.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img13.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img14.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img15.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img16.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img17.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1"
          >
            <ImageCardAlt
              imageUrl="/images/collage-photos/img18.jpg"
              description="Iconic JDM legend brought back to glory."
              rounded="rounded-xl"
              heightRatio={0.66}
              isTall
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
