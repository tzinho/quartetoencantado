"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const classes = [
  {
    title: "Apresentação em escolas",
    price: "30",
    time: "1 hora",
    image: "/1.jpeg",
  },
  {
    title: "Teatro musical",
    price: "35",
    time: "1 hora",
    image: "/2.jpeg",
  },
  {
    title: "Apresentação em escolas",
    price: "25",
    time: "45 minutos",
    image: "/3.jpeg",
  },
  {
    title: "Teatro musical",
    price: "28",
    time: "2 horas",
    image: "/4.jpeg",
  },
];

export const Classes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb:text-5xl font-bold text-center mb-12 text-kiddy-purple font-[family-name:var(--font-title)]">
          Nossos serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-48 object-fill"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {classItem.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-kiddy-purple font-bold">
                    R${classItem.price}/hr
                  </span>
                  <span className="text-gray-600">{classItem.time}</span>
                </div>
                <Button className="w-full mt-4 bg-kiddy-yellow text-black hover:bg-kiddy-pink hover:text-white">
                  Saiba mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
