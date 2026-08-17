import { skillGroups } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Skills
          </p>
          <h2 className="display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Tools I use every day
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="card p-6">
                <h3 className="text-lg font-bold text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {group.items.join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
