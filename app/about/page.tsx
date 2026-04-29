import { Card } from "@/components/ui/card"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "من نحن | عسل الطبيعة",
  description: "تعرف على قصة عسل الطبيعة ورؤيتنا",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-primary text-center">من نحن</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <Card className="relative h-[500px]">
            <Image
              src="/4.jpg"
              alt="عسل الطبيعة"
              fill
              className="object-cover"
              priority
            />
          </Card>

          {/* Right side - Content */}
          <div className="space-y-8">
            <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">قصتنا</h2>
              <p className="text-muted-foreground leading-relaxed text-right">
                نحن في عسل الطبيعة نؤمن بأن العسل الطبيعي هو هدية ثمينة من الطبيعة. تأسست شركتنا بهدف تقديم أجود أنواع العسل الطبيعي المستخرج من مناحل محلية موثوقة، مع الحفاظ على جودته وقيمته الغذائية.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed text-right">
                نسعى لأن نكون الوجهة الأولى للحصول على العسل الطبيعي الأصيل في المنطقة، من خلال تقديم منتجات عالية الجودة وخدمة عملاء متميزة، مع الحفاظ على أصالة وطبيعة منتجاتنا.
              </p>
            </section>

            <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-primary">قيمنا</h2>
              <ul className="space-y-4 text-right">
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted-foreground">الجودة العالية في كل ما نقدمه</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted-foreground">الشفافية في التعامل مع عملائنا</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted-foreground">الابتكار المستمر في خدماتنا</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-muted-foreground">الالتزام بتجربة عملاء متميزة</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}