
import ContactForm from "@/components/sections/contact-form";
import CopyrightYear from "@/components/ui/copyright-year";
import { ArrowLeft, Mail, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen overflow-x-clip text-[var(--foreground)]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-20 left-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
            />

            <div className="container-main">
                {/* Header */}
                <header className="flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="font-display text-2xl font-bold tracking-tight"
                    >
                        Mei<span className="gradient-text">Nova.</span>
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </header>

                {/* Contact introduction */}
                <section className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                            <Sparkles size={15} />
                            Let&apos;s create something meaningful
                        </div>

                        <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
                            Let&apos;s bring your
                            <br />
                            <span className="gradient-text">idea to life.</span>
                        </h1>

                        <p className="mt-7 max-w-lg leading-8 text-[var(--muted)]">
                            Have a project in mind? Tell us what you&apos;re looking
                            to build. Whether it&apos;s a website, mobile app, AI
                            solution or something unique, we&apos;d love to hear
                            from you.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                                    <Mail size={21} />
                                </div>
                                <div>
                                    <h2 className="font-semibold">Email enquiries</h2>
                                    <p className="mt-1 text-sm text-[var(--muted)]">
                                        Send us your project requirements through
                                        the contact form.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                                    <MessageCircle size={21} />
                                </div>
                                <div>
                                    <h2 className="font-semibold">Let&apos;s collaborate</h2>
                                    <p className="mt-1 text-sm text-[var(--muted)]">
                                        From a small idea to a complete digital
                                        product, let&apos;s explore what&apos;s possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="glass-card rounded-3xl p-6 sm:p-9">
                        <div className="mb-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                                Project enquiry
                            </p>
                            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                                Tell us about your project.
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                Fill in the details below and let&apos;s get started.
                            </p>
                        </div>

                        <ContactForm />
                    </div>
                </section>

                <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
                    <CopyrightYear />
                </footer>
            </div>
        </main>
    );
}
