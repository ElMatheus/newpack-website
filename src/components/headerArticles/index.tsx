import { HeaderInfos } from "@/types/Header";
import { AnimatedSection } from "../animations";

export default function Header({ title, subtitle }: HeaderInfos) {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#00AFEF]/10 to-white">
      <div className="container mx-auto px-4 py-8">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <div className="w-20 h-1 bg-[var(--primary)] mb-6"></div>
            <p className="text-lg text-[var(--secondary)] max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}