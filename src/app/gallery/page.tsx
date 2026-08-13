import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryFilter from "@/components/GalleryFilter";
import JsonLd from "@/components/JsonLd";
import { galleryFilters, galleryImages } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Work | Finesse Cleaning",
  description:
    "See real before-and-after results from Finesse Cleaning's pressure washing and soft washing jobs across South Florida — roofs, driveways, pavers, commercial properties, and more.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        title="Our Work"
        subtitle="See what our pressure washing can do. The results speak for themselves."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <GalleryFilter filters={galleryFilters} images={galleryImages} />
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready for Your Before & After?
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
