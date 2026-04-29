import type { Product, Slide, ImageType } from '@/lib/types';

const makeImage = (url: string, name: string): ImageType => ({
  type: 'image',
  name,
  downloadURL: url,
  lastModifiedTS: 0,
  ref: url,
});

const products: Product[] = [
  {
    id: '1',
    name: 'عسل السدر الجبلي',
    description:
      'عسل السدر الجبلي الفاخر، مستخرج من رحيق أزهار شجرة السدر البرية في المرتفعات الجبلية. يتميز بلونه الذهبي الداكن وطعمه الغني ورائحته المميزة. معروف بفوائده الصحية العديدة وقيمته الغذائية العالية.',
    price: 600,
    discountedPrice: 480,
    images: [makeImage('/1.png', 'عسل السدر الجبلي')],
    isOffer: true,
    weight: 500,
    originCountry: 'اليمن',
  },
  {
    id: '2',
    name: 'عسل الزهور البرية',
    description:
      'عسل طبيعي 100% مستخرج من رحيق الزهور البرية المتنوعة. يتميز بطعمه المتوازن ولونه الذهبي الفاتح. غني بمضادات الأكسدة والفيتامينات الطبيعية.',
    price: 340,
    images: [makeImage('/2.png', 'عسل الزهور البرية')],
    isOffer: false,
    weight: 500,
    originCountry: 'الإمارات',
  },
  {
    id: '3',
    name: 'عسل الأكاسيا',
    description:
      'عسل الأكاسيا النقي، يتميز بلونه الذهبي الفاتح وطعمه الناعم الحلو. مثالي لمحبي العسل الخفيف ويحافظ على قوامه السائل لفترة طويلة. مناسب لجميع أفراد العائلة.',
    price: 420,
    discountedPrice: 360,
    images: [makeImage('/3.png', 'عسل الأكاسيا')],
    isOffer: true,
    weight: 500,
    originCountry: 'تركيا',
  },
  {
    id: '4',
    name: 'عسل المانوكا',
    description:
      'عسل المانوكا الطبيعي، يعتبر من أجود أنواع العسل في العالم. مستخرج من رحيق شجرة المانوكا. يتميز بخصائصه العلاجية الفريدة وفوائده الصحية المتعددة.',
    price: 690,
    images: [makeImage('/4.jpg', 'عسل المانوكا')],
    isOffer: false,
    weight: 500,
    originCountry: 'نيوزيلندا',
  },
];

const slides: Slide[] = [
  {
    id: 'slide-1',
    title: 'عسل طبيعي 100%',
    description: 'اكتشف مجموعتنا المميزة من أجود أنواع العسل الطبيعي',
    image: [makeImage('/1.png', 'عسل طبيعي')],
  },
  {
    id: 'slide-2',
    title: 'عروض حصرية',
    description: 'استمتع بأفضل العروض على منتجاتنا المختارة بعناية',
    image: [makeImage('/2.png', 'عروض حصرية')],
  },
  {
    id: 'slide-3',
    title: 'جودة عالية وثقة',
    description: 'منتجات معتمدة من مناحل موثوقة بدون أي إضافات أو مواد حافظة',
    image: [makeImage('/3.png', 'جودة عالية')],
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) ?? null;
}

export async function getSlides(): Promise<Slide[]> {
  return slides;
}
