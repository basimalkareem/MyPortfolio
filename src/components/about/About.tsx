import {
  aboutPoints,
  education,
  personal,
  profile,
  stats,
} from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Who I Am
          </p>
          <h2 className="display mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Crafting interfaces with purpose
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile}
            </p>
            <ul className="mt-6 space-y-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              {education.degree} · {education.school}
            </p>
            <a
              href={`mailto:${personal.email}?subject=Frontend%20role`}
              className="mt-6 inline-flex rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
            >
              Download Résumé
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card p-5">
                  <p className="display text-3xl font-extrabold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
