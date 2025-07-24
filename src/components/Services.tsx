"use client";

import { motion } from "framer-motion";

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
      image: "/images/interior.jpg",
    },
    {
      title: "Exterior Detailing Services",
      points: [
        "High quality soaps and sealants for every detail",
        "Exterior/Interior window cleaning",
        "Clay bar when needed",
        "Engine bay cleaning",
      ],
      image: "/images/exterior.jpg",
    },
    {
      title: "Paint Restoration Services",
      points: [
        "Paint enchancement",
        "Water spot removal",
        "Paint correction",
        "Headlight Restoration",
      ],
      image: "/images/restoration.jpg",
    },
    {
      title: "Ceramic Coating Services",
      points: [
        "We offer 3, 5, and 8 year Ceramic Coatings",
        "Protects paint from whatever nature throws at it",
        "Bird droppings, tree sap, dirt, hard water, etc...",
      ],
      image: "/images/coating.jpg",
    },
  ];

  const cardStyle = (image: string) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <section id="services" className="py-16 bg-white text-center px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="text-5xl font-bold mb-8 text-primary">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="relative p-6 m-2 rounded-2xl shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px]"
              style={cardStyle(s.image)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: i * 0.1, ease: "anticipate" }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-left">
                <h4 className="text-2xl text-offwhite font-semibold mb-2">
                  {s.title}
                </h4>
                <ul className="text-white list-disc list-inside">
                  {s.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
