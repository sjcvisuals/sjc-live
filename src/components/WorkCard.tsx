"use client";

import { CreditItem } from "@/lib/data";

interface WorkCardProps {
  credit: CreditItem;
  featured?: boolean;
}

export function WorkCard({ credit, featured = false }: WorkCardProps) {
  const categoryLabels = {
    "film-tv": "Film & TV",
    "commercial": "Commercial",
    "live-events": "Live Events",
    "installation": "Installation",
  };

  return (
    <article
      className={`group relative overflow-hidden border border-border bg-surface/30 rounded transition-all duration-300 hover:border-border-bright ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{
        boxShadow: `0 0 0 0 ${credit.color}00`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px -10px ${credit.color}40`;
        (e.currentTarget as HTMLElement).style.borderColor = `${credit.color}50`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${credit.color}00`;
        (e.currentTarget as HTMLElement).style.borderColor = "";
      }}
    >
      {/* Visual header strip */}
      <div 
        className="h-2 w-full"
        style={{ backgroundColor: credit.color }}
        aria-hidden="true"
      />
      
      {/* Abstract visual block - represents the production */}
      <div 
        className="relative h-32 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${credit.color}15 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      >
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(${credit.color}20 1px, transparent 1px),
              linear-gradient(90deg, ${credit.color}20 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        
        {/* Diagonal accent lines */}
        <div 
          className="absolute -right-8 -top-8 w-32 h-32 opacity-20"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              ${credit.color},
              ${credit.color} 2px,
              transparent 2px,
              transparent 12px
            )`,
          }}
        />
        
        {/* Project initial as large background element */}
        <div 
          className="absolute right-4 bottom-0 text-8xl font-mono font-bold leading-none opacity-10 select-none"
          style={{ color: credit.color }}
        >
          {credit.title.charAt(0)}
        </div>
        
        {/* Year badge */}
        <div className="absolute top-4 left-4">
          <span 
            className="inline-block px-2 py-1 text-xs font-mono rounded"
            style={{ 
              backgroundColor: `${credit.color}20`,
              color: credit.color,
            }}
          >
            {credit.year}
          </span>
        </div>
        
        {/* Team size indicator if applicable */}
        {credit.teamSize && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <span className="text-xs font-mono text-text-dim">Team</span>
            <span 
              className="px-1.5 py-0.5 text-xs font-mono rounded"
              style={{ 
                backgroundColor: `${credit.color}20`,
                color: credit.color,
              }}
            >
              {credit.teamSize}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <header className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {credit.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono text-text-muted">{credit.client}</span>
            <span className="text-text-dim">·</span>
            <span className="text-text-dim">{categoryLabels[credit.category]}</span>
          </div>
        </header>

        <div className="mb-4">
          <span 
            className="inline-block px-2 py-1 text-xs font-mono rounded border"
            style={{ 
              borderColor: `${credit.color}40`,
              color: credit.color,
            }}
          >
            {credit.role}
          </span>
        </div>

        <p className="text-text-muted leading-relaxed mb-6">
          {credit.description}
        </p>

        {credit.highlights.length > 0 && (
          <ul className="space-y-2" role="list">
            {credit.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-text-muted"
              >
                <span
                  className="shrink-0 w-1 h-1 mt-2 rounded-full"
                  style={{ backgroundColor: credit.color }}
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
