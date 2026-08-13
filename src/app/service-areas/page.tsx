import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { serviceAreas } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas | Finesse Cleaning",
  description:
    "Finesse Cleaning provides pressure washing and soft washing across Palm Beach, Broward, and Miami-Dade counties. Find your city.",
  path: "/service-areas",
});

const counties = ["Broward County", "Miami-Dade County", "Palm Beach County"] as const;

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <PageHero
        title="Where We Work"
        subtitle="We serve Palm Beach, Broward, and Miami-Dade counties. Find your city below."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          {counties.map((county) => (
            <div key={county} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-navy">{county}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {serviceAreas
                  .filter((a) => a.county === county)
                  .map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="rounded-full border border-navy/10 px-4 py-2 text-sm text-navy/70 transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      {area.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
