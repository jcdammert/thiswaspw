export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
