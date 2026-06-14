import Header from "@/components/Header";
import ProfileFlip from "@/components/ProfileFlip";
import AuroraBackground from "@/components/AuroraBackground";
import CharacterReveal from "@/components/CharacterReveal";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <AuroraBackground />
        
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="animate-perspective-entrance">
            <div className="mb-6 inline-block animate-bounce-in">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300">
                Welcome to my portfolio
              </span>
            </div>
            <CharacterReveal
              as="h1"
              text="Pundru Varshith"
              className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            />
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Full-stack developer from NIT Silchar building responsive web platforms, AI-enabled workflows, and polished product experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <MagneticButton
                onClick={() => navigate("/projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                href="mailto:pundruvarshith17@gmail.com"
                target="_self"
                rel=""
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-300"
                icon={<Mail className="w-5 h-5" />}
              >
                Get in Touch
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/mrvarshith17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/varshith-pundru-1861392a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:pundruvarshith17@gmail.com"
                className="p-3 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Image with Flip Animation */}
          <div className="animate-fade-in-down group perspective h-96 sm:h-full">
            <div className="relative animate-profile-float h-full">
              {/* Multi-layer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-40 group-hover:opacity-60 group-hover:blur-2xl animate-profile-glow transition-all duration-300"></div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 animate-profile-spin opacity-30"></div>
              
              {/* Main profile frame with flip component */}
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-1 hover:p-2 transition-all duration-300 group-hover:shadow-2xl h-full">
                <div className="bg-white rounded-2xl overflow-hidden relative h-full">
                  <ProfileFlip />
                  {/* Shine effect on image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-float" style={{ animationDuration: "3s" }}></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-float" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
              
              {/* Click instruction */}
              <div className="absolute -bottom-12 left-0 right-0 text-center text-sm text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to flip between photos
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
