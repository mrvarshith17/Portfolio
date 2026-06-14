import { useState } from "react";
import Header from "@/components/Header";
import AuroraBackground from "@/components/AuroraBackground";
import CharacterReveal from "@/components/CharacterReveal";
import MagneticButton from "@/components/MagneticButton";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Startup Connect",
    description: "Full-stack platform for founder-investor collaboration with real-time messaging.",
    tags: ["React 18", "Express", "Socket.io"],
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    textColor: "text-blue-600",
    link: "https://github.com/mrvarshith17",
    highlights: [
      "Founder-investor matching flows",
      "JWT auth and protected user journeys",
      "Live chat with interest-based messaging",
    ],
  },
  {
    title: "Real Estate Web Application",
    description: "Full-stack app for browsing, listing, and managing properties with JWT auth.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-violet-600 via-fuchsia-500 to-rose-400",
    textColor: "text-violet-600",
    link: "https://github.com/mrvarshith17",
    highlights: [
      "Property listing and detail views",
      "Authenticated owner workflows",
      "MongoDB-backed search-ready data model",
    ],
  },
  {
    title: "E-commerce Website",
    description: "Complete MERN stack store with cart, checkout, and payment integration.",
    tags: ["MERN", "Redux", "Payment"],
    gradient: "from-cyan-600 via-sky-500 to-blue-500",
    textColor: "text-cyan-600",
    link: "https://github.com/mrvarshith17",
    highlights: [
      "Cart and checkout state management",
      "Payment-ready order flow",
      "Reusable product and inventory UI",
    ],
  },
  {
    title: "Enigma Machine - FPGA",
    description: "WWII Enigma Machine hardware implementation using Verilog HDL on FPGA.",
    tags: ["Verilog", "FPGA", "Vivado"],
    gradient: "from-emerald-600 via-lime-500 to-amber-400",
    textColor: "text-emerald-700",
    link: "https://github.com/mrvarshith17",
    highlights: [
      "Rotor-based encryption logic",
      "Verilog modules tested in simulation",
      "FPGA implementation workflow in Vivado",
    ],
  },
  {
    title: "Customer Churn Analysis",
    description: "Data analysis on 7,043 telecom records identifying 42% churn rate patterns.",
    tags: ["Pandas", "Analytics", "Python"],
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    textColor: "text-orange-600",
    link: "https://github.com/mrvarshith17",
    highlights: [
      "Exploratory analysis on telecom behavior",
      "Churn pattern segmentation",
      "Business-focused visualization outputs",
    ],
  },
  {
    title: "HR Analytics Dashboard",
    description: "Interactive Power BI dashboard analyzing 500+ employee records with attrition insights.",
    tags: ["Power BI", "ETL", "Analytics"],
    gradient: "from-slate-700 via-indigo-500 to-teal-400",
    textColor: "text-indigo-600",
    link: "https://github.com/mrvarshith17",
    highlights: [
      "Employee attrition KPI tracking",
      "ETL cleanup for dashboard-ready data",
      "Interactive Power BI reporting views",
    ],
  },
];

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}

function ProjectCard({ project, index, expanded, onToggle }: ProjectCardProps) {
  const [tilt, setTilt] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt(`perspective(1200px) rotateX(${y * -10}deg) rotateY(${x * 12}deg) translateY(-6px)`);
  };

  return (
    <motion.div
      layout
      className="animate-grid-to-focus project-tilt-shell h-full"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <article
        className="project-tilt-card group bg-white/95 rounded-lg overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col cursor-pointer"
        style={{ transform: tilt, transition: "transform 180ms ease-out" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt("perspective(1200px) rotateX(0deg) rotateY(0deg)")}
        onClick={onToggle}
      >
        <div className={`project-tilt-pop h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center px-5`}>
          <h3 className="text-xl font-bold text-white text-center">{project.title}</h3>
        </div>

        <div className="p-6 flex flex-col flex-grow project-tilt-soft">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onToggle();
              }}
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              aria-label={`${expanded ? "Collapse" : "Expand"} ${project.title}`}
              aria-expanded={expanded}
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <p className="text-sm text-slate-600 mb-4">{project.description}</p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden text-sm text-slate-600 list-disc list-inside space-y-2 mb-4"
              >
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2 mb-5 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div onClick={(event) => event.stopPropagation()}>
            <MagneticButton
              href={project.link}
              className={`${project.textColor} px-0 py-0 hover:shadow-none`}
              icon={<ExternalLink className="w-4 h-4" />}
            >
              View Project
            </MagneticButton>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0].title);

  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center relative overflow-hidden">
        <AuroraBackground />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <CharacterReveal
            as="h1"
            text="Featured Projects"
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                expanded={expandedProject === project.title}
                onToggle={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
