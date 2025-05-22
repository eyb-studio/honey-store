import type React from "react";
import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/lib/cart-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

const IBM_Font = IBM_Plex_Sans_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: "--font-ibm"
})

export const metadata: Metadata = {
  title: "عسل الطبيعة | منتجات العسل الطبيعي",
  description: "متجر متخصص في بيع أجود أنواع العسل الطبيعي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl"
    // `next-themes` injects an extra classname to the body element to avoid
    // visual flicker before hydration. Hence the `suppressHydrationWarning`
    // prop is necessary to avoid the React hydration mismatch warning.
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    suppressHydrationWarning
    >
      <body className={`${cairo.variable} ${IBM_Font.variable} font-sans min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
