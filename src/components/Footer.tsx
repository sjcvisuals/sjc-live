import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight font-mono">SJC</span>
              <span className="w-1.5 h-1.5 rounded-full bg-status-active" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-sm text-text-muted max-w-xs font-mono leading-relaxed">
              VP tools. Media-server programming. Client-side supervision.
            </p>
            <p className="mt-4 text-xs text-text-dim font-mono uppercase tracking-widest">
              sjc.live
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-dim mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="space-y-2">
              <Link
                href="/work"
                className="block text-sm font-mono text-text-muted hover:text-accent transition-colors focus-ring rounded"
              >
                /work
              </Link>
              <Link
                href="/services"
                className="block text-sm font-mono text-text-muted hover:text-accent transition-colors focus-ring rounded"
              >
                /services
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-mono text-text-muted hover:text-accent transition-colors focus-ring rounded"
              >
                /contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-dim mb-4">
              Location
            </h3>
            <p className="text-sm font-mono text-text-muted">
              London / UK
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <a
                href="https://www.signl.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-text-dim hover:text-text-muted transition-colors focus-ring rounded uppercase tracking-wider"
                aria-label="SIGNL Store - Wireless OSC Controller (opens in new tab)"
              >
                <span className="w-1 h-1 rounded-full bg-accent/50" aria-hidden="true" />
                SIGNL — OSC Controller ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-dim font-mono">
              © {currentYear} SJCVisuals Ltd
            </p>
            <p className="text-xs text-text-dim font-mono uppercase tracking-widest">
              Virtual Production Tooling
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
