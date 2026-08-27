import { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { credits, categories } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Virtual production work: full VP delivery, environment creation, on-set supervision, and content pipelines. From Apple TV+ series to Sony commercials.",
};

export default function WorkPage() {
  const filmTvCredits = credits.filter((c) => c.category === "film-tv");
  const commercialCredits = credits.filter((c) => c.category === "commercial");
  const featuredCredits = credits.filter((c) => 
    c.id === "hijack-s2" || c.id === "sony-monster-hunter"
  );
  const otherFilmTv = filmTvCredits.filter((c) => 
    c.id !== "hijack-s2"
  );

  return (
    <>
      {/* Hero */}
      <section className="py-24 border-b border-border" aria-labelledby="work-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <p className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
                Work
              </p>
            </div>
            <h1
              id="work-hero"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              From supervision to
              <br />
              <span className="text-gradient">full VP delivery</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              SJC scales to fit the job. Sometimes that&apos;s a single supervisor embedded 
              with your production. Sometimes it&apos;s a team delivering environments, 
              operating the volume, and building custom pipelines. Here&apos;s a sample of 
              what we&apos;ve shipped.
            </p>
          </header>
        </div>
      </section>

      {/* Featured Projects - Full delivery */}
      <section className="py-16 bg-surface/50" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
              <h2
                id="featured-heading"
                className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
              >
                Featured
              </h2>
            </div>
            <p className="text-2xl font-semibold text-foreground">
              Full delivery projects
            </p>
            <p className="mt-2 text-text-muted max-w-2xl">
              Projects where SJC delivered more than supervision — environments, content, 
              pipelines, and on-set operation with expanded teams.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCredits.map((credit) => (
              <WorkCard key={credit.id} credit={credit} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Film & TV */}
      <section className="py-16 border-t border-border" aria-labelledby="film-tv-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <h2
                id="film-tv-heading"
                className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
              >
                {categories["film-tv"].label}
              </h2>
            </div>
            <p className="text-2xl font-semibold text-foreground">
              Series & features
            </p>
            <p className="mt-2 text-text-muted">
              {categories["film-tv"].description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFilmTv.map((credit) => (
              <WorkCard key={credit.id} credit={credit} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-16 border-t border-border bg-surface/50" aria-labelledby="commercial-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <h2
                id="commercial-heading"
                className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
              >
                {categories["commercial"].label}
              </h2>
            </div>
            <p className="text-2xl font-semibold text-foreground">
              Brand campaigns
            </p>
            <p className="mt-2 text-text-muted">
              {categories["commercial"].description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialCredits.map((credit) => (
              <WorkCard key={credit.id} credit={credit} />
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                What SJC actually delivers
              </h2>
              <div className="space-y-4 text-text-muted">
                <p>
                  The scope varies by project. For some productions, you need someone 
                  who understands both the creative requirements and the technical 
                  reality of LED volumes — a supervisor who can bridge that gap.
                </p>
                <p>
                  For others, you need a team that can build environments, operate 
                  the volume on set, create screen content throughout the shoot, and 
                  deliver custom rendering pipelines when the standard approach won&apos;t 
                  cut it.
                </p>
                <p>
                  SJC does both. The team scales up when the job needs it and scales 
                  back down when it doesn&apos;t.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 border border-border rounded bg-surface/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Supervision
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">→</span>
                    Client-side VP supervision
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">→</span>
                    Vendor coordination
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">→</span>
                    Technical troubleshooting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">→</span>
                    Shot supervision with filming team
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-border rounded bg-surface/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Full delivery
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-status-active mt-0.5">→</span>
                    Environment creation (expanded team)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-status-active mt-0.5">→</span>
                    Screen content creation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-status-active mt-0.5">→</span>
                    Volume operation on set
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-status-active mt-0.5">→</span>
                    Custom rendering pipelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 border border-border rounded bg-background glow-border">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Got a project that needs VP support?
              </h2>
              <p className="mt-1 text-text-muted">
                Whether it&apos;s supervision or full delivery, let&apos;s talk scope.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-background rounded hover:bg-accent-bright transition-colors focus-ring"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
