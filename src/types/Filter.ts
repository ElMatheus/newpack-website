export type Filter = {
  type: 'search' | 'category' | 'subcategory' | 'subSubcategory' | null;
  value: string | null;
  category?: string | null;
  subcategory?: string | null;
  subSubcategory?: string | null;
}