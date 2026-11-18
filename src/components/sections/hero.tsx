
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      className={`relative isolate flex min-h-[680px] items-center overflow-hidden py-24 ${language === "ta" ? "font-[var(--font-noto-tamil)]" : ""
        }`}
    >
      {/* Full-width background glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{
          x: [0, 25, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Centered content */}
      <div className="container-main relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl md:text-6xl"
          >
            {t.heading}
            <br />
            <span className="gradient-text">
              {t.headingAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/#contact"
              className="group flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[var(--primary-hover)]"
            >
              {t.primaryButton}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#services"
              className="rounded-full border border-[var(--border)] px-7 py-4 font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {t.secondaryButton}
              <ArrowUpRight size={16} className="ml-2 inline" />
            </Link>
          </motion.div>
        </div>

        {/* Services strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]"
        >
          {t.services.map((service) => (
            <span key={service} className="break-words">
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
