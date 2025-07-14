import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Banner from "@/components/callBanner";

import { Footer } from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NEWPACK - Insumos para Gráficas, Cartonagens e Clicherias",
  description: "NEWPACK - Soluções completas em insumos para Gráficas, Cartonagens e Clicherias. Apoiando o esporte e a excelência em materiais gráficos.",
  keywords: "NEWPACK, insumos, gráficas, cartonagens, clicherias, soluções gráficas, materiais gráficos",
  icons: {
    icon: "/newpack.svg",
    apple: "/newpack.svg",
  },
  openGraph: {
    title: "NEWPACK - Insumos para Gráficas, Cartonagens e Clicherias",
    description: "NEWPACK - Soluções completas em insumos para Gráficas, Cartonagens e Clicherias. Apoiando o esporte e a excelência em materiais gráficos.",
    url: "https://solucoesnewpack.com.br",
    type: "website",
    locale: "pt-BR",
    siteName: "NEWPACK",
    images: [
      {
        url: "https://www.solucoesnewpack.com.br/og-newpack.png",
        width: 1200,
        height: 630,
        alt: "Logo da NEWPACK",
      }
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/newpack.svg" />
        <link rel="icon" type="image/svg+xml" href="/newpack.svg" />
        <meta name="theme-color" content="#00AFEF" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Banner
          title="Pronto para transformar seu negócio?"
          subtitle="Entre em contato conosco hoje mesmo e descubra como a NEWPACK pode fornecer as melhores soluções em insumos para o seu segmento."
          txtButton="Fale Conosco"
          urlButton="https://wa.me/5519996511990?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seus%20serviços."
        />
        <Footer />
      </body>
    </html>
  );
}
