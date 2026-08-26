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
      <div className="p-6 border border-border rounded-lg bg-surface-elevated">
        <p className="text-text-muted mb-4">
          Contact form is currently unavailable.
        </p>
        <p className="text-sm text-text-dim">
          <strong>TODO:</strong> Set{" "}
          <code className="px-1 py-0.5 bg-surface rounded text-xs font-mono">
            NEXT_PUBLIC_CONTACT_EMAIL
          </code>{" "}
          environment variable to enable the contact form.
        </p>
      </div>
    );
  }

  if (formState === "success") {
    return (
      <div className="p-6 border border-led-cyan/30 rounded-lg bg-surface-elevated">
        <p className="text-lg font-semibold text-foreground mb-2">
          Opening your email client...
        </p>
        <p className="text-text-muted">
          If your email client didn&apos;t open, you can reach out directly at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-led-cyan hover:underline focus-ring rounded"
          >
            {contactEmail}
          </a>
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-4 text-sm text-text-muted hover:text-foreground transition-colors focus-ring rounded"
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
            className="block text-sm font-medium text-foreground mb-2"
          >
            Name <span className="text-led-magenta">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-md text-foreground placeholder-text-dim focus:outline-none focus:border-led-cyan focus:ring-1 focus:ring-led-cyan transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email <span className="text-led-magenta">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-md text-foreground placeholder-text-dim focus:outline-none focus:border-led-cyan focus:ring-1 focus:ring-led-cyan transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Company / Production
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-md text-foreground placeholder-text-dim focus:outline-none focus:border-led-cyan focus:ring-1 focus:ring-led-cyan transition-colors"
          placeholder="Production company or vendor name"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-foreground mb-2"
        >
          What are you looking for? <span className="text-led-magenta">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-md text-foreground focus:outline-none focus:border-led-cyan focus:ring-1 focus:ring-led-cyan transition-colors"
        >
          <option value="">Select an option</option>
          <option value="VP Supervision">VP Supervision</option>
          <option value="Custom Tools">Custom Tool Development</option>
          <option value="Media Server Programming">
            Media Server Programming
          </option>
          <option value="Consultation">Consultation / Tech Scoping</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message <span className="text-led-magenta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-md text-foreground placeholder-text-dim focus:outline-none focus:border-led-cyan focus:ring-1 focus:ring-led-cyan transition-colors resize-none"
          placeholder="Tell us about your project, timeline, and what support you're looking for..."
        />
      </div>

      {formState === "error" && (
        <div className="p-4 border border-led-magenta/30 rounded-md bg-led-magenta/5">
          <p className="text-sm text-led-magenta">
            Something went wrong. Please try again or email directly.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto px-8 py-3 text-sm font-medium bg-led-cyan text-background rounded-md hover:bg-led-cyan/90 transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Opening email..." : "Send Message"}
      </button>

      <p className="text-xs text-text-dim">
        This form opens your email client with a pre-filled message. Your data
        is not stored.
      </p>
    </form>
  );
}
