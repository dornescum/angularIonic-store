interface User {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  age: number;
  email: string;
}

export interface Product {
  id: number;
  title: string;
  tag: string;
  favorite: number;
  price: number;
  rating: number;
  flashSale: number;
  img: string;
  desc: string;
  data?: User;
}
