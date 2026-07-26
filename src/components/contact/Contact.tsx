import { personal } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/basimalkareem",
    href: personal.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/basimalkareem",
    href: personal.github,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something solid"
            description="Reach out for frontend roles, freelance builds, or collaboration on React / Next.js / Angular products."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-6 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group border-b border-line pb-4 transition-colors hover:border-accent"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {link.label}
                </p>
                <p className="display mt-2 text-xl font-bold text-ink transition-colors group-hover:text-accent sm:text-2xl">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
