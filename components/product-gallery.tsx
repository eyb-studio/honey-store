"use client"

import { useState } from "react"
import Image from "next/image"

import type { ImageType } from "@/lib/types"

interface ProductGalleryProps {
  images: ImageType[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="grid gap-4">
      <div className="relative aspect-square rounded-lg overflow-hidden border">
        <Image src={mainImage.downloadURL || "/placeholder.svg"} alt={productName} fill className="object-cover" />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 
              ${mainImage === image ? "border-primary" : "border-transparent"}`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image.downloadURL || "/placeholder.svg"}
              alt={`${productName} - صورة ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
