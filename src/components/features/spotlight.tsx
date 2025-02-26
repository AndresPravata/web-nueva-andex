import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[45vh] md:h-screen w-screen rounded-none flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 -left-40 md:-left-20 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
          Crecé con datos <br /> inteligentes.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Aprovechá las recomendaciones basadas en IA para tomar decisiones
          estratégicas y maximizar tus ganancias.
        </p>
      </div>
    </div>
  );
}
