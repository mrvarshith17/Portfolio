import Header from "@/components/Header";
import ExpandableSection from "@/components/ExpandableSection";
import { Trophy, Target } from "lucide-react";

export default function PositionOfResponsibility() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-5xl font-bold text-slate-900 mb-8 text-center">
            Position of Responsibility
          </h1>
          
          <div className="space-y-8">
            {/* Core Member with Flip Animation */}
            <ExpandableSection
              title="Core Member - Organising Team"
              icon={<Trophy className="w-6 h-6" />}
              borderColor="purple-600"
              animationType="flip-in-x"
            >
              <div>
                <p className="text-slate-600 font-medium mb-4">Incandescence (NIT Silchar)</p>
                <div className="space-y-2 text-slate-700">
                  <p>✓ Led and coordinated multiple events end-to-end</p>
                  <p>✓ Oversaw logistics, operations, and execution planning</p>
                  <p>✓ Ensured smooth flow and success of each event</p>
                </div>
              </div>
            </ExpandableSection>

            {/* Executive with Flip-Y Animation */}
            <ExpandableSection
              title="Executive - Hospitality Team"
              icon={<Target className="w-6 h-6" />}
              borderColor="blue-400"
              animationType="flip-in-y"
            >
              <div>
                <p className="text-slate-600 font-medium mb-4">Technoesis (NIT Silchar)</p>
                <div className="space-y-2 text-slate-700">
                  <p>✓ Oversaw guest hospitality and accommodation arrangements</p>
                  <p>✓ Managed transportation for participants from different institutions</p>
                  <p>✓ Ensured smooth and successful experiences for all guests</p>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </section>
    </div>
  );
}
