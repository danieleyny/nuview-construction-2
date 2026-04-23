export type Project = {
  slug: string;
  name: string;
  type: "Residential" | "Kitchen" | "Bathroom" | "Commercial" | "Outdoor" | "Additions";
  neighborhood: string;
  sqft: string;
  duration: string;
  completed: string;
  hero: string;
  thumb: string;
  brief: string[];
  gallery: { src: string; alt: string; wide?: boolean }[];
  materials: { name: string; detail: string }[];
  pullQuote?: { quote: string; author: string };
};

const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const projects: Project[] = [
  {
    slug: "rittenhouse-kitchen",
    name: "Rittenhouse Kitchen",
    type: "Kitchen",
    neighborhood: "Rittenhouse Square",
    sqft: "420 sq ft",
    duration: "6 weeks",
    completed: "2025",
    hero: U("photo-1556909114-f6e7ad7d3136", 2000),
    thumb: U("photo-1556909114-f6e7ad7d3136", 1200),
    brief: [
      "A narrow rowhome galley, opened along its full length. Load-bearing wall removed with a flush-beam install that preserved the ceiling plane.",
      "Rift-sawn white oak cabinetry, honed Calacatta counter, integrated appliances. The window at the back got three extra feet of glass.",
    ],
    gallery: [
      { src: U("photo-1556909172-54557c7e4fb7", 1800), alt: "Kitchen island and counter", wide: true },
      { src: U("photo-1556909114-44e3e70034e2", 1200), alt: "Rift-sawn white oak cabinetry" },
      { src: U("photo-1556909114-f6e7ad7d3136", 1200), alt: "Calacatta backsplash detail" },
      { src: U("photo-1565538810643-b5bdb714032a", 1800), alt: "Kitchen from living room", wide: true },
    ],
    materials: [
      { name: "Cabinetry", detail: "Rift-sawn white oak, natural oil finish" },
      { name: "Counter", detail: "Honed Calacatta Gold, mitered edge" },
      { name: "Floor", detail: "4\" white oak plank, site-finished" },
      { name: "Fixtures", detail: "Waterworks, unlacquered brass" },
    ],
    pullQuote: {
      quote: "Less than two months from demo to dinner party.",
      author: "Client, Rittenhouse",
    },
  },
  {
    slug: "society-hill-primary-bath",
    name: "Society Hill Primary Bath",
    type: "Bathroom",
    neighborhood: "Society Hill",
    sqft: "180 sq ft",
    duration: "4 weeks",
    completed: "2025",
    hero: U("photo-1552321554-5fefe8c9ef14", 2000),
    thumb: U("photo-1552321554-5fefe8c9ef14", 1200),
    brief: [
      "A 1780s rowhome asking for a primary bath that read as period-appropriate without acting like a museum.",
      "Limestone floor, slab walls in the shower, freestanding tub set against a single-pane Crittall window that replaced a blank wall.",
    ],
    gallery: [
      { src: U("photo-1552321554-5fefe8c9ef14", 1800), alt: "Bathroom wide shot", wide: true },
      { src: U("photo-1600585154084-4e5fe7c39198", 1200), alt: "Shower detail" },
      { src: U("photo-1600566753376-12c8ab7fb75b", 1200), alt: "Vanity and mirror" },
    ],
    materials: [
      { name: "Floor", detail: "Limestone, tumbled" },
      { name: "Shower", detail: "Slab limestone walls, linear drain" },
      { name: "Tub", detail: "Waterworks Candide freestanding" },
      { name: "Fixtures", detail: "Unlacquered brass" },
    ],
  },
  {
    slug: "fitler-square-whole-home",
    name: "Fitler Square Whole Home",
    type: "Residential",
    neighborhood: "Fitler Square",
    sqft: "2,800 sq ft",
    duration: "14 weeks",
    completed: "2024",
    hero: U("photo-1600210492486-724fe5c67fb0", 2000),
    thumb: U("photo-1600210492486-724fe5c67fb0", 1200),
    brief: [
      "Four-story trinity with a dated layout and tired systems. Every room in scope.",
      "New stair, re-floored throughout, kitchen relocated, three baths rebuilt, mechanicals upgraded, roof deck added at pilot house.",
    ],
    gallery: [
      { src: U("photo-1600210492486-724fe5c67fb0", 1800), alt: "Living room", wide: true },
      { src: U("photo-1556909114-f6e7ad7d3136", 1200), alt: "Kitchen" },
      { src: U("photo-1600585154363-67eb9e2e2099", 1200), alt: "Primary bedroom" },
      { src: U("photo-1600585154526-990dced4db0d", 1800), alt: "Roof deck", wide: true },
    ],
    materials: [
      { name: "Floors", detail: "European white oak, 7\" plank" },
      { name: "Stair", detail: "Rift-sawn oak treads, steel stringer" },
      { name: "Kitchen", detail: "Painted inset cabinetry, soapstone" },
      { name: "Roof deck", detail: "Ipe on sleepers over PVC membrane" },
    ],
    pullQuote: {
      quote: "They handled permits, design, demo, and finish as one conversation. That's rare.",
      author: "Client, Fitler Square",
    },
  },
  {
    slug: "washington-square-addition",
    name: "Washington Square Addition",
    type: "Additions",
    neighborhood: "Washington Square West",
    sqft: "650 sq ft",
    duration: "10 weeks",
    completed: "2024",
    hero: U("photo-1600566753190-17f0baa2a6c3", 2000),
    thumb: U("photo-1600566753190-17f0baa2a6c3", 1200),
    brief: [
      "A rear yard that was doing nothing, absorbed into the house as a new kitchen and family room.",
      "Steel-and-glass rear wall that folds fully open in summer. Polished concrete floor over hydronic heat.",
    ],
    gallery: [
      { src: U("photo-1600566753190-17f0baa2a6c3", 1800), alt: "Addition exterior", wide: true },
      { src: U("photo-1513694203232-719a280e022f", 1200), alt: "Interior" },
    ],
    materials: [
      { name: "Rear wall", detail: "Steel-frame folding glass, thermally broken" },
      { name: "Floor", detail: "Polished concrete over hydronic heat" },
      { name: "Ceiling", detail: "Exposed Douglas fir" },
    ],
  },
  {
    slug: "bella-vista-roof-deck",
    name: "Bella Vista Roof Deck",
    type: "Outdoor",
    neighborhood: "Bella Vista",
    sqft: "540 sq ft",
    duration: "5 weeks",
    completed: "2024",
    hero: U("photo-1600585154526-990dced4db0d", 2000),
    thumb: U("photo-1600585154526-990dced4db0d", 1200),
    brief: [
      "A rooftop with one good view and no way to enjoy it. Reframed structure, new membrane, ipe deck on sleepers.",
      "Built-in bench, planter run, shade pergola, low-voltage lighting throughout.",
    ],
    gallery: [
      { src: U("photo-1600585154526-990dced4db0d", 1800), alt: "Deck at dusk", wide: true },
      { src: U("photo-1600607687939-ce8a6c25118c", 1200), alt: "Pergola" },
    ],
    materials: [
      { name: "Deck", detail: "Ipe, oiled" },
      { name: "Membrane", detail: "IB PVC, fully adhered" },
      { name: "Pergola", detail: "Powder-coated steel" },
    ],
  },
  {
    slug: "chestnut-office-fitout",
    name: "Chestnut Street Office",
    type: "Commercial",
    neighborhood: "Rittenhouse",
    sqft: "6,200 sq ft",
    duration: "9 weeks",
    completed: "2025",
    hero: U("photo-1497366216548-37526070297c", 2000),
    thumb: U("photo-1497366216548-37526070297c", 1200),
    brief: [
      "Full-floor office fit-out for a financial services tenant. Open-plan with glass-walled offices along the north elevation.",
      "Exposed ceiling, stained concrete floor, acoustic felt at key rooms. Delivered two days ahead of move-in.",
    ],
    gallery: [
      { src: U("photo-1497366216548-37526070297c", 1800), alt: "Open floor", wide: true },
      { src: U("photo-1497366811353-6870744d04b2", 1200), alt: "Conference room" },
    ],
    materials: [
      { name: "Floor", detail: "Stained & sealed concrete" },
      { name: "Offices", detail: "Full-height glass, aluminum frame" },
      { name: "Acoustic", detail: "PET felt panels, custom CNC" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
