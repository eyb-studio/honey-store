"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ProductGallery } from "@/components/product-gallery";
import AddToCartButton from "@/components/add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { CustomQuantitySelector } from "@/components/custom-quantity-selector";
import { useEffect } from "react";


import type { Product } from "@/lib/types";
import { Markdown } from "@/components/markdown";

interface ProductPageProps {
  product: Product;
}

export default  function ProductPageClient({ product }: ProductPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!product) {
    notFound();
  }

  const discountPercentage = product.discountedPrice
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <div className="container px-4 py-8">
      <nav className="flex mb-6 text-sm text-muted-foreground">
        <ol className="flex items-center space-x-2 rtl:space-x-reverse">
          <li>
            <Link href="/" className="hover:text-foreground">
              الرئيسية
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronLeft className="h-4 w-4 mx-1" />
            <Link href="/#products" className="hover:text-foreground">
              المنتجات
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronLeft className="h-4 w-4 mx-1" />
            <span className="font-medium text-foreground">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="relative grid md:grid-cols-2 gap-8">
        <div>
        <ProductGallery images={product.images} productName={product.name} />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2">
              {product.discountedPrice ? (
                <>
                  <span className="text-3xl font-bold text-primary">
                    {product.discountedPrice} د.إ
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {product.price} د.إ
                  </span>
                  <Badge className="bg-red-500 hover:bg-red-600">
                    خصم {discountPercentage}%
                  </Badge>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary">
                  {product.price} د.إ
                </span>
              )}
            </div>
          </div>

                    <div className="space-y-4">
            <h3 className="text-lg font-semibold">الكمية</h3>
            <CustomQuantitySelector initialQuantity={1} onChange={() => {}} />
          </div>

          <div className="sticky md:relative w-full bottom-0 left-0 right-0 bg-background pb-4 md:p-0 pt-4 z-10">
            <AddToCartButton
              product={product}
              size="lg"
              className="w-full md:w-auto"
            />
          </div>

          <div className="prose max-w-none ">
            <Markdown>{product.description}</Markdown>
          </div>

          <div className="md:hidden">
            <AddToCartButton
                product={product}
                size="lg"
                className="w-full md:w-auto"
                />
          </div>

          <div className="border-t pt-6 mt-8">
            <h3 className="text-lg font-semibold mb-4">معلومات إضافية</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">الوزن:</span>
                <span>{product.weight} جرام</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">بلد المنشأ:</span>
                <span>{product.originCountry}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* <section className="mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-6">منتجات مشابهة</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {products
            .filter(
              (p) => p.id !== product.id && p.category === product.category
            )
            .slice(0, 4)
            .map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </section> */}
    </div>
  );
}
