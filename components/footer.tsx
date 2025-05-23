import Link from "next/link"

export default function Footer() {
  return (
    <footer id="footer" className="border-t bg-muted/40">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">عسل الطبيعة</h3>
            <p className="text-muted-foreground">
              نقدم أجود أنواع العسل الطبيعي المستخرج من مناحل محلية موثوقة، بدون إضافات أو مواد حافظة.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-muted-foreground hover:text-foreground transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <address className="not-italic text-muted-foreground">
              <p>دبي، الإمارات العربية المتحدة</p>
              <p className="mt-2">البريد الإلكتروني: healthyqualityplus@gmail.com</p>
              <p className="mt-2">الهاتف: <span dir="ltr" className="inline-block">+971 55 155 5546</span></p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} عسل الطبيعة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
