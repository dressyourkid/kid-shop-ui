import { ProductInCart, Category } from "~/types";

export interface RootState {
  categories: Category[];
  productsInCart: ProductInCart[];
}
