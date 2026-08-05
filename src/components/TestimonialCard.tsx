export default function TestimonialCard({
  quote,
  name,
  city,
  bordered = false,
}: {
  quote: string;
  name: string;
  city: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg ${
        bordered ? "border border-navy/10" : ""
      }`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-5 select-none font-serif text-8xl font-bold leading-none text-brand/10"
      >
        &rdquo;
      </span>
      <p className="relative text-sm leading-relaxed text-navy/70">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="relative mt-5 font-serif font-semibold text-navy">
        {name}
      </p>
      <p className="relative text-sm text-navy/50">{city}</p>
    </div>
  );
}
