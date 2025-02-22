import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Visualizá las métricas más importantes donde quieras. Elegí el período de tiempo en que verás ventas totales, ganancia neta, y un resumen anual de ventas.",
      name: "Reporte de ventas",
      designation: "Trazabilizá tus ventas",
      src: "/reporte.png",
    },
    {
      quote:
        "Con el tiempo la IA aprende mas de tu negocio por lo que será mas inteligente a tu medida, brindando asesoramiento y sugerencias.",
      name: "Asitente IA",
      designation: "Un experto en la gestion de tu negocio",
      src: "/asistente.png",
    },
    {
      quote:
        "Gestioná el stock de cada producto. Actualiza costos, margen de ganancia y precio automatizados. Adminístralo de donde quieras y en donde quieras.",
      name: "Gestión de productos",
      designation: "Administrá los productos y su stock",
      src: "/productos.png",
    },
    {
      quote:
        "Podrás visualizar cada venta que realizó cada vendedor por sucursal. Cada venta que se realiza en los puntos de venta se van registrando automaticamente..",
      name: "Historial de ventas",
      designation: "LLeva el registro en tiempo real",
      src: "/historial.png",
    },
    {
      quote:
        "Facil y rapido de usar, podes registrar ventas, cierre de caja, metodos de pago, y maás. Todo desde un solo lugar.",
      name: "Punto de venta",
      designation: "Intuitivo y sencillo",
      src: "/punto.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
