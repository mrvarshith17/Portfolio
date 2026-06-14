import Header from "@/components/Header";

export default function Activities() {
  return (
    <div className="bg-white">
      <Header />
      <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center bg-slate-50">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-5xl font-bold text-slate-900 mb-8 text-center">
            Cocurricular Activities
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Table Tennis */}
            <div className="animate-bounce-in bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏓</div>
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
            <div className="animate-bounce-in bg-white p-8 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">💻</div>
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
      </section>
    </div>
  );
}
