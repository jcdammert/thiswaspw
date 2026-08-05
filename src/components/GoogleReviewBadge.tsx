const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Finesse+Cleaning/@26.0517423,-80.1398068,17z/data=!3m1!4b1!4m6!3m5!1s0x4be2ba9adeaeca0f:0x18295f8a79b848d6!8m2!3d26.0517423!4d-80.1398068";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-2.1 14.2-5.6l-6.6-5.6C29.6 34.5 26.9 35.5 24 35.5c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.6 39.6 16.3 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l6.6 5.6C40.5 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L10 1.5z" />
    </svg>
  );
}

export default function GoogleReviewBadge({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-2xl border px-5 py-3 transition-colors ${
        isDark
          ? "border-white/15 bg-white/10 backdrop-blur-sm hover:bg-white/15"
          : "border-navy/10 bg-white shadow-sm hover:border-brand/30 hover:shadow-md"
      } ${className}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
        <GoogleG className="h-6 w-6" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="flex items-center gap-1.5">
          <span
            className={`text-sm font-bold ${isDark ? "text-white" : "text-navy"}`}
          >
            5.0
          </span>
          <span className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5" />
            ))}
          </span>
        </span>
        <span
          className={`text-xs ${isDark ? "text-white/60" : "text-navy/50"}`}
        >
          146 Google Reviews
        </span>
      </span>
    </a>
  );
}
