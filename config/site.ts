export const siteConfig = {
  name: "Sadaf Associates",
  description: "Legal & Corporate Consultancy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sadafassociates.in",
  locale: "en_IN",
  legalName: "Sadaf Associates – Legal & Corporate Consultancy",
  disclaimer: "Information on this website is for general informational purposes only and does not constitute legal advice or create a professional-client relationship.",
} as const;
