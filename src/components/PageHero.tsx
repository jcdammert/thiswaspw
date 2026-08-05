export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, black, transparent), radial-gradient(circle at 50% 0%, black, transparent 70%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent), radial-gradient(circle at 50% 0%, black, transparent 70%)",
          WebkitMaskComposite: "source-in",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
