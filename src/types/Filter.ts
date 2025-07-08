export type Filter = {
  type: 'search' | 'category' | 'subcategory' | 'subSubcategory' | 'all';
  value: string | undefined;
  category?: string | undefined;
  subcategory?: string | undefined;
  subSubcategory?: string | undefined;
}