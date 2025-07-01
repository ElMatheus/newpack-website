import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços / Produtos",
  description: "Conheça nossos serviços e produtos de alta qualidade, adaptados às suas necessidades. Explore nossa variedade de soluções personalizadas.",
  keywords: "perfis, perfil de vinco, borracha, expanflex, facas planas, facas graficas, facas rotativas, clicheria, produtos, alta qualidade, soluções personalizadas, sloter, vinco, corte, embalagem",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
