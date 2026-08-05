"use client";

import { useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCarousel({
  testimonials,
  bordered = false,
}: {
  testimonials: Testimonial[];
  bordered?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <div
            key={t.name + t.quote.slice(0, 20)}
            data-card
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TestimonialCard
              quote={t.quote}
              name={t.name}
              source={t.source}
              rating={t.rating}
              bordered={bordered}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous reviews"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-soft transition-colors hover:border-brand/40 hover:text-brand"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next reviews"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-soft transition-colors hover:border-brand/40 hover:text-brand"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
