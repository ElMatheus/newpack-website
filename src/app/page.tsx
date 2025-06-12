"use client";
import Image from "next/image";
import { AnimatedSection, StaggeredList } from "@/components/animations";
import { motion } from "framer-motion";
import ServiceCard from "@/components/serviceCard";
import ContactCard from "@/components/contactCard";
import Banner from "@/components/callBanner";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mt-[74px]">
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-gradient-to-b from-[#00AFEF]/10 to-white">
        <motion.div
          className="absolute inset-0 bg-[url('/newpack.svg')] bg-no-repeat bg-center opacity-5 scale-400"
          animate={{
            scale: [1.5, 1.6, 1.5],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        ></motion.div>
        <div className="container mx-auto px-4 py-12 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              APOIANDO O <motion.span
                className="text-[var(--primary)] font-black italic"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >ESPORTE</motion.span>
              <br /> E A <motion.span
                className="text-[var(--accent)] font-black"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >QUALIDADE DE VIDA</motion.span>
            </motion.h1>
            <motion.h2
              className="text-lg md:text-xl text-[var(--secondary)] font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Soluções completas em insumos para Gráficas, Cartonagens e Clicherias
            </motion.h2>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <a href="https://wa.me/5519996511990?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20NEWPACK" target="_blank"
                rel="noopener noreferrer" className="bg-[var(--primary)] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl btn-hover">
                Conheça nossos produtos
              </a>
              <a href="https://wa.me/5519996511990?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seus%20serviços." target="_blank"
                rel="noopener noreferrer" className="bg-white text-[var(--accent)] font-medium py-3 px-6 rounded-lg border-2 border-[var(--accent)] shadow-md hover:shadow-lg hover:bg-[var(--accent)] hover:text-white cursor-pointer btn-hover">
                Entre em contato
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
          </AnimatedSection>
          <StaggeredList>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title={"GRÁFICA"}
                description={"Insumos de alta qualidade para todo tipo de impressão."}
                icon={"🖨️"}
                color={"var(--primary)"}
                hoverColor={"rgba(0, 175, 239, 0.1)"}
              />
              <ServiceCard
                title={"CARTONAGEM"}
                description={"Materiais premium para embalagens e produtos em cartão."}
                icon={"📦"}
                color={"var(--secondary)"}
                hoverColor={"rgba(75, 101, 130, 0.1)"}
              />
              <ServiceCard
                title={"CLICHERIA"}
                description={"Soluções completas para preparação e suporte em clichês de impressão."}
                icon={"🎞️"}
                color={"var(--accent)"}
                hoverColor={"rgba(55, 52, 53, 0.1)"}
              />
            </div>
          </StaggeredList>
        </div>
      </section>
      <section id="newpack" className="py-16 px-4 bg-gradient-to-br mb-8 from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex justify-center">
              <AnimatedSection delay={0.2}>
                <motion.div
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00AFEF]/30 to-[#4b6582]/30 blur-xl opacity-70 animate-pulse-slow"></div>
                  <Image
                    src="/newpack.svg"
                    alt="Newpack Logo"
                    width={200}
                    height={80}
                    className="w-auto h-24 md:h-40 relative z-10"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection delay={0.4}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Por que escolher a <span className="text-gradient">NEWPACK</span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Com mais de 15 anos de experiência no setor, oferecemos produtos de alta qualidade
                  que atendem às necessidades específicas do seu negócio, com entregas rápidas e suporte especializado.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ContactCard title={"Email:"} contact={"solucoesnewpack@gmail.com"} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>} link={"mailto:solucoesnewpack@gmail.com"} />
                  <ContactCard title={"Telefone:"} contact={"(19) 99651-1990"} icon={<svg xmlns=" http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>} link={"tel:+5519996511990"} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <Banner
        title="Pronto para transformar seu negócio?"
        subtitle="Entre em contato conosco hoje mesmo e descubra como a NEWPACK pode fornecer as melhores soluções em insumos para o seu segmento."
        txtButton="Fale Conosco"
        urlButton="https://wa.me/5519996511990?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seus%20serviços."
      />
    </main >
  );
}
