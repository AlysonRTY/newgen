"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const duckFacts = [
  {
    title: "Swimming Efficiency",
    fact: "Ducks have waterproof feathers thanks to an oil gland that helps them stay buoyant and dry while swimming.",
    icon: "🌊",
  },
  {
    title: "360° Vision",
    fact: "Ducks can see in nearly all directions at once and can see both near and far simultaneously.",
    icon: "👀",
  },
  {
    title: "Sleep Adaptation",
    fact: "Ducks can sleep with one half of their brain while the other half stays alert for danger.",
    icon: "😴",
  },
  {
    title: "Temperature Control",
    fact: "Duck feet have a special blood vessel system that helps them swim in cold water without losing too much body heat.",
    icon: "🌡️",
  },
  {
    title: "Communication",
    fact: "Ducks have over 10 different vocal sounds they use to communicate with each other.",
    icon: "🗣️",
  },
  {
    title: "Flying Speed",
    fact: "Some duck species can fly at speeds of up to 70 miles per hour!",
    icon: "💨",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DuckFacts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container py-12 min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Fascinating Duck Facts 🦆</h1>
        <p className="text-muted-foreground text-lg">
          Discover amazing facts about our feathered friends!
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {duckFacts.map((fact, index) => (
          <motion.div
            key={index}
            variants={item}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card
              className={`p-6 transition-all duration-300 transform ${
                hoveredIndex === index ? "scale-105 shadow-xl" : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{fact.icon}</span>
                <h2 className="text-xl font-semibold">{fact.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {fact.fact}
              </p>
              <div
                className={`mt-4 h-1 bg-primary/50 rounded-full transition-all duration-300 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
