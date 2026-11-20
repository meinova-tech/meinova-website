"use client";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

import Reveal from "@/components/animations/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";

import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const icons = [Lightbulb, PenTool, Code2, Rocket];

export default function Process() {
  const { language } = useLanguage();
  const t = translations[language].process;

  return (
    <section
      className={`relative mt-24 overflow-hidden pb-10 sm:mt-32 ${
        language === "ta" ? "font-[var(--font-noto-tamil)]" : ""
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[120px]" />

      {/* Heading */}
      <Reveal>
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            {t.eyebrow}
          </p>

          <h3 className="font-display text-3xl font-bold sm:text-4xl">
            {t.title}{" "}
            <span className="gradient-text">{t.titleAccent}</span>
          </h3>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[var(--muted)]">
            {t.description}
          </p>
        </div>
      </Reveal>

      {/* Timeline */}
      <StaggerContainer className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Connecting line */}
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-cyan-400/0 lg:block" />

        {t.steps.map((step, index) => {
          const Icon = icons[index];

          return (
            <StaggerItem key={index}>
              <div className="group relative text-center">

                {/* Icon */}
                <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-violet-400/60 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]">

                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-violet-500/0 transition-colors duration-500 group-hover:bg-violet-500/[0.08]" />
                </div>

                {/* Number */}
                <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-violet-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title */}
                <h4 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-violet-300">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="mx-auto max-w-xs text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>

              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}