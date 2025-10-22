"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react"
import Link from "next/link"

const menuItems = [
  { id: 1, name: "Espresso Clásico", price: 3.5, category: "Caliente" },
  { id: 2, name: "Cappuccino Artesanal", price: 4.25, category: "Caliente" },
  { id: 3, name: "Latte Vainilla", price: 4.75, category: "Caliente" },
  { id: 4, name: "Cold Brew Especial", price: 4.0, category: "Frío" },
  { id: 5, name: "Mocha Chocolate", price: 5.0, category: "Especialidad" },
]

export default function PedidoPage() {
  const [cart, setCart] = useState<{ [key: number]: number }>({})
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    notes: "",
  })

  const addToCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((i) => i.id === Number.parseInt(itemId))
      return total + (item ? item.price * quantity : 0)
    }, 0)
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `¡Pedido enviado! Total: $${getCartTotal().toFixed(2)}\nNos contactaremos contigo pronto, ${customerInfo.name}`,
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Realizar Pedido</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Selecciona tus cafés favoritos y completa tu información para procesar tu pedido.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Selecciona tus productos</h2>

            <div className="grid gap-4">
              {menuItems.map((item) => (
                <Card key={item.id} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <p className="text-lg font-bold text-primary">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {cart[item.id] ? (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-semibold">{cart[item.id]}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addToCart(item.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <Button
                            onClick={() => addToCart(item.id)}
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Agregar
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary & Customer Info */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Tu Pedido ({getCartItemCount()} items)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(cart).length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No hay productos en tu carrito</p>
                ) : (
                  <>
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      const item = menuItems.find((i) => i.id === Number.parseInt(itemId))
                      if (!item) return null

                      return (
                        <div key={itemId} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              ${item.price.toFixed(2)} x {quantity}
                            </p>
                          </div>
                          <p className="font-semibold">${(item.price * quantity).toFixed(2)}</p>
                        </div>
                      )
                    })}

                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-primary">${getCartTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Customer Information */}
            {Object.entries(cart).length > 0 && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitOrder} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">Notas especiales (opcional)</Label>
                      <Textarea
                        id="notes"
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo((prev) => ({ ...prev, notes: e.target.value }))}
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={!customerInfo.name || !customerInfo.phone}
                    >
                      Confirmar Pedido - ${getCartTotal().toFixed(2)}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
