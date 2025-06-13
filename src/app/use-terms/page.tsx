"use client";

import { AnimatedSection } from "@/components/animations";
import Container from "@/components/infosContainer";
import Buttons from "@/components/buttonsContainer";
import Header from "@/components/headerArticles";

export default function UseTerms() {
  return (
    <main className="flex flex-col min-h-screen mt-[74px]">
      <Header
        title="Termos de Uso"
        subtitle="Condições gerais para utilização dos produtos e serviços da NEWPACK"
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
                      Bem-vindo ao site da NEWPACK. Ao acessar este site e utilizar nossos serviços, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Por favor, leia estes termos cuidadosamente antes de utilizar nosso site.
                    </p>
                    <p>
                      Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site ou serviços. O uso continuado do site após a publicação de quaisquer alterações a estes termos constitui sua aceitação dessas alterações.
                    </p>
                  </>
                }
              />
              <Container
                title="Uso do Site"
                content={
                  <>
                    <p>
                      Este site é oferecido a você condicionalmente à sua aceitação sem modificação dos termos, condições e avisos aqui contidos. Ao usar este site, você concorda em:
                    </p>
                    <ul className="list-disc pl-6 my-4 space-y-2">
                      <li>Usar o site apenas para fins legais e de maneira que não infrinja os direitos de qualquer pessoa ou restrinja seu uso do site.</li>
                      <li>Não utilizar o site de qualquer maneira que possa danificar, desativar, sobrecarregar ou prejudicar o site.</li>
                      <li>Não tentar obter acesso não autorizado a qualquer parte do site, a outros sistemas ou redes conectadas ao site.</li>
                      <li>Não coletar ou colher qualquer informação de identificação pessoal do site sem autorização.</li>
                    </ul>
                  </>
                }
              />
              <Container
                title="Conteúdo e Propriedade Intelectual"
                content={
                  <>
                    <p>
                      Todo o conteúdo publicado ou disponibilizado no site da NEWPACK, incluindo, mas não limitado a textos, gráficos, logotipos, imagens, áudios, vídeos, software e código, é de propriedade da NEWPACK ou de nossos licenciadores e está protegido por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
                    </p>
                    <p>
                      Você não pode copiar, reproduzir, distribuir, transmitir, exibir, vender, licenciar ou explorar de qualquer outra forma qualquer conteúdo do site para qualquer finalidade sem o nosso consentimento prévio por escrito.
                    </p>
                  </>
                }
              />
              <Container
                title="Responsabilidades"
                content={
                  <>
                    <p>
                      Nosso sistema é fornecido &quot;como está&quot;. Não garantimos ausência de falhas ou que o serviço será ininterrupto.
                    </p>

                  </>
                }
              />
              <Container
                title="Produtos e Serviços"
                content={
                  <>
                    <p>
                      A NEWPACK pode oferecer produtos e serviços para venda. Todas as características, conteúdos, especificações, tamanhos, modelos e preços dos produtos e serviços descritos ou representados no site estão sujeitos a alterações sem aviso prévio.
                    </p>
                    <p>
                      As cores exibidas dos produtos no site podem não corresponder exatamente às cores reais devido a variações causadas pelas configurações de exibição do monitor ou outros fatores tecnológicos.
                    </p>
                  </>
                }
              />
              <Container
                title="Alterações nos Termos de Uso"
                content={
                  <p>
                    A NEWPACK se reserva o direito de revisar e atualizar estes Termos de Uso a qualquer momento. Quaisquer alterações serão efetivas imediatamente após a publicação dos Termos de Uso revisados no site.
                  </p>
                }
              />
              <Container
                title="Lei Aplicável"
                content={
                  <p>
                    Estes Termos de Uso e quaisquer disputas decorrentes deles serão regidos e interpretados de acordo com as leis do Brasil, sem considerar os princípios de conflitos de leis.
                  </p>
                }
              />
              <Container
                title="Entre em Contato"
                content={
                  <p>
                    Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco através do e-mail <a href="mailto:solucoesnewpack@gmail.com" className="text-[var(--primary)] hover:underline">solucoesnewpack@gmail.com</a> ou pelo telefone <a href="tel:+5519996511990" className="text-[var(--primary)] hover:underline">(19) 99651-1990</a>.
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
              href: "/privacy-policy",
              text: "Ver Política de Privacidade"
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
