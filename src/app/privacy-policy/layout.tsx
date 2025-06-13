import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Leia nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações pessoais.",
  keywords: ["política de privacidade", "newpack", "proteção de dados", "informações pessoais", "segurança de dados",
  ],
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
