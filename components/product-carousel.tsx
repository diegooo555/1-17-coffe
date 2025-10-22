"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Espresso Clásico",
    description: "Intenso y aromático, preparado con granos 100% arábica de origen colombiano.",
    price: "$3.50",
    image: "/espresso-coffee-cup-on-wooden-table.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Cappuccino Artesanal",
    description: "Cremoso cappuccino con arte latte y espuma de leche perfectamente texturizada.",
    price: "$4.25",
    image: "/cappuccino-with-latte-art-heart-shape.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Latte Vainilla",
    description: "Suave latte con jarabe de vainilla natural y un toque de canela.",
    price: "$4.75",
    image: "/vanilla-latte-with-cinnamon-powder.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Cold Brew Especial",
    description: "Café frío de extracción lenta, servido con hielo y notas dulces naturales.",
    price: "$4.00",
    image: "/cold-brew-coffee-glass-with-ice.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Mocha Chocolate",
    description: "Deliciosa combinación de espresso, chocolate belga y crema batida.",
    price: "$5.00",
    image: "/mocha-coffee-with-whipped-cream-and-chocolate.jpg",
    rating: 4.9,
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="productos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nuestros Productos Estrella
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada bebida es preparada con dedicación y los mejores ingredientes para ofrecerte una experiencia única en
            cada sorbo.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 bg-card border-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-80">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-l-lg"
                          />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "text-accent fill-current"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-muted-foreground">{product.rating}</span>
                          </div>

                          <h3 className="text-2xl font-bold text-card-foreground mb-3">{product.name}</h3>

                          <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>

                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-primary">{product.price}</span>
                            <Link href="/pedido">
                              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Ordenar Ahora
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
