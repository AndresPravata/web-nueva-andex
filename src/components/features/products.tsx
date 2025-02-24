"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Sistema de ventas",
    description:
      "Gestiona tu negocio de manera eficiente con nuestro sistema de ventas inteligente. Incluye control de stock, reportes en tiempo real y análisis predictivo.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product1.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Totem Turnero",
    description:
      "Optimiza la gestión de turnos y reduce los tiempos de espera. Ideal para bancos, clínicas y oficinas públicas.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product2.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Totem Gastronómico",
    description:
      "Permite a los clientes gestionar su propia compra y pago. Ideal para restaurantes y bares.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product3.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Verdulería Autogestionable",
    description:
      "Permite a los clientes gestionar su propia compra y pago. Ideal para verdulerías y tiendas de alimentación.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product4.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
export function Products() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
