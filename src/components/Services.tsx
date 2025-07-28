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
      imageUrl: "/images/interior.jpg",
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
    },
    {
      title: "Paint Restoration Services",
      points: [
        "Paint enhancement",
        "Water spot removal",
        "Paint correction",
        "Headlight Restoration",
      ],
      imageUrl: "/images/restoration.jpg",
    },
    {
      title: "Ceramic Coating Services",
      points: [
        "We offer 3, 5, and 8 year Ceramic Coatings",
        "Protects paint from whatever nature throws at it",
        "Bird droppings, tree sap, dirt, hard water, etc...",
      ],
      imageUrl: "/images/coating.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white text-center px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="text-5xl font-bold mb-8 text-primary">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: i * 0.1, ease: "anticipate" }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
