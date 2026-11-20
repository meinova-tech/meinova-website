
"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Reveal from "@/components/animations/reveal";
import CopyrightYear from "@/components/ui/copyright-year";
import ContactForm from "@/components/sections/contact-form";
import About from "@/components/sections/about";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";

import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  BrainCircuit,
  ShoppingBag,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const serviceIcons = [
  Code2,
  Smartphone,
  Palette,
  BrainCircuit,
  ShoppingBag,
  Sparkles,
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen overflow-x-clip text-[var(--foreground)]">

      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section
        id="services"
        className="container-main scroll-mt-20 py-20 sm:py-24 lg:py-28"
      >
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                {t.services.eyebrow}
              </p>

              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                {t.services.title}
                <br />
                <span className="gradient-text">
                  {t.services.titleAccent}
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[var(--muted)]">
              {t.services.description}
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <StaggerItem key={index}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-[0_20px_60px_rgba(128,107,255,0.14)] sm:p-7">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-violet-500/20 group-hover:text-cyan-300">
                      <Icon size={25} />
                    </div>

                    <span className="text-sm text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

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
                    {t.services.discuss}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* IDEAS */}
      <section
        id="ideas"
        className="relative isolate scroll-mt-20 overflow-hidden border-y border-[var(--border)] py-24 sm:py-32"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Main content */}
            <div>
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  {t.ideas.eyebrow}
                </div>

                <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  {t.ideas.title}
                  <br />
                  {t.ideas.titleSecond}{" "}
                  <span className="gradient-text">
                    {t.ideas.titleAccent}
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  {t.ideas.description}
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:shadow-[0_12px_40px_rgba(128,107,255,0.3)]"
                  >
                    {t.ideas.contact}
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="#services"
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-7 py-4 font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {t.ideas.explore}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Visual card */}
            <Reveal delay={0.2}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-7 sm:p-9">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-sm text-[var(--muted)]">
                      {t.ideas.approach}
                    </span>
                    <Sparkles className="text-violet-400" size={22} />
                  </div>

                  <div className="space-y-7">
                    {t.ideas.steps.map((step, index) => (
                      <div key={index} className="flex gap-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-sm font-semibold text-violet-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="font-display text-lg font-semibold">
                            {step.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-[var(--border)] pt-6">
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {t.ideas.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <About />


      {/* CONTACT */}
      <section
        id="contact"
        className={`relative isolate scroll-mt-20 overflow-hidden border-y border-[var(--border)] py-20 sm:py-24 lg:py-28 ${language === "ta" ? "font-[var(--font-noto-tamil)]" : ""
          }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <div className="container-main">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Contact introduction */}
            <Reveal>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  <Sparkles size={15} />
                  {t.contact.eyebrow}
                </div>

                <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                  {t.contact.title}
                  <br />
                  <span className="gradient-text">
                    {t.contact.titleAccent}
                  </span>
                </h2>

                <p className="mt-7 max-w-lg leading-8 text-[var(--muted)]">
                  {t.contact.description}
                </p>

                <div className="mt-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                      <Mail size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {t.contact.emailTitle}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        {t.contact.emailDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                      <MessageCircle size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {t.contact.collaborationTitle}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        {t.contact.collaborationDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-6 sm:p-9">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {t.contact.formEyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    {t.contact.formTitle}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {t.contact.formDescription}
                  </p>
                </div>

                <ContactForm />
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-[var(--border)]">
        <div className="container-main flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="font-display text-xl font-bold"
          >
            Mei<span className="gradient-text">Nova.</span>
          </Link>

          <p className="text-sm text-[var(--muted)]">
            {t.footer.tagline}
          </p>

          <p className="text-sm text-[var(--muted)]">
            <CopyrightYear />
          </p>
        </div>
      </footer>

    </main>
  );
}
