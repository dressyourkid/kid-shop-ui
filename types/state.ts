import { Person, Category } from "~/types";

export interface RootState {
  people: Person[];
  categories: Category[]; 
}
