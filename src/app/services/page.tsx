import { Header2 } from "@/components/headerArticles";
import FacetedNavigation from "@/components/facetedNavigation";
import { getProducts } from "@/actions/api";
import { Filter } from "@/types/Filter";
import { Suspense } from "react";
import Products from "@/components/products";
import { Skeletons } from "@/components/skeletons";
import Await from "@/actions/await";

export default async function OurServices({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] }> }) {
  const resolvedParams = await searchParams;
  const page = typeof resolvedParams.page === 'string' ? Number(resolvedParams.page) : 1;
  const type: "all" | "category" | "subcategory" | "subSubcategory" | "search" =
    typeof resolvedParams.type === "string" &&
      ["all", "category", "subcategory", "subSubcategory", "search"].includes(resolvedParams.type)
      ? resolvedParams.type as "all" | "category" | "subcategory" | "subSubcategory" | "search"
      : 'all';
  const value = typeof resolvedParams.value === "string" ? resolvedParams.value : undefined;
  const category = typeof resolvedParams.category === "string" ? resolvedParams.category : undefined;
  const subcategory = typeof resolvedParams.subcategory === "string" ? resolvedParams.subcategory : undefined;
  const subSubcategory = typeof resolvedParams.subSubcategory === "string" ? resolvedParams.subSubcategory : undefined;

  let subtitle = "Conheça os serviços...";
  switch (type) {
    case "search":
      subtitle = `Resultados para "${value}"`;
      break;
    case "category":
      subtitle = `Categoria: ${category}`;
      break;
    case "subcategory":
      subtitle = `${category} > ${subcategory}`;
      break;
    case "subSubcategory":
      subtitle = `${category} > ${subcategory} > ${subSubcategory}`;
      break;
    case "all":
      subtitle = "Conheça os serviços que oferecemos para atender às suas necessidades e impulsionar o seu negócio.";
      break;
  }

  function buildProductQuery(filter: Filter, page: number = 1) {
    // Caso 1: Todos os produtos
    if (filter.type === "all") {
      return { categories: "", search: "", page };
    }

    // Caso 2: Busca por nome
    if (filter.type === "search") {
      return { categories: "", search: filter.value, page };
    }

    // Caso 3: Categoria principal
    if (filter.type === "category") {
      if (filter.category === "Gráfica") {
        return { categories: "facas_graficas", search: "", page };
      }
      if (filter.category === "Cartonagem") {
        return { categories: "facas_cartonagem", search: "", page };
      }
      if (filter.category === "Clicheria") {
        // Clicheria engloba planas e rotativas
        return { categories: "facas_planas,facas_rotativas", search: "", page };
      }
    }

    // Caso 4: Subcategoria
    if (filter.type === "subcategory") {
      if (filter.category === "Gráfica") {
        // Exemplo: Borracha ou Sloter (ou ambos)
        if (filter.subcategory === "Borrachas") {
          return { categories: "facas_graficas", search: "borracha", page };
        }
        if (filter.subcategory === "Sloters") {
          // sloter e celastro juntos
          return { categories: "facas_graficas", search: ["sloter", "celastro"], page };
        }
      }
      if (filter.category === "Clicheria") {
        if (filter.subcategory === "Rotativas") {
          return { categories: "facas_rotativas", search: "", page };
        }
        if (filter.subcategory === "Planas") {
          return { categories: "facas_planas", search: "", page };
        }
      }
    }

    // Caso 5: SubSubcategoria
    if (filter.type === "subSubcategory") {
      if (filter.category === "Clicheria") {
        if (filter.subcategory === "Rotativas") {
          if (filter.subSubcategory === "Borrachas") {
            return { categories: "facas_rotativas", search: "borracha", page };
          }
          if (filter.subSubcategory === "Sloters") {
            return { categories: "facas_rotativas", search: ["sloter", "celastro"], page };
          }
        }
        if (filter.subcategory === "Planas") {
          if (filter.subSubcategory === "Borrachas") {
            return { categories: "facas_planas", search: "borracha", page };
          }
          if (filter.subSubcategory === "Sloters") {
            return { categories: "facas_planas", search: ["sloter", "celastro"], page };
          }
        }
      }
    }

    return { categories: "", search: "", page };
  }

  const productQueryParams = buildProductQuery({
    type,
    value,
    category,
    subcategory,
    subSubcategory
  }, page);

  const promise = getProducts({
    categories: productQueryParams.categories,
    page: productQueryParams.page,
    search: Array.isArray(productQueryParams.search) ? productQueryParams.search[0] : productQueryParams.search,
    search2: Array.isArray(productQueryParams.search) ? productQueryParams.search[1] : undefined
  });

  return (
    <main className="flex flex-col min-h-screen mt-[74px] bg-[var(--background)] py-5 px-4.5 md:py-7 md:px-11">
      <Header2
        title="Nossos serviços"
        subtitle={subtitle}
      />

      <FacetedNavigation initialFilter={{
        type,
        value,
        category,
        subcategory,
        subSubcategory
      }} />

      <Suspense fallback={<Skeletons />}>
        <Await promise={promise}>
          {(result) => <Products result={result} page={page} />}
        </Await>
      </Suspense>
    </main>
  )
}