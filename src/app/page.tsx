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
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
              <p className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                Virtual Production Specialist
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold tracking-tight text-foreground leading-[1.1]">
              Tools and supervision
              <br />
              <span className="text-gradient">for LED volume production</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed animate-fade-in-delay-1">
              Custom tool creation, media-server pre-programming, and client-side VP supervision.
            </p>
            <p className="mt-2 text-sm font-mono text-text-dim animate-fade-in-delay-1">
              Spencer Chase — London, UK
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-background rounded hover:bg-accent-bright transition-colors focus-ring"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider border border-border text-foreground rounded hover:bg-surface-elevated hover:border-border-bright transition-colors focus-ring"
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
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono text-text-dim uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
          </div>
        </div>
      </section>

      <section
        className="py-24 border-t border-border bg-surface/50 tech-grid"
        aria-labelledby="offers-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            <h2
              id="offers-heading"
              className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
            >
              Services
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {offers.map((offer) => (
              <article key={offer.number} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-mono font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {offer.number}
                  </span>
                  <h3 className="text-xl font-mono font-semibold text-foreground">
                    {offer.title}
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed pl-[4.5rem]">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm font-mono text-text-dim max-w-2xl">
              <span className="text-accent">→</span> Not a content studio. Not VAD packages. Not a volume operator.
              <span className="block mt-2 text-text-muted">
                Specialist tooling and supervision for productions and vendors working with LED ICVFX, Pixera, and Unreal workflows.
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
              <div className="flex items-center gap-4 mb-3">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <h2
                  id="work-heading"
                  className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
                >
                  Selected Work
                </h2>
              </div>
              <p className="text-2xl font-mono font-semibold text-foreground">
                Recent VP supervision credits
              </p>
            </div>
            <Link
              href="/work"
              className="text-sm font-mono text-accent hover:text-accent-bright transition-colors focus-ring rounded uppercase tracking-wider"
            >
              View all →
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
        className="py-24 border-t border-border bg-surface/50"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative p-12 lg:p-16 border border-border rounded bg-background overflow-hidden glow-border">
            <div
              className="absolute inset-0 tech-grid opacity-30"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent glow-pulse" aria-hidden="true" />
                <span className="text-xs font-mono text-text-dim uppercase tracking-widest">
                  Available for projects
                </span>
              </div>
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-mono font-bold text-foreground"
              >
                Working on a virtual production?
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Whether you need custom tools, media-server prep, or client-side
                supervision — let&apos;s discuss how SJC can support your production.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-background rounded hover:bg-accent-bright transition-colors focus-ring"
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
