import { personal } from "@/content/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-1 border-t border-line py-10">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-sm font-semibold text-ink">
          {personal.name}
          <span className="text-accent">.</span>
        </p>
        <p className="text-sm text-ink-muted">
          © {year} · Frontend Developer · Built with Next.js & React Three Fiber
        </p>
      </div>
    </footer>
  );
}
