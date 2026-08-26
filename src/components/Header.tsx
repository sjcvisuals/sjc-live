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
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 focus-ring rounded"
          aria-label="SJC Home"
        >
          <span className="text-xl font-bold tracking-tight">SJC</span>
          <span className="hidden sm:inline text-text-muted text-sm font-mono">
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
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors focus-ring ${
                  isActive
                    ? "text-foreground bg-surface-elevated"
                    : "text-text-muted hover:text-foreground hover:bg-surface"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://www.signl.store"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1.5 text-xs font-mono text-text-dim hover:text-text-muted transition-colors focus-ring rounded"
            aria-label="SIGNL Store (opens in new tab)"
          >
            SIGNL →
          </a>
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
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors focus-ring ${
                    isActive
                      ? "text-foreground bg-surface-elevated"
                      : "text-text-muted hover:text-foreground hover:bg-surface-elevated"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://www.signl.store"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-xs font-mono text-text-dim hover:text-text-muted transition-colors focus-ring rounded"
              aria-label="SIGNL Store (opens in new tab)"
            >
              SIGNL →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
