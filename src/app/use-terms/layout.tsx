import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Leia os termos de uso da Newpack. Conheça nossas políticas e condições de uso do site.",
  keywords: ["termos de uso", "newpack", "políticas", "condições de uso"],
};

export default function UseTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
