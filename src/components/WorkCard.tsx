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
      className={`group relative overflow-hidden bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-border-bright card-shadow hover:card-shadow-hover ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Colorful top accent */}
      <div 
        className="h-1.5 w-full"
        style={{ backgroundColor: credit.color }}
        aria-hidden="true"
      />
      
      {/* Visual header with gradient */}
      <div 
        className="relative h-36 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${credit.color}15 0%, ${credit.color}05 100%)`,
        }}
        aria-hidden="true"
      >
        {/* Decorative circles */}
        <div 
          className="absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-20"
          style={{ backgroundColor: credit.color }}
        />
        <div 
          className="absolute right-20 top-8 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: credit.color }}
        />
        
        {/* Project initial */}
        <div 
          className="absolute right-6 bottom-2 text-7xl font-bold leading-none opacity-[0.08] select-none"
          style={{ color: credit.color }}
        >
          {credit.title.charAt(0)}
        </div>
        
        {/* Year badge */}
        <div className="absolute top-4 left-5">
          <span 
            className="inline-block px-3 py-1.5 text-xs font-semibold rounded-full"
            style={{ 
              backgroundColor: credit.color,
              color: "white",
            }}
          >
            {credit.year}
          </span>
        </div>
        
        {/* Team size indicator */}
        {credit.teamSize && (
          <div className="absolute top-4 right-5 flex items-center gap-2">
            <span className="text-xs text-text-dim">Team</span>
            <span 
              className="px-2 py-1 text-xs font-semibold rounded-full bg-surface border border-border"
            >
              {credit.teamSize}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-1">
            {credit.title}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-muted font-medium">{credit.client}</span>
            <span className="text-border-bright">·</span>
            <span className="text-text-dim">{categoryLabels[credit.category]}</span>
          </div>
        </header>

        <div className="mb-4">
          <span 
            className="inline-block px-3 py-1 text-xs font-medium rounded-full"
            style={{ 
              backgroundColor: `${credit.color}15`,
              color: credit.color,
            }}
          >
            {credit.role}
          </span>
        </div>

        <p className="text-text-muted leading-relaxed mb-5">
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
                  className="shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full"
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
