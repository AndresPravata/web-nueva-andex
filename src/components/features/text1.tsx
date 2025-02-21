"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Combinamos innovación en hardware, software e IA para crear tecnologías que optimizan la operación de comercios, transforman la experiencia del cliente y generan crecimiento sostenible.`;

export function TextGenerateEffectDemo() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <TextGenerateEffect words={words} />
    </div>
  );
}


