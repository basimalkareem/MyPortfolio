import { education, personal, profile } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Six years shipping interfaces people actually use"
            description={profile}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Focus
              </p>
              <p className="mt-2 text-base text-ink">
                Angular, React & Next.js product UIs with payments, auth, and SEO baked in.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Education
              </p>
              <p className="mt-2 text-base text-ink">{education.degree}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {education.school}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                {education.score} · {education.period}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Based in
              </p>
              <p className="mt-2 text-base text-ink">{personal.location}</p>
              <p className="mt-1 text-sm text-ink-muted">
                Open to remote & hybrid frontend roles.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
