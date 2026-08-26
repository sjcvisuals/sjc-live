import { CreditItem } from "@/lib/data";
import Link from "next/link";

interface WorkCardProps {
  credit: CreditItem;
  showLink?: boolean;
}

export function WorkCard({ credit, showLink = false }: WorkCardProps) {
  const eraStyles = {
    sjc: "border-accent/30 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]",
    transition: "border-accent/20 hover:border-accent/40",
    "lux-machina": "border-border hover:border-border-bright",
  };

  const statusColors = {
    sjc: "bg-status-active",
    transition: "bg-status-warning",
    "lux-machina": "bg-text-dim",
  };

  const eraLabels = {
    sjc: "SJC",
    transition: "Transition",
    "lux-machina": "Lux Machina",
  };

  const content = (
    <article
      className={`group relative p-6 border bg-surface/50 rounded transition-all duration-300 ${eraStyles[credit.era]}`}
    >
      <div className="flex flex-col gap-4">
        <header>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <span 
                className={`w-1.5 h-1.5 rounded-full ${statusColors[credit.era]}`} 
                aria-hidden="true" 
              />
              <h3 className="text-base font-mono font-semibold text-foreground group-hover:text-accent transition-colors">
                {credit.title}
              </h3>
            </div>
            <span className="shrink-0 text-xs font-mono text-text-dim px-2 py-1 bg-surface-elevated rounded border border-border">
              {credit.year}
            </span>
          </div>
          <p className="mt-1 text-xs font-mono text-text-muted uppercase tracking-wider ml-3.5">
            {credit.platform}
          </p>
        </header>

        <div className="space-y-2 ml-3.5">
          <p className="text-sm font-mono text-accent">{credit.role}</p>
          <p className="text-sm text-text-muted leading-relaxed">
            {credit.description}
          </p>
        </div>

        <footer className="pt-3 border-t border-border ml-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-text-dim uppercase tracking-widest">
              {eraLabels[credit.era]}
            </span>
            {credit.era === "sjc" && (
              <span className="text-xs font-mono text-status-active uppercase tracking-wider">
                Active
              </span>
            )}
          </div>
        </footer>
      </div>
    </article>
  );

  if (showLink) {
    return (
      <Link href="/work" className="block focus-ring rounded">
        {content}
      </Link>
    );
  }

  return content;
}
