"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { FeatureCarousel } from "../ui/feature-carousel";
import { cn } from "@/lib/utils";

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
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-[34px] bg-neutral-700 p-2">
        <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
          <FeatureCarousel
            title="Interactive Feature Demo"
            description="Showcase your features with smooth animations and transitions"
            // Example classes for responsive layout
            step1img1Class={cn(
              "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[8%]",
              "md:group-hover:translate-y-2"
            )}
            step1img2Class={cn(
              "pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
              "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[7%] md:left-[calc(50%+35px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step2img1Class={cn(
              "pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[7%]",
              "md:group-hover:translate-y-2"
            )}
            step2img2Class={cn(
              "pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden",
              "max-md:scale-[140%] left-[70%] top-[53%] md:top-[0%] md:left-[calc(50%+27px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step3imgClass={cn(
              "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
              "left-[5%] top-[50%] md:top-[8%] md:left-[68px]"
            )}
            step4imgClass={cn(
              "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
              "left-[5%] top-[50%] md:top-[6%] md:left-[68px]"
            )}
            // Example images
            image={{
              step1light1: "/product1.png",
              step1light2: "/product1.png",
              step2light1: "/product2.png",
              step2light2: "/product2.png",
              step3light: "/product3.png",
              step4light: "/product4.png",
              alt: "Feature demonstration",
            }}
            // Card styling
            bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
          />
        </div>
      </div>
    </div>
  );
}
