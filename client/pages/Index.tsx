import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ExpandableSection from "@/components/ExpandableSection";
import ProfileFlip from "@/components/ProfileFlip";
import SectionWrapper from "@/components/SectionWrapper";
import { useSectionContext } from "@/context/SectionContext";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Award, Code2, Zap, Briefcase, Trophy, Target } from "lucide-react";

type AnimationType = "slide-in-left-lg" | "slide-in-right-lg" | "converge-to-center" | "center-reveal" | "edge-inward" | "radial-inward";

export default function Index() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden" style={{
        backgroundSize: '200% 200%',
        animation: 'aurora 8s ease infinite'
      }}>
        {/* Animated background elements with parallax */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-parallax-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-parallax-fast"></div>
        
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10" style={{ perspective: '1200px' }}>
          {/* Left Content */}
          <div className="animate-perspective-entrance">
            <div className="mb-6 inline-block animate-bounce-in">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Pundru
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Varshith
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Full-stack developer & engineer from NIT Silchar. Specialized in web development, hardware design, data analytics, and AI/ML. Building innovative solutions across multiple domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:pundruvarshith17@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
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
                className="p-3 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 hover:shadow-lg active:animate-btn-click"
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

      {/* About Section */}
      <SectionWrapper 
        id="about" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        bgColor="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-perspective-entrance">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="animate-stagger-1 group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      B.Tech in Electronics & Communication
                    </h4>
                    <p className="text-slate-600">
                      National Institute of Technology, Silchar
                    </p>
                    <p className="text-sm text-slate-500">
                      Nov 2022 – Jun 2026 | CGPA: 7.62
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900">
                      Higher Secondary School
                    </h4>
                    <p className="text-slate-600">
                      Narayana Junior College, Visakhapatnam
                    </p>
                    <p className="text-sm text-slate-500">
                      Percentage: 94.6%
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900">
                      Secondary School Certificate
                    </h4>
                    <p className="text-slate-600">
                      Sri Chaitanya School, Rajam
                    </p>
                    <p className="text-sm text-slate-500">
                      Percentage: 99.33%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Competencies */}
            <div className="animate-stagger-2 group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Key Competencies
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Full-Stack Web</p>
                      <p className="text-sm text-slate-600">React, Node.js, TypeScript</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Hardware Design</p>
                      <p className="text-sm text-slate-600">FPGA, Verilog, Digital Logic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Data & AI</p>
                      <p className="text-sm text-slate-600">Analytics, LLM, ML Models</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="animate-stagger-3 group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  About
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Multi-disciplinary engineer passionate about building innovative solutions. Experienced in full-stack web development, FPGA design, data analytics, and AI/ML. Strong problem solver with a track record of delivering quality projects across diverse domains.
                </p>
                <div className="mt-6 text-sm text-slate-600 space-y-1">
                  <p>📍 Assam, India</p>
                  <p>🎯 Open to opportunities</p>
                  <p>📞 +91-8790233923</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper 
        id="skills" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        bgColor="bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in-up">
            Skills & Technologies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <div className="animate-bounce-in" style={{ animationDelay: "0s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Languages</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Python</p>
                  <p>• C/C++</p>
                  <p>• JavaScript/TypeScript</p>
                  <p>• SQL</p>
                  <p>• Verilog HDL</p>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Frontend</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• React 18</p>
                  <p>• TypeScript</p>
                  <p>• TailwindCSS</p>
                  <p>• React Router</p>
                  <p>• Radix UI</p>
                </div>
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Backend & Databases</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Node.js/Express</p>
                  <p>• MongoDB</p>
                  <p>• RESTful APIs</p>
                  <p>• Socket.io</p>
                  <p>• JWT Auth</p>
                </div>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Development Tools</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Git/GitHub</p>
                  <p>• Vite</p>
                  <p>• Redux</p>
                  <p>• VS Code</p>
                  <p>• Docker</p>
                </div>
              </div>
            </div>

            {/* Hardware & FPGA */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Hardware & FPGA</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Xilinx Vivado</p>
                  <p>• FPGA Design</p>
                  <p>• Digital Logic Design</p>
                  <p>• Verilog Simulation</p>
                  <p>• GTKWave</p>
                </div>
              </div>
            </div>

            {/* Data Science & ML */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.5s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Data Science</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Pandas/NumPy</p>
                  <p>• Power BI</p>
                  <p>• Statistical Analysis</p>
                  <p>• Data Visualization</p>
                  <p>• Excel/Power Query</p>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.6s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">AI & LLMs</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• LLM Workflows</p>
                  <p>• LangChain</p>
                  <p>• RAG Systems</p>
                  <p>• Prompt Engineering</p>
                  <p>• AI Embeddings</p>
                </div>
              </div>
            </div>

            {/* Electronics & Control */}
            <div className="animate-bounce-in" style={{ animationDelay: "0.7s" }}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Electronics</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Circuit Design</p>
                  <p>• MATLAB/Simulink</p>
                  <p>• Signal Processing</p>
                  <p>• Control Systems</p>
                  <p>• Microcontrollers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-12 bg-white p-8 rounded-xl border border-slate-200 animate-rotate-in">
            <h3 className="font-semibold text-slate-900 mb-4">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["Leadership", "Problem Solving", "Communication", "Time Management", "Teamwork", "Discipline", "Public Speaking", "Writing"].map((skill, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-3 rounded-lg border border-blue-200 text-center text-sm font-medium text-slate-700 hover:border-blue-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper 
        id="experience" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        bgColor="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in-up">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Internship with Expandable Section */}
            <ExpandableSection
              title="Software Intern"
              icon={<Briefcase className="w-6 h-6" />}
              borderColor="blue-600"
              animationType="slide-up"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-slate-600 font-medium">SN BOSE Intern, NIT Silchar</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                    June 2025 – July 2025
                  </span>
                </div>
                <div className="space-y-2 text-slate-700">
                  <p>✓ Developed full-stack "Startup Connect" platform for founder-investor collaboration</p>
                  <p>✓ Built responsive frontend using React 18, TypeScript, Vite, and TailwindCSS</p>
                  <p>✓ Created RESTful backend with Express.js, Zod validation, and JWT authentication</p>
                  <p>✓ Implemented real-time messaging with Socket.io for mutual interest-based interactions</p>
                  <p>✓ Designed scalable frontend architecture with Radix UI components and reusable patterns</p>
                  <p>✓ Wrote comprehensive technical documentation and testing coverage with Vitest</p>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </SectionWrapper>

      {/* Position of Responsibility */}
      <SectionWrapper 
        id="position-of-responsibility" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        bgColor="bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in-up">
            Position of Responsibility
          </h2>

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
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper 
        id="projects" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        bgColor="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in-up">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="animate-grid-to-focus group" style={{ animationDelay: "0s" }}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group-hover:animate-pulse-scale">
                <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-white text-center px-4">
                    <h3 className="text-xl font-bold">Startup Connect</h3>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Startup Connect
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    Full-stack platform for founder-investor collaboration with real-time messaging.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full group-hover:animate-bounce-in transition-all">React 18</span>
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full group-hover:animate-bounce-in transition-all" style={{ animationDelay: "0.1s" }}>Express</span>
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full group-hover:animate-bounce-in transition-all" style={{ animationDelay: "0.2s" }}>Socket.io</span>
                  </div>
                  <a href="https://github.com/mrvarshith17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="animate-grid-to-focus group" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                  <span className="text-white text-center px-4">
                    <h3 className="text-xl font-bold">Real Estate App</h3>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Real Estate Web Application
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    Full-stack for browsing, listing, and managing properties with JWT auth.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">React</span>
                    <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Node.js</span>
                    <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">MongoDB</span>
                  </div>
                  <a href="https://github.com/mrvarshith17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="animate-grid-to-focus group" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-cyan-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center">
                  <span className="text-white text-center px-4">
                    <h3 className="text-xl font-bold">E-commerce Store</h3>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    E-commerce Website
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    Complete MERN stack with cart, checkout, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">MERN</span>
                    <span className="text-xs font-medium bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">Redux</span>
                    <span className="text-xs font-medium bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">Payment</span>
                  </div>
                  <a href="https://github.com/mrvarshith17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="animate-grid-to-focus group" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-pink-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-pink-600 to-pink-400 flex items-center justify-center">
                  <span className="text-white text-center px-4">
                    <h3 className="text-xl font-bold">Enigma Machine</h3>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Enigma Machine - FPGA
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    WWII Enigma Machine hardware implementation using Verilog HDL on FPGA.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Verilog</span>
                    <span className="text-xs font-medium bg-pink-100 text-pink-700 px-3 py-1 rounded-full">FPGA</span>
                    <span className="text-xs font-medium bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Vivado</span>
                  </div>
                  <a href="https://github.com/mrvarshith17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="animate-bounce-in group" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-orange-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center">
                  <span className="text-white text-center px-4">
                    <h3 className="text-xl font-bold">Customer Churn</h3>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Customer Churn Analysis
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    Data analysis on 7,043 telecom records identifying 42% churn rate patterns.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Pandas</span>
                    <span className="text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Analytics</span>
                    <span className="text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Python</span>
                  </div>
                  <a href="https://github.com/mrvarshith17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="animate-bounce-in group" style={{ animationDelay: "0.5s" }}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-green-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center">
                  <span className="text-white text-center px-4">
                    <h3 className="text-xl font-bold">HR Analytics</h3>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    HR Analytics Dashboard
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    Interactive Power BI dashboard analyzing 500+ employee records with 28% attrition insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Power BI</span>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">ETL</span>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">Analytics</span>
                  </div>
                  <a href="https://github.com/mrvarshith17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 group">
                    View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Cocurricular Activities Section */}
      <SectionWrapper 
        id="cocurricular-activities" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        bgColor="bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center animate-fade-in-up">
            Cocurricular Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Table Tennis */}
            <div className="animate-bounce-in bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300" style={{ animationDelay: "0s" }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏓</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    District-level Table Tennis
                  </h3>
                  <p className="text-slate-600">
                    Competitive player demonstrating discipline, focus, and physical fitness. Consistently competing at district-level tournaments representing NIT Silchar.
                  </p>
                </div>
              </div>
            </div>

            {/* DSA Problems */}
            <div className="animate-bounce-in bg-white p-8 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl">💻</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    400+ DSA Problems Solved
                  </h3>
                  <p className="text-slate-600">
                    Solved 400+ Data Structures and Algorithms problems across multiple competitive programming platforms: Codeforces, LeetCode, GeeksforGeeks, and CodeChef.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm always interested in hearing about new projects and opportunities across web, hardware, and data domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:pundruvarshith17@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
            <a
              href="https://linkedin.com/in/pundru-varshith"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Pundru Varshith. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed & Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
