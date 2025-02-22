"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Sistema de ventas",
      button: "Conocer más",
      src: "/product1.png",
    },
    {
      title: "Totem Turnero",
      button: "Conocer más",
      src: "/product2.png",
    },
    {
      title: "Verdulería Autogestionable",
      button: "Conocer más",
      src: "/product4.png",
    },
    {
      title: "Totem Publicitario",
      button: "Conocer más",
      src: "/product3.png",
    },
    
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
