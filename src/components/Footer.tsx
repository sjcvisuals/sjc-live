import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              SJC
            </Link>
            <p className="mt-2 text-sm text-text-muted max-w-xs">
              Virtual production tools, media-server programming, and client-side VP supervision.
            </p>
            <p className="mt-4 text-xs text-text-dim font-mono">
              sjc.live
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="mt-4 space-y-2">
              <Link
                href="/work"
                className="block text-sm text-text-muted hover:text-foreground transition-colors focus-ring rounded"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="block text-sm text-text-muted hover:text-foreground transition-colors focus-ring rounded"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-text-muted hover:text-foreground transition-colors focus-ring rounded"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Location
            </h3>
            <p className="mt-4 text-sm text-text-muted">
              London area / UK
            </p>
            <div className="mt-6">
              <a
                href="https://www.signl.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-text-dim hover:text-text-muted transition-colors focus-ring rounded"
                aria-label="SIGNL Store - Wireless OSC Controller (opens in new tab)"
              >
                SIGNL — Wireless OSC Controller →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-dim">
              © {currentYear} SJCVisuals Ltd. All rights reserved.
            </p>
            <p className="text-xs text-text-dim font-mono">
              Built for virtual production
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
