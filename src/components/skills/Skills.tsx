import { skillGroups } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to ship production frontend"
            description="From component architecture and payments to Core Web Vitals and accessibility."
          />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div>
                <h3 className="display text-xl font-bold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-line px-1 py-1 text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
