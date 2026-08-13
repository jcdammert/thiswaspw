import { cities, phoneHref, email } from "@/lib/data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thiswaspowerwashed.com";

export const business = {
  name: "Finesse Cleaning",
  telephone: phoneHref.replace("tel:", "+1"),
  email,
  streetAddress: "50 SE 3rd Ave",
  addressLocality: "Dania Beach",
  addressRegion: "FL",
  postalCode: "33004",
  addressCountry: "US",
  latitude: 26.0517423,
  longitude: -80.1398068,
  googleMapsUrl:
    "https://www.google.com/maps/place/Finesse+Cleaning/@26.0517423,-80.1398068,17z/data=!3m1!4b1!4m6!3m5!1s0x4be2ba9adeaeca0f:0x18295f8a79b848d6!8m2!3d26.0517423!4d-80.1398068",
  ratingValue: "5.0",
  reviewCount: "146",
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    url: siteUrl,
    telephone: business.telephone,
    email: business.email,
    image: `${siteUrl}/icon.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.ratingValue,
      reviewCount: business.reviewCount,
      bestRating: "5",
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: `${city}, FL`,
    })),
    sameAs: [business.googleMapsUrl],
  };
}

export function serviceSchema({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: `${siteUrl}/services/${slug}`,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
    ],
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
