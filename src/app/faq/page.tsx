"use client";

import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services, process, and guarantees."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <div className="divide-y divide-navy/10 border-y border-navy/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-semibold text-navy">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-brand transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm text-navy/60">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-white/70">
            Reach out to our team. We&apos;re here to help 24/7.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
