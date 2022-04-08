export interface IGrid {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface ICartProduct {
  id: string;
  data: {
    id: string;
    data: {
      name: string;
      mainimage: any;
      stock: number;
      price: number;
      [key: string]: any;
    };
    [key: string]: any;
  };
  count: number;
}
