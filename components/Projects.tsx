import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "FixMate",
    tagline: "Home Service Marketplace",
    description:
      "A digital web platform that connects users with trusted, verified local home service providers. Features include service discovery, provider search, booking management, secure payments via Paystack, ratings & reviews, and an admin dashboard.",
    longDesc:
      "Designed and developed the full platform from scratch using AI-augmented workflows. Deployed OpenAI Codex and Cursor to rapidly prototype frontend structures and generate secure database schemas, cutting setup time by 70%.",
    tech: ["React", "Next.js", "Node.js", "Supabase", "PostgreSQL", "Prisma", "Paystack", "Tailwind CSS", "Railway", "Vercel"],
    badge: "Featured",
    badgeColor: "cyan",
    liveUrl: "https://fix-mate-two.vercel.app/",
    githubUrl: "https://github.com/abdulsslam4226",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "cyan",
    featured: true,
  },
  {
    name: "NaijaFit",
    tagline: "Fitness & Health Tracker",
    description:
      "A localized, high-performance fitness web application tailored to lifestyle and health tracking for the Nigerian market. Built with a mobile-first approach and responsive UI components.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel", "Git"],
    badge: "Deployed",
    badgeColor: "purple",
    liveUrl: "https://naijafit-psi.vercel.app/",
    githubUrl: "https://github.com/abdulsslam4226",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accent: "purple",
    featured: false,
  },
  {
    name: "ClickForge",
    tagline: "AI Automation Agency Brand",
    description:
      "A high-end, minimal, and futuristic brand identity concept focused on showcasing cutting-edge AI and automation services. Establishes a premium tech-startup aesthetic using automated design generation frameworks.",
    tech: ["Prompt Engineering", "AI Design", "Brand Strategy", "Automation"],
    badge: "Concept",
    badgeColor: "violet",
    liveUrl: "#",
    githubUrl: "https://github.com/abdulsslam4226",
    gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
    accent: "violet",
    featured: false,
  },
];

const badgeColors: Record<string, string> = {
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  purple: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  violet: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

const accentColors: Record<string, string> = {
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  purple: "border-purple-500/20 hover:border-purple-500/40",
  violet: "border-violet-500/20 hover:border-violet-500/40",
};

const techColors: Record<string, string> = {
  cyan: "bg-cyan-500/8 border-cyan-500/20 text-cyan-300/80",
  purple: "bg-purple-500/8 border-purple-500/20 text-purple-300/80",
  violet: "bg-violet-500/8 border-violet-500/20 text-violet-300/80",
};

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#030712] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-cyan-700 rounded-full filter blur-[180px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-num mb-2">03 / Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
          <p className="text-slate-400 mt-4 max-w-xl">
            Products built with AI-augmented workflows, rapid prototyping, and a
            focus on shipping working software fast.
          </p>
        </div>

        {/* Featured project */}
        <div
          className={`glass rounded-2xl overflow-hidden border ${accentColors[featured.accent]} mb-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5`}
        >
          {/* Gradient top bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${featured.gradient.replace("20", "60").replace("10", "40").replace("to-transparent", "to-blue-500/60")}`} />

          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {featured.name}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-semibold ${badgeColors[featured.badgeColor]}`}
                  >
                    {featured.badge}
                  </span>
                </div>
                <p className="text-cyan-400 font-mono text-sm">
                  {featured.tagline}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 text-sm transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={featured.liveUrl}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/25 text-sm transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>

            <p className="text-slate-300 mb-3 leading-relaxed">
              {featured.description}
            </p>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {featured.longDesc}
            </p>

            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className={`text-xs px-3 py-1 rounded-full border font-medium ${techColors[featured.accent]}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project) => (
            <div
              key={project.name}
              className={`glass rounded-2xl overflow-hidden border ${accentColors[project.accent]} transition-all duration-300 hover:shadow-lg hover:shadow-${project.accent}-500/5`}
            >
              <div className={`h-0.5 w-full bg-gradient-to-r ${project.gradient.replace("to-transparent", `to-${project.accent}-600/40`)}`} />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${badgeColors[project.badgeColor]}`}
                      >
                        {project.badge}
                      </span>
                    </div>
                    <p
                      className={`font-mono text-xs ${
                        project.accent === "purple"
                          ? "text-purple-400"
                          : "text-violet-400"
                      }`}
                    >
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-0.5 rounded-full border ${techColors[project.accent]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/abdulsslam4226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 group"
          >
            View all projects on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
