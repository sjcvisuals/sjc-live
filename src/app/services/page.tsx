import { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Virtual production services: custom tool development, technical consulting, media-server programming, and VP supervision.",
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
              Tools, consulting, and{" "}
              <span className="text-gradient">VP supervision</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              Technical expertise for virtual production. From custom software 
              and pipeline development to hands-on supervision and full VP delivery.
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
              How engagements typically work
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-surface border border-border rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-6">
                For Productions
              </h3>
              <ul className="space-y-5" role="list">
                {[
                  { step: "01", title: "Discovery", desc: "Understand your VP requirements, timeline, and existing vendor relationships" },
                  { step: "02", title: "Scope", desc: "Define what you need — tools, consulting, supervision, or a combination" },
                  { step: "03", title: "Delivery", desc: "Pre-production work, on-set support, or ongoing technical involvement" },
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
                  { step: "01", title: "Requirements", desc: "Tools, pipeline work, or technical support you need" },
                  { step: "02", title: "Engagement", desc: "Day rate or project-based, flexible to your timeline" },
                  { step: "03", title: "Handoff", desc: "Deliverables with documentation, ready for your team to deploy" },
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
            <h2 className="text-2xl font-bold text-foreground mb-6">
              The technical background
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                This work comes from years on VP stages — as an Engine TD at Lux Machina 
                working on productions like House of the Dragon, Hijack, and Masters of 
                the Air, and as a VP TD at Third Floor. That background means understanding 
                not just the technology, but the real constraints and pressures of a live set.
              </p>
              <p>
                Now as SJC, that expertise is available directly to productions and vendors 
                who need custom tools built, technical problems solved, or someone who can 
                bridge the gap between creative intent and VP technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-surface-elevated/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 bg-surface border border-border rounded-2xl card-shadow">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Have a technical challenge?
              </h2>
              <p className="mt-1 text-text-muted">
                Whether it&apos;s a tool that needs building or a workflow that needs fixing.
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
