import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { ServiceIcon, ShieldCheckIcon, TargetIcon, LeafIcon } from "@/components/icons";
import { services, serviceDetails, phoneDisplay, phoneHref } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Finesse Cleaning`,
    description: `${service.description} Serving Palm Beach, Broward, and Miami-Dade counties. Free quotes.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const detail = serviceDetails[service.slug];

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              {service.title}: What to Expect
            </h2>
            <p className="mt-4 text-navy/60">
              {detail ? detail.overview : service.description}
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
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {detail && detail.beforeImage && detail.afterImage && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Before &amp; After
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-navy/60">
              Real results from a real {service.title.toLowerCase()} job.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={detail.beforeImage}
                    alt={`${service.title} before — Finesse Cleaning`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                    Before
                  </span>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={detail.afterImage}
                    alt={`${service.title} after — Finesse Cleaning`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    After
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {detail && (
        <>
          <section className="bg-navy/5">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  Our Approach
                </h2>
                <p className="mt-4 text-navy/60">{detail.approach}</p>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                    What&apos;s Included
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {detail.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-navy/70">
                        <span className="mt-1 text-brand" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                    Signs You Need This Service
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {detail.signs.map((item) => (
                      <li key={item} className="flex gap-3 text-navy/70">
                        <span className="mt-1 text-brand" aria-hidden>
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Pick Finesse</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand">
                <ShieldCheckIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">Satisfaction Guarantee</h3>
              <p className="mt-2 text-sm text-white/60">
                We do a full walk-through when we finish. We make sure you
                are completely happy before we leave.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand">
                <TargetIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">Focus on Quality</h3>
              <p className="mt-2 text-sm text-white/60">
                We pay attention to the details that others miss. We do the
                job right the first time.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand">
                <LeafIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">Safe Cleaning Products</h3>
              <p className="mt-2 text-sm text-white/60">
                We use safe soaps that break down naturally. Your plants and
                pets are safe with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="relative overflow-hidden bg-navy/5">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Every Service We Offer
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-navy/60">
              One team for the whole property — here&apos;s everything we
              handle.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <ServiceIcon slug={s.slug} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/80">
            Contact us today for a free quote on {service.title.toLowerCase()}
            . We are ready to help.
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
