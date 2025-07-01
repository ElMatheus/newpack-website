"use client";

import { Header2 } from "@/components/headerArticles";
import { AnimatedSection } from "@/components/animations";
import ProductCard from "@/components/productCard";
const Buttons = dynamic(() => import("@/components/buttonsContainer"));
import FacetedNavigation from "@/components/facetedNavigation";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function OurServices() {
  const [filter, setFilter] = useState<{
    type: 'search' | 'category' | null;
    value: string | null;
    category?: string | null;
    subcategory?: string | null;
    subSubcategory?: string | null;
  }>({
    type: null,
    value: null
  });

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

  const handleFilterChange = (filterData: typeof filter) => {
    setFilter(filterData);
  };

  return (
    <main className="flex flex-col min-h-screen mt-[74px] bg-[var(--background)] py-5 px-4.5 md:py-7 md:px-11">
      <Header2
        title="Nossos serviços"
        subtitle={
          filter.type === 'search'
            ? `Resultados para "${filter.value}"`
            : filter.type === 'category'
              ? (() => {
                let subtitle = `Produtos da categoria: ${filter.category}`;

                if (filter.subcategory) {
                  subtitle += ` > ${filter.subcategory}`;
                }

                if (filter.subSubcategory) {
                  subtitle += ` > ${filter.subSubcategory}`;
                }

                return subtitle;
              })()
              : "Conheça os serviços que oferecemos para atender às suas necessidades e impulsionar o seu negócio."
        }
      />
      <AnimatedSection>
        <FacetedNavigation categories={categories} onFilterChange={handleFilterChange} />
      </AnimatedSection>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/borracha-sloter/1.jpeg"
          name="Borracha para Sloter 2MM"
          feature="60ShoreA"
          feature2="2mm"
          category="facas_planas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/borracha-sloter/6.jpeg"
          name="Borracha para Sloter 4MM"
          feature="60ShoreA"
          feature2="4mm"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/borracha-sloter/3.jpeg"
          name="Borracha para Sloter 5MM"
          feature="60ShoreA"
          feature2="5mm"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/borracha-sloter/5.jpeg"
          name="Borracha para Sloter 7MM"
          feature="60ShoreA"
          feature2="7mm"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/expanflex-cinza/10x11-1.jpeg"
          name="Borracha Expanflex Prata - 07 x 08"
          feature="12-14ShoreA"
          feature2="07 x 08"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/expanflex-amarela/14x16-1.jpeg"
          name="Borracha Expanflex Amarela - 14 x 13"
          feature="15-18ShoreA"
          feature2="14 x 13"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/newbond/1.png"
          name="Cola New Bond 100ML"
          feature="100ML"
          category="outros"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/expanflex-vermelha/32x22x17-1.jpeg"
          name="Borracha Expanflex Vermelha - 32 x 22 x 17"
          feature="30-35ShoreA"
          feature2="32 x 22 x 17"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/expanflex-grafite/32x22x17-1.jpeg"
          name="Borracha Expanflex Grafite - 32 x 22 x 17"
          feature="25-30ShoreA"
          feature2="32 x 22 x 17"
          category="facas_rotativas "
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/expanflex-amarela/32x22x15-1.jpeg"
          name="Borracha Expanflex Amarela - 32 x 22 x 15"
          feature="12-15ShoreA"
          feature2="32 x 22 x 15"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/vinco-personalizado/10x12-1.jpeg"
          name="Perfil de Vinco Personalizado - 10 x 12"
          feature="55-60ShoreA"
          feature2="10 x 12"
          category="facas_rotativas"
        />
        <ProductCard
          photo="https://newpack-images.s3.us-east-2.amazonaws.com/placa-celastro/1.jpeg"
          name="Placa de Celastro - 5mm x 10mm"
          feature="55-60ShoreA"
          feature2="5mm x 10mm"
          category="facas_planas"
        />
      </section>
      <Buttons
        button_1={{
          href: "/",
          text: "Ver Mais"
        }} button_2={null} />
    </main>
  )
}