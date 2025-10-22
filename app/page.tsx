import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCarousel } from "@/components/product-carousel"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "1:17 Café de Boyacá | Cada Taza Cuenta Una Historia",
  description:
    "Transformamos la percepción del café a través de experiencias inmersivas que combinan la calidad técnica del café orgánico y las sensaciones que despierta su preparación.",
  openGraph: {
    title: "1:17 Café de Boyacá",
    description:
      "Cada taza cuenta una historia. Café orgánico y experiencias sensoriales únicas desde Boyacá.",
    url: "https://cafe-1-17.vercel.app", // cámbialo por tu dominio
    siteName: "1:17 Café de Boyacá",
    images: [
      {
        url: "https://cafe-1-17.vercel.app/logo-116.png", // imagen para compartir en redes
        width: 1200,
        height: 630,
        alt: "Café de Boyacá",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductCarousel />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
