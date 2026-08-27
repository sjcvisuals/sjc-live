import Link from "next/link";
import { LEDVolumeHero } from "@/components/LEDVolumeHero";
import { WorkCard } from "@/components/WorkCard";
import { credits } from "@/lib/data";

const offers = [
  {
    number: "01",
    title: "Supervision",
    description:
      "Client-side VP supervision that bridges production needs with technical reality. One person embedded with your team.",
  },
  {
    number: "02",
    title: "Full Delivery",
    description:
      "Environment creation, volume operation, screen content, and custom pipelines. The team scales to fit the job.",
  },
  {
    number: "03",
    title: "Tools & Pipelines",
    description:
      "Custom software, rendering pipelines, and automation built for your specific workflow.",
  },
];

export default function Home() {
  const featuredCredits = credits.filter(
    (c) => c.id === "hijack-s2" || c.id === "sony-monster-hunter" || c.id === "black-doves"
  );

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
                Virtual Production
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              VP supervision and delivery
              <br />
              <span className="text-gradient">that scales with your production</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed animate-fade-in-delay-1">
              From a single supervisor embedded with your team to full environment 
              creation, volume operation, and custom pipelines. The scope matches 
              what you actually need.
            </p>
            <p className="mt-3 text-sm font-mono text-text-dim animate-fade-in-delay-1">
              Spencer Chase · London, UK
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-background rounded hover:bg-accent-bright transition-colors focus-ring"
              >
                See the Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider border border-border text-foreground rounded hover:bg-surface-elevated hover:border-border-bright transition-colors focus-ring"
              >
                Start a Conversation
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

      {/* What we do */}
      <section
        className="py-24 border-t border-border bg-surface/50"
        aria-labelledby="offers-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            <h2
              id="offers-heading"
              className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
            >
              How we work
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {offers.map((offer) => (
              <article key={offer.number} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-mono font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {offer.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {offer.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/2">
                <p className="text-text-muted leading-relaxed">
                  SJC has delivered full VP workflows — environment creation with 
                  expanded teams, on-site volume operation, shot supervision with 
                  filming crews, and custom Unreal rendering pipelines. But not 
                  every job needs all of that.
                </p>
              </div>
              <div className="md:w-1/2">
                <p className="text-text-muted leading-relaxed">
                  Sometimes a production just needs someone who understands both 
                  the creative vision and the technical reality of LED volumes. 
                  The scope scales to fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
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
              <p className="text-2xl font-semibold text-foreground">
                Recent projects
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
              <WorkCard key={credit.id} credit={credit} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                className="text-3xl sm:text-4xl font-bold text-foreground"
              >
                Got a production that needs VP support?
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Whether it&apos;s a supervisor for your next series or a team to 
                deliver a complete VP workflow — let&apos;s figure out the right scope.
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
