import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import JsonLd from "@/components/JsonLd";
import { testimonials } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reviews | Finesse Cleaning",
  description:
    "Read what property owners across South Florida think about our work.",
  path: "/reviews",
});

const stats = [
  { value: "3000+", label: "Jobs Completed" },
  { value: "12+", label: "Years in Business" },
  { value: "5.0", label: "Average Rating" },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <PageHero
        title="What Our Customers Say"
        subtitle="Read what property owners across South Florida think about our work."
      />

      <div className="relative z-10 -mt-10 px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col divide-y divide-navy/10 rounded-3xl bg-white shadow-soft-lg sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 px-8 py-6 text-center">
              <p className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 flex max-w-4xl justify-center">
          <GoogleReviewBadge />
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
          <TestimonialCarousel testimonials={testimonials} bordered />
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Have We Worked Together?
          </h2>
          <p className="mt-4 text-white/70">
            Your feedback helps us do better. We would love to hear about
            your experience with Finesse Cleaning.
          </p>
          <a
            href="https://www.google.com/search?q=finesse+cleaning+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            Leave a Review on Google
          </a>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Ready to Be Our Next Success Story?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-white/90"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
