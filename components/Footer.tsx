import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="gradient-text">BAK</span>
              <span className="text-slate-600 font-mono text-sm">.dev</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              AI-Augmented Developer building faster with intelligent tools.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-4">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href="mailto:Abdulsalambabatunde52@gmail.com"
                className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://github.com/abdulsslam4226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdulsalam-babatunde-b2151731b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Built with
            <Heart className="w-3.5 h-3.5 text-red-500/70" />
            by Babatunde Abdulsalam Kehinde
          </p>
          <p className="text-slate-700 text-sm font-mono">
            © {new Date().getFullYear()} · Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
