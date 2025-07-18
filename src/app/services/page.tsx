/**
 * Desenvolvido por Matheus Gomes - [https://github.com/ElMatheus | matheusgomesgoncalves.564@gmail.com]
 * Projeto: NEWPACK-WEBSITE
 * Data de criação: 2025
 */

import { Header2 } from "@/components/headerArticles";
import FacetedNavigation from "@/components/facetedNavigation";
import { getProducts } from "@/actions/api";
import { Filter } from "@/types/Filter";
import { Suspense } from "react";
import Products from "@/components/products";
import { Skeletons } from "@/components/skeletons";
import Await from "@/actions/await";

import { Metadata } from "next";

export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] } }): Promise<Metadata> {
  const search = await searchParams;
  const type = typeof search.type === 'string' ? search.type : undefined;
  const value = typeof search.value === 'string' ? search.value : undefined;
  const category = typeof search.category === 'string' ? search.category : undefined;
  const subcategory = typeof search.subcategory === 'string' ? search.subcategory : undefined;
  const subSubcategory = typeof search.subSubcategory === 'string' ? search.subSubcategory : undefined;

  let title = "Serviços / Produtos | Newpack";
  let description = "Conheça nossos serviços e produtos de alta qualidade, adaptados às suas necessidades. Explore nossa variedade de soluções personalizadas.";
  const url = new URL("https://solucoesnewpack.com.br/services");

  if (type === "search" && value) {
    title = `Busca por "${value}" | Produtos Newpack`;
    description = `Veja os resultados da busca por "${value}" na Newpack. Produtos com qualidade e soluções sob medida.`;
    url.searchParams.set("type", "search");
    url.searchParams.set("value", value);
  }

  if (type === "category" && category) {
    title = `Categoria ${category} | Produtos Newpack`;
    description = `Confira todos os produtos da categoria ${category}, com alta qualidade e desempenho garantido.`;
    url.searchParams.set("type", "category");
    url.searchParams.set("category", category);
  }

  if (type === "subcategory" && category && subcategory) {
    title = `${category} > ${subcategory} | Produtos Newpack`;
    description = `Explore a subcategoria ${subcategory} da linha ${category}, com soluções personalizadas para sua necessidade.`;
    url.searchParams.set("type", "subcategory");
    url.searchParams.set("category", category);
    url.searchParams.set("subcategory", subcategory);
  }

  if (type === "subSubcategory" && category && subcategory && subSubcategory) {
    title = `${category} > ${subcategory} > ${subSubcategory} | Produtos Newpack`;
    description = `Veja todos os produtos relacionados a ${subSubcategory} da linha ${category} / ${subcategory}. Alta performance e eficiência.`;
    url.searchParams.set("type", "subSubcategory");
    url.searchParams.set("category", category);
    url.searchParams.set("subcategory", subcategory);
    url.searchParams.set("subSubcategory", subSubcategory);
  }

  return {
    title,
    description,
    keywords: "facas gráficas, facas, clicheria, facas rotativas, clichês, perfis, vinco, sloter, cola, borracha hexagonal, expanflex, perfil de vinco, newpack",
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: "Newpack",
      locale: "pt-BR",
      type: "website",
      images: [
        {
          url: "https://www.solucoesnewpack.com.br/og-newpack.png",
          width: 1200,
          height: 630,
          alt: "Imagem de serviços e produtos da Newpack",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}


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
        return { categories: "facas_planas,facas_rotativas,cliches", search: "", page };
      }
      if (filter.category === "Outros") {
        return { categories: "outros", search: "", page };
      }
    }

    // Caso 4: Subcategoria
    if (filter.type === "subcategory") {
      if (filter.category === "Gráfica") {
        // Exemplo: Borracha ou Sloter (ou ambos)
        if (filter.subcategory === "Borrachas") {
          return { categories: "facas_graficas", search: ["expanflex", "tira"], page };
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
        if (filter.subcategory === "Clichês") {
          return { categories: "cliches", search: "", page };
        }
      }
      if (filter.category === "Outros") {
        if (filter.subcategory === "Colas") {
          return { categories: "outros", search: "cola", page };
        }
        if (filter.subcategory === "Aceleradores") {
          return { categories: "outros", search: "acelerador", page };
        }
      }
    }

    // Caso 5: SubSubcategoria
    if (filter.type === "subSubcategory") {
      if (filter.category === "Clicheria") {
        if (filter.subcategory === "Rotativas") {
          if (filter.subSubcategory === "Borrachas") {
            return { categories: "facas_rotativas", search: ["borracha", "puxador"], page };
          }
          if (filter.subSubcategory === "Sloters") {
            return { categories: "facas_rotativas", search: ["sloter", "celastro"], page };
          }
        }
        if (filter.subcategory === "Planas") {
          if (filter.subSubcategory === "Borrachas") {
            return { categories: "facas_planas", search: ["borracha", "tira"], page };
          }
          if (filter.subSubcategory === "Sloters") {
            return { categories: "facas_planas", search: ["sloter", "celastro"], page };
          }
        }
        if (filter.subcategory === "Clichês") {
          if (filter.subSubcategory === "Barra") {
            return { categories: "cliches", search: "barra", page };
          }
          if (filter.subSubcategory === "Garra") {
            return { categories: "cliches", search: ["perfil garra", "garrinha"], page };
          }
          if (filter.subSubcategory === "Costura") {
            return { categories: "cliches", search: "costura", page };
          }
          if (filter.subSubcategory === "Vinco") {
            return { categories: "cliches", search: "vinco", page };
          }
          if (filter.subSubcategory === "Esticador") {
            return { categories: "cliches", search: ["esticador", "tensor"], page };
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