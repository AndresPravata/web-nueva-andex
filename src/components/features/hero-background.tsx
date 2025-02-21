import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["inteligencia","soluciones", "tecnología", "innovación", "ingeniería"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-8xl mx-auto font-normal text-white">
        En Andextech brindamos{" "}
        <FlipWords words={words} /> <br />
        que transforme tu negocio.
      </div>
    </div>
  );
}

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundBeamsWithCollision className="mt-[-65px] h-[45rem]">
      <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none">
        <FlipWordsDemo />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
