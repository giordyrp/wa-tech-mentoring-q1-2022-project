import { Product } from './apollo';

export interface IGrid {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface ICartProduct {
  id: string;
  data: Product;
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
export interface IBanner {
  id: string;
  title: string;
  description: string;
  image: IImage;
}

export * from './apollo';
