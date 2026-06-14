import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  animationType?:
    | "slide-up"
    | "flip-in-x"
    | "flip-in-y"
    | "zoom-in"
    | "swing-in"
    | "bounce-up"
    | "slide-in-left-lg"
    | "slide-in-right-lg"
    | "converge-to-center";
  borderColor?: string;
  defaultOpen?: boolean;
}

export default function ExpandableSection({
  title,
  icon,
  children,
  animationType = "slide-up",
  borderColor = "blue-600",
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const animationMap: Record<string, string> = {
    "slide-up": "animate-slide-up",
    "flip-in-x": "animate-flip-in-x",
    "flip-in-y": "animate-flip-in-y",
    "zoom-in": "animate-zoom-in",
    "swing-in": "animate-swing-in",
    "bounce-up": "animate-bounce-up",
    "slide-in-left-lg": "animate-slide-in-left-lg",
    "slide-in-right-lg": "animate-slide-in-right-lg",
    "converge-to-center": "animate-converge-to-center",
  };

  const borderColorMap: Record<string, string> = {
    "blue-600": "border-blue-600",
    "purple-600": "border-purple-600",
    "green-600": "border-green-600",
    "cyan-600": "border-cyan-600",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`section-expand-card border-l-4 ${borderColorMap[borderColor] ?? "border-blue-600"} bg-white/90 p-8 rounded-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="mt-1 text-blue-600 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-slate-600 transition-all duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`mt-6 ml-0 sm:ml-10 ${animationMap[animationType]}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
