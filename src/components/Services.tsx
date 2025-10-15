"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Interior Detailing Services",
      points: [
        "Interior vacuum",
        "UV protection",
        "Clean and condition car leather",
        "Carpet and upholstery stain removal",
        "Interior Steam Cleaning",
      ],
      imageUrl: "/images/interior-optimized.jpg",
      rounded: "rounded-xl",
    },
    {
      title: "Exterior Detailing Services",
      points: [
        "High quality soaps and sealants for every detail",
        "Exterior/Interior window cleaning",
        "Clay bar when needed",
        "Engine bay cleaning",
      ],
      imageUrl: "/images/exterior.jpg",
      rounded: "rounded-xl",
    },
    {
      title: "Paint Restoration Services",
      points: [
        "Paint enhancement",
        "Water spot removal",
        "Paint correction",
        "Headlight Restoration",
      ],
      imageUrl: "/images/restoration-optimized.jpg",
      rounded: "rounded-xl",
    },
    {
      title: "Ceramic Coating Services",
      points: [
        "We offer 3, 5, and 8 year Ceramic Coatings",
        "Protects paint from whatever nature throws at it",
        "Bird droppings, tree sap, dirt, hard water, etc...",
      ],
      imageUrl: "/images/coating-optimized.jpg",
      rounded: "rounded-xl",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white text-center px-4 sm:px-8">
      <div className="w-full max-w-[1600px] mx-auto">
        {" "}
        <h3 className="text-left sm:text-left text-[10vw] sm:text-6xl md:text-7xl font-bold text-primary leading-tight">
          OUR
        </h3>
        <h3 className="text-left sm:text-left text-[10vw] sm:text-6xl md:text-7xl font-bold mb-8 text-primary leading-tight">
          SERVICES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: i * 0.1, ease: "anticipate" }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
