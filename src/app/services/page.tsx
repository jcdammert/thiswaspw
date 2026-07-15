import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Finesse Cleaning",
  description:
    "We clean all exterior surfaces safely and effectively. We handle everything from dirty driveways to delicate roofs.",
};

const whyPickUs = [
  {
    title: "Satisfaction Guarantee",
    description:
      "We do a full walk-through when we finish. We make sure you are completely happy before we leave.",
  },
  {
    title: "Focus on Quality",
    description:
      "We pay attention to the details that others miss. We do the job right the first time.",
  },
  {
    title: "Property Protection",
    description: "We use safe soaps and protect your plants while we work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="We clean all exterior surfaces safely and effectively. We handle everything from dirty driveways to delicate roofs."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                  >
                    Learn More <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Pick Finesse</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {whyPickUs.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/5 p-8">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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
