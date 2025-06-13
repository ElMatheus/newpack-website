import { InfosContainer } from "@/types/InfosContainer";

export default function Container({ title, content }: InfosContainer) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-[var(--accent)] mb-4">{title}</h2>
      {content}
    </div>
  )
}