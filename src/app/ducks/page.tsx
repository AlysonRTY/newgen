"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SpaceBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("particles.js loaded", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 60,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}

export default function DucksPage() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold">
              All About Ducks
            </CardTitle>
            <CardDescription className="text-center text-white/80">
              An overview of our feathered friends.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <Image
                src="/ducks.jpg"
                alt="A picture of a duck"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p>
                Ducks are amazing waterfowl found all over the world. They are
                part of the family Anatidae, which also includes swans and
                geese. Ducks are mostly aquatic birds and can be found in both
                fresh water and sea water.
              </p>
              <p>
                There are many different species of ducks, each with their own
                unique characteristics. Some of the most well-known types
                include Mallards, Pekin ducks, and Wood ducks.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/">Go back home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
