import { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { credits } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Virtual production credits and case studies. Spencer Chase / SJC — VP Supervisor on Hijack, Douglas Is Cancelled, Black Doves, Silo, and more.",
};

export default function WorkPage() {
  const sjcCredits = credits.filter(
    (c) => c.era === "sjc" || c.era === "transition"
  );
  const luxCredits = credits.filter((c) => c.era === "lux-machina");

  return (
    <>
      <section className="py-24 border-b border-border tech-grid" aria-labelledby="work-hero">
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
              className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Tools and supervision
              <br />
              <span className="text-gradient">for real productions</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
              These are the productions Spencer Chase has worked on as VP
              Supervisor or Engine TD. The focus is on tools, showfiles,
              pipelines, and technical supervision — not content creation.
            </p>
          </header>
        </div>
      </section>

      <section
        className="py-16 bg-surface/50"
        aria-labelledby="sjc-credits-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
              <h2
                id="sjc-credits-heading"
                className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
              >
                SJC / Active
              </h2>
            </div>
            <p className="text-2xl font-mono font-semibold text-foreground">
              Current work as SJCVisuals
            </p>
            <p className="mt-2 text-text-muted">
              Client-side VP supervision and tooling, independent of specific volume operators.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sjcCredits.map((credit) => (
              <WorkCard key={credit.id} credit={credit} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 border-t border-border"
        aria-labelledby="lux-credits-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-2 h-2 rounded-full bg-text-dim" aria-hidden="true" />
              <h2
                id="lux-credits-heading"
                className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]"
              >
                Lux Machina Era
              </h2>
            </div>
            <p className="text-2xl font-mono font-semibold text-foreground">
              Previous work as Engine TD
            </p>
            <p className="mt-2 text-text-muted">
              Background in Unreal Engine technical direction at Lux Machina.
              Additional experience at Third Floor as VP TD.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxCredits.map((credit) => (
              <WorkCard key={credit.id} credit={credit} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl p-6 border border-border rounded bg-background">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-text-dim uppercase tracking-widest">
                {"//"} Note
              </span>
            </div>
            <div className="space-y-4 text-text-muted text-sm">
              <p>
                Credits listed are personal work by Spencer Chase as VP
                Supervisor or Engine TD. Role titles reflect the actual position
                held on each production.
              </p>
              <p>
                SJC does not claim credit for productions where Spencer was
                employed by another company — those roles are clearly marked.
              </p>
              <p className="text-text-dim font-mono text-xs">
                No client logos, production stills, or copyrighted imagery displayed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
