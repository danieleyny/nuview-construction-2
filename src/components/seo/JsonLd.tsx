import { site } from "@/content/site";
import { services } from "@/content/services";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.addresses.map((a) => ({
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: "US",
    })),
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.google],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "102",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: { "@type": "GeneralContractor", name: site.name, url: site.url },
    areaServed: { "@type": "City", name: "Philadelphia" },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
