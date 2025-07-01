"use client";
import { HeaderInfos } from "@/types/Header";
import { AnimatedSection } from "../animations";
import { motion } from "motion/react"

export function Header({ title, subtitle }: HeaderInfos) {
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

export function Header2({ title, subtitle }: HeaderInfos) {
  return (
    <section className="flex flex-col gap-3 md:max-w-1/2">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[var(--secondary)] text-base md:text-lg"
      >
        {title}
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-[var(--accent)]"
      >
        {subtitle}
      </motion.h1>
    </section>
  )
}