import Link from "next/link";
import { LEDVolumeHero } from "@/components/LEDVolumeHero";
import { WorkCard } from "@/components/WorkCard";
import { credits, offers } from "@/lib/data";

export default function Home() {
  const featuredCredits = credits.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <LEDVolumeHero />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <p className="text-sm font-mono text-led-cyan uppercase tracking-widest mb-4">
              Virtual Production Specialist
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Tools and supervision
              <br />
              <span className="text-gradient">for LED volume production</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed animate-fade-in-delay-1">
              Custom tool creation, media-server pre-programming, and client-side
              VP supervision. Spencer Chase, London.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors focus-ring"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-md hover:bg-surface hover:border-border-bright transition-colors focus-ring"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-3"
          aria-hidden="true"
        >
          <div className="w-px h-16 bg-gradient-to-b from-border-bright to-transparent" />
        </div>
      </section>

      <section
        className="py-24 border-t border-border bg-surface"
        aria-labelledby="offers-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-16">
            <h2
              id="offers-heading"
              className="text-sm font-mono text-text-muted uppercase tracking-widest"
            >
              What We Do
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {offers.map((offer) => (
              <article key={offer.number} className="group">
                <p className="text-6xl font-bold text-border group-hover:text-border-bright transition-colors">
                  {offer.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {offer.title}
                </h3>
                <p className="mt-2 text-text-muted leading-relaxed">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-text-dim max-w-2xl">
              Not a content studio. Not VAD packages. Not a volume operator.
              <span className="block mt-2">
                Specialist tooling and supervision for productions and vendors
                working with LED ICVFX, Pixera, and Unreal workflows.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 border-t border-border"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2
                id="work-heading"
                className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2"
              >
                Selected Work
              </h2>
              <p className="text-2xl font-semibold text-foreground">
                Recent VP supervision credits
              </p>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium text-led-cyan hover:text-led-cyan/80 transition-colors focus-ring rounded"
            >
              View all work →
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCredits.map((credit) => (
              <WorkCard key={credit.id} credit={credit} showLink />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 border-t border-border bg-surface"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative p-12 lg:p-16 border border-border rounded-lg bg-background overflow-hidden">
            <div
              className="absolute inset-0 grid-bg opacity-50"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl">
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-bold text-foreground"
              >
                Working on a virtual production?
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Whether you need custom tools, media-server prep, or client-side
                supervision — let&apos;s discuss how SJC can support your
                production.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-led-cyan text-background rounded-md hover:bg-led-cyan/90 transition-colors focus-ring"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
