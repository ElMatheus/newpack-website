import { ProductData } from "./Product";

interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ProductsApiResponse {
  products: ProductData[];
  pagination: PaginationInfo;
}

interface SuccessResponse {
  success: true;
  data: ProductsApiResponse;
}

interface ErrorResponse {
  success: false;
  message: string;
}

export type GetProductsResponse = SuccessResponse | ErrorResponse;