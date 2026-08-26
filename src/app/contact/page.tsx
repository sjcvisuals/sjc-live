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
        className="py-24 border-b border-border"
        aria-labelledby="contact-hero"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-mono text-led-cyan uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1
              id="contact-hero"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
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

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-6">
                Details
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-text-muted">
                    London area / UK
                    <br />
                    <span className="text-text-dim text-sm">
                      Available for remote work and UK-based productions
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Response Time
                  </h3>
                  <p className="text-text-muted">
                    Typically within 1–2 business days
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Best For
                  </h3>
                  <ul className="space-y-2 text-text-muted" role="list">
                    <li className="flex items-start gap-2">
                      <span className="text-led-cyan" aria-hidden="true">
                        →
                      </span>
                      Productions needing client-side VP supervision
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-led-cyan" aria-hidden="true">
                        →
                      </span>
                      Vendors needing tool development or showfile work
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-led-cyan" aria-hidden="true">
                        →
                      </span>
                      Pre-production planning and tech consultations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-led-cyan" aria-hidden="true">
                        →
                      </span>
                      Media-server programming and servicing
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-text-dim">
                    <strong className="text-text-muted">SJCVisuals Ltd</strong>
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
