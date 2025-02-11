"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "45", label: "Eventos" },
  { value: "1500", label: "crianças feitas felizes" },
  { value: "2", label: "Anos de experiência" },
  { value: "1500", label: "crianças feitas felizes" },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-kiddy-purple text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}+</div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
