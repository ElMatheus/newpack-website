export type Product = {
  photo?: string | null;
  name: string;
  feature?: string | null;
  feature2?: string | null;
  category: string;
  isSale?: boolean;
}

export type ProductData = {
  id: number;
  name: string;
  toughness?: string;
  dimension?: string;
  category: string;
  Product_image?: {
    image_url: string;
  }[];
  Order_details?: {
    id: number;
  }[];
}
