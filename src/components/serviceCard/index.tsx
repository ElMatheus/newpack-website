import { StaggeredItem } from "../animations";
import { motion } from "framer-motion";
import { Category } from "@/types/Category";

export default function Card({ title, description, icon, color, hoverColor }: Category) {
  return (
    <StaggeredItem>
      <motion.div
        className={`bg-white rounded-lg p-6 shadow-md transition-all duration-500 border-l-4 h-full`}
        style={{ borderLeftColor: color }}
        whileHover={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          backgroundColor: hoverColor,
          y: -5
        }}
      >
        <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110 inline-block">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.button
          className="mt-4 text-sm font-medium flex items-center group cursor-pointer"
          style={{ color: color }}
          whileHover={{ x: 5 }}
        >
          Ver detalhes
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.button>
      </motion.div>
    </StaggeredItem>
  )
}