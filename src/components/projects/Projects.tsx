"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";

const filters = ["All", "Frontend", "Full-Stack"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            What I&apos;ve Built
          </p>
          <h2 className="display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Featured projects
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            A selection of product work — ERP, chat, commerce, investments, tax filing, and landing sites.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === item
                  ? "bg-accent text-white"
                  : "border border-line text-ink-muted hover:text-ink"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.04}>
              <article className="card flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
