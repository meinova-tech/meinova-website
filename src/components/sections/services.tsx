
"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    Code2,
    Smartphone,
    Palette,
    BrainCircuit,
    ShoppingBag,
    Sparkles,
} from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

import Reveal from "@/components/animations/reveal";
import {
    StaggerContainer,
    StaggerItem,
} from "@/components/animations/stagger-container";
import Process from "@/components/sections/process";

const serviceIcons = [
    Code2,
    Smartphone,
    Palette,
    BrainCircuit,
    ShoppingBag,
    Sparkles,
];

const iconColors = [
    "text-violet-400",
    "text-cyan-400",
    "text-pink-400",
    "text-indigo-400",
    "text-amber-400",
    "text-emerald-400",
];

export default function Services() {
    const { language } = useLanguage();
    const t = translations[language].services;

    return (
        <section
            id="services"
            className={`container-main scroll-mt-20 py-20 sm:py-24 lg:py-28 ${language === "ta" ? "font-[var(--font-noto-tamil)]" : ""
                }`}
        >
            {/* Section heading */}
            <Reveal>
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                            {t.eyebrow}
                        </p>

                        <h2 className="font-display text-4xl font-bold sm:text-5xl">
                            {t.title}
                            <br />
                            <span className="gradient-text">{t.titleAccent}</span>
                        </h2>
                    </div>

                    <p className="max-w-md leading-7 text-[var(--muted)]">
                        {t.description}
                    </p>
                </div>
            </Reveal>

            {/* Service cards */}
            <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {t.items.map((service, index) => {
                    const Icon = serviceIcons[index];
                    const color = iconColors[index % iconColors.length];

                    return (
                        <StaggerItem key={index}>
                            <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-[0_20px_60px_rgba(128,107,255,0.14)] sm:p-7">
                                {/* Hover glow */}
                                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/0 blur-[80px] transition-all duration-700 group-hover:bg-violet-500/15" />

                                {/* Card top */}
                                <div className="relative mb-10 flex items-center justify-between">
                                    <div
                                        className={`rounded-xl bg-violet-500/10 p-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-violet-500/20 ${color}`}
                                    >
                                        <Icon size={25} strokeWidth={1.7} />
                                    </div>

                                    <span className="text-sm tabular-nums text-[var(--muted)] transition-colors duration-300 group-hover:text-violet-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Card content */}
                                <div className="relative">
                                    <h3 className="mb-3 font-display text-xl font-semibold transition-colors duration-300 group-hover:text-violet-300">
                                        {service.title}
                                    </h3>

                                    <p className="min-h-14 text-sm leading-7 text-[var(--muted)]">
                                        {service.description}
                                    </p>

                                    <Link
                                        href="/#contact"
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                                    >
                                        {t.discuss}

                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>

                                {/* Bottom decorative line */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
                            </article>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>

            {/* Creative Process */}
            <Process />

        </section >
    );
}