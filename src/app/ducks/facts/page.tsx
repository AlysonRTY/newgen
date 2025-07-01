"use client";

import { Card } from "@/components/ui/card";

const duckFacts = [
  {
    title: "Swimming Efficiency",
    fact: "Ducks have waterproof feathers thanks to an oil gland that helps them stay buoyant and dry while swimming.",
  },
  {
    title: "360° Vision",
    fact: "Ducks can see in nearly all directions at once and can see both near and far simultaneously.",
  },
  {
    title: "Sleep Adaptation",
    fact: "Ducks can sleep with one half of their brain while the other half stays alert for danger.",
  },
  {
    title: "Temperature Control",
    fact: "Duck feet have a special blood vessel system that helps them swim in cold water without losing too much body heat.",
  },
  {
    title: "Communication",
    fact: "Ducks have over 10 different vocal sounds they use to communicate with each other.",
  },
  {
    title: "Flying Speed",
    fact: "Some duck species can fly at speeds of up to 70 miles per hour!",
  },
];

export default function DuckFacts() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Fascinating Duck Facts 🦆</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {duckFacts.map((fact, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">{fact.title}</h2>
            <p className="text-muted-foreground">{fact.fact}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
