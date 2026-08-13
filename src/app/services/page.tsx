import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import WhyPickFinesse from "@/components/WhyPickFinesse";
import MaintenancePlanCallout from "@/components/MaintenancePlanCallout";
import { gridServices } from "@/lib/data";

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
            {gridServices.map((service) => (
              <div
                key={service.slug}
                className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                  >
                    Learn More <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <MaintenancePlanCallout />
        </div>
      </section>

      <WhyPickFinesse items={whyPickUs} />

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
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
