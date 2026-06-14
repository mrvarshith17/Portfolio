import Header from "@/components/Header";
import AuroraBackground from "@/components/AuroraBackground";
import CharacterReveal from "@/components/CharacterReveal";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C/C++", "JavaScript/TypeScript", "SQL", "Verilog HDL"],
  },
  {
    title: "Frontend",
    items: ["React 18", "TypeScript", "TailwindCSS", "React Router", "Radix UI"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js/Express", "MongoDB", "RESTful APIs", "Socket.io", "JWT Auth"],
  },
  {
    title: "Development Tools",
    items: ["Git/GitHub", "Vite", "Redux", "VS Code", "Docker"],
  },
  {
    title: "Hardware & FPGA",
    items: ["Xilinx Vivado", "FPGA Design", "Digital Logic Design", "Verilog Simulation", "GTKWave"],
  },
  {
    title: "Data Science",
    items: ["Pandas/NumPy", "Power BI", "Statistical Analysis", "Data Visualization", "Excel/Power Query"],
  },
  {
    title: "AI & LLMs",
    items: ["LLM Workflows", "LangChain", "RAG Systems", "Prompt Engineering", "AI Embeddings"],
  },
  {
    title: "Electronics",
    items: ["Circuit Design", "MATLAB/Simulink", "Signal Processing", "Control Systems", "Microcontrollers"],
  },
];

const softSkills = [
  "Leadership",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Teamwork",
  "Discipline",
  "Public Speaking",
  "Writing",
];

export default function Skills() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        <AuroraBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <CharacterReveal
            as="h1"
            text="Skills & Technologies"
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="animate-grid-to-focus bg-white/90 p-6 rounded-lg border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <h2 className="text-lg font-bold text-slate-900 mb-5">{group.title}</h2>
                <ul className="space-y-3 text-slate-600 list-disc list-inside">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className="mt-8 bg-white/90 p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Soft Skills</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="animate-bounce-in bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-3 rounded-lg border border-blue-200 text-center text-sm font-semibold text-slate-700 hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
