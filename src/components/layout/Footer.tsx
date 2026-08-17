import { personal } from "@/content/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-1 border-t border-line py-8">
      <div className="section-shell flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-ink">
          {personal.shortName}
          <span className="text-accent">.</span>
        </p>
        <p className="text-sm text-ink-muted">© {year} · Frontend Developer</p>
      </div>
    </footer>
  );
}
