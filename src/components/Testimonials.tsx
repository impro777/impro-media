"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  if (TESTIMONIALS.length === 0) return null;

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-bg-section-b py-[var(--section-py)]">
      <Container>
        <SectionHeading label="Testimonials" title="What Clients Say" />

        <FadeIn>
          <div className="relative mt-12 mx-auto max-w-3xl">
            {/* Card */}
            <div className="rounded-[var(--radius-lg)] border border-card-border bg-bg-card p-10 md:p-12">
              <blockquote className="mb-8 text-lg leading-[1.8] text-text-main md:text-xl">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src={t.photo!}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-bold text-text-bright">
                    {t.name}
                  </p>
                  <p className="text-sm text-text-dim">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-bg-card text-text-dim transition-all hover:border-card-border-hover hover:text-text-bright"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current
                        ? "w-6 bg-teal"
                        : "w-2 bg-card-border hover:bg-text-dim"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-bg-card text-text-dim transition-all hover:border-card-border-hover hover:text-text-bright"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
