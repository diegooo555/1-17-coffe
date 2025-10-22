import { MapPin, Phone, Instagram, Music } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo-116.png" alt="1:16 Café" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold text-xl">1:16</span>
            </div>
            <p className="text-sidebar-foreground/80 mb-4 text-pretty">
              Café de especialidad desde 2025 de Boyacá. Cada taza cuenta una historia. Transformamos la percepción del
              café a través de experiencias inmersivas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sidebar-foreground/60 hover:text-sidebar-primary transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#inicio" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <Link href="/menu" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Café
                </Link>
              </li>
              <li>
                <Link
                  href="/historia"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80 text-sm">Boyacá, Colombia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sidebar-primary" />
                <a href="tel:3102349853" className="text-sidebar-foreground/80 text-sm hover:text-sidebar-primary">
                  310 234 9853
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Horarios</h4>
              <p className="text-sidebar-foreground/80 text-sm">
                Lun - Sáb: 8:00 AM - 8:00 PM
                <br />
                Domingo: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sidebar-foreground/60 text-sm">
            © 2025 1:16 Café. Todos los derechos reservados. Desde Boyacá con amor.
          </p>
        </div>
      </div>
    </footer>
  )
}
