"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-provider";
import { CustomQuantitySelector } from "@/components/custom-quantity-selector";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import CartLoading from "./loading";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <CartLoading />
    );
  }

  const subtotal = cart.reduce((total, item) => {
    const price = item.product.discountedPrice || item.product.price;
    return total + price * item.quantity;
  }, 0);

  const formatWhatsAppMessage = () => {
    let message = "مرحباً، أرغب في طلب المنتجات التالية:\n\n";

    cart.forEach((item) => {
      const price = item.product.discountedPrice || item.product.price;
      message += `* ${item.product.name} - الكمية: ${item.quantity} - السعر: ${price} د.إ\n`;
    });

    message += `\nالإجمالي: ${subtotal} د.إ`;

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const whatsappNumber = "971502597949"; // Replace with your actual WhatsApp number
    const message = formatWhatsAppMessage();
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="container py-12 min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">سلة التسوق فارغة</h1>
        <p className="text-muted-foreground mb-6">
          لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
        </p>
        <Link href="/#products">
          <Button>تصفح المنتجات</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">
                المنتجات ({cart.length})
              </h2>
            </div>

            <ul className="divide-y">
              {cart.map((item) => {
                const price =
                  item.product.discountedPrice || item.product.price;
                return (
                  <li
                    key={item.product.id}
                    className="p-6 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.images[0].downloadURL || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <div className="font-semibold text-primary">
                          {price} د.إ
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="w-fit">
                          <CustomQuantitySelector
                            initialQuantity={item.quantity}
                            onChange={(quantity) =>
                              updateQuantity(item.product.id, quantity)
                            }
                          />
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 self-start"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4 ml-2" />
                          إزالة
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="p-6 border-t">
              <Button variant="outline" size="sm" onClick={clearCart}>
                <Trash2 className="h-4 w-4 ml-2" />
                إفراغ السلة
              </Button>
            </div>
          </Card>
        </div>

        <div>
          <Card className=" sticky top-20">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">ملخص الطلب</h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">المجموع الفرعي:</span>
                <span>{subtotal} د.إ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">الشحن:</span>
                <span>مجاني</span>
              </div>
              <div className="pt-4 border-t flex justify-between font-semibold text-lg">
                <span>الإجمالي:</span>
                <span>{subtotal} د.إ</span>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Alert className="mb-4">
                <AlertCircle className="h-4 w-4 ml-2" />
                <AlertDescription>
                  سيتم التواصل معك عبر واتساب لإتمام عملية الطلب
                </AlertDescription>
              </Alert>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                onClick={handleCheckout}
              >
                اطلب الآن عبر واتساب
              </Button>

              {/* <div className="mt-4 text-center text-sm text-muted-foreground">
                بالضغط على "اطلب الآن" فإنك توافق على شروط الخدمة وسياسة
                الخصوصية
              </div> */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
