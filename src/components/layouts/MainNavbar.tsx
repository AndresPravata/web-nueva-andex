"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (id.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-4xl h-16 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border border-gray-200 dark:border-neutral-800 rounded-3xl">
      <div className="h-full flex items-center justify-between px-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/isologo-andextech.png"
            alt="Andex Tech"
            width={80}
            height={40}
            className="dark:brightness-100"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
          >
            Inicio
          </Link>
          <Link
            href="/paltasys"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
          >
            Palta Sys
          </Link>
          <Link
            href="/totems"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
          >
            Totems
          </Link>
          <Link
            href="#sobrenosotros"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
            onClick={(e) => handleSmoothScroll(e, "#sobrenosotros")}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
            onClick={(e) => handleSmoothScroll(e, "#contacto")}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
