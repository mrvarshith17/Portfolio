import Header from "@/components/Header";
import { Code2, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">
            About Me
          </h1>

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
      </section>
    </div>
  );
}
