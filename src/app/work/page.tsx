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
      <section className="py-20 border-b border-border gradient-mesh" aria-labelledby="work-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Work
            </p>
            <h1
              id="work-hero"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              From supervision to{" "}
              <span className="text-gradient">full VP delivery</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              SJC scales to fit the job. Sometimes that&apos;s a single supervisor embedded 
              with your production. Sometimes it&apos;s a team delivering environments, 
              operating the volume, and building custom pipelines.
            </p>
          </header>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
              <span className="text-xs font-medium text-status-active">Featured</span>
            </div>
            <h2
              id="featured-heading"
              className="text-2xl font-bold text-foreground"
            >
              Full delivery projects
            </h2>
            <p className="mt-2 text-text-muted">
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
      <section className="py-16 border-t border-border bg-surface-elevated/50" aria-labelledby="film-tv-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-10">
            <h2
              id="film-tv-heading"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
            >
              {categories["film-tv"].label}
            </h2>
            <p className="text-2xl font-bold text-foreground">
              Series & features
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
      <section className="py-16 border-t border-border" aria-labelledby="commercial-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-10">
            <h2
              id="commercial-heading"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
            >
              {categories["commercial"].label}
            </h2>
            <p className="text-2xl font-bold text-foreground">
              Brand campaigns
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
      <section className="py-16 border-t border-border bg-surface-elevated/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What SJC actually delivers
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
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
                <p className="text-foreground font-medium">
                  SJC does both. The team scales up when the job needs it.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 bg-surface border border-border rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
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
              
              <div className="p-6 bg-surface border border-border rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
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
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 bg-accent-light border border-accent/20 rounded-2xl">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Got a project that needs VP support?
              </h2>
              <p className="mt-1 text-text-muted">
                Whether it&apos;s supervision or full delivery, let&apos;s talk scope.
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
