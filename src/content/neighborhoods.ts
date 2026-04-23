export type Neighborhood = {
  slug: string;
  name: string;
  intro: string;
  paragraphs: string[];
  image: string;
};

const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const neighborhoods: Neighborhood[] = [
  {
    slug: "rittenhouse-square",
    name: "Rittenhouse Square",
    intro: "Historic rowhomes, high-rise condos, and some of the city's most discerning clients.",
    paragraphs: [
      "Rittenhouse Square is where NuView has built more kitchens and baths than anywhere else in Philadelphia. The housing stock runs from 1850s rowhomes on quiet side streets to tower condos overlooking the square itself — and each comes with its own constraints.",
      "In the rowhomes, we navigate load-bearing walls, party walls, and ceilings that vary by half an inch across a floor. In the high-rises, we manage building rules, elevator reservations, and strict noise windows. Either way, the expectation is the same: quiet, clean, precise.",
    ],
    image: U("photo-1564013799919-ab600027ffc6"),
  },
  {
    slug: "fitler-square",
    name: "Fitler Square",
    intro: "Tight streets, beautiful trinities, and clients who care about historic detail.",
    paragraphs: [
      "Fitler Square work means narrow trinities and four-floor walk-ups where every inch of the stair gets photographed and measured. We've done whole-home renovations and targeted kitchen work across this neighborhood for years.",
      "Permit paths here often involve the Historical Commission. We handle the submissions and the hearings.",
    ],
    image: U("photo-1570129477492-45c003edd2be"),
  },
  {
    slug: "society-hill",
    name: "Society Hill",
    intro: "The oldest housing in America. The newest systems underneath it.",
    paragraphs: [
      "Society Hill is where we get to work on genuinely historic buildings — 1770s and 1780s rowhomes with original joists and plaster. The work here is part preservation, part modernization.",
      "We have longstanding relationships with the city's best historic restoration trades: plasterers, period-appropriate millwork shops, hardware specialists.",
    ],
    image: U("photo-1518780664697-55e3ad937233"),
  },
  {
    slug: "bella-vista",
    name: "Bella Vista",
    intro: "Italian market blocks and rowhomes with real character.",
    paragraphs: [
      "Bella Vista is dense, social, and full of rowhomes that haven't been touched in fifty years. Many of our projects here are first-time renovations — new kitchens, new baths, and structural work to open the first floor.",
      "Roof decks are common and we've gotten good at them.",
    ],
    image: U("photo-1449844908441-8829872d2607"),
  },
  {
    slug: "washington-square-west",
    name: "Washington Square West",
    intro: "Wash West — a mix of condos, rowhomes, and conversions.",
    paragraphs: [
      "Washington Square West is architecturally varied — 1830s rowhomes next to 1990s condos next to warehouse conversions. Our work here spans all three.",
      "Rear additions are a common ask here, where the lot lines permit it.",
    ],
    image: U("photo-1502175353174-a7a1f2ee3430"),
  },
  {
    slug: "logan-square",
    name: "Logan Square",
    intro: "High-rise condos and boutique buildings along the Parkway.",
    paragraphs: [
      "Logan Square work is almost entirely interior — condo renovations, selective wall removal, kitchen and bath refits. Building rules are strict and we respect them.",
      "Loading dock schedules, protected elevator runs, and noise windows are all part of how we work here.",
    ],
    image: U("photo-1493809842364-78817add7ffb"),
  },
  {
    slug: "hawthorne",
    name: "Hawthorne",
    intro: "Quickly changing, quieter than Bella Vista, full of opportunity.",
    paragraphs: [
      "Hawthorne has become one of our busiest neighborhoods over the past three years. The rowhomes here often have rear yards that can be absorbed into the first floor, and clients here tend to think long-term.",
      "We've done a half-dozen whole-home renovations in this part of the city.",
    ],
    image: U("photo-1571055107559-3e67626fa8be"),
  },
  {
    slug: "callowhill",
    name: "Callowhill",
    intro: "Loft conversions, live-work spaces, and the edge of Chinatown.",
    paragraphs: [
      "Callowhill is a neighborhood of loft conversions and mixed-use buildings. Our work here is a mix of residential fit-outs inside converted industrial spaces and commercial build-outs for creative tenants.",
      "Exposed ceilings, polished concrete, steel millwork — it's our happy place.",
    ],
    image: U("photo-1497366754035-f200968a6e72"),
  },
  {
    slug: "avenue-of-the-arts",
    name: "Avenue of the Arts",
    intro: "Broad Street corridor, performing arts venues, and the hotels around them.",
    paragraphs: [
      "Avenue of the Arts work skews commercial — restaurant fit-outs, hospitality punch-work, boutique office build-outs. Schedules are tight because openings are announced in advance.",
      "We've delivered multiple restaurant and retail projects on this corridor.",
    ],
    image: U("photo-1517840901100-8179e982acb7"),
  },
  {
    slug: "chinatown",
    name: "Chinatown",
    intro: "Dense, specific, with its own design language.",
    paragraphs: [
      "Our Chinatown work is primarily restaurant and retail fit-outs with ownership that knows exactly what they want. We follow their lead on design and handle every permit, inspection, and trade coordination.",
      "After-hours work is common here and we staff for it.",
    ],
    image: U("photo-1519501025264-65ba15a82390"),
  },
  {
    slug: "ardmore",
    name: "Ardmore",
    intro: "Suburban, but not suburban. Main Line with a city pulse.",
    paragraphs: [
      "Ardmore work means detached and semi-detached homes, larger lots, and clients who often came from the city. We've done whole-home renovations, kitchens, primary baths, and outdoor living spaces here.",
      "Permit path runs through Lower Merion — different rules than the city, and we know them.",
    ],
    image: U("photo-1598228723793-52759bba239c"),
  },
  {
    slug: "cherry-hill",
    name: "Cherry Hill",
    intro: "Across the bridge. Larger homes, larger scopes.",
    paragraphs: [
      "Cherry Hill is our most active New Jersey market — larger footprints, often 1960s–1980s homes due for a full refresh. Kitchens, baths, roof replacements, deck and patio work.",
      "We handle NJ licensing and permits. Our crews cross the bridge daily.",
    ],
    image: U("photo-1564013434775-f71db0030976"),
  },
];

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}
