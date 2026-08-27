"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 focus-ring rounded group"
          aria-label="SJC Home"
        >
          <span className="text-xl font-bold tracking-tight font-mono">SJC</span>
          <span className="hidden sm:flex items-center gap-2 text-text-dim text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-status-active" aria-hidden="true" />
            sjc.live
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-mono uppercase tracking-wider rounded transition-colors focus-ring ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-text-muted hover:text-foreground hover:bg-surface-elevated"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-4 pl-4 border-l border-border">
            <a
              href="https://www.signl.store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono text-text-dim hover:text-text-muted transition-colors focus-ring rounded uppercase tracking-wider"
              aria-label="SIGNL Store (opens in new tab)"
            >
              SIGNL ↗
            </a>
          </div>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-text-muted hover:text-foreground focus-ring rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-surface"
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-mono uppercase tracking-wider rounded transition-colors focus-ring ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-text-muted hover:text-foreground hover:bg-surface-elevated"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-border">
              <a
                href="https://www.signl.store"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-xs font-mono text-text-dim hover:text-text-muted transition-colors focus-ring rounded uppercase tracking-wider"
                aria-label="SIGNL Store (opens in new tab)"
              >
                SIGNL ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
