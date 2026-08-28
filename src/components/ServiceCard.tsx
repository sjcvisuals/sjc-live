interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: string;
  };
  index: number;
}

const iconColors = ["#f97316", "#8b5cf6", "#14b8a6"];

function ServiceIcon({ type, color }: { type: string; color: string }) {
  const baseClasses = "w-7 h-7";

  switch (type) {
    case "tools":
      return (
        <svg
          className={baseClasses}
          style={{ color }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      );
    case "consulting":
      return (
        <svg
          className={baseClasses}
          style={{ color }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      );
    case "monitor":
      return (
        <svg
          className={baseClasses}
          style={{ color }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const color = iconColors[index % iconColors.length];

  return (
    <article className="group relative p-8 bg-surface border border-border rounded-2xl transition-all duration-300 hover:border-border-bright card-shadow hover:card-shadow-hover">
      <header className="flex items-start gap-4 mb-6">
        <div 
          className="p-3 rounded-xl"
          style={{ backgroundColor: `${color}15` }}
        >
          <ServiceIcon type={service.icon} color={color} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">
            {service.title}
          </h3>
          <p className="text-sm text-text-dim mt-0.5">
            {service.subtitle}
          </p>
        </div>
      </header>

      <p className="text-text-muted leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="pt-5 border-t border-border">
        <ul className="space-y-2.5" role="list">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-text-muted"
            >
              <span
                className="shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
