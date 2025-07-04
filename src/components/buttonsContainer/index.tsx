import { ButtonsContainer } from "@/types/ButtonsContainer";
import { AnimatedSection } from "../animations";
import Link from "next/link";

export default function Buttons({ button_1, button_2 }: ButtonsContainer) {
  return (
    <AnimatedSection delay={0.3}>
      <div className="mt-12 flex justify-center">
        {
          button_1.href ? (
            <Link href={button_1.href} className="bg-[var(--primary)] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all mr-4">
              {button_1.text}
            </Link>
          ) : (
            <button disabled={button_1.disabled} onClick={button_1.link} className="bg-[var(--primary)] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all mr-4 cursor-pointer">
              {button_1.text}
            </button>
          )
        }
        {
          button_2 && (
            button_2.href ? (
              <Link href={button_2.href} className="bg-white text-[var(--accent)] font-medium py-3 px-6 rounded-lg border-2 border-[var(--accent)] shadow-md hover:shadow-lg hover:bg-[var(--accent)] hover:text-white transition-all">
                {button_2.text}
              </Link>
            ) : (
              <button disabled={button_2.disabled} onClick={button_2.link} className="bg-white text-[var(--accent)] font-medium py-3 px-6 rounded-lg border-2 border-[var(--accent)] shadow-md hover:shadow-lg hover:bg-[var(--accent)] hover:text-white transition-all cursor-pointer">
                {button_2.text}
              </button>
            )

          )
        }
      </div>
    </AnimatedSection>
  )
}