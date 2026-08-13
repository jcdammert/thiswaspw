import Image from "next/image";
import Link from "next/link";
import { gridServices, testimonials, serviceAreas, phoneDisplay, phoneHref } from "@/lib/data";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import WhyPickFinesse from "@/components/WhyPickFinesse";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MaintenancePlanCallout from "@/components/MaintenancePlanCallout";

const whyPickUs = [
  {
    title: "Satisfaction Guarantee",
    description:
      "We do a full walk-through when we finish. We make sure you are completely happy before we leave.",
  },
  {
    title: "Focus on Quality",
    description:
      "We pay attention to the details that others miss. We do the job right the first time.",
  },
  {
    title: "Safe Cleaning Products",
    description:
      "We use safe soaps that break down naturally. Your plants and pets are safe with us.",
  },
];

const steps = [
  {
    number: "1",
    title: "Request a Quote",
    description: "Call us or fill out our online form. We will give you a fast and honest price.",
  },
  {
    number: "2",
    title: "Schedule Service",
    description: "Pick a day that works for you. We show up on time and ready to work.",
  },
  {
    number: "3",
    title: "Enjoy the Results",
    description: "We clean your property and do a final walk-through. You get to enjoy a fresh and clean home.",
  },
];

const stats = [
  { value: "3000+", label: "Jobs Completed" },
  { value: "12+", label: "Years in Business" },
  { value: "5.0", label: "Average Rating" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to bottom, black, transparent), radial-gradient(circle at 30% 20%, black, transparent 70%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent), radial-gradient(circle at 30% 20%, black, transparent 70%)",
            WebkitMaskComposite: "source-in",
            opacity: 0.5,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <GoogleReviewBadge variant="dark" />
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Restore Your Property&apos;s Clean Condition.
            </h1>
            <p className="mt-6 max-w-xl leading-[1.75] text-white/70">
              Premium pressure washing and soft washing. We protect your
              investment with precision, care, and guaranteed satisfaction.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
              >
                Get a Quote
              </Link>
              <a
                href={phoneHref}
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-truck.jpg"
              alt="Finesse Cleaning truck on site at a South Florida home"
              fill
              priority
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Floating stats badge deck */}
      <div className="relative z-10 -mt-10 px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col divide-y divide-navy/10 rounded-3xl bg-white shadow-soft-lg sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 px-8 py-6 text-center">
              <p className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Services We Offer
            </h2>
            <p className="mt-4 text-navy/60">
              We clean all exterior surfaces safely and effectively. We
              handle everything from dirty driveways to delicate roofs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridServices.map((service) => (
              <div
                key={service.slug}
                className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                  >
                    Learn More <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <MaintenancePlanCallout />
        </div>
      </section>

      {/* Why Pick Finesse */}
      <WhyPickFinesse
        items={whyPickUs}
        subtitle="We take pride in our work. We protect your property and make sure you are happy with the results."
      />

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-navy/10 sm:block"
            />
            <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white ring-8 ring-white">
                    {step.number}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-navy/60">
              Read what your neighbors think about our work.
            </p>
          </div>
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Where We Work
            </h2>
            <p className="mt-4 text-navy/60">
              We serve Palm Beach, Broward, and Miami-Dade counties.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
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
      </section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/80">
            Contact us today for a free quote. We are ready to help.
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
