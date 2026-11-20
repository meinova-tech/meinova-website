
"use client";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

import Reveal from "@/components/animations/reveal";
import {
    StaggerContainer,
    StaggerItem,
} from "@/components/animations/stagger-container";

import {
    ArrowUpRight,
    Heart,
    Sparkles,
    Layers3,
} from "lucide-react";

export default function Experiences() {
    const { language } = useLanguage();
    const t = translations[language].experiences;

    return (
        <section
            id="experiences"
            className={`relative overflow-hidden py-24 sm:py-32 ${language === "ta"
                ? "font-[var(--font-noto-tamil)]"
                : ""
                }`}
        >
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[130px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section heading */}
                <Reveal>
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                            {t.eyebrow}
                        </p>

                        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            {t.title}{" "}
                            <span className="gradient-text">
                                {t.titleAccent}
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl leading-7 text-[var(--muted)]">
                            {t.description}
                        </p>
                    </div>
                </Reveal>

                {/* Experience cards */}
                <StaggerContainer className="grid gap-8 lg:grid-cols-2">

                    {/* Portfolio experience */}
                    <StaggerItem>
                        <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_80px_rgba(139,92,246,0.12)]">

                            {/* Portfolio preview */}
                            <div className="relative h-[300px] overflow-hidden bg-[#09090f] sm:h-[360px]">

                                {/* Glow */}
                                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

                                <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

                                {/* Mock browser */}
                                <div className="absolute inset-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e17] shadow-2xl sm:inset-8">

                                    {/* Browser bar */}
                                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                                        <div className="h-2 w-2 rounded-full bg-red-400/70" />
                                        <div className="h-2 w-2 rounded-full bg-yellow-400/70" />
                                        <div className="h-2 w-2 rounded-full bg-green-400/70" />

                                        <div className="mx-auto rounded-md bg-white/[0.05] px-5 py-1 text-[9px] tracking-wider text-white/30">
                                            yourname.design
                                        </div>
                                    </div>

                                    {/* Portfolio content */}
                                    <div className="relative flex h-full flex-col justify-center px-6 pb-10 sm:px-10">

                                        <div className="mb-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-violet-300">
                                            <Sparkles size={11} />
                                            Creative portfolio
                                        </div>

                                        <p className="text-xs text-white/40">
                                            Hello, I&apos;m
                                        </p>

                                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                                            Your Name
                                            <span className="text-violet-400">.</span>
                                        </h3>

                                        <p className="mt-3 max-w-xs text-xs leading-6 text-white/50 sm:text-sm">
                                            Designer. Developer.
                                            <br />
                                            Creator of meaningful experiences.
                                        </p>

                                        <div className="mt-6 flex gap-2">
                                            <div className="rounded-full bg-violet-500 px-4 py-2 text-[9px] font-medium text-white">
                                                Explore my work
                                            </div>

                                            <div className="rounded-full border border-white/10 px-4 py-2 text-[9px] text-white/50">
                                                About me
                                            </div>
                                        </div>

                                        {/* Floating visual card */}
                                        <div className="absolute right-5 top-8 hidden rotate-6 rounded-xl border border-white/10 bg-white/[0.06] p-3 shadow-xl backdrop-blur-xl sm:block">
                                            <div className="h-16 w-20 rounded-lg bg-gradient-to-br from-violet-500/70 via-fuchsia-500/40 to-cyan-400/50" />

                                            <p className="mt-2 text-[8px] text-white/50">
                                                Selected work
                                            </p>
                                        </div>

                                        <div className="absolute bottom-12 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300">
                                            <Layers3 size={19} />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </div>

                            {/* Card content */}
                            <div className="p-7 sm:p-9">

                                <div className="mb-5 flex items-center justify-between">
                                    <span className="rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400">
                                        {t.portfolio.label}
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                    {t.portfolio.title}
                                </h3>

                                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">
                                    {t.portfolio.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {t.portfolio.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors group-hover:border-violet-400/20"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="experiences/portfolio-demo"
                                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-all hover:gap-3"
                                >
                                    {t.portfolio.button}
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Wedding experience */}
                    <StaggerItem>
                        <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:-translate-y-2 hover:border-rose-400/40 hover:shadow-[0_20px_80px_rgba(244,114,182,0.12)]">

                            {/* Wedding preview */}
                            <div className="relative h-[300px] overflow-hidden bg-[#160d13] sm:h-[360px]">

                                {/* Glow */}
                                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-rose-400/15 blur-[100px]" />

                                <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-amber-300/10 blur-[100px]" />

                                {/* Invitation window */}
                                <div className="absolute inset-5 overflow-hidden rounded-2xl border border-rose-200/10 bg-gradient-to-br from-[#25131e] via-[#1a1019] to-[#120d12] sm:inset-8">

                                    {/* Decorative circles */}
                                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-rose-200/[0.07]" />

                                    <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-rose-200/[0.07]" />

                                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-amber-200/[0.06]" />

                                    {/* Invitation content */}
                                    <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">

                                        <Heart
                                            size={17}
                                            className="mb-4 text-rose-300"
                                            strokeWidth={1.3}
                                        />

                                        <p className="text-[9px] uppercase tracking-[0.4em] text-rose-200/60">
                                            Together with their families
                                        </p>

                                        <h3 className="mt-5 font-serif text-3xl font-light tracking-wide text-rose-100 sm:text-5xl">
                                            Aarav
                                        </h3>

                                        <div className="my-3 flex items-center gap-3 text-rose-300/60">
                                            <div className="h-px w-8 bg-rose-300/30" />
                                            <Heart size={12} />
                                            <div className="h-px w-8 bg-rose-300/30" />
                                        </div>

                                        <h3 className="font-serif text-3xl font-light tracking-wide text-rose-100 sm:text-5xl">
                                            Meera
                                        </h3>

                                        <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-amber-200/60">
                                            Invite you to celebrate
                                        </p>

                                        <div className="mt-5 rounded-full border border-rose-200/20 bg-rose-200/[0.04] px-5 py-2 text-[9px] tracking-[0.2em] text-rose-100/70">
                                            24 · 12 · 2026
                                        </div>

                                        <div className="mt-5 flex items-center gap-2 text-[9px] text-rose-200/40">
                                            <Sparkles size={10} />
                                            A day to remember
                                            <Sparkles size={10} />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </div>

                            {/* Card content */}
                            <div className="p-7 sm:p-9">

                                <div className="mb-5 flex items-center justify-between">
                                    <span className="rounded-full border border-rose-400/20 bg-rose-500/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-rose-400">
                                        {t.wedding.label}
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose-400"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                    {t.wedding.title}
                                </h3>

                                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">
                                    {t.wedding.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {t.wedding.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors group-hover:border-rose-400/20"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="experiences/wedding-demo"
                                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rose-400 transition-all hover:gap-3"
                                >
                                    {t.wedding.button}
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
