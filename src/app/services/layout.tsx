import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços / Produtos",
  description: "Conheça nossos serviços e produtos de alta qualidade, adaptados às suas necessidades. Explore nossa variedade de soluções personalizadas.",
  keywords: "perfis, perfil de vinco, borracha, expanflex, facas planas, facas graficas, facas rotativas, clicheria, produtos, alta qualidade, soluções personalizadas, sloter, vinco, corte, embalagem",
  icons: {
    icon: "/newpack.svg",
    apple: "/newpack.svg",
  },
  openGraph: {
    title: "Serviços / Produtos",
    description: "Conheça nossos serviços e produtos de alta qualidade, adaptados às suas necessidades. Explore nossa variedade de soluções personalizadas.",
    url: "https://solucoesnewpack.com.br/services",
    type: "website",
    locale: "pt-BR",
    siteName: "Newpack",
    images: [
      {
        url: "https://www.solucoesnewpack.com.br/newpack.svg",
        width: 1200,
        height: 630,
        alt: "Imagem de serviços e produtos da Newpack",
      }
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
