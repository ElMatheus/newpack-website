import { Banner } from "@/types/Banner";

export default function callBanner({ title, subtitle, txtButton, urlButton }: Banner) {
  return (
    <section className="py-12 bg-gradient-to-r from-[#00AFEF] to-[#4b6582] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-white/80">
              {subtitle}
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <a target="_blank" rel="noopener noreferrer" href={urlButton} className="transform transition-transform hover:scale-105 active:scale-98">
              <div className="bg-white text-[var(--primary)] py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer">
                {txtButton}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}