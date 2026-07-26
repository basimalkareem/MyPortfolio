"use client";

import { useEffect, useState } from "react";
import { navLinks, personal } from "@/content/portfolio";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/90 shadow-sm backdrop-blur-md"
          : "bg-bg/40 backdrop-blur-sm"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="display text-lg font-bold tracking-tight text-ink">
          {personal.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/85 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={`mailto:${personal.email}`}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Hire me
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="display text-sm font-semibold text-ink">
              {open ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-bg/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="pt-1 text-base font-semibold text-accent"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
