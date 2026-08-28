import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SJC for VP tools, technical consulting, and supervision. London / UK.",
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
              <span className="text-gradient">your project</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              Whether you need custom tools built, technical consulting, or 
              hands-on VP support — reach out and we can figure out the right approach.
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
                    Usually within a day or two
                  </p>
                </div>

                <div className="p-5 bg-surface border border-border rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Good fit for
                  </h3>
                  <ul className="space-y-2" role="list">
                    {[
                      "Custom tool or pipeline development",
                      "Technical consulting and workflow design",
                      "VP supervision for series or features",
                      "Full VP delivery including environments",
                      "Troubleshooting and technical support",
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
