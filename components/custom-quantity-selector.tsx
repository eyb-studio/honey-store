"use client"

import { useState, useEffect } from "react"
import { Minus, Plus } from "lucide-react"

interface CustomQuantitySelectorProps {
  initialQuantity?: number
  min?: number
  max?: number
  onChange: (quantity: number) => void
}

export function CustomQuantitySelector({
  initialQuantity = 1,
  min = 1,
  max = 99,
  onChange,
}: CustomQuantitySelectorProps) {
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
    <div className="quantity-selector">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        className="quantity-selector-button"
        aria-label="تقليل الكمية"
      >
        <Minus className="h-4 w-4" />
      </button>

      <div className="quantity-selector-value">{quantity}</div>

      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        className="quantity-selector-button"
        aria-label="زيادة الكمية"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
