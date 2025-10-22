import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Leaf } from "lucide-react"
import Link from "next/link"

const menuCategories = [
  {
    name: "Café en Grano y Molido",
    description:
      "Nuestro café de especialidad se prepara con granos seleccionados de caficultores locales. Cada bebida es una experiencia única que celebra el origen, el sabor y la sostenibilidad.",
    items: [
      {
        name: "Café Tostado en Grano",
        description: "Granos 100% arábica de origen Boyacá, tostado artesanal",
        sizes: "250 g / 500 g",
        popular: true,
      },
      {
        name: "Café Molido",
        description: "Disponible en molienda para filtro o espresso",
        sizes: "250 g / 500 g",
        popular: true,
      },
      {
        name: "Café Instantáneo Orgánico",
        description: "Café orgánico liofilizado, práctico y delicioso",
        sizes: "100 g / 200 g",
        popular: false,
      },
    ],
  },
  {
    name: "Cafés Saborizados",
    items: [
      {
        name: "Café Avellana",
        description: "Suave aroma a avellana tostada con notas dulces",
        sizes: "250 g",
        popular: true,
      },
      {
        name: "Café Vainilla",
        description: "Delicado sabor a vainilla natural",
        sizes: "250 g",
        popular: false,
      },
      {
        name: "Café Chocolate",
        description: "Intenso sabor a chocolate con cacao colombiano",
        sizes: "250 g",
        popular: false,
      },
    ],
  },
  {
    name: "Productos Derivados",
    description:
      "Damos una nueva vida a la borra del café creando productos naturales que cuidan tu piel, tu hogar y el planeta.",
    items: [
      {
        name: "Exfoliante Natural",
        description:
          "Exfoliante con borra de café, aloe vera, aceites y esencia de uva que limpia, hidrata y renueva la piel, dejándola suave y con un aroma agradable",
        sizes: "100 g",
        popular: true,
        eco: true,
      },
      {
        name: "Vela Aromática",
        description: "Vela artesanal elaborada con cera natural y aroma a café",
        sizes: "Unidad",
        popular: false,
        eco: true,
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Café</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Café de especialidad de Boyacá, Colombia. Cada producto cuenta una historia de tradición y calidad.
          </p>
        </div>

        <div className="space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 border-b border-border pb-2">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-semibold text-card-foreground">{item.name}</h3>
                          {item.popular && (
                            <Badge variant="secondary" className="bg-accent text-accent-foreground">
                              Popular
                            </Badge>
                          )}
                          {item.eco && (
                            <Badge variant="secondary" className="bg-primary/20 text-primary">
                              <Leaf className="h-3 w-3 mr-1" />
                              Eco
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-semibold">Presentación:</span> {item.sizes}
                      </p>

                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                        Consultar disponibilidad
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Caficultores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce las historias de quienes hacen posible cada taza. Trabajamos directamente con productores locales
              de Boyacá que cultivan café de especialidad con pasión y dedicación.
            </p>
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Conoce sus historias
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
