"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/5492604017239",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/andex.tech/",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:info@andex.tech",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-[35rem] w-full">
      <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
      <FloatingDock items={links} />
      
      <div className="mt-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <IconMapPin className="w-6 h-6 text-neutral-500" />
          <h3 className="text-xl font-semibold">Visita nuestra oficina</h3>
        </div>
        <p className="text-lg">Parque Científico Tecnológico FCAI UNCuyo</p>
        <p className="text-neutral-500 italic">Luis Tirasso 742, M5602IBN San Rafael, Mendoza</p>
      </div>
    </div>
  );
}

export function ContactDemo() {
  return (
    <div className="w-full py-12">
      <h2 className="text-3xl font-bold text-center">Contacto</h2>
      {/* Aquí irá el contenido del formulario de contacto */}
    </div>
  );
}
