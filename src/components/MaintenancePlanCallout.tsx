import Link from "next/link";
import { ServiceIcon } from "@/components/icons";
import { maintenancePlan } from "@/lib/data";

export default function MaintenancePlanCallout() {
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center shadow-soft sm:flex-row sm:text-left">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
          <ServiceIcon slug={maintenancePlan.slug} className="h-7 w-7" />
        </span>
        <div className="flex-1">
          <h3 className="font-serif text-lg font-semibold text-navy">
            {maintenancePlan.title}
          </h3>
          <p className="mt-1 text-sm text-navy/60">
            {maintenancePlan.description}
          </p>
        </div>
        <Link
          href={`/services/${maintenancePlan.slug}`}
          className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
