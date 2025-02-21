"use client";

import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <Image
          src="/logo-andextech.png"
          alt="Andex Tech Logo"
          width={150}
          height={50}
          className="dark:brightness-100"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Andex Tech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
} 