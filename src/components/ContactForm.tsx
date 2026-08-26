"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactEmail) {
      setFormState("error");
      return;
    }

    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `SJC Contact: ${projectType} - ${company || name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nProject Type: ${projectType}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormState("success");
  };

  if (!contactEmail) {
    return (
      <div className="p-6 border border-border rounded bg-background">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-status-warning" aria-hidden="true" />
          <span className="text-xs font-mono text-text-dim uppercase tracking-widest">
            Configuration Required
          </span>
        </div>
        <p className="text-text-muted mb-4">
          Contact form is currently unavailable.
        </p>
        <p className="text-sm text-text-dim font-mono">
          Set{" "}
          <code className="px-1.5 py-0.5 bg-surface-elevated rounded text-xs border border-border">
            NEXT_PUBLIC_CONTACT_EMAIL
          </code>{" "}
          environment variable to enable.
        </p>
      </div>
    );
  }

  if (formState === "success") {
    return (
      <div className="p-6 border border-accent/30 rounded bg-background glow-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-status-active" aria-hidden="true" />
          <span className="text-xs font-mono text-text-dim uppercase tracking-widest">
            Email Client Opening
          </span>
        </div>
        <p className="text-lg font-mono font-semibold text-foreground mb-2">
          Opening your email client...
        </p>
        <p className="text-text-muted">
          If it didn&apos;t open, email directly:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-accent hover:text-accent-bright transition-colors focus-ring rounded font-mono"
          >
            {contactEmail}
          </a>
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-4 text-sm font-mono text-text-muted hover:text-foreground transition-colors focus-ring rounded"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono text-text-dim uppercase tracking-wider mb-2"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-foreground placeholder-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono text-text-dim uppercase tracking-wider mb-2"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-foreground placeholder-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-xs font-mono text-text-dim uppercase tracking-wider mb-2"
        >
          Company / Production
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-foreground placeholder-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="Production company or vendor"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="block text-xs font-mono text-text-dim uppercase tracking-wider mb-2"
        >
          Project Type <span className="text-accent">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        >
          <option value="">Select an option</option>
          <option value="VP Supervision">VP Supervision</option>
          <option value="Custom Tools">Custom Tool Development</option>
          <option value="Media Server Programming">Media Server Programming</option>
          <option value="Consultation">Consultation / Tech Scoping</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono text-text-dim uppercase tracking-wider mb-2"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-foreground placeholder-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
          placeholder="Project details, timeline, what support you're looking for..."
        />
      </div>

      {formState === "error" && (
        <div className="p-4 border border-status-error/30 rounded bg-status-error/5">
          <p className="text-sm text-status-error font-mono">
            Something went wrong. Please try again or email directly.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto px-8 py-3 text-sm font-mono uppercase tracking-wider bg-accent text-background rounded hover:bg-accent-bright transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Opening..." : "Send Message"}
      </button>

      <p className="text-xs text-text-dim font-mono">
        Opens your email client with a pre-filled message. Data is not stored.
      </p>
    </form>
  );
}
