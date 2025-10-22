import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCarousel } from "@/components/product-carousel"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

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
