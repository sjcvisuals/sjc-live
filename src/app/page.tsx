import Link from "next/link";
import { LEDVolumeHero } from "@/components/LEDVolumeHero";
import { WorkCard } from "@/components/WorkCard";
import { credits } from "@/lib/data";

const offerings = [
  {
    title: "Custom Tools & Pipelines",
    description:
      "Bespoke software for VP workflows — rendering pipelines, showfile automation, control interfaces. If your production needs it and it doesn't exist, we build it.",
    color: "#f97316",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Technical Consulting",
    description:
      "Deep knowledge of LED ICVFX, media servers, and real-time rendering. Available for workflow design, vendor selection, or troubleshooting when things go sideways.",
    color: "#8b5cf6",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "VP Supervision & Delivery",
    description:
      "Client-side supervision that bridges production and technology. Or full delivery — environments, volume operation, content pipelines — when you need more than oversight.",
    color: "#14b8a6",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25" />
      </svg>
    ),
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              VP tools, pipelines, and{" "}
              <span className="text-gradient">technical expertise</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed animate-fade-in-delay-1">
              Custom software, technical consulting, and hands-on VP supervision 
              for film, TV, and commercial productions. Built by someone who&apos;s 
              been on set.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dim transition-colors focus-ring"
              >
                What We Do
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface-elevated hover:border-border-bright transition-colors focus-ring"
              >
                See the Work
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-text-dim animate-fade-in-delay-2">
              Spencer Chase · London, UK
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20 border-t border-border"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
            >
              Services
            </h2>
            <p className="text-3xl font-bold text-foreground max-w-2xl mx-auto">
              Technical expertise for virtual production
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <article 
                key={offering.title} 
                className="group p-8 bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-border-bright card-shadow hover:card-shadow-hover"
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-xl text-white mb-5"
                  style={{ backgroundColor: offering.color }}
                >
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {offering.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
            >
              Learn more about our services →
            </Link>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

            <div className="relative z-10 max-w-2xl">
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-bold text-white"
              >
                Need VP tools or technical support?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Whether you need a custom pipeline, technical consulting, or 
                hands-on supervision — let&apos;s talk about what your production needs.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-accent rounded-lg hover:bg-white/90 transition-colors focus-ring"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
