export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  alcohol: string;
  volume: string;
  origin: string;
  isOnSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}