"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import AddToCartButton from "./add-to-cart-button";
import { Card, CardFooter } from "./ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, discountedPrice, images, isOffer } = product;

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-xl">
      <Link
        href={`/product/${id}`}
        className="block"
        prefetch={false}
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={images[0].downloadURL || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {isOffer && (
            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
              عرض خاص
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{name}</h3>
          <div className="flex items-center gap-2">
            {discountedPrice ? (
              <>
                <span className="font-bold text-lg text-primary">
                  {discountedPrice} د.إ
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {price} د.إ
                </span>
              </>
            ) : (
              <span className="font-bold text-lg text-primary">
                {price} د.إ
              </span>
            )}
          </div>
        </div>
      </Link>
      <CardFooter>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
