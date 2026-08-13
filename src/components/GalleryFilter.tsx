"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/data";

export default function GalleryFilter({
  filters,
  images,
}: {
  filters: string[];
  images: GalleryImage[];
}) {
  const [active, setActive] = useState("All Work");

  const filtered =
    active === "All Work"
      ? images
      : images.filter((img) => img.label === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
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
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
              <p className="text-sm font-semibold text-white">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
