"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/content/portfolio";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-ink/5" />
  ),
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-95">
        {!reduce ? <HeroScene /> : null}
      </div>

      <div className="hero-veil absolute inset-0 z-[1]" />

      <div className="section-shell relative z-[2] flex min-h-[100svh] flex-col justify-center pb-16 pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">
            {personal.title}
          </p>
          <h1 className="display hero-name font-bold text-ink drop-shadow-sm">
            {personal.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90">
            {personal.resumeHeadline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-bright"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-md border-2 border-ink/40 bg-surface px-5 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </a>
          </div>
          <p className="mt-8 text-sm font-medium text-ink/75">{personal.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
