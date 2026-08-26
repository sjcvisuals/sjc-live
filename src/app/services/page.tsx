import { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Virtual production services: custom tool creation, media-server pre-programming (Pixera, Unreal, LED ICVFX), and client-side VP supervision.",
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="py-24 border-b border-border tech-grid"
        aria-labelledby="services-hero"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <p className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                Services
              </p>
            </div>
            <h1
              id="services-hero"
              className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-foreground leading-[1.1]"
            >
              What a producer or
              <br />
              <span className="text-gradient">vendor actually buys</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              Three core offerings: custom tools for your pipeline, media-server
              prep and support, and production-side VP supervision. No volume
              rental, no content creation, no endless revisions.
            </p>
          </header>
        </div>
      </section>

      <section className="py-16 bg-surface/50" aria-labelledby="services-list">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="services-list" className="sr-only">
            Service offerings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 border-t border-border"
        aria-labelledby="how-it-works"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <h2
                id="how-it-works"
                className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
              >
                Process
              </h2>
            </div>
            <p className="text-2xl font-mono font-semibold text-foreground">
              Engagement model
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 border border-border rounded bg-surface/30">
              <h3 className="text-lg font-mono font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                For Productions
              </h3>
              <ul className="space-y-4 text-text-muted" role="list">
                <li className="flex gap-4">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-xs font-mono text-accent border border-accent/20"
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <span>
                    <strong className="text-foreground font-mono">Discovery</strong>{" "}
                    — VP requirements, timeline, existing vendor relationships
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-xs font-mono text-accent border border-accent/20"
                    aria-hidden="true"
                  >
                    02
                  </span>
                  <span>
                    <strong className="text-foreground font-mono">Scope</strong>{" "}
                    — define deliverables: tools, prep, supervision, or combination
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-xs font-mono text-accent border border-accent/20"
                    aria-hidden="true"
                  >
                    03
                  </span>
                  <span>
                    <strong className="text-foreground font-mono">Delivery</strong>{" "}
                    — pre-production prep, on-set support, or ongoing servicing
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-border rounded bg-surface/30">
              <h3 className="text-lg font-mono font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                For Vendors
              </h3>
              <ul className="space-y-4 text-text-muted" role="list">
                <li className="flex gap-4">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-xs font-mono text-accent border border-accent/20"
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <span>
                    <strong className="text-foreground font-mono">Requirements</strong>{" "}
                    — tools or showfile work you need support with
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-xs font-mono text-accent border border-accent/20"
                    aria-hidden="true"
                  >
                    02
                  </span>
                  <span>
                    <strong className="text-foreground font-mono">Engagement</strong>{" "}
                    — day rate or project-based, flexible to your timeline
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-accent/10 rounded text-xs font-mono text-accent border border-accent/20"
                    aria-hidden="true"
                  >
                    03
                  </span>
                  <span>
                    <strong className="text-foreground font-mono">Handoff</strong>{" "}
                    — deliverables with documentation, ready for your team
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-status-error" aria-hidden="true" />
              <h2 className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                Out of Scope
              </h2>
            </div>
            <p className="text-2xl font-mono font-semibold text-foreground mb-6">
              What SJC does not do
            </p>
            <div className="space-y-3">
              {[
                { label: "Content studio", desc: "No environments, assets, or creative content" },
                { label: "VAD packages", desc: "No virtual art department services" },
                { label: "Camera house", desc: "No camera rentals or tracking systems" },
                { label: "Volume operator", desc: "No stage, no LED wall, no VP facility" },
                { label: "Client-review loops", desc: "Technical delivery, not creative iteration" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-3 border border-border rounded bg-background">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center text-status-error text-xs" aria-hidden="true">
                    ✕
                  </span>
                  <div>
                    <span className="font-mono text-foreground">{item.label}</span>
                    <span className="text-text-muted"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 border border-border rounded bg-surface/30 glow-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
                <span className="text-xs font-mono text-text-dim uppercase tracking-widest">
                  Available
                </span>
              </div>
              <h2 className="text-xl font-mono font-semibold text-foreground">
                Ready to discuss your project?
              </h2>
              <p className="mt-1 text-text-muted">
                Let&apos;s talk about how SJC can support your virtual production.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-background rounded hover:bg-accent-bright transition-colors focus-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
