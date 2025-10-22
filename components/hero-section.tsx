import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="absolute inset-0 bg-[url('/cozy-coffee-shop.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          1:16 Café de Boyacá
          <span className="block text-primary">Cada Taza Cuenta Una Historia</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Transformamos la percepción del café a través de experiencias inmersivas que combinan la calidad técnica del
          café orgánico y las sensaciones que despierta su preparación.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/menu">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Ver Nuestro Menú
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/historia">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Conoce Nuestra Historia
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
