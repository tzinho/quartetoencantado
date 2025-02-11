"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const educationalPrograms = [
  {
    title: "Educação Musical Infantil",
    description:
      "Introduzimos as crianças ao mundo da música de forma lúdica e interativa.",
    image: "/1.jpeg",
  },
  {
    title: "Contação de Histórias",
    description:
      "Histórias envolventes que estimulam a criatividade e o gosto pela leitura.",
    image: "/2.jpeg",
  },
  {
    title: "Teatro Educacional",
    description:
      "Espetáculos teatrais com temas educativos e valores importantes.",
    image: "/3.jpeg",
  },
  {
    title: "Atividades Lúdicas",
    description:
      "Jogos e dinâmicas que estimulam o aprendizado de maneira divertida.",
    image: "/4.jpeg",
  },
  {
    title: "Oficinas Criativas",
    description:
      "Atividades práticas para desenvolver habilidades artísticas e cognitivas.",
    image: "/5.jpeg",
  },
  {
    title: "Mascotes Educativos",
    description:
      "Personagens interativos que ensinam valores e incentivam a aprendizagem.",
    image: "/6.jpeg",
  },
  {
    title: "Ciência Divertida",
    description:
      "Experimentos práticos para despertar o interesse pela ciência.",
    image: "/7.jpeg",
  },
  {
    title: "Apresentações em Escolas",
    description: "Programas educativos que complementam o ensino tradicional.",
    image: "/8.jpeg",
  },
];

export const Programs = () => {
  return (
    <section className="py-20 bg-[#FDF4FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb:text-5xl font-bold text-center mb-12 text-kiddy-purple font-[family-name:var(--font-title)]">
            Eventos para crianças
          </h2>
          <h3 className="text-xl font-righteous text-gray-500 mb-8">
            Diversão, aprendizado e muita alegria em cada evento! 🎉📚
          </h3>
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl"
            >
              🪐
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl"
            >
              🎯
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationalPrograms.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden p-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-righteous text-kiddy-purple mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button
                    variant="link"
                    className="text-kiddy-purple hover:text-kiddy-pink font-righteous"
                  >
                    Saiba mais →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
