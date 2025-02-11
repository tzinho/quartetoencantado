"use client";

import { motion } from "framer-motion";

const qualities = [
  {
    title: "Diversão Garantida",
    description: "Atividades interativas e lúdicas para todas as idades",
    icon: "🎉",
  },
  {
    title: "Profissionais Qualificados",
    description: "Equipe experiente e dedicada ao entretenimento infantil",
    icon: "👩‍🏫",
  },
  {
    title: "Músicas Infantis",
    description:
      "Trabalhamos com musicalidade para tornar a diversão ainda mais envolvente",
    icon: "🎵",
  },
  {
    title: "Mascotes Temáticos",
    description: "Personagens cativantes para encantar as crianças",
    icon: "🐻",
  },
  {
    title: "Segurança em Primeiro Lugar",
    description: "Eventos planejados com segurança e conforto para os pequenos",
    icon: "🛡️",
  },
  {
    title: "Decoração Personalizada",
    description: "Ambientes decorados de acordo com o tema do evento",
    icon: "🎨",
  },
  {
    title: "Brinquedos e Jogos",
    description: "Variedade de brinquedos e atividades para todas as idades",
    icon: "🛝",
  },
];

export const Qualities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb:text-5xl font-bold text-center mb-12 text-kiddy-purple font-[family-name:var(--font-title)]">
          Fornecendo qualidade em nossos serviços para seus filhos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{quality.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
              <p className="text-gray-600">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
