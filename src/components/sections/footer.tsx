
"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ArrowUp,
    Mail,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaThreads,
} from "react-icons/fa6";

import { useLanguage } from "@/components/providers/language-provider";
import CopyrightYear from "@/components/ui/copyright-year";
import Image from "next/image";

export default function Footer() {
    const { language } = useLanguage();
    const isTamil = language === "ta";

    const links = [
        { label: isTamil ? "சேவைகள்" : "Services", href: "#services" },
        { label: isTamil ? "யோசனைகள்" : "Ideas", href: "#ideas" },
        { label: isTamil ? "எங்களைப் பற்றி" : "About", href: "#about" },
        { label: isTamil ? "தொடர்பு" : "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            label: "Email",
            href: "mailto:hello.meinova@gmail.com",
            icon: Mail,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/mei_nova_tech/",
            icon: FaInstagram,
        },
        {
            label: "Threads",
            href: "https://www.threads.com/@mei_nova_tech",
            icon: FaThreads,
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61596518317585",
            icon: FaFacebookF,
        },
    ];

    return (
        <footer className="border-t border-[var(--border)]">
            <div className="container-main py-14 sm:py-20">

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">

                    {/* Brand and logo */}
                    <div>
                        <Link
                            href="/"
                            aria-label="MeiNova homepage"
                            className="inline-flex max-w-full items-center"
                        >
                            <div className="relative h-14 w-44 max-w-full">
                                <Image
                                    src="/images/MEINOVA-LOGO.png"
                                    alt="MeiNova logo"
                                    fill
                                    priority
                                    sizes="176px"
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
                            {isTamil
                                ? "தைரியமான யோசனைகளை அர்த்தமுள்ள டிஜிட்டல் அனுபவங்களாக மாற்றுகிறோம்."
                                : "We turn bold ideas into meaningful digital experiences through thoughtful design and technology."}
                        </p>

                        <p className="mt-5 text-sm font-medium text-[var(--accent)]">
                            {isTamil
                                ? "யோசனைகளிலிருந்து பயன்பாடுகள் வரை."
                                : "From Ideas to Applications."}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-display text-base font-semibold">
                            {isTamil ? "ஆராயுங்கள்" : "Explore"}
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display text-base font-semibold">
                            {isTamil ? "தொடர்பு கொள்ளுங்கள்" : "Get in Touch"}
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                            {isTamil
                                ? "உங்களிடம் ஒரு யோசனை இருக்கிறதா? அதை நிஜமாக்குவோம்."
                                : "Have an idea in mind? Let's turn it into something meaningful."}
                        </p>

                        <Link
                            href="#contact"
                            className="group mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:shadow-[0_12px_35px_rgba(128,107,255,0.25)]"
                        >
                            {isTamil ? "திட்டத்தைத் தொடங்குங்கள்" : "Start a Project"}
                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href="mailto:hello.meinova@gmail.com"
                            className="mt-5 block break-all text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                        >
                            hello.meinova@gmail.com
                        </a>
                    </div>

                    {/* Social media */}
                    <div>
                        <h3 className="font-display text-base font-semibold">
                            {isTamil ? "எங்களைப் பின்தொடருங்கள்" : "Connect With Us"}
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                            {isTamil
                                ? "எங்கள் சமீபத்திய புதுப்பிப்புகளுடன் இணைந்திருங்கள்."
                                : "Follow MeiNova and stay connected with our latest updates."}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        title={social.label}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-violet-500/10 hover:text-[var(--accent)]"
                                    >
                                        <Icon size={19} />
                                    </a>
                                );
                            })}
                        </div>

                        <p className="mt-4 text-xs text-[var(--muted)]">
                            Instagram · Threads · Facebook
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-[var(--muted)] sm:text-sm">
                        <CopyrightYear />
                    </p>

                    <p className="text-xs text-[var(--muted)] sm:text-sm">
                        {isTamil ? "அன்புடன் உருவாக்கப்பட்டது" : "Made with"}{" "}
                        <span className="text-violet-400">♥</span>{" "}
                        {isTamil ? "MeiNova மூலம்" : "by MeiNova"}
                    </p>

                    <Link
                        href="#"
                        aria-label={isTamil ? "மேலே செல்லவும்" : "Back to top"}
                        className="inline-flex min-h-11 min-w-11 items-center justify-center self-start rounded-full border border-[var(--border)] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] sm:self-auto"
                    >
                        <ArrowUp size={18} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
