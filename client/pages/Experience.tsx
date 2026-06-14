import Header from "@/components/Header";
import ExpandableSection from "@/components/ExpandableSection";
import AuroraBackground from "@/components/AuroraBackground";
import CharacterReveal from "@/components/CharacterReveal";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const highlights = [
    'Developed full-stack "Startup Connect" platform for founder-investor collaboration',
    "Built responsive frontend using React 18, TypeScript, Vite, and TailwindCSS",
    "Created RESTful backend with Express.js, Zod validation, and JWT authentication",
    "Implemented real-time messaging with Socket.io for mutual interest-based interactions",
    "Designed scalable frontend architecture with Radix UI components and reusable patterns",
    "Wrote comprehensive technical documentation and testing coverage with Vitest",
  ];

  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center relative overflow-hidden">
        <AuroraBackground />
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <CharacterReveal
            as="h1"
            text="Experience"
            className="text-5xl font-bold text-slate-900 mb-12 text-center"
          />

          <div className="space-y-8">
            <ExpandableSection
              title="Software Intern"
              icon={<Briefcase className="w-6 h-6" />}
              borderColor="blue-600"
              animationType="slide-in-left-lg"
              defaultOpen
            >
              <div>
                <p className="text-slate-600 font-medium mb-4">SN BOSE Intern, NIT Silchar</p>
                <p className="text-sm text-slate-500 mb-4">June 2024 - Present</p>
                <ul className="space-y-3 text-slate-700">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </section>
    </div>
  );
}
