type IconProps = {
  className?: string;
};

const base = "h-6 w-6";

export function ServiceIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const props = {
    className: className ?? base,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (slug) {
    case "roof-soft-washing":
      return (
        <svg {...props}>
          <path d="M3 12 12 4l9 8" />
          <path d="M5 11v8h14v-8" />
          <path d="M14 15c1.5 1 1.5 2.5 0 3.5" />
        </svg>
      );
    case "deck-cleaning":
      return (
        <svg {...props}>
          <path d="M3 8h18" />
          <path d="M3 12h18" />
          <path d="M3 16h18" />
          <path d="M3 8v8M8 8v8M13 8v8M18 8v8" opacity="0.5" />
        </svg>
      );
    case "paver-sealing-sanding":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "driveway-cleaning":
      return (
        <svg {...props}>
          <path d="M9 3 5 21" />
          <path d="M15 3l4 18" />
          <path d="M11 9h2M10.3 14h3.4" opacity="0.6" />
        </svg>
      );
    case "pool-deck-cleaning":
      return (
        <svg {...props}>
          <path d="M2 16c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
          <path d="M2 20c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
          <path d="M12 3v9M8.5 8.5 12 12l3.5-3.5" />
        </svg>
      );
    case "commercial-services":
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
          <path d="M10 21v-4h4v4" />
        </svg>
      );
    case "house-washing":
      return (
        <svg {...props}>
          <path d="M4 11 12 4l8 7" />
          <path d="M6 10v10h12V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "window-cleaning":
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M12 3v18M4 12h16" />
        </svg>
      );
    case "fence-cleaning":
      return (
        <svg {...props}>
          <path d="M5 4 4 8v12h2M9 4 8 8v12h2M13 4l-1 4v12h2M17 4l-1 4v12h2" />
          <path d="M2 11h20M2 16h20" opacity="0.6" />
        </svg>
      );
    case "rust-removal-acid-wash":
      return (
        <svg {...props}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
          <path d="M9.5 15c0 1.5 1 2.3 2 2.3" opacity="0.6" />
        </svg>
      );
    case "oil-stain-removal":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="17" rx="8" ry="3" />
          <path d="M12 3c1.8 3 3 5.4 3 7.5a3 3 0 1 1-6 0C9 8.4 10.2 6 12 3Z" />
        </svg>
      );
    case "painting-services":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="10" height="6" rx="1" />
          <path d="M8 10v3a2 2 0 0 0 2 2h1" />
          <path d="M17 15a3 3 0 0 0 3-3V9h-6v3a3 3 0 0 0 3 3Z" />
          <path d="M17 15v5" />
        </svg>
      );
    case "sidewalk-cleaning":
      return (
        <svg {...props}>
          <path d="M4 21 10 3M20 21 14 3" />
          <path d="M7.5 12h9M6.3 16.5h11.4" opacity="0.6" />
        </svg>
      );
    case "screen-enclosure-cleaning":
      return (
        <svg {...props}>
          <path d="M3 20c0-7 4-13 9-13s9 6 9 13" />
          <path d="M3 20h18" />
          <path d="M7 20c0-4.5 2.2-8.5 5-10M17 20c0-4.5-2.2-8.5-5-10M12 7v13" opacity="0.6" />
        </svg>
      );
    case "gutter-cleaning-flush":
      return (
        <svg {...props}>
          <path d="M3 6h18" />
          <path d="M5 6v3a2 2 0 0 0 2 2h1" />
          <path d="M8 11v6" />
          <path d="M6 15l2 2 2-2" />
        </svg>
      );
    case "maintenance-subscription-plans":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18M8 2v4M16 2v4" />
          <path d="M8 14l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className ?? base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg
      className={className ?? base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg
      className={className ?? base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 4C10 4 4 10 4 18v2h2c8 0 14-6 14-16Z" />
      <path d="M6 20c3-5 7-8 12-10" />
    </svg>
  );
}
