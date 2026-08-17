"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { floatingTechs, personal } from "@/content/portfolio";
import TechIcon from "@/components/hero/TechIcon";
import Typewriter from "@/components/hero/Typewriter";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="section-shell grid min-h-[100svh] items-center gap-12 pb-16 pt-24 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {personal.available ? (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Available for hire
            </p>
          ) : null}
          <h1 className="display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Hi, I&apos;m {personal.firstName}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
            I build <Typewriter />
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {personal.resumeHeadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="absolute inset-6 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border border-line bg-card">
            <Image
              src={personal.portrait}
              alt={personal.name}
              fill
              priority
              className="object-cover object-[center_15%]"
              sizes="380px"
            />
          </div>
          {floatingTechs.map((tech) => (
            <span
              key={tech.label}
              className="pill absolute z-10 flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-ink shadow-lg"
              style={{ left: tech.x, top: tech.y }}
            >
              <TechIcon name={tech.label} />
              {tech.label}
            </span>
          ))}
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted"
      >
        Scroll down
      </a>
    </section>
  );
}
