
"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Lightbulb,
  Palette,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import Reveal from "@/components/animations/reveal";
import translations from "@/lib/translations";

const capabilityIcons = [
  Palette,
  Code2,
  BrainCircuit,
  Rocket,
  TrendingUp,
  Workflow,
];

export default function About() {
  const { language } = useLanguage();
  const content = translations[language].about;

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-[var(--border)] py-24 sm:py-32"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-[120px] [animation-delay:1500ms]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]" />
      </div>

      <div className="container-main">
        {/* INTRO */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-500">
              <Sparkles size={15} />
              {content.eyebrow}
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {content.title}{" "}
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                {content.titleAccent}
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.description}
            </p>
          </div>
        </Reveal>

        {/* STORY */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-violet-500/15 via-[var(--card)] to-cyan-500/10 p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-violet-400/20" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-cyan-400/20" />

              <div className="relative">
                <span className="text-sm font-medium uppercase tracking-[0.25em] text-violet-500">
                  {content.storyLabel}
                </span>

                <h3 className="mt-7 text-3xl font-semibold leading-tight sm:text-4xl">
                  {content.storyTitle}
                </h3>

                <p className="mt-6 max-w-lg leading-8 text-[var(--muted)]">
                  {content.storyDescription}
                </p>
              </div>

              <div className="relative mt-10 flex items-center justify-between">
                <span className="text-sm text-[var(--muted)]">
                  {content.tagline}
                </span>
                <Sparkles className="text-violet-500" size={24} />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="group h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Lightbulb size={24} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
                  {content.visionLabel}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {content.visionTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {content.visionDescription}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Target size={24} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
                  {content.missionLabel}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {content.missionTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {content.missionDescription}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-32">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
                  {content.capabilitiesLabel}
                </p>

                <h3 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  {content.capabilitiesTitle}
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                {content.capabilitiesDescription}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.capabilities.map((item, index) => {
              const Icon = capabilityIcons[index];

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10">
                    <span className="absolute right-6 top-6 text-xs font-medium text-[var(--muted)] opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-cyan-500/15 text-violet-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={23} />
                    </div>

                    <h4 className="text-xl font-semibold">{item.title}</h4>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-32">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
                {content.processLabel}
              </p>

              <h3 className="text-3xl font-semibold sm:text-5xl">
                {content.processTitle}
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                {content.processDescription}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.12}>
                <div className="group relative h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-4xl font-semibold tracking-tight text-violet-500/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {index !== content.process.length - 1 && (
                      <ArrowDownRight className="text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-violet-500 sm:hidden lg:block" />
                    )}
                  </div>

                  <h4 className="text-xl font-semibold">{item.title}</h4>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <Reveal>
          <div className="relative mt-32 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/15 via-[var(--card)] to-cyan-500/15 px-7 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-20 -top-32 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-500">
                <Zap size={26} />
              </div>

              <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                {content.ctaTitle}
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
                {content.ctaDescription}
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
              >
                {content.ctaButton}
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
