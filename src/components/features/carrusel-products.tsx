"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Soluciones de Hardware",
      button: "Conocer más",
      src: "/images/hardware.jpg",
    },
    {
      title: "Software Personalizado",
      button: "Conocer más",
      src: "/images/software.jpg",
    },
    {
      title: "Inteligencia Artificial",
      button: "Conocer más",
      src: "/images/ai.jpg",
    },
    {
      title: "Servicios Cloud",
      button: "Conocer más",
      src: "/images/cloud.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
