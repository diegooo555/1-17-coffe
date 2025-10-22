import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Coffee, Heart, Award, Target, Eye, Sparkles } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Acerca de 1:16</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cada taza cuenta una historia. Desde 2025 de Boyacá.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img src="/cozy-coffee-shop.png" alt="Interior de 1:16 Café" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Nuestra Misión</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformamos la percepción que tienen las personas del café a través de experiencias inmersivas que
              combinen la calidad técnica del café orgánico y las sensaciones que despierta su preparación, reconectando
              a las personas con el patrimonio cafetero.
            </p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Nuestra Visión</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Para 2028, ser referentes regionales en la exaltación del café, habiendo creado una comunidad de personas
              que conozcan y valoren el café de especialidad, logrando a su vez, que se visibilice el trabajo de todos
              los actores en la cadena productiva. Además, queremos ser el modelo a seguir en trabajo sostenible,
              logrando prácticas de responsabilidad social y economía circular en todos nuestros procesos.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Calidad Total</h3>
                <p className="text-muted-foreground">
                  Será un factor fundamental lograr estandarizar productos y un servicio de calidad, que motive a los
                  clientes a preferirnos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Mejora Continua</h3>
                <p className="text-muted-foreground">
                  Enfocarnos en estar constantemente innovando en procesos que promuevan la competitividad del sector.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Coffee className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Sostenibilidad</h3>
                <p className="text-muted-foreground">
                  Lograr evitar al máximo los desperdicios, que se aproveche todo aquello que se pueda y contamine lo
                  menos posible será una prioridad.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Hospitalidad</h3>
                <p className="text-muted-foreground">
                  Brindar a nuestros clientes un espacio integral donde puedan desarrollar todo aquello que tengan en
                  mente, desde una reunión de trabajo hasta alguna fecha especial.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Autenticidad</h3>
                <p className="text-muted-foreground">
                  Darle a los espacios y productos un toque de originalidad que produzca recuerdos en nuestros clientes
                  a través de la atención al detalle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">¿De dónde proviene su café?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nuestro café proviene directamente de caficultores locales de Boyacá, Colombia. Trabajamos con
                  productores que cultivan café orgánico de especialidad, garantizando la mejor calidad y apoyando la
                  economía local.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">¿Puedo comprar productos en línea?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, puedes realizar tu pedido a través de nuestra página web o contactarnos directamente por WhatsApp
                  al 3102349853 para coordinar tu compra.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">¿Realizan envíos a todo el país?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Actualmente realizamos envíos dentro de la región de Boyacá. Para envíos a otras ciudades, contáctanos
                  y evaluaremos tu solicitud.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  ¿Cómo puedo participar en los talleres o catas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Puedes inscribirte a nuestros eventos a través de la sección de Eventos en nuestra página web, o
                  contactarnos directamente por WhatsApp al 3102349853.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
