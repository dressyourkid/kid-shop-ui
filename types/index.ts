export * from './state';

export interface Contact {
  email: string;
  phone: string;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  exists: boolean;
}

export interface Category {
    id: number;
    name: string;
}

export interface ProductInCart {
  product: Product;
  amount: number;
  totalPrice?: number;
}
