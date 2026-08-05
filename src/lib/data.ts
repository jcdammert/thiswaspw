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
    image: "/images/gallery/roof-soft-washing-42.jpg",
  },
  {
    slug: "deck-cleaning",
    title: "Deck Cleaning",
    description:
      "We strip away dirt and grime from your wood or composite deck. This gets it ready for a fresh seal or stain.",
    image: "/images/gallery/deck-cleaning-01.jpg",
  },
  {
    slug: "paver-sealing-sanding",
    title: "Paver Sealing & Sanding",
    description:
      "We clean, re-sand, and seal your pavers. This brings back their color and protects them from the weather.",
    image: "/images/gallery/paver-sealing-sanding-05.jpg",
  },
  {
    slug: "driveway-cleaning",
    title: "Driveway Cleaning",
    description:
      "We blast away oil stains, tire marks, and built-up dirt. A clean driveway instantly makes your home look better.",
    image: "/images/gallery/driveway-cleaning-01.jpg",
  },
  {
    slug: "pool-deck-cleaning",
    title: "Pool Deck Cleaning",
    description:
      "We clean mold and mildew off your pool deck. This keeps the area safe and prevents slips.",
    image: "/images/gallery/pool-deck-cleaning-01.jpg",
  },
  {
    slug: "commercial-services",
    title: "Commercial Services",
    description:
      "We wash storefronts, signs, and walkways for local businesses. A clean building brings in more customers.",
    image: "/images/gallery/commercial-services-13.jpg",
  },
  {
    slug: "house-washing",
    title: "House Washing",
    description:
      "We wash the full exterior of your home. This removes dirt and mildew from your siding and stucco.",
    image: "/images/gallery/house-washing-06.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    description:
      "We clean your windows inside and out. Streak-free results that let the sunshine in.",
    image: "/images/gallery/window-cleaning-02.jpg",
  },
  {
    slug: "fence-cleaning",
    title: "Fence Cleaning",
    description:
      "We wash wood, vinyl, and PVC fences. We remove mold, mildew, and green algae safely.",
    image: "/images/gallery/fence-cleaning-01.jpg",
  },
  {
    slug: "rust-removal-acid-wash",
    title: "Rust Removal & Acid Wash",
    description:
      "We remove rust stains from concrete, driveways, and walls. Acid washing for pool surfaces and hard stains.",
    image: "/images/gallery/house-washing-01.jpg",
  },
  {
    slug: "oil-stain-removal",
    title: "Oil Stain Removal",
    description:
      "We use hot water and degreasers to lift oil and grease out of driveways and parking lots.",
    image: "/images/gallery/driveway-cleaning-05.jpg",
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    description:
      "Full service interior and exterior painting. We handle prep, prime, and finish for homes and businesses.",
    image: "/images/gallery/painting-services-01.jpg",
  },
  {
    slug: "sidewalk-cleaning",
    title: "Sidewalk Cleaning",
    description:
      "We clean residential and commercial sidewalks, walkways, and pathways. We remove dirt, algae, gum, and stains.",
    image: "/images/gallery/sidewalk-cleaning-01.jpg",
  },
  {
    slug: "screen-enclosure-cleaning",
    title: "Screen Enclosure Cleaning",
    description:
      "We clean pool cages and lanai screens. We remove algae, mold, dirt, and oxidation from frames and screens.",
    image: "/images/gallery/screen-enclosure-cleaning-01.jpg",
  },
  {
    slug: "gutter-cleaning-flush",
    title: "Gutter Cleaning and Flush",
    description:
      "We remove debris and flush downspouts so water flows right. This stops overflow and protects your foundation.",
    image: "/images/gallery/roof-soft-washing-06.jpg",
  },
  {
    slug: "maintenance-subscription-plans",
    title: "Maintenance Subscription Plans",
    description:
      "Monthly, quarterly, and semi-annual exterior cleaning packages. Keep your property looking great year-round without having to think about it.",
    image: "/images/gallery/maintenance-subscription-01.jpg",
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

export type GalleryImage = {
  src: string;
  label: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/window-cleaning-01.jpg", label: "Window Cleaning", alt: "Close-up of a squeegee clearing soap from a window — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/screen-enclosure-cleaning-01.jpg", label: "Screen Enclosure Cleaning", alt: "Crew pressure washing a pool cage screen enclosure — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/deck-cleaning-01.jpg", label: "Deck Cleaning", alt: "Crew pressure washing a waterfront wood dock next to a tiki hut — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/house-washing-06.jpg", label: "House Washing", alt: "Crew washing an exterior wall with an extension pole beside a pool — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/house-washing-01.jpg", label: "Rust Removal & Acid Wash", alt: "Rust stain running down a stucco wall from a downspout before treatment — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/house-washing-02.jpg", label: "House Washing", alt: "Stucco wall after pressure washing with a clean white finish — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-01.jpg", label: "Roof Soft Washing", alt: "Clean terracotta tile roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-02.jpg", label: "Roof Soft Washing", alt: "Flat coated roof after soft washing near a pool — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/house-washing-03.jpg", label: "House Washing", alt: "Exterior wall and metal roof of a shed after washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-03.jpg", label: "Roof Soft Washing", alt: "Tile roof covered in algae before soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-04.jpg", label: "Roof Soft Washing", alt: "Clean terracotta tile roof after soft washing overlooking the water — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-01.jpg", label: "Paver Sealing & Sanding", alt: "Freshly sealed paver patio in a warm terracotta tone — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-01.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-05.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a flat commercial roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-06.jpg", label: "Roof Soft Washing", alt: "Tile roof edge above a paver patio after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-02.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-07.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a flat roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-03.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage wall — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-02.jpg", label: "Paver Sealing & Sanding", alt: "Crew cleaning a paver walkway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-08.jpg", label: "Roof Soft Washing", alt: "Wide view of a freshly soft washed flat roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-04.jpg", label: "Commercial Services", alt: "Crew pressure washing a commercial floor at night — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/house-washing-04.jpg", label: "House Washing", alt: "Crew washing an exterior wall next to a pool — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-09.jpg", label: "Roof Soft Washing", alt: "Clean terracotta tile roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-05.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage with safety cones — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-03.jpg", label: "Paver Sealing & Sanding", alt: "Crew scrubbing paver patio stones — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-10.jpg", label: "Roof Soft Washing", alt: "Dark tile roof before soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-11.jpg", label: "Roof Soft Washing", alt: "Crew walking a freshly cleaned metal roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-06.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-07.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse with equipment — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-12.jpg", label: "Roof Soft Washing", alt: "Aerial view of a crew soft washing a tile roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/pool-deck-cleaning-01.jpg", label: "Pool Deck Cleaning", alt: "Crew washing a pool deck beside a modern pool — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-08.jpg", label: "Commercial Services", alt: "Crew pressure washing a commercial floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-13.jpg", label: "Roof Soft Washing", alt: "Aerial view of a clean tile roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-14.jpg", label: "Roof Soft Washing", alt: "Flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-04.jpg", label: "Paver Sealing & Sanding", alt: "Freshly sealed paver driveway in a warm terracotta tone — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-09.jpg", label: "Commercial Services", alt: "Exterior walkway of a commercial building after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-10.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-16.jpg", label: "Roof Soft Washing", alt: "Wide view of a flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-17.jpg", label: "Roof Soft Washing", alt: "Flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/house-washing-05.jpg", label: "House Washing", alt: "Shed exterior after washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-01.jpg", label: "Driveway Cleaning", alt: "Crew pressure washing a brick paver driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-11.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-18.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a flat roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-19.jpg", label: "Roof Soft Washing", alt: "Dark tile roof close up after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-05.jpg", label: "Paver Sealing & Sanding", alt: "Crew applying paver sealer near the garage — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-12.jpg", label: "Commercial Services", alt: "Crew pressure washing a storefront entrance walkway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-20.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a tile roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-22.jpg", label: "Roof Soft Washing", alt: "Wide view of a clean tile roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-02.jpg", label: "Driveway Cleaning", alt: "Crew pressure washing a brick paver driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-23.jpg", label: "Roof Soft Washing", alt: "Flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-24.jpg", label: "Roof Soft Washing", alt: "Flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/pool-deck-cleaning-02.jpg", label: "Pool Deck Cleaning", alt: "Crew pressure washing a pool deck at dusk — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-06.jpg", label: "Paver Sealing & Sanding", alt: "Applying fresh coating to a driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-25.jpg", label: "Roof Soft Washing", alt: "Tile roof corner close up after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-13.jpg", label: "Commercial Services", alt: "Crew pressure washing a storefront walkway with safety cones — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/pool-deck-cleaning-03.jpg", label: "Pool Deck Cleaning", alt: "Crew washing a pool deck — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-03.jpg", label: "Driveway Cleaning", alt: "Crew pressure washing a brick paver driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-26.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a wide flat roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-04.jpg", label: "Driveway Cleaning", alt: "Crew pressure washing a driveway walkway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-27.jpg", label: "Roof Soft Washing", alt: "Tile roof partially cleaned showing before and after — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-14.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-15.jpg", label: "Commercial Services", alt: "Exterior wall of a commercial building after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-28.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a tile roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-29.jpg", label: "Roof Soft Washing", alt: "Clean tile roof close up — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-07.jpg", label: "Paver Sealing & Sanding", alt: "Crew cleaning a paver courtyard — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-30.jpg", label: "Roof Soft Washing", alt: "Tile roof corner close up — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-16.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-17.jpg", label: "Commercial Services", alt: "Crew pressure washing a garage floor at night — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/sidewalk-cleaning-01.jpg", label: "Sidewalk Cleaning", alt: "Concrete walkway drain after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-18.jpg", label: "Commercial Services", alt: "Exterior wall of a commercial building — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-31.jpg", label: "Roof Soft Washing", alt: "Tile roof before soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-05.jpg", label: "Driveway Cleaning", alt: "Crew using a surface cleaner on a paver driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-19.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-32.jpg", label: "Roof Soft Washing", alt: "Aerial view of a clean tile roof neighborhood — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-33.jpg", label: "Roof Soft Washing", alt: "Tile roof before soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-20.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building at sunset — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-07.jpg", label: "Driveway Cleaning", alt: "Crew using a surface cleaner on a driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-35.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a flat roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-36.jpg", label: "Roof Soft Washing", alt: "Crew soft washing a flat commercial roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-08.jpg", label: "Paver Sealing & Sanding", alt: "Clean paver entry steps — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-37.jpg", label: "Roof Soft Washing", alt: "Crew walking a flat metal roof — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-21.jpg", label: "Commercial Services", alt: "Crew pressure washing a walkway near a commercial building — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-09.jpg", label: "Paver Sealing & Sanding", alt: "Clean paver entry steps — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-10.jpg", label: "Paver Sealing & Sanding", alt: "Wide view of a cleaned paver patio — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-38.jpg", label: "Roof Soft Washing", alt: "Dark tile roof before soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-22.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building at sunset — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-39.jpg", label: "Roof Soft Washing", alt: "Flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-40.jpg", label: "Roof Soft Washing", alt: "Flat roof close up after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-41.jpg", label: "Roof Soft Washing", alt: "Bright white flat roof after soft washing — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-11.jpg", label: "Paver Sealing & Sanding", alt: "Paver patio walkway after cleaning — Finesse Cleaning, South Florida" },
];

export const galleryFilters = [
  "All Work",
  "Deck Cleaning",
  "Window Cleaning",
  "Screen Enclosure Cleaning",
  "Roof Soft Washing",
  "Commercial Services",
  "Paver Sealing & Sanding",
  "Driveway Cleaning",
  "Pool Deck Cleaning",
  "House Washing",
  "Sidewalk Cleaning",
  "Rust Removal & Acid Wash",
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
