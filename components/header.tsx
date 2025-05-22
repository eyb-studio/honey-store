"use client";

import Link from "next/link";
import { ShoppingCart, AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-provider";
import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const { cart } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  }, [cart]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <span className="text-xl font-bold text-primary">عسل الطبيعة</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/#products"
              className="text-sm font-medium transition-colors"
            >
              المنتجات
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors"
            >
              اتصل بنا
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <AlignRight className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background"
            >
              <nav className="flex flex-col gap-6 mt-10">
                <Link
                  href="/"
                  className="text-base font-medium transition-colors py-2 mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  الرئيسية
                </Link>
                <Link
                  href="/#products"
                  className="text-base font-medium transition-colors py-2 mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  المنتجات
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium transition-colors py-2 mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  من نحن
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-medium transition-colors py-2 mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  اتصل بنا
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
