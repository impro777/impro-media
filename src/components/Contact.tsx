"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Clock } from "lucide-react";
import { BUDGET_OPTIONS, COMPANY } from "@/lib/constants";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";
import { Button } from "./ui/Button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("company_url")) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          website: data.get("website"),
          budget: data.get("budget"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-bg-section-b py-[var(--section-py)]">
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's Discuss Your Goals"
          subtitle="Tell me about your business and I'll get back to you within 24 hours."
        />

        <div className="mt-12 grid gap-16 lg:grid-cols-[5fr_7fr]">
          {/* Left info */}
          <FadeIn>
            <div>
              <h3 className="mb-3.5 text-[22px] font-bold text-text-bright">
                Ready to improve your ad performance?
              </h3>
              <p className="mb-9 text-base leading-[1.7] text-text-main">
                Send me a message and I&apos;ll get back to you with ideas for
                your business.
              </p>

              <div className="space-y-[18px]">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-card-border bg-bg-card">
                    <MapPin className="h-[18px] w-[18px] text-teal" />
                  </div>
                  <span className="text-[15px] text-text-main">
                    Based in the {COMPANY.location}
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-card-border bg-bg-card">
                    <Clock className="h-[18px] w-[18px] text-teal" />
                  </div>
                  <span className="text-[15px] text-text-main">
                    Response {COMPANY.responseTime}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-lg)] border border-card-border bg-white/[0.03] p-10 shadow-[var(--shadow-form)]"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="company_url"
                aria-hidden="true"
                aria-label="Do not fill this field"
                className="absolute -left-[9999px] opacity-0"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="flex items-baseline gap-1 text-sm font-semibold text-text-main">
                    Name <span className="text-xs text-teal">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border border-card-border bg-black/15 px-3.5 py-3 text-[15px] text-text-bright outline-none transition-all placeholder:text-text-dim focus:border-teal focus:shadow-[0_0_0_3px_var(--color-teal-glow)]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="flex items-baseline gap-1 text-sm font-semibold text-text-main">
                    Email <span className="text-xs text-teal">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-card-border bg-black/15 px-3.5 py-3 text-[15px] text-text-bright outline-none transition-all placeholder:text-text-dim focus:border-teal focus:shadow-[0_0_0_3px_var(--color-teal-glow)]"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mt-[18px] grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="flex items-baseline gap-1 text-sm font-semibold text-text-main">
                    Website <span className="text-xs text-teal">*</span>
                  </label>
                  <input
                    name="website"
                    required
                    className="w-full rounded-lg border border-card-border bg-black/15 px-3.5 py-3 text-[15px] text-text-bright outline-none transition-all placeholder:text-text-dim focus:border-teal focus:shadow-[0_0_0_3px_var(--color-teal-glow)]"
                    placeholder="Your website or landing page"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="flex items-baseline gap-1 text-sm font-semibold text-text-main">
                    Monthly Ad Budget <span className="text-xs text-teal">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full rounded-lg border border-card-border bg-black/15 px-3.5 py-3 text-[15px] text-text-dim outline-none transition-all focus:border-teal focus:shadow-[0_0_0_3px_var(--color-teal-glow)] [&>option]:bg-white [&>option]:text-[#1a1a2e]"
                  >
                    <option value="">Select budget range</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-[18px] space-y-1.5">
                <label className="flex items-baseline gap-1 text-sm font-semibold text-text-main">
                  Message <span className="text-xs text-teal">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full resize-y rounded-lg border border-card-border bg-black/15 px-3.5 py-3 text-[15px] text-text-bright outline-none transition-all placeholder:text-text-dim focus:border-teal focus:shadow-[0_0_0_3px_var(--color-teal-glow)]"
                  placeholder="Tell me about your business and goals..."
                />
              </div>

              <div className="mt-6 flex items-start gap-2">
                <input
                  id="consent"
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-[3px] h-4 w-4 shrink-0 accent-teal"
                />
                <label htmlFor="consent" className="text-[13px] leading-[1.5] text-text-dim">
                  I agree to the{" "}
                  <a
                    href="/privacy"
                    className="text-teal no-underline hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {status === "sent" && (
                <p className="mt-4 text-sm font-medium text-teal">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
