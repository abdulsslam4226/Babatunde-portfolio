import { Brain, Code2, Workflow, Wrench, Database, Layers } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI & LLM Technologies",
    color: "cyan",
    skills: [
      "Prompt Engineering",
      "Generative AI",
      "OpenAI Codex",
      "GPT-4",
      "Claude 3.5",
      "Gemini",
      "AI-Assisted Development",
      "LLM Optimization",
      "AI Workflow Design",
    ],
  },
  {
    icon: Code2,
    title: "Development",
    color: "blue",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Full-Stack Web Dev",
      "Rapid Prototyping",
    ],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    color: "indigo",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Vercel",
      "Railway",
      "Database Design",
      "Cloud Deployment",
      "API Integration",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    color: "purple",
    skills: [
      "n8n",
      "Webhook Architecture",
      "Business Process Automation",
      "Low-Code / No-Code",
      "Third-Party API Bridges",
      "Data Pipeline Design",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    color: "violet",
    skills: [
      "Cursor",
      "GitHub Copilot",
      "Replit Agent",
      "Claude Engineer",
      "VS Code",
      "Git & GitHub",
      "Antigravity",
    ],
  },
  {
    icon: Layers,
    title: "Engineering Practices",
    color: "teal",
    skills: [
      "AI-Driven Debugging",
      "Vibe Coding",
      "Code Refactoring",
      "Technical Debt Reduction",
      "Mobile-First Design",
      "Tailwind CSS",
    ],
  },
];

const colorMap: Record<string, { card: string; icon: string; tag: string }> = {
  cyan: {
    card: "hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]",
    icon: "text-cyan-400",
    tag: "bg-cyan-500/8 border-cyan-500/20 text-cyan-300",
  },
  blue: {
    card: "hover:border-blue-500/30 hover:bg-blue-500/[0.04]",
    icon: "text-blue-400",
    tag: "bg-blue-500/8 border-blue-500/20 text-blue-300",
  },
  indigo: {
    card: "hover:border-indigo-500/30 hover:bg-indigo-500/[0.04]",
    icon: "text-indigo-400",
    tag: "bg-indigo-500/8 border-indigo-500/20 text-indigo-300",
  },
  purple: {
    card: "hover:border-purple-500/30 hover:bg-purple-500/[0.04]",
    icon: "text-purple-400",
    tag: "bg-purple-500/8 border-purple-500/20 text-purple-300",
  },
  violet: {
    card: "hover:border-violet-500/30 hover:bg-violet-500/[0.04]",
    icon: "text-violet-400",
    tag: "bg-violet-500/8 border-violet-500/20 text-violet-300",
  },
  teal: {
    card: "hover:border-teal-500/30 hover:bg-teal-500/[0.04]",
    icon: "text-teal-400",
    tag: "bg-teal-500/8 border-teal-500/20 text-teal-300",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#030712] relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-700 rounded-full filter blur-[160px] opacity-[0.06]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-num mb-2">02 / Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
          <p className="text-slate-400 mt-4 max-w-xl">
            A broad toolkit spanning AI, full-stack development, automation, and
            modern cloud infrastructure.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, title, color, skills }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`glass rounded-2xl p-6 transition-all duration-300 ${c.card}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-lg bg-white/5 ${c.icon}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-full border font-medium ${c.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
