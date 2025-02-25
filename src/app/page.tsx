import ContainerFluid from "@/components/ui/ContainerFluid";
import { BackgroundGradientAnimationDemo } from "@/components/features/hero-background";
import { TextGenerateEffectDemo } from "@/components/features/text1";
import { CarouselDemo } from "@/components/features/carrusel-products";
import { CoverDemo } from "@/components/features/title-cover";
import { InfiniteMovingCardsDemo } from "@/components/features/testimonios";
import { TimelineDemo } from "@/components/features/sobrenosotros";
import { Footer } from "@/components/features/footer";
import { Products } from "@/components/features/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BackgroundGradientAnimationDemo />
      {/* <TextGenerateEffectDemo></TextGenerateEffectDemo> */}
      <CoverDemo></CoverDemo>
      <Products></Products>
      <TimelineDemo></TimelineDemo>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      <Footer />
    </main>
  );
}
