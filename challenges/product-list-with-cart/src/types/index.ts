export interface IImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IProduct {
  id: string;
  image: IImage;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export type CartType = { [keys: string]: IProduct };

export type ContextActionType = { type: string; payload: any };
