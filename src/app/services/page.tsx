"use client";

import { Header2 } from "@/components/headerArticles";
import { AnimatedSection } from "@/components/animations";
import { ProductCard, ProductCardSkeleton } from "@/components/productCard";
import FacetedNavigation from "@/components/facetedNavigation";
import { useState, useEffect } from "react";
import { getProducts } from "@/actions/api";
import { Filter } from "@/types/Filter";
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductData } from "@/types/Product";
import PopUp from "@/components/popUp";

const categories = [
  {
    category: "Gráfica",
    subcategories: [
      { name: "Borrachas" },
      { name: "Sloters" },
    ]
  },
  {
    category: "Cartonagem",
    subcategories: [
      { name: "Teste" },
    ]
  },
  {
    category: "Clicheria",
    subcategories: [
      {
        name: "Rotativas",
        subcategories: [
          { name: "Borrachas" },
          { name: "Sloters" }
        ]
      },
      {
        name: "Planas",
        subcategories: [
          { name: "Borrachas" },
          { name: "Sloters" }
        ]
      },
    ]

  }
];

export default function OurServices() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const page = parseInt(searchParams.get('page') || '1');
  const [errorMsg, setErrorMsg] = useState("");

  const filter = getFilterFromSearchParams(searchParams);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = buildProductQuery(filter, page);
        let search = params.search;
        let search2 = "";
        if (Array.isArray(search)) {
          [search, search2] = search;
        }

        const result = await getProducts({
          categories: params.categories,
          page: params.page,
          search,
          search2,
        });

        if (!result.success) {
          console.error("Erro ao buscar produtos:", result);
          setErrorMsg(result.message);
          setProducts([]);
          setTotalPages(0);
          return;
        }

        setProducts(result.data.products || []);
        setTotalPages(result.data.pagination?.totalPages || 0);
        setErrorMsg("");
      } catch (error) {
        console.error("Erro inesperado:", error);
        setErrorMsg("Erro inesperado ao buscar produtos.");
        setProducts([]);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);


  function getFilterFromSearchParams(searchParams: URLSearchParams): Filter {
    const type = searchParams.get('type') as Filter['type'];
    return {
      type: type || null,
      value: searchParams.get('value'),
      category: searchParams.get('category'),
      subcategory: searchParams.get('subcategory'),
      subSubcategory: searchParams.get('subSubcategory'),
    };
  }

  function buildProductQuery(filter: Filter, page: number = 1) {
    // Caso 1: Todos os produtos
    if (!filter.type) {
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

  function filterToSearchParams(filter: Filter) {
    const params = new URLSearchParams();
    if (filter.type) params.set("type", filter.type);
    if (filter.value) params.set("value", filter.value);
    if (filter.category) params.set("category", filter.category);
    if (filter.subcategory) params.set("subcategory", filter.subcategory);
    if (filter.subSubcategory) params.set("subSubcategory", filter.subSubcategory);
    params.set("page", "1");
    return params;
  }

  const handleFilterChange = (newFilter: Filter) => {
    const params = filterToSearchParams(newFilter);
    router.push(`/services?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    router.push(`/services?${params.toString()}`);
  };

  return (
    <main className="flex flex-col min-h-screen mt-[74px] bg-[var(--background)] py-5 px-4.5 md:py-7 md:px-11">
      {errorMsg && (
        <PopUp
          type="error"
          message={errorMsg}
          onClose={() => setErrorMsg("")}
        />
      )}
      <Header2
        title="Nossos serviços"
        subtitle={
          filter.type === 'search'
            ? `Resultados para "${filter.value}"`
            : filter.type === 'category' || filter.type === 'subcategory' ||
              filter.type === 'subSubcategory'
              ? (() => {
                if (filter.type === 'category') return `Categoria: ${filter.category}`;
                if (filter.type === 'subcategory') return `${filter.category} > ${filter.subcategory}`;
                return `${filter.category} > ${filter.subcategory} > ${filter.subSubcategory}`;
              })()
              : "Conheça os serviços que oferecemos para atender às suas necessidades e impulsionar o seu negócio."
        }
      />

      <AnimatedSection>
        <FacetedNavigation categories={categories} onFilterChange={handleFilterChange} initialFilter={filter} />
      </AnimatedSection>

      {(products.length === 0 && !isLoading) ? (
        <AnimatedSection>
          <h2 className="text-xl text-center font-medium text-[var(--accent)]">Nenhum resultado</h2>
        </AnimatedSection>
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
            {isLoading ? (
              Array(6).fill(0).map((_, idx) => (
                <ProductCardSkeleton key={idx} />
              ))
            ) : (
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
            )}
          </section>
          {totalPages > 1 && !isLoading && (
            <div className="flex justify-center mt-10">
              <nav aria-label="Paginação" className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-md ${page === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[var(--accent)] hover:bg-[var(--accent)]/10'
                    }`}
                >
                  {"Anterior"}
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 rounded-md ${pageNum === page
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--accent)] hover:bg-[var(--accent)]/10'
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`px-4 py-2 rounded-md ${page === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[var(--accent)] hover:bg-[var(--accent)]/10'
                    }`}
                >
                  {"Próximo"}
                </button>
              </nav>
            </div>
          )}
        </>
      )
      }

    </main>
  )
}