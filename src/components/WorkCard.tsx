"use client";

import { CreditItem } from "@/lib/data";

interface WorkCardProps {
  credit: CreditItem;
  featured?: boolean;
}

function ProjectVisual({ title, color }: { title: string; color: string }) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
      }}
    >
      {/* Abstract shapes */}
      <div 
        className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30"
        style={{ backgroundColor: color }}
      />
      <div 
        className="absolute right-12 top-16 w-20 h-20 rounded-full opacity-20"
        style={{ backgroundColor: color }}
      />
      <div 
        className="absolute -left-4 bottom-4 w-24 h-24 rounded-full opacity-15"
        style={{ backgroundColor: color }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${color}30 1px, transparent 1px),
            linear-gradient(90deg, ${color}30 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Project initials */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
      >
        <span 
          className="text-6xl font-bold opacity-20 select-none"
          style={{ color }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
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
      {/* Project visual */}
      <div className="relative h-44 overflow-hidden">
        <ProjectVisual title={credit.title} color={credit.color} />
        
        {/* Year badge */}
        <div className="absolute top-4 left-4">
          <span 
            className="inline-block px-3 py-1.5 text-xs font-semibold rounded-full text-white"
            style={{ backgroundColor: credit.color }}
          >
            {credit.year}
          </span>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-white/90 text-foreground">
            {categoryLabels[credit.category]}
          </span>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-xl font-bold text-white">
            {credit.title}
          </h3>
          <p className="text-sm text-white/80">{credit.client}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
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

        <p className="text-text-muted leading-relaxed mb-4 text-sm">
          {credit.description}
        </p>

        {credit.highlights.length > 0 && (
          <ul className="flex flex-wrap gap-2" role="list">
            {credit.highlights.map((highlight, i) => (
              <li
                key={i}
                className="px-2 py-1 text-xs bg-surface-elevated rounded-md text-text-dim"
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
