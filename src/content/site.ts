export const site = {
  name: "NuView Constructions",
  shortName: "NuView",
  tagline: "Philadelphia's most trusted builders.",
  description:
    "A general contractor delivering residential renovations and commercial builds across Philadelphia with uncompromising craftsmanship, clear communication, and schedules that hold.",
  phone: "(267) 203-4880",
  phoneHref: "tel:+12672034880",
  email: "info@nuviewconstructions.com",
  emailHref: "mailto:info@nuviewconstructions.com",
  founded: 2015,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nuview2.vercel.app",
  addresses: [
    {
      label: "Center City",
      street: "1401 Spruce Street",
      city: "Philadelphia",
      state: "PA",
      zip: "19102",
      full: "1401 Spruce Street, Philadelphia, PA 19102",
    },
    {
      label: "Rittenhouse",
      street: "2006 Chestnut Street",
      city: "Philadelphia",
      state: "PA",
      zip: "19103",
      full: "2006 Chestnut Street, Philadelphia, PA 19103",
    },
  ],
  hours: [
    { day: "Mon–Fri", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  social: {
    instagram: "https://www.instagram.com/nuviewconstructions",
    facebook: "https://www.facebook.com/nuviewconstructions",
    google: "https://g.page/nuviewconstructions",
  },
  stats: {
    projects: "300+",
    reviews: "102",
    avgReno: "< 2 mo",
    yearsBuilding: "10 yrs",
  },
  live: {
    onsite: 7,
    weekStarts: 2,
    nextAvailability: "May 2026",
  },
};

export type Site = typeof site;
