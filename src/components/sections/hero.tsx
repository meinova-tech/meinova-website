
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";
import HeroVisual from "@/components/sections/hero-visual";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative isolate flex min-h-[760px] items-center overflow-hidden py-24 sm:min-h-[820px] sm:py-28 ${language === "ta" ? "font-[var(--font-noto-tamil)]" : ""
        }`}
    >
      {/* Aurora background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,0.13),transparent_55%)]" />

        <motion.div
          className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[140px]"
          animate={
            reduceMotion
              ? {}
              : {
                x: [0, -70, 0],
                y: [0, 55, 0],
                scale: [1, 1.2, 1],
              }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[140px]"
          animate={
            reduceMotion
              ? {}
              : {
                x: [0, 70, 0],
                y: [0, -50, 0],
                scale: [1, 1.15, 1],
              }
          }
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[42%] top-[38%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]"
          animate={
            reduceMotion
              ? {}
              : {
                x: [0, 55, -25, 0],
                y: [0, -35, 30, 0],
              }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        {/* Decorative light trails */}
        <div className="absolute left-0 top-[35%] h-px w-full bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        <div className="absolute left-0 top-[70%] h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        {/* Floating particles */}
        {[
          "left-[15%] top-[24%]",
          "left-[78%] top-[20%]",
          "left-[68%] top-[66%]",
          "left-[35%] top-[78%]",
          "left-[90%] top-[46%]",
        ].map((position, index) => (
          <motion.span
            key={position}
            className={`absolute ${position} h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(34,211,238,0.45)]`}
            animate={
              reduceMotion
                ? {}
                : {
                  opacity: [0.25, 1, 0.25],
                  scale: [0.7, 1.5, 0.7],
                  y: [0, -16, 0],
                }
            }
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container-main relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          {/* Hero text */}
          <div className="relative z-10">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-5 py-2.5 text-sm text-[var(--muted)] shadow-[0_0_35px_rgba(139,92,246,0.08)] backdrop-blur-xl"
            >
              <Sparkles size={15} className="text-cyan-400" />
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.heading}
              <br />
              <span className="gradient-text relative inline-block">
                {t.headingAccent}
                <span className="absolute -bottom-3 left-0 h-[3px] w-2/3 rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent opacity-70" />
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-11 flex flex-wrap gap-4"
            >
              <Link
                href="/#contact"
                className="group flex items-center gap-3 rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(124,58,237,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_45px_rgba(124,58,237,0.4)]"
              >
                {t.primaryButton}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#services"
                className="group flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-8 py-4 font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {t.secondaryButton}
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* Animated visual */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Services strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 mt-16 flex flex-wrap items-center gap-x-9 gap-y-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] sm:mt-24"
        >
          {t.services.map((service) => (
            <span
              key={service}
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[var(--foreground)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
