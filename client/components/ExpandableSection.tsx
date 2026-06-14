import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  animationType?: "slide-up" | "flip-in-x" | "flip-in-y" | "zoom-in" | "swing-in" | "bounce-up";
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
  };

  return (
    <div className={`border-l-4 border-${borderColor} bg-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between group cursor-pointer"
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

      {isOpen && (
        <div className={`mt-6 ml-10 ${animationMap[animationType]}`}>
          {children}
        </div>
      )}
    </div>
  );
}
