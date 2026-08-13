import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { phoneDisplay, phoneHref, email } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Free Quote | Finesse Cleaning",
  description:
    "Get a free pressure washing or soft washing quote from Finesse Cleaning. Serving Palm Beach, Broward, and Miami-Dade counties. Call (877) 346-3773 or request a quote online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Get a Quote"
        subtitle="Ready to clean your property? Fill out the form and we will give you a free quote."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Get a Free Quote</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-navy/5 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
                Direct Contact
              </h3>
              <a
                href={phoneHref}
                className="mt-3 block text-lg font-bold text-navy hover:text-brand"
              >
                {phoneDisplay}
              </a>
              <a
                href={`mailto:${email}`}
                className="mt-1 block text-sm text-navy/70 hover:text-brand"
              >
                {email}
              </a>
            </div>

            <div className="rounded-2xl bg-navy/5 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
                Business Hours
              </h3>
              <p className="mt-3 text-sm text-navy/70">
                24/7 Service Available
              </p>
            </div>

            <div className="rounded-2xl bg-navy/5 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
                Service Area
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-navy/70">
                <li>Palm Beach County</li>
                <li>Broward County</li>
                <li>Miami-Dade County</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
