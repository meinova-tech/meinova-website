
"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

const navLinks = [
  { key: "services", href: "#services" },
  { key: "ideas", href: "#ideas" },
  { key: "about", href: "#about" },
] as const;

function subscribe() {
  return () => { };
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const t = translations[language].nav;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en");
  };

  return (
    <header className="container-main relative z-30">
      <div className="flex h-20 items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 font-display text-2xl font-bold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Mei<span className="gradient-text">Nova.</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--foreground)]"
            >
              {t[link.key]}
            </Link>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? "Switch language to Tamil"
                : "Switch language to English"
            }
            className="flex h-11 items-center justify-center rounded-xl border border-[var(--border)] px-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]"
          >
            {language === "en" ? "தமிழ்" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label={
              !mounted
                ? "Change color theme"
                : theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] disabled:cursor-wait"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )
            ) : (
              <span className="h-[19px] w-[19px]" />
            )}
          </button>

          {/* Desktop contact button */}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="group hidden items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] sm:flex"
          >
            {t.contact}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--foreground)] transition hover:border-[var(--accent)] md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
              >
                {t[link.key]}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
            >
              {t.contact}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
