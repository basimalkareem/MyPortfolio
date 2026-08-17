import { experience } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Experience
          </p>
          <h2 className="display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Where I&apos;ve shipped
          </h2>
        </Reveal>
        <div className="mt-10 space-y-5">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.04}>
              <article className="card p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold text-ink">{job.role}</h3>
                  <p className="text-sm font-semibold text-accent">{job.period}</p>
                </div>
                <p className="mt-1 text-ink-muted">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item}
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
