import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://finesse-cleaning.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/gallery",
    "/faq",
    "/reviews",
    "/contact",
    "/service-areas",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const cityRoutes = serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...cityRoutes];
}
