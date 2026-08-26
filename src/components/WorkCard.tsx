import { CreditItem } from "@/lib/data";
import Link from "next/link";

interface WorkCardProps {
  credit: CreditItem;
  showLink?: boolean;
}

export function WorkCard({ credit, showLink = false }: WorkCardProps) {
  const eraStyles = {
    sjc: "border-led-cyan/30 hover:border-led-cyan/50",
    transition: "border-led-magenta/30 hover:border-led-magenta/50",
    "lux-machina": "border-border hover:border-border-bright",
  };

  const eraLabels = {
    sjc: "SJC",
    transition: "Transition",
    "lux-machina": "Lux Machina Era",
  };

  const content = (
    <article
      className={`group relative p-6 border bg-surface rounded-lg transition-all duration-300 ${eraStyles[credit.era]}`}
    >
      <div className="flex flex-col gap-4">
        <header>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-led-cyan transition-colors">
              {credit.title}
            </h3>
            <span className="shrink-0 text-xs font-mono text-text-dim px-2 py-1 bg-surface-elevated rounded">
              {credit.year}
            </span>
          </div>
          <p className="mt-1 text-sm text-text-muted">{credit.platform}</p>
        </header>

        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">{credit.role}</p>
          <p className="text-sm text-text-muted leading-relaxed">
            {credit.description}
          </p>
        </div>

        <footer className="pt-2 border-t border-border">
          <span className="text-xs font-mono text-text-dim uppercase tracking-wider">
            {eraLabels[credit.era]}
          </span>
        </footer>
      </div>

      {credit.era === "sjc" && (
        <div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-led-cyan to-transparent rounded-l-lg"
          aria-hidden="true"
        />
      )}
    </article>
  );

  if (showLink) {
    return (
      <Link href="/work" className="block focus-ring rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
