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
        className="py-24 border-b border-border"
        aria-labelledby="services-hero"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-mono text-led-cyan uppercase tracking-widest mb-4">
              Services
            </p>
            <h1
              id="services-hero"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
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

      <section className="py-16 bg-surface" aria-labelledby="services-list">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="services-list" className="sr-only">
            Service offerings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
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
            <h2
              id="how-it-works"
              className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2"
            >
              How It Works
            </h2>
            <p className="text-2xl font-semibold text-foreground">
              Engagement model
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                For Productions
              </h3>
              <ul className="space-y-4 text-text-muted" role="list">
                <li className="flex gap-3">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-surface-elevated rounded text-xs font-mono text-led-cyan"
                    aria-hidden="true"
                  >
                    1
                  </span>
                  <span>
                    <strong className="text-foreground">Discovery call</strong>{" "}
                    — understand your VP requirements, timeline, and existing
                    vendor relationships
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-surface-elevated rounded text-xs font-mono text-led-cyan"
                    aria-hidden="true"
                  >
                    2
                  </span>
                  <span>
                    <strong className="text-foreground">Scope and quote</strong>{" "}
                    — define deliverables, whether tools, prep, supervision, or
                    a combination
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-surface-elevated rounded text-xs font-mono text-led-cyan"
                    aria-hidden="true"
                  >
                    3
                  </span>
                  <span>
                    <strong className="text-foreground">Delivery</strong> —
                    pre-production prep, on-set support, or ongoing servicing as
                    agreed
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                For Vendors
              </h3>
              <ul className="space-y-4 text-text-muted" role="list">
                <li className="flex gap-3">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-surface-elevated rounded text-xs font-mono text-led-cyan"
                    aria-hidden="true"
                  >
                    1
                  </span>
                  <span>
                    <strong className="text-foreground">
                      Technical requirements
                    </strong>{" "}
                    — understand what tools or showfile work you need support
                    with
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-surface-elevated rounded text-xs font-mono text-led-cyan"
                    aria-hidden="true"
                  >
                    2
                  </span>
                  <span>
                    <strong className="text-foreground">
                      Day rate or project
                    </strong>{" "}
                    — flexible engagement based on your project timeline
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center bg-surface-elevated rounded text-xs font-mono text-led-cyan"
                    aria-hidden="true"
                  >
                    3
                  </span>
                  <span>
                    <strong className="text-foreground">Handoff</strong> —
                    deliverables with documentation, ready for your team to
                    deploy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">
              What SJC Is Not
            </h2>
            <div className="space-y-4">
              <p className="text-text-muted">
                To be clear about scope and avoid misaligned expectations:
              </p>
              <ul className="space-y-2 text-text-muted" role="list">
                <li className="flex items-start gap-3">
                  <span className="text-led-magenta" aria-hidden="true">
                    ✕
                  </span>
                  <span>
                    <strong className="text-foreground">
                      Not a content studio
                    </strong>{" "}
                    — we don&apos;t create environments, assets, or creative
                    content
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-led-magenta" aria-hidden="true">
                    ✕
                  </span>
                  <span>
                    <strong className="text-foreground">Not VAD packages</strong>{" "}
                    — no virtual art department services or environment design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-led-magenta" aria-hidden="true">
                    ✕
                  </span>
                  <span>
                    <strong className="text-foreground">
                      Not a camera house
                    </strong>{" "}
                    — no camera rentals, tracking systems, or related hardware
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-led-magenta" aria-hidden="true">
                    ✕
                  </span>
                  <span>
                    <strong className="text-foreground">
                      Not a volume operator
                    </strong>{" "}
                    — no stage, no LED wall, no full VP facility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-led-magenta" aria-hidden="true">
                    ✕
                  </span>
                  <span>
                    <strong className="text-foreground">
                      Not endless client-review work
                    </strong>{" "}
                    — technical delivery, not creative iteration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 border border-border rounded-lg bg-surface">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Ready to discuss your project?
              </h2>
              <p className="mt-1 text-text-muted">
                Let&apos;s talk about how SJC can support your virtual
                production.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-led-cyan text-background rounded-md hover:bg-led-cyan/90 transition-colors focus-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
