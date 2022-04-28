export interface IGrid {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface ICartProduct {
  id: string;
  data: any;
  count: number;
}

interface IImageDimension {
  width: number;
  height: number;
}

interface IImage {
  url: string;
  alt?: string;
  dimension: IImageDimension;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  tags: string[];
  images: IImage;
  stock: number;
  price: number;
  categoryId: string;
  category: ICategory;
}

export interface ICategory {
  id: string;
  name: string;
  image: IImage;
  products: Product[];
}

export interface IBanner {
  id: string;
  title: string;
  description: string;
  image: IImage;
}
