"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { galleryFilters, galleryImages } from "@/lib/data";

export default function GalleryPage() {
  const [active, setActive] = useState("All Work");

  const filtered =
    active === "All Work"
      ? galleryImages
      : galleryImages.filter((img) => img.label === active);

  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="See what our pressure washing can do. The results speak for themselves."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  active === filter
                    ? "bg-brand text-white"
                    : "border border-navy/10 text-navy/60 hover:border-brand/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
