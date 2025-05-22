"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface QuantitySelectorProps {
  initialQuantity?: number
  min?: number
  max?: number
  onChange: (quantity: number) => void
}

export function QuantitySelector({ initialQuantity = 1, min = 1, max = 99, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  useEffect(() => {
    setQuantity(initialQuantity)
  }, [initialQuantity])

  const increment = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1
      setQuantity(newQuantity)
      onChange(newQuantity)
    }
  }

  const decrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onChange(newQuantity)
    }
  }

  return (
    <div className="flex items-center border rounded-md w-fit">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={decrement}
        disabled={quantity <= min}
        className="h-10 w-10 rounded-r-md rounded-l-none hover:bg-muted hover:rounded-r-md hover:rounded-l-none"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <div className="w-12 text-center font-medium">{quantity}</div>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={increment}
        disabled={quantity >= max}
        className="h-10 w-10 rounded-l-md rounded-r-none hover:bg-muted hover:rounded-l-md hover:rounded-r-none"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
