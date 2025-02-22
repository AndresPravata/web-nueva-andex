"use client";

import React from "react";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export function Footer() {
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
    <footer
      className="w-full py-8 border-t border-gray-200 dark:border-neutral-800 mt-20"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <p className="text-2xl text-neutral-500 dark:text-neutral-100 font-bold">
          Contactanos
        </p>
        <FloatingDock items={links} />

        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo-andextech.png"
            alt="Andex Tech Logo"
            width={150}
            height={50}
            className="dark:brightness-100"
          />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Andex Tech. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
