import Image from "next/image";
import { Cpu, Zap, Target, Globe } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "AI-First Thinking",
    desc: "Every project starts with the question: how can AI accelerate this?",
  },
  {
    icon: Zap,
    title: "Rapid Builder",
    desc: "Cutting development cycles from weeks to days using intelligent tooling.",
  },
  {
    icon: Target,
    title: "Problem-Focused",
    desc: "Understand the problem first. Build what solves it — nothing more.",
  },
  {
    icon: Globe,
    title: "Local Impact",
    desc: "Building products tailored for the Nigerian and African market.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-num mb-2">01 / About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Turning Ideas Into{" "}
            <span className="gradient-text">Working Solutions</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — text */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a builder who enjoys transforming ideas into functional
              products. My journey into technology has been driven by curiosity,
              continuous learning, and a genuine desire to solve real problems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Over the past few years I&apos;ve developed skills in web
              development, automation, AI-assisted software creation, and prompt
              engineering. I enjoy working at the intersection of software and
              artificial intelligence — where modern tools can accelerate
              development and unlock new possibilities.
            </p>
            <p className="text-slate-400 leading-relaxed">
              One of my core strengths is{" "}
              <span className="text-cyan-400 font-medium">persistence</span>.
              Whether it&apos;s debugging a stubborn issue, learning a new
              technology, or refining a product idea, I stay focused until I
              find a solution that actually works.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My long-term goal is to become a highly skilled AI Prompt
              Engineer and AI-Augmented Software Developer, building products
              that create meaningful impact across industries — starting from
              Lagos.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: "3+", label: "Projects Shipped" },
                { num: "70%", label: "Faster Delivery" },
                { num: "90%", label: "Debt Reduction" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {s.num}
                  </div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo + highlights */}
          <div className="space-y-6">
            {/* Profile photo */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Gradient border wrapper */}
              <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/20">
                <div className="rounded-2xl overflow-hidden w-72 h-80 lg:w-full lg:h-80 bg-[#0f172a]">
                  <Image
                    src="/profile.jpeg"
                    alt="Babatunde Abdulsalam Kehinde"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                {/* Available badge on photo */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#030712]/90 border border-cyan-500/40 backdrop-blur-sm whitespace-nowrap">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  <span className="text-cyan-400 text-xs font-medium">Available for hire</span>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-xl p-4 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                  <p className="text-white text-sm font-semibold mb-1">
                    {title}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
