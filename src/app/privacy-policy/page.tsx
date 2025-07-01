"use client";

import { AnimatedSection } from "@/components/animations";
import Container from "@/components/infosContainer";
import Buttons from "@/components/buttonsContainer";
import { Header } from "@/components/headerArticles";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen mt-[74px]">
      <Header
        title="Política de Privacidade"
        subtitle="Saiba como a NEWPACK coleta, usa e protege suas informações"
      />
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-6.5">
              <Container
                title="Introdução"
                content={
                  <>
                    <p>
                      A NEWPACK valoriza a privacidade de nossos usuários e clientes e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você visita nosso site, utiliza nossos serviços ou interage conosco de qualquer forma.
                    </p>
                    <p>
                      Ao acessar nosso site ou fornecer suas informações pessoais, você concorda com os termos desta Política de Privacidade. Recomendamos que você leia este documento atentamente para entender como tratamos suas informações.
                    </p>
                  </>
                }
              />
              <Container
                title="Informações que Coletamos"
                content={
                  <>
                    <p>Este site não coleta nem armazena dados pessoais dos visitantes.</p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>
                        <strong>Informações pessoais:</strong> Ao clicar no botão de contato via WhatsApp, o usuário será redirecionado para uma conversa com nossa equipe por meio do aplicativo WhatsApp. A comunicação ocorrerá de forma direta entre o usuário e nosso número comercial.
                      </li>
                      <li>
                        <strong>Cookies e tecnologias semelhantes:</strong> Não utilizamos cookies, formulários ou sistemas de rastreamento neste site.
                      </li>
                    </ul>
                  </>
                }
              />
              <Container
                title="Como Utilizamos Suas Informações"
                content={
                  <>
                    <p>Podemos utilizar suas informações para:</p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>Fornecer, manter e melhorar nossos produtos e serviços.</li>
                      <li>Comunicar-nos com você sobre produtos, serviços, promoções e eventos.</li>
                      <li>Personalizar sua experiência e oferecer conteúdo e recursos relevantes.</li>
                      <li>Cumprir com obrigações legais e regulatórias.</li>
                    </ul>
                  </>
                }
              />
              <Container
                title="Compartilhamento de Informações"
                content={
                  <>
                    <p>
                      Podemos compartilhar suas informações pessoais com:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>
                        <strong>Prestadores de serviços:</strong> Empresas que prestam serviços em nosso nome, como análise de dados, hospedagem de websites, atendimento ao cliente.
                      </li>
                    </ul>
                  </>
                }
              />
              <Container
                title="Seus Direitos e Escolhas"
                content={
                  <>
                    <p>Você tem certos direitos relacionados às suas informações pessoais, incluindo:</p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>Optar por não receber comunicações de marketing.</li>
                      <li>Revogar consentimentos previamente fornecidos.</li>
                      <li>Solicitar a limitação do processamento de suas informações.</li>
                    </ul>
                  </>
                }
              />
              <Container
                title="Alterações na Política de Privacidade"
                content={
                  <>
                    <p>
                      Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
                    </p>
                  </>
                }
              />
              <Container
                title="Entre em Contato"
                content={
                  <p>
                    Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco através do e-mail <a href="mailto:solucoesnewpack@gmail.com" className="text-[var(--primary)] hover:underline">solucoesnewpack@gmail.com</a> ou pelo telefone <a href="tel:+5519996511990" className="text-[var(--primary)] hover:underline">(19) 99651-1990</a>.
                  </p>
                }
              />
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Última atualização: 13 de junho de 2025
                </p>
              </div>
            </div>
          </AnimatedSection>
          <Buttons
            button_1={{
              href: "/use-terms",
              text: "Ver Termos de Uso"
            }}
            button_2={{
              href: "/",
              text: "Voltar para Home"
            }}
          />
        </div>
      </section>
    </main>
  );
}
