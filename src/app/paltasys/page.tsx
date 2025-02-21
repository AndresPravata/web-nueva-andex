"use client";
import React from "react";
import Image from "next/image";
import { FloatingDockDemo } from "@/components/features/contact";
import { Footer } from "@/components/features/footer";
import { SpotlightPreview } from "@/components/features/spotlight";
import { HeroScrollDemo } from "@/components/features/scroll";
import { ExpandableCardDemo } from "@/components/features/pantallas-palta";

export default function PaltaSys() {
  return (
    <main className="flex min-h-screen flex-col items-center">
    <SpotlightPreview />
    <HeroScrollDemo />
    <ExpandableCardDemo />
    <FloatingDockDemo></FloatingDockDemo>
    <Footer />
  </main> );
}