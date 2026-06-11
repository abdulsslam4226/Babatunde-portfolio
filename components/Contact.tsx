"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, Copy, Check } from "lucide-react";

const EMAIL = "Abdulsalambabatunde52@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-700 rounded-full filter blur-[180px] opacity-[0.07]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-cyan-700 rounded-full filter blur-[200px] opacity-[0.04]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-num mb-2">06 / Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — message */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  Open to Opportunities
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Whether you have a project in mind, want to collaborate, have a
                  job opportunity, or just want to talk about AI and automation —
                  my inbox is always open.
                </p>
                <p className="text-slate-500 leading-relaxed text-sm">
                  I respond to all messages. If you don&apos;t hear back within 24
                  hours, feel free to follow up.
                </p>
              </div>
            </div>

            {/* What I'm open to */}
            <div className="glass rounded-xl p-6 border border-white/5">
              <p className="text-slate-400 text-sm mb-4 font-medium">Currently open to:</p>
              <div className="space-y-2.5">
                {[
                  "Full-time developer roles (remote or Lagos-based)",
                  "Freelance / contract projects",
                  "AI & automation consulting",
                  "Collaboration on product ideas",
                  "Mentorship & community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact cards */}
          <div className="space-y-4">
            {/* Email — copy to clipboard */}
            <button
              onClick={copyEmail}
              className="group w-full flex items-center gap-5 glass rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] transition-all duration-300 text-left"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold mb-0.5">Email</p>
                <p className="text-slate-400 text-sm truncate">{EMAIL}</p>
              </div>
              <div className="flex-shrink-0 transition-all duration-200">
                {copied ? (
                  <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-medium">
                    <Check className="w-4 h-4" />
                    Copied!
                  </div>
                ) : (
                  <Copy className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                )}
              </div>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/abdulsslam4226"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/[0.03] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-0.5">GitHub</p>
                <p className="text-slate-400 text-sm">github.com/abdulsslam4226</p>
              </div>
              <Send className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdulsalam-babatunde-b2151731b"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-0.5">LinkedIn</p>
                <p className="text-slate-400 text-sm">
                  linkedin.com/in/abdulsalam-babatunde
                </p>
              </div>
              <Send className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 glass rounded-2xl p-6 border border-white/5">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-semibold mb-0.5">Location</p>
                <p className="text-slate-400 text-sm">Lagos, Nigeria 🇳🇬</p>
                <p className="text-slate-600 text-xs mt-0.5">
                  Open to remote work globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
