import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/data";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Finesse Cleaning",
  description:
    "Answers to common questions about pressure washing, soft washing, pricing, safety, and scheduling with Finesse Cleaning in South Florida.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services, process, and guarantees."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <FaqAccordion faqs={faqs} />
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
