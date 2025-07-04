"use server";

import axios from "axios";
const api = process.env.EXPO_PUBLIC_API_URL;
import { GetProductsResponse } from "@/types/ApiTypes";

export const getProducts = async ({
  categories,
  page,
  search,
  search2,
}: {
  categories?: string | null;
  page: number;
  search?: string | null;
  search2?: string | null;
}): Promise<GetProductsResponse> => {
  try {
    const params = new URLSearchParams();
    if (categories) params.append("categories", categories);
    params.append("page", page.toString());
    params.append("limit", "12");
    if (search) params.append("search", search);
    if (search2) params.append("search2", search2);

    const url = `${api}?${params.toString()}`;

    const response = await axios.get(url);

    return {
      success: true,
      data: response.data,
    };

  } catch (error) {
    console.error("Erro ao buscar produtos:", error);

    return {
      success: false,
      message: "Erro ao buscar produtos, tente novamente mais tarde.",
    };
  }
}