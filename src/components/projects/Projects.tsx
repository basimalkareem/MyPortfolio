import { projects } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected product work"
            description="ERP, chat, commerce, investments, tax filing, and marketing sites — focused on UX, APIs, and payments."
          />
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="grid gap-4 py-8 sm:grid-cols-[1.1fr_1.4fr] sm:gap-10">
                <div>
                  <p className="text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display mt-2 text-2xl font-bold text-ink">
                    {project.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {project.stack.map((tech) => (
                      <li key={tech} className="text-xs font-medium text-ink-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-base leading-relaxed text-ink-muted">
                  {project.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
