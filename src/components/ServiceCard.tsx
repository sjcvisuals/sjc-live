interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: string;
  };
}

function ServiceIcon({ type }: { type: string }) {
  const baseClasses = "w-10 h-10 text-led-cyan";

  switch (type) {
    case "tools":
      return (
        <svg
          className={baseClasses}
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
    case "server":
      return (
        <svg
          className={baseClasses}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
          />
        </svg>
      );
    case "monitor":
      return (
        <svg
          className={baseClasses}
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

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group p-8 border border-border bg-surface rounded-lg hover:border-border-bright transition-colors">
      <header className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-surface-elevated rounded-lg border border-border group-hover:border-led-cyan/30 transition-colors">
          <ServiceIcon type={service.icon} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted font-mono">{service.subtitle}</p>
        </div>
      </header>

      <p className="text-text-muted leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2" role="list">
        {service.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-text-muted"
          >
            <span
              className="shrink-0 w-1.5 h-1.5 mt-2 bg-led-cyan rounded-full"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
