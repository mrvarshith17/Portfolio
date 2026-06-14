import { useState, useEffect, useRef } from "react";
import { Menu, X, Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";
import { useSectionContext } from "@/context/SectionContext";
import MagneticButton from "@/components/MagneticButton";

const animationMap: Record<string, string> = {
  about: "slide-in-left-lg",
  skills: "slide-in-right-lg",
  experience: "converge-to-center",
  "position-of-responsibility": "center-reveal",
  "cocurricular-activities": "clip-reveal-right",
  projects: "radial-inward",
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { setActiveSection, setAnimationType, activeSection, setExitingSection } = useSectionContext();

  // Close contact dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setContactOpen(false);
      }
    }

    if (contactOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [contactOpen]);

  const scrollToSection = (id: string) => {
    // Don't trigger animation if already on the section
    if (activeSection === id) return;

    // Trigger exit animation on current section
    if (activeSection) {
      setExitingSection(activeSection);
    }
    
    const animType = animationMap[id] || "converge-to-center";
    setAnimationType(animType);
    
    // Set new active section after a brief delay to allow exit animation to start
    setTimeout(() => {
      setActiveSection(id);
      setExitingSection(null);
      
      // Scroll into view after animation completes (600ms animation + buffer)
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Account for fixed header (64px) + padding
          const headerHeight = 64;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const scrollPosition = elementPosition - headerHeight - 20; // 20px extra padding
          
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });
        }
      }, 650); // Wait for animation to complete
      
      setIsOpen(false);
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Varshith
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToSection("about")}
            className="px-3 py-2 text-slate-700 hover:text-blue-600 active:animate-btn-click transition-colors font-medium relative overflow-hidden group"
          >
            About
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="px-3 py-2 text-slate-700 hover:text-blue-600 active:animate-btn-click transition-colors font-medium relative overflow-hidden group"
          >
            Skills
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="px-3 py-2 text-slate-700 hover:text-blue-600 active:animate-btn-click transition-colors font-medium relative overflow-hidden group"
          >
            Experience
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>
          <button
            onClick={() => scrollToSection("position-of-responsibility")}
            className="px-3 py-2 text-slate-700 hover:text-blue-600 active:animate-btn-click transition-colors font-medium text-sm relative overflow-hidden group"
          >
            Responsibilities
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>
          <button
            onClick={() => scrollToSection("cocurricular-activities")}
            className="px-3 py-2 text-slate-700 hover:text-blue-600 active:animate-btn-click transition-colors font-medium text-sm relative overflow-hidden group"
          >
            Activities
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-3 py-2 text-slate-700 hover:text-blue-600 active:animate-btn-click transition-colors font-medium relative overflow-hidden group"
          >
            Projects
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
          </button>

          {/* Contact Dropdown */}
          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="px-4 py-2 mx-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:animate-btn-click transition-all font-medium flex items-center gap-2 relative group hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {contactOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-4 space-y-3">
                <a
                  href="mailto:pundruvarshith17@gmail.com"
                  className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Email</p>
                    <p className="text-xs text-slate-600">pundruvarshith17@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+918790233923"
                  className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Mobile</p>
                    <p className="text-xs text-slate-600">+91-8790233923</p>
                  </div>
                </a>
                <a
                  href="https://github.com/mrvarshith17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-900" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">GitHub</p>
                    <p className="text-xs text-slate-600">github.com/mrvarshith17</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/varshith-pundru-1861392a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors active:animate-btn-click"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">LinkedIn</p>
                    <p className="text-xs text-slate-600">linkedin.com/in/pundru-varshith</p>
                  </div>
                </a>

                <div className="border-t border-slate-200 pt-3">
                  <p className="text-xs font-semibold text-slate-600 uppercase px-3 mb-2">Coding Profiles</p>
                  <a
                    href="https://www.codechef.com/users/r_varshith_17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 hover:bg-orange-50 rounded-lg transition-colors text-xs"
                  >
                    <Code2 className="w-4 h-4 text-orange-600" />
                    <span className="text-slate-700">CodeChef</span>
                  </a>
                  <a
                    href="https://codeforces.com/profile/pundruvarshith17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 hover:bg-red-50 rounded-lg transition-colors text-xs"
                  >
                    <Code2 className="w-4 h-4 text-red-600" />
                    <span className="text-slate-700">Codeforces</span>
                  </a>
                  <a
                    href="https://leetcode.com/u/mr_varshith_17/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 hover:bg-yellow-50 rounded-lg transition-colors text-xs"
                  >
                    <Code2 className="w-4 h-4 text-yellow-600" />
                    <span className="text-slate-700">LeetCode</span>
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/profile/pundruvarzz4m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors text-xs"
                  >
                    <Code2 className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700">GeeksforGeeks</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in-down">
          <div className="px-4 py-4 space-y-2 max-w-6xl mx-auto">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("position-of-responsibility")}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              Responsibilities
            </button>
            <button
              onClick={() => scrollToSection("cocurricular-activities")}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              Projects
            </button>

            <div className="border-t border-slate-200 my-3"></div>

            <a
              href="mailto:pundruvarshith17@gmail.com"
              className="flex items-center gap-3 w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              Email
            </a>
            <a
              href="tel:+918790233923"
              className="flex items-center gap-3 w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              <Phone className="w-5 h-5 text-green-600" />
              Mobile
            </a>
            <a
              href="https://github.com/mrvarshith17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
            >
              <Github className="w-5 h-5 text-slate-900" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/varshith-pundru-1861392a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium active:animate-btn-click"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
