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
        className="py-20 border-b border-border gradient-mesh"
        aria-labelledby="contact-hero"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Contact
            </p>
            <h1
              id="contact-hero"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Let&apos;s talk about{" "}
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

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-text-dim uppercase tracking-wider mb-6">
                Details
              </h2>

              <div className="space-y-5">
                <div className="p-5 bg-surface border border-border rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-text-muted">
                    London / UK
                  </p>
                  <p className="text-sm text-text-dim mt-1">
                    Available for remote work and UK-based productions
                  </p>
                </div>

                <div className="p-5 bg-surface border border-border rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Response Time
                  </h3>
                  <p className="text-text-muted">
                    1–2 business days
                  </p>
                </div>

                <div className="p-5 bg-surface border border-border rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Best For
                  </h3>
                  <ul className="space-y-2" role="list">
                    {[
                      "Client-side VP supervision",
                      "Full VP delivery with expanded team",
                      "Tool development and showfile work",
                      "Pre-production planning and tech consultations",
                      "Media-server programming and servicing",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                        <span className="text-accent mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-border">
                  <p className="text-sm text-text-dim">
                    <span className="text-text-muted font-medium">SJCVisuals Ltd</span>
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
