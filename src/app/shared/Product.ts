export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  ['main_img']: string;
  link?: string;
  rating?: object;
  category: string;
  tag?: string;
}
