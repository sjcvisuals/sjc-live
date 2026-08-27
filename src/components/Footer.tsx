import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-accent">SJC</span>
            </Link>
            <p className="mt-4 text-sm text-text-muted max-w-xs leading-relaxed">
              Virtual production supervision and delivery. Tools, pipelines, and on-set support that scales with your production.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="space-y-2">
              <Link
                href="/work"
                className="block text-sm text-text-muted hover:text-accent transition-colors focus-ring rounded"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="block text-sm text-text-muted hover:text-accent transition-colors focus-ring rounded"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-text-muted hover:text-accent transition-colors focus-ring rounded"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Location
            </h3>
            <p className="text-sm text-text-muted">
              London / UK
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <a
                href="https://www.signl.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-text-dim hover:text-accent transition-colors focus-ring rounded"
                aria-label="SIGNL Store - Wireless OSC Controller (opens in new tab)"
              >
                SIGNL — OSC Controller ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-dim">
              © {currentYear} SJCVisuals Ltd
            </p>
            <p className="text-xs text-text-dim">
              Virtual Production · London
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
