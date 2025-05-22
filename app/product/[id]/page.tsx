import type { Metadata } from "next";

import ProductPageClient from "./ProductPageClient";
import { getProduct } from "@/services/products";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id)

  if (!product) {
    return {
      title: "المنتج غير موجود",
      description: "عذراً، المنتج الذي تبحث عنه غير موجود",
    };
  }

  return {
    title: `${product.name} | عسل الطبيعة`,
    description: product.description.substring(0, 160),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    notFound();
  }
  return <ProductPageClient product={product} />;
}
