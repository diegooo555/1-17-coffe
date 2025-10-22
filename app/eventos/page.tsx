import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Users, Sparkles } from "lucide-react"
import Link from "next/link"

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Eventos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Un espacio para compartir actividades especiales y conectar con la cultura del café.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Nuestros Eventos</h2>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">Talleres de Barismo</h3>
                      <p className="text-muted-foreground">
                        Aprende las técnicas profesionales de preparación de café, desde el espresso perfecto hasta el
                        arte latte.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">Charlas con Caficultores</h3>
                      <p className="text-muted-foreground">
                        Conoce de primera mano las historias y procesos detrás de cada grano de café que disfrutas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">Lanzamientos de Productos</h3>
                      <p className="text-muted-foreground">
                        Sé el primero en probar nuestras nuevas creaciones y productos especiales de temporada.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Inscríbete a un Evento</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input id="nombre" placeholder="Tu nombre" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="correo">Correo electrónico</Label>
                    <Input id="correo" type="email" placeholder="tu@email.com" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="evento">Evento de interés</Label>
                    <select
                      id="evento"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Selecciona un evento</option>
                      <option value="barismo">Taller de Barismo</option>
                      <option value="caficultores">Charla con Caficultores</option>
                      <option value="lanzamiento">Lanzamiento de Productos</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fecha">Fecha preferida</Label>
                    <Input id="fecha" type="date" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="¿Tienes alguna pregunta o comentario?"
                      className="bg-background min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar inscripción
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
