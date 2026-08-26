import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SJC for virtual production tools, media-server programming, and VP supervision. London area / UK.",
};

export default function ContactPage() {
  return (
    <>
      <section
        className="py-24 border-b border-border tech-grid"
        aria-labelledby="contact-hero"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <p className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                Contact
              </p>
            </div>
            <h1
              id="contact-hero"
              className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Let&apos;s talk about
              <br />
              <span className="text-gradient">your production</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              Whether you&apos;re a producer scoping VP requirements, a vendor
              looking for tooling support, or just want to discuss a potential
              collaboration — reach out.
            </p>
          </header>
        </div>
      </section>

      <section className="py-16 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <h2 className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                  Send a Message
                </h2>
              </div>
              <ContactForm />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-border" aria-hidden="true" />
                <h2 className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                  Details
                </h2>
              </div>

              <div className="space-y-8">
                <div className="p-4 border border-border rounded bg-background">
                  <h3 className="text-sm font-mono text-text-dim uppercase tracking-wider mb-2">
                    Location
                  </h3>
                  <p className="font-mono text-foreground">
                    London / UK
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    Available for remote work and UK-based productions
                  </p>
                </div>

                <div className="p-4 border border-border rounded bg-background">
                  <h3 className="text-sm font-mono text-text-dim uppercase tracking-wider mb-2">
                    Response Time
                  </h3>
                  <p className="font-mono text-foreground">
                    1–2 business days
                  </p>
                </div>

                <div className="p-4 border border-border rounded bg-background">
                  <h3 className="text-sm font-mono text-text-dim uppercase tracking-wider mb-3">
                    Best For
                  </h3>
                  <ul className="space-y-2 text-text-muted" role="list">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-accent mt-0.5" aria-hidden="true">→</span>
                      Client-side VP supervision
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-accent mt-0.5" aria-hidden="true">→</span>
                      Tool development and showfile work
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-accent mt-0.5" aria-hidden="true">→</span>
                      Pre-production planning and tech consultations
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-accent mt-0.5" aria-hidden="true">→</span>
                      Media-server programming and servicing
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-text-dim font-mono">
                    <span className="text-text-muted">SJCVisuals Ltd</span>
                    <br />
                    Registered in England and Wales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
