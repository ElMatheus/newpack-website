import { Contact } from "@/types/Contact";
import { HoverScale } from "../animations";

export default function Card({ icon, title, link, contact }: Contact) {
  return (
    <HoverScale>
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 break-words">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#00AFEF]/10 p-2 rounded-full">
            {icon}
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <a href={link} className="text-[var(--primary)] hover:underline transition-all block ml-10">
          {contact}
        </a>
      </div>
    </HoverScale>
  )
}