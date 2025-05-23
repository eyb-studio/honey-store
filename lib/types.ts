export interface Product {
  id: string
  name: string
  description: string
  price: number
  discountedPrice?: number
  images: ImageType[]
  isOffer: boolean
  weight: number
  originCountry: string
}

export interface SliderItem {
  id: string
  title: string
  description: string
  image: ImageType
  link: string
}

export interface ImageType {
    type: string,
    name: string,
    downloadURL: string,
    lastModifiedTS: number,
    ref: string
}

export interface Slide {
  id: string,
  title: string,
  description: string,
  image: ImageType[]
}

