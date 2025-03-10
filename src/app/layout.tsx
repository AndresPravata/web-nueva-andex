import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import MainNavbar from "@/components/layouts/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andextech",
  description: "Brindamos soluciones tecnológicas para tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background min-h-screen`}>
        <Providers>
          <header className="h-[65px] z-50 absolute w-full">
            <MainNavbar />
          </header>
          <main className="overflow-x-hidden">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
