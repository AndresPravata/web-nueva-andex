"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Conocé al totem que te hará destacar.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ description }: { description: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Nuestros Totems los realizamos a pedido de cada cliente.
        </span>{" "}
        {description}
      </p>
      <Image
        src="/logo-andextech.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Gestión de esperas",
    title: "Totem turnero.",
    src: "/totem1.jpg",
    content: <DummyContent description="Sistema inteligente que optimiza la gestión de turnos y reduce los tiempos de espera. Ideal para bancos, clínicas y oficinas públicas." />,
  },
  {
    category: "Gestion de pedidos",
    title: "Totem Gastronomico.",
    src: "/totem2.jpg",
    content: <DummyContent description="Agiliza el proceso de pedidos en restaurantes y locales gastronómicos. Incluye sistema de pagos integrado y gestión de cocina." />,
  },
  {
    category: "Verdulería Autogestionable",
    title: "Totem Verdulería.",
    src: "/totem3.jpg",
    content: <DummyContent description="Revoluciona la experiencia de compra en verdulerías con pesaje automático y sistema de pago integrado. Reduce costos operativos y mejora la eficiencia." />,
  },
  {
    category: "Publicidad 24/7",
    title: "Totem Publicitario.",
    src: "/totem4.jpg",
    content: <DummyContent description="Pantalla digital interactiva para publicidad dinámica. Gestión remota de contenido y análisis de engagement en tiempo real." />,
  },
];
