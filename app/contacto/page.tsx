import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MapPin, Clock, Phone, Instagram, Music } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contáctanos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Estamos aquí para atenderte. Visítanos o escríbenos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Ubicación</h3>
                    <p className="text-muted-foreground">Boyacá, Colombia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Horario de Atención</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes a Sábado: 8:00 a.m. – 8:00 p.m.</p>
                      <p>Domingo: 9:00 a.m. – 6:00 p.m.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Teléfono y WhatsApp</h3>
                    <a href="tel:3102349853" className="text-primary hover:underline">
                      310 234 9853
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="TikTok"
                  >
                    <Music className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Envíanos un Mensaje</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" placeholder="Tu nombre" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="correo">Correo</Label>
                    <Input id="correo" type="email" placeholder="tu@email.com" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" type="tel" placeholder="310 234 5678" className="bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Escribe tu mensaje aquí..."
                      className="bg-background min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar mensaje
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
