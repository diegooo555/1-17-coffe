import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente Frecuente",
    content:
      "El mejor café de la ciudad sin duda. El ambiente es acogedor y el servicio excepcional. Mi cappuccino favorito está aquí.",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "Carlos Rodríguez",
    role: "Empresario Local",
    content:
      "Vengo aquí todas las mañanas antes del trabajo. La calidad del café es consistente y el equipo siempre me recibe con una sonrisa.",
    rating: 5,
    avatar: "/professional-man-portrait.png",
  },
  {
    name: "Ana Martínez",
    role: "Estudiante",
    content:
      "El lugar perfecto para estudiar. WiFi rápido, ambiente tranquilo y el mejor cold brew que he probado. Totalmente recomendado.",
    rating: 5,
    avatar: "/smiling-student.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Estas son algunas de sus experiencias con
            nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mr-2" />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
