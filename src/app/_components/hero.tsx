"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-kiddy-yellow transform -skew-y-3" />
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl mb:text-5xl font-bold mb-6 font-[family-name:var(--font-title)]">
            Bem vindo ao quarteto fantástico
          </h1>
          <p className="text-xl mb-8">Aqui é onde a diversão acontece!</p>
          <Button
            size="lg"
            className="bg-kiddy-yellow text-black hover:bg-kiddy-pink hover:text-white transition-all duration-300"
          >
            Vamos lá!
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
