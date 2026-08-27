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
    color: "#f97316",
  },
  {
    number: "02",
    title: "Full Delivery",
    description:
      "Environment creation, volume operation, screen content, and custom pipelines. The team scales to fit the job.",
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "Tools & Pipelines",
    description:
      "Custom software, rendering pipelines, and automation built for your specific workflow.",
    color: "#14b8a6",
  },
];

export default function Home() {
  const featuredCredits = credits.filter(
    (c) => c.id === "hijack-s2" || c.id === "sony-monster-hunter" || c.id === "black-doves"
  );

  return (
    <>
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <LEDVolumeHero />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
              <p className="text-xs font-medium text-accent">
                Virtual Production
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              VP supervision and delivery{" "}
              <span className="text-gradient">that scales</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed animate-fade-in-delay-1">
              From a single supervisor embedded with your team to full environment 
              creation, volume operation, and custom pipelines. The scope matches 
              what you actually need.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dim transition-colors focus-ring"
              >
                See the Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface-elevated hover:border-border-bright transition-colors focus-ring"
              >
                Start a Conversation
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-text-dim animate-fade-in-delay-2">
              Spencer Chase · London, UK
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section
        className="py-20 border-t border-border"
        aria-labelledby="offers-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2
              id="offers-heading"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
            >
              How we work
            </h2>
            <p className="text-3xl font-bold text-foreground">
              Three ways to engage
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <article 
                key={offer.number} 
                className="group p-8 bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-border-bright card-shadow hover:card-shadow-hover"
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-xl text-xl font-bold text-white mb-5"
                  style={{ backgroundColor: offer.color }}
                >
                  {offer.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {offer.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 bg-surface-elevated rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/2">
                <p className="text-text-muted leading-relaxed">
                  SJC has delivered full VP workflows — environment creation with 
                  expanded teams, on-site volume operation, shot supervision with 
                  filming crews, and custom Unreal rendering pipelines.
                </p>
              </div>
              <div className="md:w-1/2">
                <p className="text-text-muted leading-relaxed">
                  But not every job needs all of that. Sometimes a production just 
                  needs someone who understands both the creative vision and the 
                  technical reality. <span className="text-foreground font-medium">The scope scales to fit.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section
        className="py-20 border-t border-border bg-surface-elevated/50"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2
                id="work-heading"
                className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
              >
                Selected Work
              </h2>
              <p className="text-3xl font-bold text-foreground">
                Recent projects
              </p>
            </div>
            <Link
              href="/work"
              className="text-sm font-semibold text-accent hover:text-accent-dim transition-colors focus-ring rounded"
            >
              View all work →
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
        className="py-20 border-t border-border"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative p-12 lg:p-16 bg-gradient-to-br from-accent to-accent-dim rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
                <span className="text-xs font-medium text-white">
                  Available for projects
                </span>
              </div>
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-bold text-white"
              >
                Got a production that needs VP support?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Whether it&apos;s a supervisor for your next series or a team to 
                deliver a complete VP workflow — let&apos;s figure out the right scope.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-accent rounded-lg hover:bg-white/90 transition-colors focus-ring"
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
