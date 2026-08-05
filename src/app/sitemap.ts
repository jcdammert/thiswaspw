import type { MetadataRoute } from "next";
import { serviceAreas, services } from "@/lib/data";

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

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...cityRoutes, ...serviceRoutes];
}
