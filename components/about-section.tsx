import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Award, Users } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Granos Premium",
    description:
      "Seleccionamos cuidadosamente los mejores granos de café de origen único para garantizar calidad excepcional.",
  },
  {
    icon: Heart,
    title: "Preparado con Amor",
    description: "Cada taza es preparada por nuestros baristas expertos con pasión y dedicación por el arte del café.",
  },
  {
    icon: Award,
    title: "Calidad Certificada",
    description: "Nuestro café ha sido reconocido por su excelencia y sabor único en múltiples competencias.",
  },
  {
    icon: Users,
    title: "Comunidad Cafetera",
    description:
      "Más que una cafetería, somos un punto de encuentro para los amantes del buen café y las buenas conversaciones.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Por Qué Elegir Café Artesano?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nos dedicamos a crear experiencias únicas a través del café de la más alta calidad, combinando tradición
            artesanal con técnicas modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">Nuestra Historia</h3>
            <p className="text-muted-foreground mb-4 text-pretty">
              Fundado en 2018 por un grupo de apasionados del café, Café Artesano nació con la misión de llevar la
              experiencia del café de especialidad a nuestra comunidad. Comenzamos como un pequeño tostador local y
              hemos crecido hasta convertirnos en el destino favorito para los amantes del café auténtico.
            </p>
            <p className="text-muted-foreground text-pretty">
              Trabajamos directamente con productores de café de América Latina, asegurando prácticas sostenibles y
              comercio justo. Cada grano cuenta una historia, y nosotros nos encargamos de que esa historia llegue
              perfectamente a tu taza.
            </p>
          </div>
          <div className="relative">
            <img
              src="/coffee-roasting-process-artisanal-coffee-beans.jpg"
              alt="Proceso de tostado artesanal"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
