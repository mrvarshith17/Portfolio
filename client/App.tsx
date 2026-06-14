import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "@/components/WaveOverlay";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import PositionOfResponsibility from "./pages/PositionOfResponsibility";
import Activities from "./pages/Activities";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const transitions = {
  home: {
    initial: { opacity: 0, scale: 0.98, y: 16 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.02, y: -18 },
  },
  about: {
    initial: { opacity: 0, x: -44, clipPath: "inset(0 12% 0 0 round 28px)" },
    animate: { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0 round 0px)" },
    exit: { opacity: 0, x: 44, clipPath: "inset(0 0 0 14% round 28px)" },
  },
  skills: {
    initial: { opacity: 0, rotateX: 8, y: 28, transformPerspective: 900 },
    animate: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 900 },
    exit: { opacity: 0, rotateX: -8, y: -28, transformPerspective: 900 },
  },
  experience: {
    initial: { opacity: 0, scaleY: 0.94, y: 32, transformOrigin: "50% 0%" },
    animate: { opacity: 1, scaleY: 1, y: 0, transformOrigin: "50% 0%" },
    exit: { opacity: 0, scaleY: 0.96, y: -24, transformOrigin: "50% 100%" },
  },
  projects: {
    initial: { opacity: 0, scale: 0.92, filter: "blur(14px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.04, filter: "blur(10px)" },
  },
};

function getRouteTransition(pathname: string) {
  if (pathname === "/") return transitions.home;
  if (pathname.includes("about")) return transitions.about;
  if (pathname.includes("skills")) return transitions.skills;
  if (pathname.includes("experience")) return transitions.experience;
  if (pathname.includes("projects")) return transitions.projects;
  return transitions.home;
}

function AnimatedRoutes() {
  const location = useLocation();
  const transition = getRouteTransition(location.pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="page-motion-root"
        initial={transition.initial}
        animate={transition.animate}
        exit={transition.exit}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/position-of-responsibility" element={<PositionOfResponsibility />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/projects" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

createRoot(document.getElementById("root")!).render(<App />);
