"use client";
import { GetProductsResponse } from "@/types/ApiTypes";
import { AnimatedSection } from "../animations";
import { use } from "react";
import { ProductCard } from "../productCard";
import Pagination from "../pagination";

export default function Products({ promise, page }: { promise: Promise<GetProductsResponse>, page: number }) {
  const result = use(promise);

  if (!result.success) {
    return (
      <AnimatedSection>
        <h2 className="text-xl text-center font-medium text-red-500">
          Erro ao carregar produtos: {result.message}
        </h2>
      </AnimatedSection>
    );
  }

  const { products } = result.data;
  const { pagination } = result.data;

  if (pagination.total === 0) {
    return (
      <AnimatedSection>
        <h2 className="text-xl text-center font-medium text-[var(--accent)]">Nenhum resultado</h2>
      </AnimatedSection>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              photo={product.Product_image?.[0]?.image_url || null}
              name={product.name}
              feature={product.toughness || product.dimension || null}
              feature2={product.toughness && product.dimension ? product.dimension : null}
              category={product.category}
              isSale={product.Order_details?.[0]?.id ? true : false}
            />
          ))
        }
      </div>
      <Pagination
        currentPage={page}
        totalPages={pagination.totalPages}
      />
    </>
  );
}