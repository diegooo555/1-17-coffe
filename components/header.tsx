"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-116.png" alt="1:16 Café" width={50} height={50} className="h-12 w-12" />
            <span className="font-bold text-xl text-foreground">1:16</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <Link href="/menu" className="text-foreground hover:text-primary transition-colors">
              Café
            </Link>
            <Link href="/historia" className="text-foreground hover:text-primary transition-colors">
              Acerca de
            </Link>
            <Link href="/eventos" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/pedido">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Ordenar Ahora</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <Link href="/menu" className="text-foreground hover:text-primary transition-colors">
                Café
              </Link>
              <Link href="/historia" className="text-foreground hover:text-primary transition-colors">
                Acerca de
              </Link>
              <Link href="/eventos" className="text-foreground hover:text-primary transition-colors">
                Eventos
              </Link>
              <Link href="/contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
              <Link href="/pedido">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                  Ordenar Ahora
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
