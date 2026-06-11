import { ArrowDown, Github, Linkedin, Mail, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-600 rounded-full filter blur-[140px] opacity-[0.12] animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-700 rounded-full filter blur-[140px] opacity-[0.12] animate-blob delay-2000" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-700 rounded-full filter blur-[140px] opacity-[0.07] animate-blob delay-4000" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial fade at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, #030712 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/8 text-cyan-400 text-sm font-medium mb-10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 animate-fade-up">
          <span className="block text-white mb-1 leading-tight">
            Babatunde
          </span>
          <span className="block gradient-text leading-tight">
            Abdulsalam Kehinde
          </span>
        </h1>

        {/* Divider line with title */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up delay-100">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-cyan-500/60" />
          <p className="text-slate-400 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
            AI-Augmented Developer · Prompt Engineer · Automation Builder
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-cyan-500/60" />
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
          I build faster with AI — not just code, but complete solutions.
          Specializing in generative AI workflows, full-stack development, and
          automation systems that turn ideas into working products.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 animate-fade-up delay-300">
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              View My Projects
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:scale-105 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-20 animate-fade-up delay-400">
          <a
            href="mailto:Abdulsalambabatunde52@gmail.com"
            className="group flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm hidden sm:block">Email</span>
          </a>
          <div className="h-4 w-px bg-slate-700" />
          <a
            href="https://github.com/abdulsslam4226"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm hidden sm:block">GitHub</span>
          </a>
          <div className="h-4 w-px bg-slate-700" />
          <a
            href="https://www.linkedin.com/in/abdulsalam-babatunde-b2151731b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm hidden sm:block">LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-slate-600 animate-fade-in delay-500">
          <span className="text-xs font-mono uppercase tracking-widest">
            scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
