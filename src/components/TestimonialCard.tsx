function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L10 1.5z" />
    </svg>
  );
}

export default function TestimonialCard({
  quote,
  name,
  source,
  rating = 5,
  bordered = false,
}: {
  quote: string;
  name: string;
  source: string;
  rating?: number;
  bordered?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg ${
        bordered ? "border border-navy/10" : ""
      }`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-5 select-none font-serif text-8xl font-bold leading-none text-brand/10"
      >
        &rdquo;
      </span>
      <span className="relative flex text-amber-400">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4" />
        ))}
      </span>
      <p className="relative mt-3 line-clamp-6 text-sm leading-relaxed text-navy/70">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="relative mt-5">
        <p className="font-serif font-semibold text-navy">{name}</p>
        <p className="text-sm text-navy/50">{source}</p>
      </div>
    </div>
  );
}
