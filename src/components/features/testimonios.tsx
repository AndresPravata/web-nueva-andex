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
      "Su sistema de gestión ha mejorado significativamente la eficiencia de nuestro negocio.",
    name: "María González",
    title: "Gerente Comercial",
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
