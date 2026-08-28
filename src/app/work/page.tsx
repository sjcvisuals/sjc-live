import { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { credits, categories } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Virtual production work: custom pipelines, environment creation, on-set supervision, and technical consulting. From Apple TV+ series to Sony commercials.",
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
              Tools, pipelines, and{" "}
              <span className="text-gradient">VP delivery</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              Custom rendering pipelines. Bespoke automation. Environment creation. 
              On-set supervision. The scope varies by project — here&apos;s a sample of 
              what we&apos;ve delivered.
            </p>
          </header>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-10">
            <h2
              id="featured-heading"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
            >
              Featured
            </h2>
            <p className="text-2xl font-bold text-foreground">
              Full delivery projects
            </p>
            <p className="mt-2 text-text-muted">
              Projects involving custom pipelines, environment creation, or complete 
              VP delivery — not just supervision.
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

      {/* CTA */}
      <section className="py-16 border-t border-border bg-surface-elevated/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 bg-accent-light border border-accent/20 rounded-2xl">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Need custom tools or VP support?
              </h2>
              <p className="mt-1 text-text-muted">
                Let&apos;s talk about what your production needs.
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
