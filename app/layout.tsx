import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Babatunde Abdulsalam Kehinde — AI-Augmented Developer",
  description:
    "AI-Augmented Software Developer, Prompt Engineer, and Workflow Automation Specialist based in Lagos, Nigeria. Building faster with AI.",
  keywords: [
    "AI Developer",
    "Prompt Engineer",
    "Workflow Automation",
    "Full-Stack Developer",
    "Lagos Nigeria",
    "n8n",
    "OpenAI",
    "Next.js",
  ],
  authors: [{ name: "Babatunde Abdulsalam Kehinde" }],
  openGraph: {
    title: "Babatunde Abdulsalam Kehinde — AI-Augmented Developer",
    description:
      "AI-Augmented Software Developer, Prompt Engineer, and Workflow Automation Specialist. Building faster with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#030712]`}>
        {children}
      </body>
    </html>
  );
}
