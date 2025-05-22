import { HomeSlider } from "@/components/home-slider";
import { ProductCard } from "@/components/product-card";
import { getProducts, getSlides } from "@/services/products";

export default async function Home() {

  const products = await getProducts()
  const slides = await getSlides()

  if(!products) return <div>no data</div>

  return (
    <div className="flex flex-col min-h-screen">
      <HomeSlider slides={slides} />

      <section id="products" className="container px-4 py-12">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold mb-4">منتجاتنا المميزة</h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            نقدم لكم مجموعة متنوعة من أجود أنواع العسل الطبيعي المستخرج من مناحل
            موثوقة، بدون إضافات أو مواد حافظة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                لماذا تختار عسل الطبيعة؟
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 mt-1">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">جودة عالية</h3>
                    <p className="text-muted-foreground">
                      نختار بعناية أفضل أنواع العسل من مناحل موثوقة ونخضعها
                      لاختبارات جودة صارمة.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 mt-1">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">طبيعي 100%</h3>
                    <p className="text-muted-foreground">
                      منتجاتنا خالية تماماً من المواد الحافظة والإضافات
                      الصناعية، نقدم العسل كما أنتجته النحل.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 mt-1">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">تنوع المنتجات</h3>
                    <p className="text-muted-foreground">
                      نوفر تشكيلة واسعة من أنواع العسل المختلفة لتناسب جميع
                      الأذواق والاحتياجات.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center ml-2 mt-1">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">توصيل سريع</h3>
                    <p className="text-muted-foreground">
                      نضمن وصول منتجاتنا إليك في أسرع وقت ممكن وبأفضل حالة.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
