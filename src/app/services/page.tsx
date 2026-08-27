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
        className="py-20 border-b border-border gradient-mesh"
        aria-labelledby="services-hero"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Services
            </p>
            <h1
              id="services-hero"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              What a producer or{" "}
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

      <section className="py-16" aria-labelledby="services-list">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="services-list" className="sr-only">
            Service offerings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 border-t border-border bg-surface-elevated/50"
        aria-labelledby="how-it-works"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-10">
            <h2
              id="how-it-works"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
            >
              Process
            </h2>
            <p className="text-2xl font-bold text-foreground">
              Engagement model
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-surface border border-border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-6">
                For Productions
              </h3>
              <ul className="space-y-5" role="list">
                {[
                  { step: "01", title: "Discovery", desc: "VP requirements, timeline, existing vendor relationships" },
                  { step: "02", title: "Scope", desc: "Define deliverables: tools, prep, supervision, or combination" },
                  { step: "03", title: "Delivery", desc: "Pre-production prep, on-set support, or ongoing servicing" },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-accent text-white rounded-lg text-xs font-bold">
                      {item.step}
                    </span>
                    <span className="text-text-muted">
                      <strong className="text-foreground">{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface border border-border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-6">
                For Vendors
              </h3>
              <ul className="space-y-5" role="list">
                {[
                  { step: "01", title: "Requirements", desc: "Tools or showfile work you need support with" },
                  { step: "02", title: "Engagement", desc: "Day rate or project-based, flexible to your timeline" },
                  { step: "03", title: "Handoff", desc: "Deliverables with documentation, ready for your team" },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center bg-purple-500 text-white rounded-lg text-xs font-bold">
                      {item.step}
                    </span>
                    <span className="text-text-muted">
                      <strong className="text-foreground">{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-status-error uppercase tracking-wider mb-2">
              Out of Scope
            </h2>
            <p className="text-2xl font-bold text-foreground mb-6">
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
                <div key={item.label} className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-status-error text-sm font-bold">
                    ✕
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="text-text-muted"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-surface-elevated/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 bg-surface border border-border rounded-2xl card-shadow">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
                <span className="text-sm font-medium text-status-active">
                  Available
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Ready to discuss your project?
              </h2>
              <p className="mt-1 text-text-muted">
                Let&apos;s talk about how SJC can support your virtual production.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dim transition-colors focus-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
