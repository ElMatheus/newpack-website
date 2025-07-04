import { PopUpType } from "@/types/PopUp";
import { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PopUp({ type, message, onClose }: PopUpType) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5" />;
      case "error":
        return <AlertCircle className="w-5 h-5" />;
      case "info":
        return <Info className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-emerald-50",
          border: "border-emerald-400",
          text: "text-emerald-700",
          icon: "text-emerald-500"
        };
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-400",
          text: "text-red-700",
          icon: "text-red-500"
        };
      case "info":
        return {
          bg: "bg-[var(--primary)]/10",
          border: "border-[var(--primary)]",
          text: "text-[var(--secondary)]",
          icon: "text-[var(--primary)]"
        };
      default:
        return {
          bg: "bg-[var(--primary)]/10",
          border: "border-[var(--primary)]",
          text: "text-[var(--secondary)]",
          icon: "text-[var(--primary)]"
        };
    }
  };

  const colors = getColors();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-20 right-4 z-50 max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`${colors.bg} ${colors.border} border rounded-lg shadow-lg p-4 flex items-start gap-3`}
          >
            <div className={`${colors.icon} flex-shrink-0 mt-0.5`}>
              {getIcon()}
            </div>
            <div className="flex-1">
              <p className={`${colors.text} text-sm font-medium`}>{message}</p>
            </div>
            <button
              onClick={handleClose}
              className={`${colors.text} hover:bg-black/5 rounded-full p-1 flex-shrink-0`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}