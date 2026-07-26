import { experience } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I’ve built and shipped"
            description="Enterprise SPAs, payments, SEO, and cross-functional delivery."
          />
        </Reveal>

        <ol className="relative space-y-0 border-l border-line pl-6 sm:pl-8">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
              <li className="relative pb-12 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-accent sm:-left-[2.4rem]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="display text-xl font-bold text-ink">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-accent">{job.period}</p>
                </div>
                <p className="mt-1 text-base text-ink">
                  {job.company}
                  <span className="text-ink-muted"> · {job.location}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-ink-muted sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
