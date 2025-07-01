export interface Category {
  category: string;
  subcategories: {
    name: string;
    subcategories?: {
      name: string;
    }[];
  }[];
}

export type Categories = Category[];