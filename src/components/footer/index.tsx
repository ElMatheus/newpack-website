import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative flex flex-col lg:flex-row justify-between text-white border-t-4 border-[var(--primary)] overflow-hidden bg-[var(--accent)]">
      <div className="relative bg-white hidden lg:flex w-[30%] items-center justify-center py-8 z-10">
        <Image
          src="/newpack.svg"
          alt="Newpack Logo"
          width={120}
          height={48}
          className="h-10 w-auto drop-shadow-lg mr-32"
        />
        <div
          className="absolute top-0 hidden lg:block right-0 h-full w-32 transform translate-x-[30px] skew-x-[12deg] z-20"
          style={{
            background: "linear-gradient(to right, #00AFEF, #008bc0)",
            boxShadow: "0 0 15px rgba(0, 175, 239, 0.4), 4px 0 8px rgba(0, 0, 0, 0.2)"
          }}
        ></div>
      </div>
      <div className="py-8 px-8 bg-[var(--accent)] lg:w-[70%] flex justify-center lg:justify-end">
        <div className="flex-col w-fit flex lg:items-end">
          <p className="font-medium text-center text-sm md:text-base">
            © {new Date().getFullYear()} NEWPACK. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <Link
              href="#"
              className="text-sm md:text-base hover:text-[var(--primary)] transition-colors duration-300 border-b border-transparent hover:border-[var(--primary)] pb-1"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm md:text-base hover:text-[var(--primary)] transition-colors duration-300 border-b border-transparent hover:border-[var(--primary)] pb-1"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}