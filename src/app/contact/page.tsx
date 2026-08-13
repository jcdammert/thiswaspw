"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { services, phoneDisplay, phoneHref, email } from "@/lib/data";

const timelines = [
  "As soon as possible",
  "Within 1 week",
  "Within 1 month",
  "Flexible",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        title="Get a Quote"
        subtitle="Ready to clean your property? Fill out the form and we will give you a free quote."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Get a Free Quote</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                  Full Name *
                </label>
                <input
                  required
                  name="name"
                  className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                  Service Needed *
                </label>
                <select
                  required
                  name="service"
                  defaultValue=""
                  className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                  City *
                </label>
                <input
                  required
                  name="city"
                  placeholder="Enter your city"
                  className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                  Timeline to Get It Done
                </label>
                <select
                  name="timeline"
                  defaultValue=""
                  className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                >
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                  Project Details (Optional)
                </label>
                <textarea
                  name="details"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-brand focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Submit Request"}
              </button>
              {status === "sent" && (
                <p className="text-sm font-medium text-green-600">
                  Thanks! We received your request and will be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please call us instead.
                </p>
              )}
            </form>
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
