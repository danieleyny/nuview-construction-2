export type Service = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  hero: string;
  inclusions: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-construction",
    code: "SV-01",
    name: "Residential Construction",
    tagline: "Homes built with intention.",
    description:
      "Ground-up builds, additions, and whole-home renovations across Philadelphia. Structure, systems, finishes — handled.",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    inclusions: [
      "Full-home renovations",
      "Additions & second stories",
      "Structural reconfiguration",
      "Historic rowhome restoration",
      "Mechanical, electrical, plumbing",
      "Permits & zoning coordination",
    ],
    process: [
      { step: "Scope", detail: "On-site walk-through. Goals, constraints, budget." },
      { step: "Design", detail: "Plans, elevations, material selections." },
      { step: "Schedule", detail: "Milestones with firm dates and clear dependencies." },
      { step: "Build", detail: "Execution with a single point of accountability." },
    ],
    faqs: [
      {
        q: "How long does a full-home renovation take?",
        a: "Most of our whole-home renovations complete in under two months. Larger additions or structural work can extend to three or four.",
      },
      {
        q: "Do you handle permits?",
        a: "Yes. We manage L&I permits, zoning variances, and historical commission approvals end-to-end.",
      },
      {
        q: "Can you work on occupied homes?",
        a: "We phase work to keep you in the home when possible. For major whole-home scopes, we typically recommend temporary relocation.",
      },
    ],
  },
  {
    slug: "kitchen-remodeling",
    code: "SV-02",
    name: "Kitchen Remodeling",
    tagline: "The room your house is built around.",
    description:
      "Custom cabinetry, natural stone, layout reconfiguration, load-bearing work. A kitchen that earns daily use.",
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    inclusions: [
      "Custom cabinetry & millwork",
      "Natural stone & quartz countertops",
      "Load-bearing wall removal",
      "Island & peninsula design",
      "Appliance & lighting specification",
      "Flooring & tile installation",
    ],
    process: [
      { step: "Layout", detail: "Cook flow, sightlines, storage, seating." },
      { step: "Selection", detail: "Cabinets, stone, tile, fixtures, appliances." },
      { step: "Demolition", detail: "Controlled demo. Dust barriers. Daily clean." },
      { step: "Install", detail: "Trades sequenced. Punch-listed. Walked twice." },
    ],
    faqs: [
      {
        q: "What's a realistic kitchen budget in Philadelphia?",
        a: "Most of our kitchen renovations land between $75k and $175k depending on footprint, cabinetry, and stone selections.",
      },
      {
        q: "How long is the timeline?",
        a: "Four to eight weeks on-site once materials are staged. We schedule selections up front so the project doesn't stall waiting on lead times.",
      },
      { q: "Can you match a historic home?", a: "Yes — trim profiles, cabinet styles, and hardware are specified to read correctly in a Philly rowhome." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    code: "SV-03",
    name: "Bathroom Remodeling",
    tagline: "Small rooms, no shortcuts.",
    description:
      "Primary baths, powder rooms, ensuites. Waterproofing that lasts. Finishes that hold up.",
    hero: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    inclusions: [
      "Full gut & layout changes",
      "Waterproof shower systems",
      "Heated floors",
      "Custom vanities & medicine cabinets",
      "Steam showers & freestanding tubs",
      "Accessibility upgrades",
    ],
    process: [
      { step: "Layout", detail: "Fixture locations, drain relocation, ventilation." },
      { step: "Selection", detail: "Tile, stone, fixtures, glass, millwork." },
      { step: "Demo & rough", detail: "Plumbing, electrical, framing, insulation." },
      { step: "Finish", detail: "Tile, paint, glass, fixtures, punch list." },
    ],
    faqs: [
      { q: "How long does a bathroom take?", a: "Most primary baths finish in three to five weeks. Powder rooms often in two." },
      { q: "Do you handle shower waterproofing?", a: "Every wet area gets a full sheet membrane or liquid waterproofing. No exceptions." },
      { q: "Can you add a bathroom where there isn't one?", a: "Often yes. We assess venting, drain pitch, and structure before committing to a location." },
    ],
  },
  {
    slug: "commercial-construction",
    code: "SV-04",
    name: "Commercial Construction",
    tagline: "Fit-outs that open on time.",
    description:
      "Office build-outs, retail, restaurants, and mixed-use. Schedules that hold when your lease is the clock.",
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    inclusions: [
      "Office & workplace fit-outs",
      "Retail & restaurant build-outs",
      "Tenant improvements",
      "ADA compliance upgrades",
      "After-hours & phased work",
      "L&I coordination",
    ],
    process: [
      { step: "Site survey", detail: "As-builts verified. Landlord requirements logged." },
      { step: "Permit path", detail: "Zoning, L&I, health, fire — sequenced in parallel." },
      { step: "Construction", detail: "Off-hours phasing if the space is occupied." },
      { step: "Close-out", detail: "Inspections, punch, certificate of occupancy." },
    ],
    faqs: [
      { q: "Do you work nights or weekends?", a: "When landlord rules or business operations require it, yes." },
      { q: "Can you handle landlord TI letter negotiations?", a: "We coordinate with your broker and landlord to align scope with the allowance." },
      { q: "What size projects?", a: "Most of our commercial work sits between 1,500 and 20,000 square feet." },
    ],
  },
  {
    slug: "complete-remodeling",
    code: "SV-05",
    name: "Complete Remodeling",
    tagline: "Whole homes, whole brains.",
    description:
      "When every room is in scope — floor plans, systems, finishes, and the connective tissue between them.",
    hero: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=80",
    inclusions: [
      "Every room in scope",
      "Structural & systems upgrades",
      "New roofs, windows, facades",
      "Refinished floors throughout",
      "Whole-home lighting plan",
      "Landscaping integration",
    ],
    process: [
      { step: "Master plan", detail: "Flow, sightlines, phasing, move-out timing." },
      { step: "Design", detail: "Every room specified before demo begins." },
      { step: "Build", detail: "Trades sequenced across floors. Weekly client walks." },
      { step: "Reveal", detail: "Punched. Deep-cleaned. You walk through with us." },
    ],
    faqs: [
      { q: "Do we need to move out?", a: "For most whole-home scopes, yes — it protects the schedule and your sanity." },
      { q: "How is a whole-home priced?", a: "Fixed-fee for design, open-book or lump-sum for construction. Your call." },
      { q: "Timeline for 2,500 sq ft?", a: "Typically ten to fourteen weeks on-site, sometimes less." },
    ],
  },
  {
    slug: "outdoor-spaces",
    code: "SV-06",
    name: "Outdoor Spaces & Decks",
    tagline: "Rooms without ceilings.",
    description:
      "Roof decks, pergolas, outdoor kitchens, patios. Built to stand up to Philly weather without looking like they had to.",
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    inclusions: [
      "Roof decks & pilot-house terraces",
      "Pergolas & shade structures",
      "Outdoor kitchens & bars",
      "Hardscape, patios, walkways",
      "Decking: Ipe, cedar, composite",
      "Lighting & low-voltage",
    ],
    process: [
      { step: "Structural check", detail: "Load ratings, sleepers, membrane condition." },
      { step: "Design", detail: "Layout, materials, railings, lighting." },
      { step: "Build", detail: "Weather-aware sequencing. Clean daily." },
      { step: "Seal", detail: "Finish coatings, plant-out if specified." },
    ],
    faqs: [
      { q: "Will a roof deck leak?", a: "Not if the membrane under it is sound and the deck floats above it. We verify before committing." },
      { q: "Ipe vs. composite?", a: "Ipe for warmth and longevity, composite for lower maintenance. We'll steer based on use." },
      { q: "Permits for roof decks?", a: "Usually yes in Philly. We handle them." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
