import { ShieldCheckIcon, TargetIcon, LeafIcon } from "@/components/icons";

const icons = [ShieldCheckIcon, TargetIcon, LeafIcon];

export type WhyPickItem = { title: string; description: string };

export default function WhyPickFinesse({
  items,
  subtitle,
}: {
  items: WhyPickItem[];
  subtitle?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Why Pick Finesse
          </h2>
          {subtitle && (
            <p className="mt-4 leading-relaxed text-white/60">{subtitle}</p>
          )}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="relative px-2 sm:px-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-8 left-1 select-none font-serif text-8xl font-bold text-brand/10 sm:left-6"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-4 font-serif text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
