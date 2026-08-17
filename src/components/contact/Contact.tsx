"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { personal } from "@/content/portfolio";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          title: String(data.get("subject") || "Portfolio message"),
          message: String(data.get("message") || ""),
          time: new Date().toLocaleString(),
        },
        publicKey,
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative z-1 py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Let&apos;s Connect
          </p>
          <h2 className="display mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Ready to build something solid?
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Whether you have a frontend role, a product to ship, or just want to say hello — inbox is open.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Email
                </p>
                <a href={`mailto:${personal.email}`} className="mt-1 block text-lg font-semibold text-ink">
                  {personal.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Location
                </p>
                <p className="mt-1 text-lg font-semibold text-ink">{personal.locationFull}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Find me online
                </p>
                <div className="mt-2 flex gap-4">
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-accent">
                    GitHub
                  </a>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-accent">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="card grid gap-4 p-6 sm:p-8">
              <input
                name="name"
                required
                placeholder="Full Name"
                className="rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-accent"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-accent"
              />
              <input
                name="subject"
                placeholder="Subject"
                className="rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-accent"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className="resize-none rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-accent"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-bright disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Message sent"
                    : "Send Message"}
              </button>
              {status === "sent" ? (
                <p className="text-sm text-accent">Thanks — I’ll get back to you soon.</p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-400">
                  Couldn’t send just now. Email me directly at {personal.email}.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
