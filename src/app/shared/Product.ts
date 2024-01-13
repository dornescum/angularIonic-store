export interface Product {
  id: number;
  title: string;
  price: number;
  desc: string;
  img?: string;
  tag?: string;
  favorite?: boolean;
  flashSale?: boolean;
  rating: number;
}
