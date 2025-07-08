"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
  const searchParams = useSearchParams();

  const buildLink = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    return `?${params.toString()}`;
  };
  return (
    <>
      <div className="flex justify-center gap-2 mt-6">
        <Link
          href={currentPage > 1 ? buildLink(currentPage - 1) : "#"}
          className={`px-4 py-2 rounded-md ${currentPage <= 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-[var(--accent)] hover:bg-[var(--accent)]/10"
            }`}
        >
          Anterior
        </Link>

        {
          Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={buildLink(pageNum)}
              className={`hidden md:block px-4 py-2 rounded-md ${pageNum === currentPage
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--accent)] hover:bg-[var(--accent)]/10'
                }`}
            >
              {pageNum}
            </Link>
          ))
        }

        <Link
          href={currentPage < totalPages ? buildLink(currentPage + 1) : "#"}
          className={`px-4 py-2 rounded-md ${currentPage >= totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-[var(--accent)] hover:bg-[var(--accent)]/10"
            }`}
        >
          Próximo
        </Link>
      </div>
    </>
  );
}