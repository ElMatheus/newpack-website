import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Leia os termos de uso da Newpack. Conheça nossas políticas e condições de uso do site.",
  keywords: ["termos de uso", "newpack", "políticas", "condições de uso"],
  icons: {
    icon: "/newpack.svg",
    apple: "/newpack.svg",
  },
  openGraph: {
    title: "Termos de Uso",
    description: "Leia os termos de uso da Newpack. Conheça nossas políticas e condições de uso do site.",
    url: "https://solucoesnewpack.com.br/use-terms",
    type: "website",
    locale: "pt-BR",
    siteName: "Soluções New Pack",
    images: [
      {
        url: "https://www.solucoesnewpack.com.br/og-newpack.png",
        width: 1200,
        height: 630,
        alt: "Imagem dos Termos de Uso da Newpack",
      }
    ],
  },
};

export default function UseTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
