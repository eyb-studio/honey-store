import { db } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import type { Product, Slide } from '@/lib/types';

export async function getProducts(): Promise<Product[]> {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Product));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  const productRef = doc(db, 'products', id);
  const productSnap = await getDoc(productRef);
  
  if (!productSnap.exists()) {
    return null;
  }

  return {
    id: productSnap.id,
    ...productSnap.data()
  } as Product;
}

export async function getSlides(): Promise<Slide[]> {
  try {
    const slidesRef = collection(db, 'slides');
    const slidesSnap = await getDocs(slidesRef)
    return slidesSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Slide))
  } catch (error) {
     console.error('Error fetching slides:', error);
    throw new Error('Failed to fetch slides');
  }
}