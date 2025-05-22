"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/lib/cart-provider"
import type { Product } from "@/lib/types"
import { useToast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  product: Product
  quantity?: number
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function AddToCartButton({
  product,
  quantity = 1,
  variant = "default",
  size = "default",
  className = "",
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product, quantity)

    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} إلى سلة التسوق`,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 1500)
  }

  return (
    <Button
      onClick={handleAddToCart}
      variant={variant}
      size={size}
      className={`w-full ${className}`}
      disabled={isAdding}
    >
      {isAdding ? (
        <>
          <Check className="h-4 w-4 ml-2" />
          تمت الإضافة
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 ml-2" />
          أضف إلى السلة
        </>
      )}
    </Button>
  )
}
