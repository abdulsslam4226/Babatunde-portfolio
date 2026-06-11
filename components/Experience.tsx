import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "10Alytics Business",
    role: "AI-Assisted Developer",
    type: "Project-Based",
    period: "2025 – May 2026",
    location: "Lagos, Nigeria",
    bullets: [
      "Built, refactored, and deployed production-ready web applications using advanced Vibe Coding techniques in Cursor, significantly reducing traditional engineering cycles.",
      "Integrated OpenAI Codex and Claude Engineer to debug complex Python logic, optimize algorithms, and refactor legacy code — achieving a documented 90% reduction in technical debt.",
      "Leveraged Antigravity tools to execute high-velocity coding sessions and manage rapid application deployment pipelines.",
      "Designed and executed sophisticated n8n workflow automations to bridge third-party APIs and streamline data handling across services.",
      "Collaborated dynamically with autonomous AI agents to test, iterate, and patch software features rapidly with minimal manual coding overhead.",
    ],
    tags: ["Cursor", "OpenAI Codex", "Claude Engineer", "n8n", "Python", "Antigravity"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#030712] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-700 rounded-full filter blur-[180px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-num mb-2">04 / Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="sm:pl-14 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full glass border border-cyan-500/30 glow-cyan">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-8 border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                        <span className="ml-2 text-xs font-normal text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="hidden sm:block text-slate-700">·</span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-cyan-500/20 to-transparent mb-6" />

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/8 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Independent work entry */}
            <div className="sm:pl-14 relative">
              <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full glass border border-purple-500/30">
                <Briefcase className="w-4 h-4 text-purple-400" />
              </div>
              <div className="glass rounded-2xl p-8 border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Independent Developer
                    </h3>
                    <p className="text-purple-400 font-semibold">Self-Directed Projects</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    2025 – Present
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-purple-500/20 to-transparent mb-5" />
                <ul className="space-y-3">
                  {[
                    "Built and deployed FixMate — a full-stack home service marketplace with payments and admin dashboard.",
                    "Engineered NaijaFit — a localized fitness tracking web application optimized for the Nigerian market.",
                    "Developed ClickForge — an AI and automation services brand identity concept.",
                    "Continuously building AI-powered tools and automation workflows as personal research projects.",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
