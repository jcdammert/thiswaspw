export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "roof-soft-washing",
    title: "Roof Soft Washing",
    description:
      "We safely remove algae and black streaks without high pressure. This protects your shingles and helps your roof last longer.",
    image: "/images/roof-soft-washing.jpg",
  },
  {
    slug: "deck-cleaning",
    title: "Deck Cleaning",
    description:
      "We strip away dirt and grime from your wood or composite deck. This gets it ready for a fresh seal or stain.",
    image: "/images/deck-cleaning.jpg",
  },
  {
    slug: "paver-sealing-sanding",
    title: "Paver Sealing & Sanding",
    description:
      "We clean, re-sand, and seal your pavers. This brings back their color and protects them from the weather.",
    image: "/images/paver-sealing.jpg",
  },
  {
    slug: "driveway-cleaning",
    title: "Driveway Cleaning",
    description:
      "We blast away oil stains, tire marks, and built-up dirt. A clean driveway instantly makes your home look better.",
    image: "/images/driveway-cleaning.jpg",
  },
  {
    slug: "pool-deck-cleaning",
    title: "Pool Deck Cleaning",
    description:
      "We clean mold and mildew off your pool deck. This keeps the area safe and prevents slips.",
    image: "/images/driveway-cleaning.jpg",
  },
  {
    slug: "commercial-services",
    title: "Commercial Services",
    description:
      "We wash storefronts, signs, and walkways for local businesses. A clean building brings in more customers.",
    image: "/images/commercial-services.jpg",
  },
  {
    slug: "house-washing",
    title: "House Washing",
    description:
      "We wash the full exterior of your home. This removes dirt and mildew from your siding and stucco.",
    image: "/images/roof-soft-washing.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    description:
      "We clean your windows inside and out. Streak-free results that let the sunshine in.",
    image: "/images/window-cleaning.png",
  },
  {
    slug: "fence-cleaning",
    title: "Fence Cleaning",
    description:
      "We wash wood, vinyl, and PVC fences. We remove mold, mildew, and green algae safely.",
    image: "/images/roof-soft-washing.jpg",
  },
  {
    slug: "rust-removal-acid-wash",
    title: "Rust Removal & Acid Wash",
    description:
      "We remove rust stains from concrete, driveways, and walls. Acid washing for pool surfaces and hard stains.",
    image: "/images/paver-sealing.jpg",
  },
  {
    slug: "oil-stain-removal",
    title: "Oil Stain Removal",
    description:
      "We use hot water and degreasers to lift oil and grease out of driveways and parking lots.",
    image: "/images/driveway-cleaning.jpg",
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    description:
      "Full service interior and exterior painting. We handle prep, prime, and finish for homes and businesses.",
    image: "/images/commercial-services.jpg",
  },
  {
    slug: "sidewalk-cleaning",
    title: "Sidewalk Cleaning",
    description:
      "We clean residential and commercial sidewalks, walkways, and pathways. We remove dirt, algae, gum, and stains.",
    image: "/images/driveway-cleaning.jpg",
  },
  {
    slug: "screen-enclosure-cleaning",
    title: "Screen Enclosure Cleaning",
    description:
      "We clean pool cages and lanai screens. We remove algae, mold, dirt, and oxidation from frames and screens.",
    image: "/images/roof-soft-washing.jpg",
  },
  {
    slug: "gutter-cleaning-flush",
    title: "Gutter Cleaning and Flush",
    description:
      "We remove debris and flush downspouts so water flows right. This stops overflow and protects your foundation.",
    image: "/images/roof-soft-washing.jpg",
  },
  {
    slug: "maintenance-subscription-plans",
    title: "Maintenance Subscription Plans",
    description:
      "Monthly, quarterly, and semi-annual exterior cleaning packages. Keep your property looking great year-round without having to think about it.",
    image: "/images/commercial-services.jpg",
  },
];

export type ServiceArea = {
  name: string;
  slug: string;
  county: "Broward County" | "Miami-Dade County" | "Palm Beach County";
};

export function citySlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const cityCounty: Record<string, ServiceArea["county"]> = {
  Weston: "Broward County",
  Davie: "Broward County",
  Plantation: "Broward County",
  Sunrise: "Broward County",
  "Pembroke Pines": "Broward County",
  Miramar: "Broward County",
  "Southwest Ranches": "Broward County",
  "Cooper City": "Broward County",
  "Coral Springs": "Broward County",
  Parkland: "Broward County",
  Tamarac: "Broward County",
  Lauderhill: "Broward County",
  "Fort Lauderdale": "Broward County",
  Hollywood: "Broward County",
  "Coconut Creek": "Broward County",
  Miami: "Miami-Dade County",
  "Miami Lakes": "Miami-Dade County",
  "Miami Gardens": "Miami-Dade County",
  Hialeah: "Miami-Dade County",
  Doral: "Miami-Dade County",
  Homestead: "Miami-Dade County",
  Kendall: "Miami-Dade County",
  "Boca Raton": "Palm Beach County",
  "Delray Beach": "Palm Beach County",
  "Boynton Beach": "Palm Beach County",
  Wellington: "Palm Beach County",
  "West Palm Beach": "Palm Beach County",
};

export const cities = [
  "Weston",
  "Davie",
  "Plantation",
  "Sunrise",
  "Pembroke Pines",
  "Miramar",
  "Southwest Ranches",
  "Cooper City",
  "Coral Springs",
  "Parkland",
  "Tamarac",
  "Lauderhill",
  "Fort Lauderdale",
  "Hollywood",
  "Coconut Creek",
  "Miami",
  "Miami Lakes",
  "Miami Gardens",
  "Hialeah",
  "Doral",
  "Homestead",
  "Kendall",
  "Boca Raton",
  "Delray Beach",
  "Boynton Beach",
  "Wellington",
  "West Palm Beach",
];

export const serviceAreas: ServiceArea[] = cities.map((name) => ({
  name,
  slug: citySlug(name),
  county: cityCounty[name],
}));

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Finesse Cleaning transformed our roof and driveway. They were incredibly professional, showed up on time, and the results speak for themselves. Highly recommend!",
    name: "Sarah J.",
    city: "Boca Raton",
  },
  {
    quote:
      "I've hired several pressure washing companies over the years, but none paid as much attention to detail as these guys. Our pool deck looks brand new.",
    name: "Michael T.",
    city: "Fort Lauderdale",
  },
  {
    quote:
      "The team was punctual and respectful of our property. The soft wash on our home's exterior removed years of grime without damaging the paint.",
    name: "David L.",
    city: "Miami",
  },
  {
    quote:
      "Outstanding service from start to finish. They explained the process clearly, protected all my plants, and left my patio spotless. Will definitely use them again.",
    name: "Jessica R.",
    city: "Weston",
  },
  {
    quote:
      "Very fair pricing for the quality of work they deliver. They sealed our pavers and they look better than when they were first installed.",
    name: "Robert M.",
    city: "Pembroke Pines",
  },
  {
    quote:
      "I called them for an emergency commercial cleanup before a grand opening. They came out the same day and did a flawless job. True professionals.",
    name: "Amanda K.",
    city: "Coral Springs",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question:
      "What is the difference between pressure washing and soft washing?",
    answer:
      "Pressure washing uses high pressure for hard surfaces like concrete. Soft washing uses low pressure and safe soaps for delicate surfaces like roofs and wood decks.",
  },
  {
    question: "Will your soap hurt my plants or pets?",
    answer:
      "No. We use safe soaps that break down naturally. We wet your plants before we start to protect them.",
  },
  {
    question: "Do I need to be home for the service?",
    answer:
      "No. As long as we have water access, we can do the job while you are out. We can send you photos when we finish.",
  },
  {
    question: "How often should I wash my house or roof?",
    answer:
      "We suggest washing your home and roof every 12 to 18 months. This keeps mold and dirt from causing damage.",
  },
  {
    question: "Do you offer any guarantees?",
    answer:
      "Yes. We do a walk-through when we finish to make sure you are happy. If there is a problem, we fix it.",
  },
  {
    question: "How long does a job take?",
    answer:
      "Most jobs take 2 to 4 hours. Big jobs might take a full day. We will give you a clear timeline with your quote.",
  },
  {
    question: "What areas do you work in?",
    answer: "We work in Palm Beach County, Broward County, and Miami-Dade County.",
  },
  {
    question: "Is paver sealing necessary?",
    answer:
      "Yes. Sealing stops fading, stains, and weeds. We suggest cleaning and sealing pavers every 2 to 3 years.",
  },
  {
    question: "Can you remove oil stains from my driveway?",
    answer:
      "We use hot water and strong soaps to lift oil stains. Most stains come out, but very old stains might leave a light mark.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We are fully licensed and insured to protect your property and our team.",
  },
];

export const galleryImages = [
  { src: "/images/gallery-driveway.png", label: "Driveway Cleaning" },
  { src: "/images/deck-cleaning.jpg", label: "Deck Cleaning" },
  { src: "/images/gallery-roof.png", label: "Roof Soft Washing" },
  { src: "/images/driveway-cleaning.jpg", label: "Driveway Cleaning" },
  { src: "/images/paver-sealing.jpg", label: "Paver Sealing & Sanding" },
  { src: "/images/window-cleaning.png", label: "Pool Deck Cleaning" },
];

export const galleryFilters = [
  "All Work",
  "Roof Soft Washing",
  "Deck Cleaning",
  "Paver Sealing & Sanding",
  "Driveway Cleaning",
  "Pool Deck Cleaning",
  "Commercial Services",
  "House Washing",
  "Window Cleaning",
  "Fence Cleaning",
  "Rust Removal & Acid Wash",
  "Oil Stain Removal",
  "Painting Services",
  "Sidewalk Cleaning",
  "Screen Enclosure Cleaning",
  "Gutter Cleaning and Flush",
  "Maintenance Subscription Plans",
];

export const phoneDisplay = "(877) 346-3773";
export const phoneHref = "tel:8773463773";
export const email = "877finesse@gmail.com";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];
