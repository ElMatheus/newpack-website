import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Leia nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações pessoais.",
  keywords: ["política de privacidade", "newpack", "proteção de dados", "informações pessoais", "segurança de dados",
  ],
  icons: {
    icon: "/newpack.svg",
    apple: "/newpack.svg",
  },
  openGraph: {
    title: "Política de Privacidade",
    description:
      "Leia nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações pessoais.",
    url: "https://solucoesnewpack.com.br/privacy-policy",
    type: "website",
    locale: "pt-BR",
    siteName: "Newpack",
    images: [
      {
        url: "https://www.solucoesnewpack.com.br/newpack.svg",
        width: 1200,
        height: 630,
        alt: "Imagem da Política de Privacidade da Newpack",
      }
    ],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
