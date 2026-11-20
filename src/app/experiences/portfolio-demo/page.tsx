"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Sparkles,
  Code2,
  Palette,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Lumina",
    category: "Brand & Web Design",
    description:
      "A digital experience for a modern creative brand, built around simplicity, atmosphere and storytelling.",
    color: "from-violet-500/30 to-fuchsia-500/10",
    icon: Palette,
  },
  {
    number: "02",
    title: "Orbit",
    category: "Web Application",
    description:
      "A dashboard concept that turns complex information into a clean, intuitive interface.",
    color: "from-cyan-500/30 to-blue-500/10",
    icon: Layers,
  },
  {
    number: "03",
    title: "Monogram",
    category: "Creative Development",
    description:
      "An experimental digital space blending typography, motion and interactive details.",
    color: "from-amber-500/30 to-orange-500/10",
    icon: Code2,
  },
];

const skills = [
  "UI / UX Design",
  "Web Development",
  "React",
  "Next.js",
  "TypeScript",
  "Brand Identity",
  "Motion Design",
  "Creative Coding",
];

export default function PortfolioDemo() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#08080c] text-white">

      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.06] bg-[#08080c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-medium text-white/80 transition-all hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white sm:gap-2 sm:px-4 sm:text-sm"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>MeiNova</span>
          </Link>

          {/* Brand */}
          <a
            href="#home"
            className="shrink-0 text-base font-bold tracking-tight sm:text-lg"
          >
            Alex<span className="text-violet-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
          </div>

          {/* Contact button */}
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-100 transition hover:border-violet-400/60 hover:bg-violet-500/20 sm:px-4 sm:text-sm"
          >
            Let&apos;s talk
            <ArrowUpRight className="ml-1" size={14} />
          </a>
        </div>
      </nav>

      {/* Demo badge */}
      <div className="fixed bottom-4 left-3 z-40 max-w-[calc(100vw-24px)] rounded-full border border-violet-400/20 bg-[#08080c]/85 px-3 py-2 text-[9px] tracking-[0.12em] text-violet-300 backdrop-blur-xl sm:left-5 sm:text-[10px]">
        MEINOVA · PORTFOLIO CONCEPT
      </div>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center px-5 pb-28 pt-32 sm:px-6 sm:pb-24 sm:pt-32"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[110px] sm:h-96 sm:w-96 sm:blur-[140px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-white/60 sm:mb-8 sm:px-4 sm:text-xs">
              <Sparkles size={14} className="text-violet-400" />
              Designer & Developer
            </div>

            <p className="mb-3 text-sm text-white/40 sm:mb-4">
              Hello, I&apos;m Alex Morgan.
            </p>

            <h1 className="max-w-5xl text-[clamp(3rem,10vw,7rem)] font-bold leading-[1.02] tracking-[-0.06em]">
              I create
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                digital things.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:mt-8 sm:text-lg sm:leading-8">
              I turn ideas into meaningful digital experiences through design,
              technology and a little bit of imagination.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold !text-[#08080c] transition hover:bg-violet-200 sm:px-6"
              >
                Explore my work
                <ArrowUpRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#08080c]"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/[0.06] hover:text-white sm:px-6"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Floating card - desktop only */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [2, 0, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 right-4 hidden w-64 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl lg:block"
          >
            <div className="mb-3 h-32 rounded-xl bg-gradient-to-br from-violet-500/50 via-fuchsia-500/30 to-cyan-500/40" />
            <p className="text-xs text-white/40">Currently exploring</p>
            <p className="mt-1 text-sm font-medium text-white">
              Design × Technology
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator - centered to avoid demo badge */}
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs text-white/35 transition hover:text-white/70"
        >
          <ArrowDown size={14} />
          Scroll to explore
        </motion.a>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">
              A little about me
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Curiosity drives
              <br />
              <span className="text-white/35">everything I create.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              I enjoy bringing ideas to life, solving problems through thoughtful
              design, and building digital experiences that feel effortless to
              use. I believe the best work lives where creativity and purpose
              meet.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Every project is an opportunity to learn something new, explore
              something different and create something worth remembering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">
              Selected explorations
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Things I&apos;ve imagined.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
              A collection of sample projects demonstrating how ideas can become
              beautiful digital experiences.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/15"
                >
                  <div
                    className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color} sm:h-64`}
                  >
                    <div className="absolute inset-0 bg-[#08080c]/40" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-24 sm:w-24">
                      <Icon size={32} strokeWidth={1.3} />
                    </div>

                    <span className="absolute left-4 top-4 text-[10px] tracking-widest text-white/40 sm:left-5 sm:top-5 sm:text-xs">
                      PROJECT {project.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="absolute right-4 top-4 text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white sm:right-5 sm:top-5"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-xs text-violet-300/70">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-6 text-xs text-white/25">
                      Concept project · Portfolio showcase
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-white/[0.06] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">
            What I work with
          </p>

          <h2 className="mb-8 text-3xl font-bold sm:mb-10 sm:text-4xl">
            Tools & capabilities.
          </h2>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white/60 transition-colors hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white sm:px-5 sm:py-3 sm:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[110px] sm:h-96 sm:w-96 sm:blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <Sparkles className="mx-auto mb-6 text-violet-400" size={24} />

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-violet-400">
            Have something in mind?
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-7xl">
            Let&apos;s create
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              something great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
            Have an idea, a project or just want to connect? I&apos;d love to
            hear from you.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-3.5 text-sm font-semibold text-violet-100 transition hover:border-violet-400/60 hover:bg-violet-500/20 sm:mt-10 sm:px-7 sm:py-4"
          >
            <Mail size={16} />
            Contact MeiNova
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/30 sm:text-sm">
            Alex Morgan <span className="text-violet-400">©</span> 2026
          </p>

          <div className="flex gap-5">
            <Link
              href="/#contact"
              aria-label="Contact"
              className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              <Mail size={18} />
            </Link>

            <Link
              href="/#contact"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-[#0A66C2]"
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="/#contact"
              aria-label="GitHub"
              className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              <FaGithub size={18} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}