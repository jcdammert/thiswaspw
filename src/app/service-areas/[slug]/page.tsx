import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import {
  serviceAreas,
  services,
  testimonials,
  phoneDisplay,
  phoneHref,
  cityContent,
} from "@/lib/data";

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
    title: "Safe Cleaning Products",
    description:
      "We use safe soaps that break down naturally. Your plants and pets are safe with us.",
  },
];

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  const content = cityContent[area.name];
  return {
    title: `Pressure Washing in ${area.name}, FL | Finesse Cleaning`,
    description: content
      ? `${content.metaHook} Roof soft washing, driveway cleaning, house washing, and more. Free quotes.`
      : `Finesse Cleaning provides premium pressure washing and soft washing in ${area.name}, FL. Roof washing, driveway cleaning, house washing, and more. Free quotes.`,
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();
  const content = cityContent[area.name];

  const nearby = serviceAreas
    .filter((a) => a.county === area.county && a.slug !== area.slug)
    .slice(0, 8);

  return (
    <>
      <PageHero
        title={`Pressure Washing in ${area.name}, FL`}
        subtitle={`Premium pressure washing and soft washing for homes and businesses throughout ${area.name} and ${area.county}.`}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              {area.name}&apos;s Trusted Pressure Washing Team
            </h2>
            <p className="mt-4 text-navy/60">
              {content
                ? content.paragraph1
                : `Finesse Cleaning has been restoring homes and businesses across South Florida since 2014. In ${area.name}, we handle everything from roof soft washing and driveway cleaning to full house washing and paver sealing.`}
            </p>
            <p className="mt-4 text-navy/60">
              {content
                ? content.paragraph2
                : `As a local ${area.county} team, we know the algae, mildew, and hard water stains that build up fast in this climate. We use the right pressure and safe soaps for every surface, and we do a full walk-through with you when the job is done.`}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
              >
                Get a Free Quote
              </Link>
              <a
                href={phoneHref}
                className="rounded-full border border-navy/20 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                {phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-truck.jpg"
              alt={`Finesse Cleaning truck on site in ${area.name}, FL`}
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Services Available in {area.name}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${area.name}, FL`}
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
                </div>
              </Link>
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What {area.name} Customers Say
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
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

      {nearby.length > 0 && (
        <section className="bg-navy/5">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy">
              Also Serving Nearby in {area.county}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {nearby.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started in {area.name}?
          </h2>
          <p className="mt-4 text-white/80">
            Contact us today for a free quote. We are ready to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-white/90"
            >
              Get a Quote
            </Link>
            <a
              href={phoneHref}
              className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
