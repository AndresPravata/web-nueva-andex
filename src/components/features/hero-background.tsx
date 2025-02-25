import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision";
import { FlipWords } from "../ui/flip-words";
import { TextGenerateEffectDemo } from "./text1";

export function FlipWordsDemo() {
  const words = [
    "inteligencia",
    "soluciones",
    "tecnología",
    "innovación",
    "ingeniería",
  ];

  return (
    <div className="min-h-screen flex flex-col px-4" id="hero">
      <div className="flex-1 flex flex-col justify-center w-full mx-auto  md:px-16 lg:px-56">
        <div className="max-w-8xl">
          <div className="text-5xl md:text-7xl font-normal text-white">
            En Andextech brindamos <FlipWords words={words} /> <br />
            que transforma tu negocio.
          </div>

          <div className="mt-8">
            <TextGenerateEffectDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundBeamsWithCollision className=" min-h-screen">
      <div className="absolute z-10 inset-0 flex items-center pointer-events-none">
        <FlipWordsDemo />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
