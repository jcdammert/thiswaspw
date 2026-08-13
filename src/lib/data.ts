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
    image: "/images/gallery/house-washing-07.jpg",
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

// Maintenance Subscription Plans is a program, not a one-off cleaning
// job like the rest — it gets its own callout instead of sitting in the
// photo grid (16 items doesn't divide evenly into a 3-column grid anyway).
export const gridServices = services.filter(
  (s) => s.slug !== "maintenance-subscription-plans"
);
export const maintenancePlan = services.find(
  (s) => s.slug === "maintenance-subscription-plans"
)!;

export type ServiceDetail = {
  overview: string;
  approach: string;
  includes: string[];
  signs: string[];
  beforeImage?: string;
  afterImage?: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "roof-soft-washing": {
    overview:
      "Your roof takes more abuse from South Florida's climate than almost any other surface on your property. Humidity, shade, and rain feed the algae, lichen, and black streaking (usually a bacteria called Gloeocapsa magma) that build up on shingles and tiles over time. Left alone, that buildup doesn't just look bad — it holds moisture against your roofing material and shortens its life.",
    approach:
      "We soft wash every roof we clean, never pressure wash. High-pressure equipment can crack tiles, strip shingle granules, and force water under flashing, which is how roofs get damaged during a cleaning that was supposed to help them. Soft washing uses low pressure with a biodegradable, algae-killing solution that breaks down buildup at the root and rinses it away safely, protecting shingles, tile, and metal roofing alike.",
    includes: [
      "Full roof inspection before we start",
      "Landscaping and gutters protected and pre-rinsed",
      "Low-pressure application of a safe, algae-killing cleaning solution",
      "Careful rinse that leaves shingles and tiles intact",
      "Final walk-through so you can see the results",
    ],
    signs: [
      "Black streaks running down from the ridge or vents",
      "Green or gray patches, especially on shaded, north-facing slopes",
      "Roof looks noticeably darker than when it was installed",
      "Neighbors with similar-age roofs have already had theirs cleaned",
    ],
  },
  "deck-cleaning": {
    overview:
      "Wood and composite decks take a beating from sun, rain, and foot traffic, and in Florida that means mildew, algae, and gray, weathered wood fibers building up fast. A dirty deck isn't just unsightly — it gets slippery, and if you're planning to stain or seal it, that new coat won't bond properly over the buildup.",
    approach:
      "We match the technique to the material. Wood decks get a gentler, controlled wash that lifts dirt and graying without raising the grain or splintering the boards, while composite decking can handle a bit more pressure to cut through mildew and algae without damaging the surface. Either way, we clean the full deck, including railings, stairs, and the gaps between boards where grime hides.",
    includes: [
      "Full surface assessment (wood species or composite type)",
      "Pre-treatment for mildew, algae, and gray weathering",
      "Pressure calibrated to your specific deck material",
      "Railings, stairs, and board gaps included",
      "Deck left ready for staining or sealing if needed",
    ],
    signs: [
      "Wood looks gray, dull, or weathered instead of its natural color",
      "Boards feel slick or slippery, especially after rain",
      "Green or black buildup between boards or in shaded corners",
      "It's been more than a year since the deck was cleaned or sealed",
    ],
  },
  "paver-sealing-sanding": {
    overview:
      "Pavers are one of the biggest investments in a South Florida yard, and they need real maintenance to keep looking that way. Sun fades the color, weeds and ants work their way into the joints, and years of foot traffic wear down the sand that holds everything together and keeps pavers from shifting.",
    approach:
      "We start by pressure washing the pavers to strip away dirt, algae, and old sealer, then let them fully dry. Next we re-sand the joints with polymeric sand, which hardens once it's activated with water and locks pavers in place while blocking weeds and ants far better than regular sand. We finish with a penetrating or film-forming sealer, depending on the look you want, which brings the color back and protects against stains and UV fading.",
    includes: [
      "Pressure washing to strip dirt, algae, and old sealer",
      "Full dry-out period before sanding and sealing",
      "Polymeric sand applied to all joints",
      "Sealer applied for color enhancement and stain protection",
      "Weed and ant resistance built into the finished joints",
    ],
    signs: [
      "Pavers look faded, dusty, or washed-out",
      "Sand is missing or low between the joints",
      "Weeds or ants are showing up between pavers",
      "It's been more than 2–3 years since the last sealing",
    ],
  },
  "driveway-cleaning": {
    overview:
      "Your driveway is one of the first things people see when they pull up to your home or business, and in Florida it takes on oil drips, tire marks, rust from sprinklers, and the same algae and mildew that builds up everywhere else in this climate. A clean driveway changes the whole look of a property almost instantly.",
    approach:
      "We use hot water pressure washing with a surface cleaner attachment, which cleans evenly across the full width of the driveway without leaving the streaky lines you get from a standard wand. For oil stains and tire marks we pre-treat with a degreaser before washing, and for concrete, pavers, or brick we adjust pressure and technique so we clean thoroughly without etching or damaging the surface.",
    includes: [
      "Degreaser pre-treatment for oil stains and tire marks",
      "Hot water pressure washing with a surface cleaner attachment",
      "Even, streak-free coverage across the full driveway",
      "Technique adjusted for concrete, pavers, or brick",
      "Edges, expansion joints, and garage apron included",
    ],
    signs: [
      "Oil stains, tire marks, or dark patches that don't wash off with a hose",
      "Green or black algae staining, especially in shaded areas",
      "Driveway looks noticeably darker or dingier than the surrounding concrete",
      "Rust streaks from sprinkler heads or irrigation",
    ],
  },
  "pool-deck-cleaning": {
    overview:
      "Pool decks combine two of Florida's biggest cleaning challenges: constant moisture from the pool and constant sun exposure, which together grow mold, mildew, and algae fast — especially in shaded corners and anywhere water tends to pool. Beyond looking bad, a dirty pool deck gets genuinely slippery, which is a real safety issue around water.",
    approach:
      "We clean pavers, concrete, travertine, and pool coping with pressure and technique matched to that specific surface, since travertine and stamped concrete need a gentler touch than broom-finished concrete. We pay close attention to the waterline and any areas that stay damp, since that's where mold and mildew take hold first, and we work carefully around pool equipment and water features.",
    includes: [
      "Surface-specific cleaning for pavers, concrete, or travertine",
      "Focused attention on shaded and constantly damp areas",
      "Mold and mildew removal at the waterline and coping",
      "Slip-hazard buildup cleared from the full deck surface",
      "Careful work around pool equipment and water features",
    ],
    signs: [
      "Deck feels slippery when wet, even right after a rinse",
      "Green or black growth around the waterline or in shaded corners",
      "Coping or pavers look darker than the rest of the deck",
      "It's been more than 6–12 months since the last cleaning",
    ],
  },
  "commercial-services": {
    overview:
      "For a business, exterior cleanliness is part of the first impression — a dirty storefront, faded sign, or grimy walkway tells customers something about what to expect before they walk in the door. We work with retail storefronts, offices, restaurants, and commercial properties across South Florida to keep that first impression a good one.",
    approach:
      "We handle building exteriors, storefronts, signage, awnings, walkways, and parking areas, scheduling around your business hours so we don't disrupt customers or operations. Delicate surfaces like awnings, signage, and painted surfaces get soft washing, while walkways, parking lots, and dumpster pads get full pressure washing to handle heavier grime and gum. We also work with property managers and HOAs on recurring commercial contracts.",
    includes: [
      "Building exteriors, storefronts, and signage",
      "Sidewalks, walkways, and parking areas",
      "Awnings and delicate surfaces soft washed",
      "Scheduling around business hours to avoid disruption",
      "Recurring contracts available for property managers and HOAs",
    ],
    signs: [
      "Storefront or building exterior looks dingy compared to neighboring businesses",
      "Sidewalks have gum, stains, or algae buildup out front",
      "Signage or awnings are dulled by dirt and mildew",
      "It's been over a year since the property's last professional cleaning",
    ],
  },
  "house-washing": {
    overview:
      "Your home's exterior — siding, stucco, brick, or vinyl — is constantly exposed to humidity, rain, and airborne organic material, and in South Florida that turns into mildew, algae, and dirt buildup faster than almost anywhere else in the country. A full house wash is one of the single biggest changes you can make to curb appeal.",
    approach:
      "We soft wash the entire exterior of your home, not pressure wash it. Stucco, siding, and painted surfaces can crack, peel, or get water forced behind them under high pressure, so we use low-pressure application with a cleaning solution designed to kill mildew and algae at the surface, then a gentle rinse. This gets your home genuinely clean without risking the paint, caulking, or siding itself.",
    includes: [
      "Full exterior soft wash — siding, stucco, brick, or vinyl",
      "Mildew- and algae-killing solution, not just water pressure",
      "Windows, soffits, and trim included in the wash",
      "Landscaping protected throughout the process",
      "Final walk-through before we consider the job done",
    ],
    signs: [
      "Green or black streaking on siding or stucco, especially on shaded sides",
      "Home looks dingy or discolored compared to when it was painted",
      "Visible mildew around windows, vents, or roof lines",
      "It's been more than a year since the exterior was professionally washed",
    ],
  },
  "window-cleaning": {
    overview:
      "Streaky, hazy, or spotted windows block natural light and make an otherwise clean home or business look neglected. Florida's hard water, pollen, and salt air (for coastal properties) all leave residue on glass that a regular hose-down doesn't fully remove.",
    approach:
      "We clean windows inside and out using traditional squeegee and pole techniques for a true streak-free finish, not just a pressure rinse. That includes wiping down frames and sills, and clearing spider webs and debris from tracks. For screens, we remove, wash, and reinstall them, and for hard-to-reach or multi-story windows we use extension poles and safe access equipment rather than skipping them.",
    includes: [
      "Interior and exterior glass cleaned to a streak-free finish",
      "Frames, sills, and tracks wiped down",
      "Screens removed, washed, and reinstalled",
      "Multi-story and hard-to-reach windows included",
      "Spider webs and debris cleared from window areas",
    ],
    signs: [
      "Hazy or spotted glass that doesn't clear up with regular cleaning",
      "Visible hard water spots or streaking",
      "Screens are dusty, discolored, or full of debris",
      "Windows haven't been professionally cleaned in over 6 months to a year",
    ],
  },
  "fence-cleaning": {
    overview:
      "Fences take on mold, mildew, and green algae fast, especially wood fences in shaded yards or anywhere moisture sits against the material. Beyond the look, a dirty wood fence holds moisture that speeds up rot, and vinyl or PVC fencing can yellow and stain if it's never cleaned.",
    approach:
      "We match the technique to the fence material. Wood gets a gentler soft wash to lift mold and algae without raising the grain, splintering boards, or stripping stain, while vinyl and PVC fencing can handle a more direct pressure wash to cut through algae and staining. Either way we clean both sides of the fence where access allows, not just the side facing your yard.",
    includes: [
      "Technique matched to wood, vinyl, or PVC fencing",
      "Mold, mildew, and green algae removal",
      "Both sides of the fence cleaned where accessible",
      "Gentle handling that protects stain and paint on wood fences",
      "Gates and hardware included in the cleaning",
    ],
    signs: [
      "Green or black staining, especially on the shaded side",
      "Wood fence looks gray or weathered instead of its natural tone",
      "Vinyl or PVC fencing has yellowed or has visible algae film",
      "Fence hasn't been cleaned since it was installed or last stained",
    ],
  },
  "rust-removal-acid-wash": {
    overview:
      "Rust stains from sprinkler heads, metal furniture, railings, or naturally occurring iron in well water are some of the toughest stains on concrete, pavers, and pool surfaces — regular pressure washing alone usually won't touch them. Pool decks and pool surfaces can also develop scale, algae staining, or discoloration that needs a more targeted chemical treatment.",
    approach:
      "We use specialized rust-removing chemicals that bond to iron staining and lift it out of concrete and pavers without damaging the surface underneath, followed by a thorough rinse. For pool surfaces, we use acid washing, a controlled chemical treatment that removes staining, algae, and scale from plaster and pebble finishes to restore a clean, uniform look — this is a specialized process we handle carefully to protect the pool surface and surrounding landscaping.",
    includes: [
      "Targeted rust stain treatment for concrete, pavers, and railings",
      "Acid washing for pool plaster and pebble surfaces",
      "Landscaping and surrounding surfaces protected during treatment",
      "Thorough rinse and neutralization after chemical application",
      "Safe handling and disposal of all chemicals used",
    ],
    signs: [
      "Orange or brown rust streaks from sprinklers or metal fixtures",
      "Pool surface looks stained, scaled, or discolored",
      "Rust stains that didn't come out with a standard pressure wash",
      "Metal railings or furniture leaving rust marks on nearby concrete",
    ],
    beforeImage: "/images/gallery/house-washing-01.jpg",
    afterImage: "/images/gallery/rust-removal-after-01.jpg",
  },
  "oil-stain-removal": {
    overview:
      "Oil and grease stains from vehicles are some of the most stubborn marks on a driveway or parking lot, and they only get harder to remove the longer they sit, as oil soaks deeper into porous concrete and asphalt over time.",
    approach:
      "We use hot water extraction paired with commercial-grade degreasers designed specifically to break down oil and grease at a molecular level, not just push it around. Hot water helps the degreaser penetrate deeper into the stain before we pressure wash it out, and for older or more deeply set stains we may repeat the process to fully lift the discoloration.",
    includes: [
      "Commercial-grade degreaser application",
      "Hot water extraction for deeper stain penetration",
      "Treatment for driveways, garage floors, and parking lots",
      "Repeat treatment on older or heavily set stains when needed",
      "Safe for concrete and asphalt surfaces",
    ],
    signs: [
      "Dark oil or grease spots that persist after regular washing",
      "Multiple stains across a driveway or parking area from repeated parking",
      "Stains that have been there long enough to darken or spread",
      "Parking lot or garage floor stains affecting a business's appearance",
    ],
  },
  "painting-services": {
    overview:
      "A fresh coat of paint is one of the most effective ways to update and protect a home or business, but the result is only as good as the prep work underneath it. Paint applied over dirt, mildew, or peeling old paint fails faster and never looks as clean as it should.",
    approach:
      "We handle full interior and exterior painting, starting with proper prep — pressure or soft washing the surface, scraping and sanding loose or peeling paint, and patching or caulking as needed — before priming and applying a quality finish coat. We work on homes and businesses alike, matching paint type and technique to the surface, whether that's stucco, siding, drywall, or trim.",
    includes: [
      "Full surface prep — washing, scraping, sanding, and patching",
      "Priming for proper paint adhesion",
      "Interior and exterior painting for homes and businesses",
      "Trim, doors, and detail work included",
      "Quality finish coats matched to the surface type",
    ],
    signs: [
      "Peeling, cracking, or fading paint on exterior surfaces",
      "Interior walls with scuffs, stains, or outdated color",
      "Bare or exposed stucco/siding showing through old paint",
      "Preparing a home or business for sale or a fresh look",
    ],
  },
  "sidewalk-cleaning": {
    overview:
      "Sidewalks and walkways see constant foot traffic, and in Florida they collect algae, dirt, gum, and stains fast, especially in shaded or high-traffic commercial areas. For businesses, a clean walkway is often the first surface a customer actually steps on.",
    approach:
      "We pressure wash sidewalks and walkways with a surface cleaner attachment for even, streak-free results across large areas, and treat gum, stains, and heavier buildup individually where needed. We work on residential walkways, commercial sidewalks, shopping center walkways, and public-facing paths, scheduling commercial jobs around foot traffic and business hours.",
    includes: [
      "Full-width pressure washing with a surface cleaner attachment",
      "Spot treatment for gum, stains, and heavy buildup",
      "Residential and commercial walkways",
      "Scheduling around foot traffic for commercial properties",
      "Algae and mildew removal on shaded sections",
    ],
    signs: [
      "Algae or mildew staining, especially in shaded areas",
      "Gum, stains, or dark buildup on high-traffic sections",
      "Walkway looks dingy compared to surrounding landscaping or storefronts",
      "It's been over a year since the last professional cleaning",
    ],
  },
  "screen-enclosure-cleaning": {
    overview:
      "Pool cages and lanai screens take on algae, mold, dirt, and metal oxidation from constant sun and moisture exposure, and because the screen material itself is fragile, it's easy to damage with the wrong equipment or too much pressure.",
    approach:
      "We soft wash screen enclosures rather than pressure washing them, since standard pressure can tear screen mesh or bend the aluminum framing. Our process lifts algae, mold, and dirt from both the screens and the frame, and addresses the white, chalky oxidation that builds up on aluminum framing over time, restoring both the look and the airflow the screens are supposed to provide.",
    includes: [
      "Low-pressure soft wash safe for screen mesh",
      "Algae, mold, and dirt removal from screens and framing",
      "Oxidation treatment for aluminum frames",
      "Full enclosure cleaned, not just visible panels",
      "Screen integrity checked and protected throughout",
    ],
    signs: [
      "Screens look dingy, gray, or streaked with algae",
      "Aluminum framing has a chalky, white, oxidized look",
      "Reduced visibility or airflow through the screens",
      "Enclosure hasn't been cleaned since it was installed",
    ],
  },
  "gutter-cleaning-flush": {
    overview:
      "Clogged gutters don't just overflow — in Florida's heavy rain, they send water pouring down siding and pooling right at your foundation, which is exactly the kind of moisture problem that leads to bigger issues over time. Leaves, seed pods, and debris build up fast under the tree canopy common across South Florida neighborhoods.",
    approach:
      "We clear debris from gutters by hand, then flush the full system with water to confirm downspouts are draining properly and there are no hidden clogs further down the line. We check for sagging sections, loose brackets, and obvious damage while we're up there, and flag anything beyond normal debris buildup so it can be addressed before it becomes a bigger repair.",
    includes: [
      "Hand removal of leaves, debris, and buildup",
      "Full downspout flush to confirm proper drainage",
      "Check for sagging sections or loose brackets",
      "Roof edge and gutter line rinsed clean",
      "Flagging of any damage beyond normal debris buildup",
    ],
    signs: [
      "Water spilling over the sides of gutters during rain",
      "Visible plant growth or debris piled in the gutters",
      "Staining on siding beneath the gutter line",
      "Standing water or erosion near the foundation after storms",
    ],
  },
  "maintenance-subscription-plans": {
    overview:
      "The buildup that dulls roofs, driveways, and home exteriors in South Florida doesn't happen once a year — it's constant, thanks to the humidity and rain. A one-time cleaning looks great for a while, but a scheduled maintenance plan is what actually keeps a property looking that way year-round instead of sliding back to where it started.",
    approach:
      "We build monthly, quarterly, or semi-annual plans around what your property actually needs — that might be a quarterly house and driveway wash, a semi-annual roof soft wash, or a monthly commercial storefront and walkway cleaning. Plan customers get priority scheduling, consistent pricing instead of one-off quotes, and a team that already knows your property and its trouble spots.",
    includes: [
      "Custom scheduling — monthly, quarterly, or semi-annual",
      "Combination of services tailored to your property",
      "Priority scheduling ahead of one-time customers",
      "Consistent, locked-in pricing for plan members",
      "Available for both residential and commercial properties",
    ],
    signs: [
      "Property looks great right after a cleaning but declines within months",
      "You're tired of scheduling one-off cleanings every time buildup returns",
      "Managing multiple properties or a commercial site with regular upkeep needs",
      "You want predictable pricing instead of recurring one-time quotes",
    ],
  },
};

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

export type CityContent = {
  paragraph1: string;
  paragraph2: string;
  metaHook: string;
};

export const cityContent: Record<string, CityContent> = {
  Weston: {
    paragraph1:
      "Weston is one of Broward's most master-planned cities, built around lakes, golf courses, and gated communities like Weston Hills and Windmill Ranch Estates. Tile roofs, paver driveways, and lush landscaping are the norm here, and the city sits right on the edge of the Everglades, which means extra humidity and a steady supply of airborne organic material settling on every exterior surface.",
    paragraph2:
      "That combination of shade, moisture, and proximity to wetlands is exactly what feeds the black streaks and green algae we see on Weston roofs and the mildew that creeps up stucco walls facing the canals. We soft wash tile roofs without cracking them, keep paver driveways looking freshly sealed, and clean pool decks and screened patios so Weston's HOAs stay off your back.",
    metaHook: "Serving Weston's gated communities and lakefront homes near the Everglades.",
  },
  Davie: {
    paragraph1:
      "Davie has kept its cowboy roots even as it grew into a Broward suburb — it's still home to a working rodeo arena, hitching posts downtown, and more horse properties than anywhere else in the county. Between that ranch heritage and Nova Southeastern University's sprawling campus, Davie is a mix of barns, paddocks, and newer subdivisions all sharing the same sandy soil and afternoon storms.",
    paragraph2:
      "Horse properties mean mud, manure dust, and hay debris get tracked onto driveways and building exteriors in a way most cities don't deal with, on top of the usual Florida algae and mildew. We wash barns, fences, driveways, and homes across Davie's ranch lots and its subdivisions alike, using the right pressure so we don't damage wood fencing or older block construction.",
    metaHook: "Washing horse properties, barns, and family homes across Davie's ranch country.",
  },
  Plantation: {
    paragraph1:
      "Plantation is one of Broward's older, more established suburbs, known for its tree canopy — including the jacaranda trees that give Jacaranda Country Club its name — and a mix of midcentury ranch homes alongside newer construction. Central Broward's office corridors run through Plantation too, so we see everything from single-family homes with mature landscaping to commercial storefronts along Broward Boulevard and University Drive.",
    paragraph2:
      "All that tree cover is great for shade but rough on roofs and driveways — falling leaves, sap, and pollen feed algae and mildew faster than in more open neighborhoods. We soft wash roofs and siding, strip stains off driveways and walkways, and keep Plantation's commercial properties looking sharp for customers driving by on the main corridors.",
    metaHook: "Cleaning tree-shaded homes and commercial storefronts across Plantation.",
  },
  Sunrise: {
    paragraph1:
      "Sunrise is best known for Sawgrass Mills, one of the largest outlet malls in the country, and Amerant Bank Arena, home of the Florida Panthers — which means a huge amount of retail and commercial square footage alongside its residential subdivisions. Most of Sunrise's neighborhoods were built in the 1970s and 80s around a network of lakes and canals that keep the whole city green but also humid.",
    paragraph2:
      "That mix of aging stucco homes, lake-adjacent lots, and heavy retail traffic means we do a lot of both: house washing and driveway cleaning in the residential subdivisions, and storefront, sidewalk, and parking lot washing for the retail and commercial strips near Sawgrass Mills and the arena district.",
    metaHook: "Serving Sunrise homes, lakeside subdivisions, and the retail corridor near Sawgrass Mills.",
  },
  "Pembroke Pines": {
    paragraph1:
      "Pembroke Pines grew from farmland into one of Broward's largest cities almost entirely through master-planned subdivisions, many of them gated, with red tile roofs and paver driveways that are now old enough to need real attention. C.B. Smith Park and a wide network of family neighborhoods make up most of the city, especially in the newer western sections built out through the 90s and 2000s.",
    paragraph2:
      "Tile roofs are the biggest concern we see in Pembroke Pines — black algae streaking is common on west-facing slopes, and HOAs here are strict about curb appeal. We soft wash roofs the right way so tiles don't crack, and we handle the paver sealing and driveway cleaning that keeps these subdivisions looking the way they did when they were new.",
    metaHook: "Roof soft washing and paver care for Pembroke Pines' master-planned subdivisions.",
  },
  Miramar: {
    paragraph1:
      "Miramar was a quiet agricultural community until the 1990s and 2000s, when it became one of the fastest-growing cities in the country, filling in with master-planned communities like Riviera Isles and Miramar Isles that favor Mediterranean and Spanish Revival architecture — barrel tile roofs, stucco exteriors, and lakefront lots. Miramar Park of Commerce also brought in a large corporate office presence along the I-75 corridor.",
    paragraph2:
      "Newer construction still means real maintenance needs in this climate — Mediterranean-style tile roofs show algae fast, and the lakes that make Miramar's communities so appealing also add humidity that speeds up mildew on stucco. We soft wash roofs and walls, clean pool decks and patios, and handle exterior washing for the office parks along the Park of Commerce corridor.",
    metaHook: "Roof and exterior washing for Miramar's Spanish Revival communities and office corridor.",
  },
  "Southwest Ranches": {
    paragraph1:
      "Southwest Ranches was incorporated specifically to protect its rural, equestrian character — the town requires lots of at least one acre, and by design there are no sidewalks or streetlights in most of it. Residents keep horses, and sometimes goats or chickens, on properties with barns, riding arenas, and guest houses spread across large, tree-shaded lots along the edge of the Everglades.",
    paragraph2:
      "Large properties here mean more roof, fence, and driveway square footage than almost anywhere else in Broward, plus the mud and organic debris that come with keeping animals. We wash barns, long fence lines, gravel and paver driveways, and homes across Southwest Ranches' big lots, working around horses and outbuildings without disrupting the property.",
    metaHook: "Washing barns, fences, and large equestrian properties across Southwest Ranches.",
  },
  "Cooper City": {
    paragraph1:
      "Cooper City was planned from the start to stay small-town, and it shows — the city has more than twenty parks woven through its neighborhoods, low-density zoning, and a homeownership rate around 66% that keeps residents invested in how their streets look. Neighborhoods like Timberlake are known for well-kept single-family homes with mature trees and quiet cul-de-sacs.",
    paragraph2:
      "That civic pride translates into real expectations for curb appeal — driveways, roofs, and exteriors that look neglected stand out fast in a city this well cared for. We help Cooper City homeowners keep that reputation up with roof soft washing, driveway and paver cleaning, and house washing that matches the same attention to detail the city is known for.",
    metaHook: "Keeping Cooper City's well-kept, family-oriented neighborhoods looking their best.",
  },
  "Coral Springs": {
    paragraph1:
      "Coral Springs was built out of former Everglades marshland starting in the 1960s as a fully master-planned city, and it's kept that reputation as an 'All-America City' with tree-lined streets, an extensive canal system, and neighborhoods organized around parks and the Coral Springs Center for the Arts. Many homes back up to canals or lakes that were part of the original drainage design.",
    paragraph2:
      "Canal-front and lake-front lots in Coral Springs deal with more humidity and waterline algae than homes further inland, and the tree canopy the city is proud of also means more organic buildup on roofs and driveways. We soft wash roofs, clean seawalls and pool decks, and keep driveways and walkways free of the algae that waterfront living brings.",
    metaHook: "Roof and waterfront cleaning for Coral Springs' canal-front neighborhoods.",
  },
  Parkland: {
    paragraph1:
      "Parkland is one of the most upscale cities in Broward County, with large custom homes on estate-sized lots in communities like Parkland Golf & Country Club, The Ranches, and Watermark. It backs up to the Everglades on its western edge, giving it a semi-rural feel despite the high-end construction, and most homes here have premium tile roofs and extensive paver hardscaping.",
    paragraph2:
      "Premium finishes need careful handling — we use soft washing on Parkland's tile roofs specifically to protect the investment homeowners have made, and we treat paver driveways and pool decks with the same care. Being this close to the Everglades also means more algae pressure than in denser, more inland parts of Broward.",
    metaHook: "Soft washing and paver care for Parkland's estate homes near the Everglades.",
  },
  Tamarac: {
    paragraph1:
      "Tamarac has one of the largest concentrations of 55+ communities in Broward County, including Kings Point, the Mainlands, and neighborhoods built around golf courses like Colony West, Woodmont, and Inverrary. Most of these communities feature villas, condos, and single-family homes with shared clubhouses, pools, and walkways that are maintained collectively rather than by individual homeowners.",
    paragraph2:
      "Shared amenities like clubhouse pool decks, community walkways, and building exteriors need regular attention to stay safe and presentable for residents, and we work directly with Tamarac's HOAs and condo associations on that kind of scheduled maintenance. We also handle individual driveway, roof, and exterior cleaning for homeowners throughout the golf course communities.",
    metaHook: "Serving Tamarac's 55+ and golf course communities, from HOAs to individual homes.",
  },
  Lauderhill: {
    paragraph1:
      "Lauderhill is one of Broward's most culturally diverse cities, with deep Jamaican, Haitian, and Caribbean roots that show up in everything from local restaurants to the international cricket matches hosted at Central Broward Regional Park. Housing here ranges from the gated, golf-course community of Inverrary to more affordable condos and classic single-family neighborhoods like Woodmont.",
    paragraph2:
      "That range of housing stock means Lauderhill jobs vary a lot — from full exterior washing on Inverrary's larger homes to more targeted driveway and walkway cleaning in denser condo areas. We work with both individual homeowners and property managers here, and we're familiar with the mix of older and newer construction across the city.",
    metaHook: "Exterior cleaning across Lauderhill's diverse neighborhoods, from Inverrary to Woodmont.",
  },
  "Fort Lauderdale": {
    paragraph1:
      "Fort Lauderdale earned its nickname 'the Venice of America' honestly — more than 165 miles of navigable canals run through the city, and a huge share of homes here have a dock, a seawall, or waterfront access. That's on top of a historic downtown around Las Olas Boulevard, older Mediterranean Revival neighborhoods like Rio Vista and Colee Hammock, and a skyline of newer high-rises near the beach.",
    paragraph2:
      "Salt air and constant humidity off the ocean and Intracoastal accelerate corrosion, mildew, and algae growth faster here than almost anywhere else in Broward, especially on seawalls, docks, and homes near the water. We soft wash roofs and siding, clean seawalls and pool decks, and handle the rust and salt staining that waterfront properties deal with year-round.",
    metaHook: "Fighting salt air and canal-side buildup for Fort Lauderdale's waterfront homes.",
  },
  Hollywood: {
    paragraph1:
      "Hollywood stretches from the historic Art Deco and Mediterranean Revival buildings around Young Circle and Hollywood Beach's 2.5-mile Broadwalk inland to quieter, lake-filled neighborhoods like Hollywood Hills and Emerald Hills. It's a city of contrasts — beachfront condos dealing with direct salt spray, and inland golf course homes dealing with more standard Florida humidity and shade.",
    paragraph2:
      "Properties near the beach need more frequent attention because salt air eats through paint, metal railings, and stucco faster than inland homes ever see, while the older architecture downtown often has decorative surfaces that need gentler pressure. We adjust our approach block by block in Hollywood, from beachside buildings to the golf course communities further west.",
    metaHook: "From Hollywood Beach's salt air to Emerald Hills' golf course homes.",
  },
  "Coconut Creek": {
    paragraph1:
      "Coconut Creek calls itself the Butterfly Capital of the World thanks to Butterfly World in Tradewinds Park, and the whole city was designed with that same environmental focus — it was the first city in Florida certified as a Community Wildlife Habitat, and it's full of preserved trees, waterways, and green space woven between its neighborhoods.",
    paragraph2:
      "All that greenery and water is part of why Coconut Creek is such a pleasant place to live, but it's also a steady source of pollen, leaf debris, and moisture that builds up on roofs, driveways, and screened enclosures faster than in more built-out cities. We soft wash roofs and clean screen enclosures and driveways to keep that natural setting from taking over your home's exterior.",
    metaHook: "Roof and screen enclosure cleaning for Coconut Creek's tree-shaded neighborhoods.",
  },
  Miami: {
    paragraph1:
      "Miami is a city of extremes — glass high-rises in Brickell and Downtown, converted warehouses and murals in Wynwood, historic bungalows in Little Havana and Coconut Grove, and dense multifamily housing throughout. That range means we work on everything from condo tower balconies and commercial storefronts to older single-family homes with decades of South Florida weather on them.",
    paragraph2:
      "Being this close to Biscayne Bay and the ocean means constant salt air and humidity that speeds up mildew, algae, and metal corrosion across the entire city, on top of pollution buildup on commercial storefronts and sidewalks downtown. We handle high-rise adjacent surfaces, commercial washing for storefronts and walkways, and full house washing for Miami's residential neighborhoods.",
    metaHook: "Commercial and residential washing across Miami's high-rises and historic neighborhoods.",
  },
  "Miami Lakes": {
    paragraph1:
      "Miami Lakes was designed from scratch in the 1960s as a self-contained planned town, with everything oriented around Main Street — a walkable commercial hub with Mediterranean architecture, brick sidewalks, and shaded streets that's still the heart of the community today. Residential neighborhoods spiral outward from there around the town's namesake lakes.",
    paragraph2:
      "The Mediterranean-style architecture that gives Miami Lakes its character — stucco facades, tile roofs, arched details — needs a gentler, more careful wash than plain block construction, and the lakefront lots deal with extra humidity and algae. We soft wash roofs and exteriors around Main Street and throughout the residential loops, plus commercial cleaning for the shops and offices along Main Street itself.",
    metaHook: "Careful soft washing for Miami Lakes' Mediterranean architecture around Main Street.",
  },
  "Miami Gardens": {
    paragraph1:
      "Miami Gardens is home to Hard Rock Stadium, host to the Dolphins, the Miami Open, and major concerts and events that bring huge crowds through the city every year. Away from the stadium, it's a large, mostly residential city with a mix of established ranch-style neighborhoods and newer development, plus a growing logistics and warehouse presence near the airport corridor.",
    paragraph2:
      "With that much event traffic passing through, commercial properties and storefronts near the stadium corridor need to stay presentable year-round, while residential neighborhoods deal with the same humidity-driven algae and mildew as the rest of Miami-Dade. We handle both — commercial exterior washing near the stadium district and house washing, driveway cleaning, and roof soft washing throughout Miami Gardens' neighborhoods.",
    metaHook: "Commercial and residential washing near Hard Rock Stadium and beyond.",
  },
  Hialeah: {
    paragraph1:
      "Hialeah is one of the most densely populated cities in Florida, with a tightly packed grid of concrete block homes, duplexes, and triplexes built close together, deep Cuban-American roots, and a historic racetrack in Hialeah Park. Space is tight here compared to the suburbs further west, and a lot of the housing stock dates back several decades.",
    paragraph2:
      "Older concrete block construction packed closely together tends to hold onto humidity and shade longer, which shows up as mildew streaking on walls and driveways that sit close to neighboring buildings. We work efficiently in Hialeah's tighter lots, washing exteriors, driveways, and walkways without disrupting neighbors on either side.",
    metaHook: "Exterior and driveway washing for Hialeah's dense, historic neighborhoods.",
  },
  Doral: {
    paragraph1:
      "Doral grew up around the Doral Golf Resort and its famous Blue Monster course, and that legacy shows in the city's mix of golf course communities, man-made lakes, and modern gated developments with red tile roofs. It's also become a major corporate and logistics hub thanks to its location next to Miami International Airport, with new high-rise condos and office parks going up constantly.",
    paragraph2:
      "New construction in Doral still means real upkeep — tile roofs and stucco on newer homes show algae surprisingly fast in this humidity, and the lakes that give these communities their resort feel add extra moisture to the mix. We soft wash roofs and exteriors on Doral's newer builds and handle commercial washing for the office parks and retail centers near the airport corridor.",
    metaHook: "Roof and exterior washing for Doral's golf communities and airport-corridor offices.",
  },
  Homestead: {
    paragraph1:
      "Homestead sits between two national parks — Everglades to the west and Biscayne to the east — and its economy and character are still shaped by the surrounding Redland farmland, where fruit stands, nurseries, and family farms fill the roadside. Much of the city's housing was rebuilt after Hurricane Andrew in 1992, so the stock skews newer than most of Miami-Dade, alongside a growing warehouse and logistics footprint.",
    paragraph2:
      "Being this close to open farmland and two national parks means more dust, pollen, and organic debris landing on roofs and driveways than in denser parts of the county, plus the routine algae and mildew that come with South Florida humidity. We handle roof soft washing, driveway cleaning, and exterior washing for both Homestead's residential neighborhoods and its agricultural and industrial properties.",
    metaHook: "Roof and exterior washing near Homestead's farmland and national park gateways.",
  },
  Kendall: {
    paragraph1:
      "Kendall is one of Miami-Dade's largest suburban areas, built out mostly in the 1970s through 90s along a network of canals, with single-family homes on quiet cul-de-sacs and a heavy concentration of screened-in pools and lanais that are practically standard for the area. Major shopping corridors near Dadeland anchor the neighborhood without disrupting its residential feel.",
    paragraph2:
      "With so many screened pool enclosures and lanais in Kendall, algae and mildew on screens and pool decks are some of the most common calls we get here, along with the usual roof and driveway buildup from decades-old canal-adjacent landscaping. We clean screen enclosures, pool decks, driveways, and roofs throughout Kendall's established neighborhoods.",
    metaHook: "Screen enclosure and pool deck cleaning for Kendall's canal-side neighborhoods.",
  },
  "Boca Raton": {
    paragraph1:
      "Boca Raton's architecture still carries Addison Mizner's Mediterranean Revival influence from the 1920s — red barrel tile roofs, pink and cream stucco, and arched details show up across the city, from historic districts to newer construction in golf communities like Royal Palm Yacht & Country Club and St. Andrews. It's one of the most affluent cities in Palm Beach County, with high standards for curb appeal to match.",
    paragraph2:
      "That signature red barrel tile is beautiful but shows black algae streaking fast, and it takes a careful soft-wash technique to clean without cracking or dislodging tiles — which is exactly what we specialize in. We also handle the paver driveways, pool decks, and stucco exteriors that make up Boca's high-end properties, with the same attention to detail the city expects.",
    metaHook: "Soft washing Boca Raton's signature red barrel tile roofs and Mediterranean stucco.",
  },
  "Delray Beach": {
    paragraph1:
      "Delray Beach built its reputation on a walkable, artsy downtown along Atlantic Avenue, with historic Old School Square, brick-paved sections, and a mix of restored coastal cottages and newer construction stretching from the beach inland. It's a smaller, more pedestrian-focused city than its neighbors, with a lot of pride in how the downtown core and residential streets look.",
    paragraph2:
      "Coastal salt air affects Delray's beachside properties the same way it does the rest of the coast, while the brick sidewalks and pavers downtown need periodic cleaning to stay looking sharp for the foot traffic Atlantic Avenue draws. We wash homes, driveways, and commercial storefronts throughout Delray, from the beachfront to the inland residential streets.",
    metaHook: "Washing coastal cottages and downtown storefronts along Delray's Atlantic Avenue.",
  },
  "Boynton Beach": {
    paragraph1:
      "Boynton Beach has been revitalizing its marina district and waterfront downtown while the rest of the city fills in with a mix of older developments from the 70s and 80s and newer construction further west. Canal and Intracoastal-adjacent homes are common here, giving a good number of residents direct water access without the price tag of Delray or Boca.",
    paragraph2:
      "Canal-front homes in Boynton Beach deal with the same waterline algae and humidity issues as anywhere else on the water, and the mix of older and newer roofs across the city means we see everything from routine soft washing to more stubborn stain removal. We handle house washing, roof cleaning, and driveway work throughout Boynton's canal neighborhoods and inland subdivisions alike.",
    metaHook: "House and canal-front cleaning across Boynton Beach's marina district and suburbs.",
  },
  Wellington: {
    paragraph1:
      "Wellington is known worldwide as the Winter Equestrian Capital, home to Wellington International and the Winter Equestrian Festival, which draws Olympic-level riders and horses to communities like Palm Beach Point, Grand Prix Village, and Saddle Trail Park every season. Alongside the horse farms, Wellington also has plenty of standard gated communities like Olympia and Grand Isles, built around lakes with resort-style clubhouses.",
    paragraph2:
      "Equestrian properties bring the same mud, manure dust, and hay debris we see in Davie and Southwest Ranches, often spread across barns and arenas as large as the homes themselves, while the lake communities deal with more typical Florida humidity and algae. We wash barns, fences, and equestrian estates as carefully as we wash the roofs and driveways in Wellington's gated subdivisions.",
    metaHook: "Washing equestrian estates and gated lake communities across Wellington.",
  },
  "West Palm Beach": {
    paragraph1:
      "West Palm Beach's downtown centers on Clematis Street and the waterfront along the Intracoastal, facing the island of Palm Beach across the water, with historic districts like El Cid and Flamingo Park full of Mediterranean Revival and Mission-style bungalows from the 1920s. It's a city of contrasts between that historic core and the newer high-rises filling in downtown.",
    paragraph2:
      "Being right on the Intracoastal means constant salt air and humidity that ages roofs, stucco, and metal fixtures faster than inland Palm Beach County, especially on the older bungalows in the historic districts that need a gentler touch. We soft wash roofs and exteriors throughout West Palm Beach, from the historic neighborhoods to the newer downtown high-rises and everything in between.",
    metaHook: "Soft washing West Palm Beach's historic bungalows and Intracoastal-front properties.",
  },
};

export type Testimonial = {
  quote: string;
  name: string;
  source: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had a great experience with Finesse Cleaning. After receiving a letter from my HOA to clean our roof, we called our normal guy who didn't respond. I called after seeing their sign at a neighbors house in my community + Randy answered immediately. He was friendly, professional and was able to provide an estimate instantly. The price was really affordable so I accepted. They had an opening the next day + the team arrived ready to go as promised. The work was done swiftly + thoroughly. I highly recommend them for their expertise + incredibly customer service! Thanks, Randy!!!",
    name: "Kelhi",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Contacted Finesse thru Facebook. Got a timely response from Randy and a quote for a soft wash of my roof. Scheduling the job was quick and easy. Carlos showed up at my house on time. Carlos was polite and professional. He explained the process and shortly thereafter, he and his assistant Ethan got to work. Carlos and Ethan did a great job cleaning my roof. My wife and I were very pleased with the result. Our roof looks great!",
    name: "P R.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Finesse Cleaning did an amazing job on our driveway, sidewalk, walkway, and stepping stones. They were efficient and professional. I also needed help taking out a hard water stain on our exterior wall. Not only were they knowledgeable to know what was needed, they were also prepared with the materials to do it the same day! So thankful for the team. I would definitely recommend them to friends and family.",
    name: "Shauna B.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Finesse Cleaning did a stupendous job pressure cleaning my front porch, roof, and outdoor patio! They were transparent with cost, did a thorough job with each section and showing me the before & after pictures; there was a section in my backyard I had assumed was always black before it was cleaned. I highly recommend their pressure cleaning service for residential properties and I will certainly call them back for repeat business!",
    name: "Michelle C.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "So impressed with Carlos' meticulous care and expertise in cleaning everything around our house, including our roof driveway walls and patio. We like this service because they use a soft clean which doesn't kill all the plants after you have your roofs cleaned. Their prices are fair and they're work ethic is impressive. I would give them beyond a five star rating.",
    name: "Maryann G.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Carlos with Finesse cleaning knocked on my door this morning and asked if I wanted a quote to clean the tile roof and pressure wash the driveway. Both were in need of cleaning, the quote was quite reasonable and Carlos came back early this afternoon and did the job in which I'm greatly pleased. In cleaning the tile roof he pre treated it with a cleaner then \"soft washed\" the roof by applying light water pressure to wash and rinse the roof. Carlos made sure all the sides of the house were rinsed and cleaned and was very professional in his work ethic. Great job all around and plan on using Finesse cleaning in the future! Hats off to both Carlos and Randy!",
    name: "Bryan J.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Best in town. House looks like new every time. Randy and his team are really great to work with, professional, quick and family friendly. I say that because, anyone who sees the house has to have them over soon too. Looks like new. Family and friends have made Randy their go to guy for pressure wash needs. Rates are reasonable and worth it. Great for Miami weather and keeping mold, mildew and pests away overall.",
    name: "Grixuelle B.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "I recently hired Finesse Cleaning to pressure clean my roof, and I couldn't be more impressed with the results! The before and after transformation is truly incredible—my roof looks brand new! The team was professional, efficient, and paid great attention to detail. They arrived on time, worked diligently, and ensured everything was spotless before they left. I highly recommend their services to anyone looking for top-notch pressure cleaning. Thank you for an outstanding job!",
    name: "Bianca P.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Called Finesse Cleaning to handle my roof, driveway, walls, and front of my house. They came through and knocked it out. Everything looks clean and fresh. Fair price, professional service, and no complaints. If you need pressure washing done right, these are the guys to call. I'll definitely be using them again.",
    name: "André M.",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Hired Finesse Cleaning to power wash my house exterior, roof, patios, and walkways — and I couldn't be happier with the results. Everything looks brand new. The crew was professional, courteous, and clearly took pride in their work. You can tell the difference between a company that just goes through the motions and one that actually cares about the finished product. Finesse is the latter. Highly recommend!",
    name: "Colin K.",
    source: "Google Review",
    rating: 5,
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
  { src: "/images/gallery/commercial-services-01.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/roof-soft-washing-06.jpg", label: "Roof Soft Washing", alt: "Tile roof edge above a paver patio after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-02.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-03.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage wall — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-04.jpg", label: "Commercial Services", alt: "Crew pressure washing a commercial floor at night — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-05.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage with safety cones — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-06.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-07.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse with equipment — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/pool-deck-cleaning-01.jpg", label: "Pool Deck Cleaning", alt: "Crew washing a pool deck beside a modern pool — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-08.jpg", label: "Commercial Services", alt: "Crew pressure washing a commercial floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-09.jpg", label: "Commercial Services", alt: "Exterior walkway of a commercial building after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-10.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-01.jpg", label: "Driveway Cleaning", alt: "Crew pressure washing a brick paver driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-11.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/paver-sealing-sanding-05.jpg", label: "Paver Sealing & Sanding", alt: "Crew applying paver sealer near the garage — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-12.jpg", label: "Commercial Services", alt: "Crew pressure washing a storefront entrance walkway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-13.jpg", label: "Commercial Services", alt: "Crew pressure washing a storefront walkway with safety cones — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-14.jpg", label: "Commercial Services", alt: "Crew pressure washing a warehouse floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-15.jpg", label: "Commercial Services", alt: "Exterior wall of a commercial building after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-16.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-17.jpg", label: "Commercial Services", alt: "Crew pressure washing a garage floor at night — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/sidewalk-cleaning-01.jpg", label: "Sidewalk Cleaning", alt: "Concrete walkway drain after cleaning — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-18.jpg", label: "Commercial Services", alt: "Exterior wall of a commercial building — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/driveway-cleaning-05.jpg", label: "Driveway Cleaning", alt: "Crew using a surface cleaner on a paver driveway — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-19.jpg", label: "Commercial Services", alt: "Crew pressure washing a parking garage floor — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-20.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building at sunset — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-21.jpg", label: "Commercial Services", alt: "Crew pressure washing a walkway near a commercial building — Finesse Cleaning, South Florida" },
  { src: "/images/gallery/commercial-services-22.jpg", label: "Commercial Services", alt: "Exterior wall and doors of a commercial building at sunset — Finesse Cleaning, South Florida" },
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
