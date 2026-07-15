import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews | Finesse Cleaning",
  description:
    "Read what property owners across South Florida think about our work.",
};

const stats = [
  { value: "3000+", label: "Jobs Completed" },
  { value: "12+", label: "Years in Business" },
  { value: "5.0", label: "Average Rating" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="What Our Customers Say"
        subtitle="Read what property owners across South Florida think about our work."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-6 pt-16 text-center lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-navy/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-navy/10 p-8 shadow-sm"
              >
                <p className="text-sm text-navy/70">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-bold text-navy">{t.name}</p>
                <p className="text-sm text-navy/50">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
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
          <h2 className="text-3xl font-bold sm:text-4xl">
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
