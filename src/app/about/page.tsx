import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About | Finesse Cleaning",
  description: "South Florida's trusted pressure washing experts since 2014.",
  path: "/about",
});

const values = [
  {
    title: "Integrity",
    description: "We do what we say we will do. No hidden fees.",
  },
  {
    title: "Precision",
    description: "We use the right pressure for the right surface. We never guess.",
  },
  {
    title: "Respect",
    description: "We treat your home like it is our own.",
  },
  {
    title: "Hard Work",
    description: "We work hard to get the best results for you.",
  },
];

const stats = [
  { value: "3000+", label: "Jobs Completed" },
  { value: "12+", label: "Years in Business" },
  { value: "5.0", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title="About Finesse Cleaning"
        subtitle="South Florida's trusted pressure washing experts since 2014."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 text-navy/60">
              Founded in 2014, Finesse Cleaning was built on a simple idea.
              We wanted to do good work and treat people right. Too many
              companies rush through jobs and leave customers unhappy. We
              knew there was a better way.
            </p>
            <p className="mt-4 text-navy/60">
              We take pride in our work across Palm Beach, Broward, and
              Miami-Dade counties. We show up on time and we do the job
              right. We pay attention to the details that others miss.
            </p>
            <p className="mt-4 text-navy/60">
              When you choose Finesse Cleaning, you get a team that respects
              your property. We protect your home and make sure you are
              completely happy before we leave. We offer fair pricing and
              honest work.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.jpg"
              alt="The Finesse Cleaning team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-navy/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-6 py-16 text-center lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
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
