import { GraduationCap, Award, BookOpen } from "lucide-react";

const certifications = [
  {
    icon: GraduationCap,
    title: "Web Development & AI-Assisted Software Engineering",
    institution: "10Alytics Business Cohort",
    year: "Completed: May 2026",
    desc: "Comprehensive training covering modern web development practices, AI-augmented development workflows, full-stack engineering, and production deployment.",
    color: "cyan",
    tags: ["Full-Stack Dev", "AI-Assisted Dev", "Web Engineering", "Production Deployment"],
  },
  {
    icon: Award,
    title: "Certified AI & Web Development Practitioner",
    institution: "10Alytics Business",
    year: "2025",
    desc: "Professional certification validating competency in AI tools, web development practices, and the application of modern AI ecosystems to software engineering workflows.",
    color: "purple",
    tags: ["AI Certification", "Web Development", "Professional Practice"],
  },
];

const currentlyLearning = [
  { label: "Advanced Prompt Engineering", progress: 75 },
  { label: "AI Agent Architecture", progress: 55 },
  { label: "Production n8n Workflows", progress: 65 },
  { label: "TypeScript & Advanced React", progress: 70 },
];

const colorMap: Record<string, { border: string; icon: string; tag: string; bar: string }> = {
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    icon: "text-cyan-400 bg-cyan-500/10",
    tag: "bg-cyan-500/8 border-cyan-500/20 text-cyan-300",
    bar: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-500/40",
    icon: "text-purple-400 bg-purple-500/10",
    tag: "bg-purple-500/8 border-purple-500/20 text-purple-300",
    bar: "bg-gradient-to-r from-purple-500 to-violet-500",
  },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-num mb-2">05 / Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Certification cards */}
          <div className="space-y-5">
            {certifications.map(({ icon: Icon, title, institution, year, desc, color, tags }) => {
              const c = colorMap[color];
              return (
                <div
                  key={title}
                  className={`glass rounded-2xl p-7 border transition-all duration-300 ${c.border}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl flex-shrink-0 ${c.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold leading-snug mb-1">
                        {title}
                      </h3>
                      <p className="text-slate-400 text-sm">{institution}</p>
                      <p className="text-slate-600 text-xs mt-0.5 font-mono">{year}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-0.5 rounded-full border ${c.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Currently learning */}
          <div className="glass rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl text-teal-400 bg-teal-500/10">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Currently Learning</h3>
                <p className="text-slate-500 text-sm">Active skill development</p>
              </div>
            </div>

            <div className="space-y-5">
              {currentlyLearning.map(({ label, progress }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{label}</span>
                    <span className="text-slate-500 text-xs font-mono">{progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-slate-500 text-xs leading-relaxed">
                Continuously expanding my AI and full-stack development skills through
                hands-on projects, online resources, and building in public.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
