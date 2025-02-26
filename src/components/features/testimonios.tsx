"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden my-20">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Andextech nos brindó una atención personalizada que logró adaptarse de inmediato a las particularidades de nuestra clínica. Su servicio postventa es excelente, es ágil y confiable, lo que hizo de la integración un éxito.",
    name: "Dr. Juan Ignacio Luffi",
    title: "Veterinaria Dr. Luffi",
  },
  {
    quote:
      "Trabajan con profesionalismo, responsabilidad y calidad humana, lo que se refleja en la dedicación que le ponen a cada proyecto.",
    name: "Ignacio Montoro",
    title: "Dueño de Modestan",
  },
  {
    quote:
      "Tuve el privilegio de acompañar a los fundadores de Andextech en su etapa de gestación, donde contruyeron una empresa basada en valores y profesionalismo. Andextech se distingue por su inquebrantable compromiso con la excelencia, con una mirada siempre puesta en la innovación, orientada a satisfacer las necesidades específicas de cada cliente, integrando responsabilidad y creatividad en cada proyecto.",
    name: "Juan Pablo Bustos",
    title: "Profesor de la UNCUYO",
  },
  {
    quote: "La implementación fue rápida y el soporte técnico es excelente.",
    name: "Carlos Rodríguez",
    title: "Dueño de Local",
  },
  {
    quote:
      "La solución se adaptó perfectamente a nuestras necesidades específicas.",
    name: "Laura Martínez",
    title: "Administradora",
  },
];
