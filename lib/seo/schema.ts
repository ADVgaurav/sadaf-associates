export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",

  "@id": "https://sadafassociates.in/#organization",

  name: "Sadaf Associates",

  url: "https://sadafassociates.in",

  logo: "https://sadafassociates.in/Logo.png",

  image: "https://sadafassociates.in/og-image.jpg",

  description:
    "Sadaf Associates is an Indian law firm providing commercial law, contract drafting, arbitration, civil litigation, legal advisory, and dispute resolution services.",

  email: "contact@sadafassociates.in",

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  founder: {
    "@type": "Person",
    name: "Adv. Gaurav Choudhary",
  },

  sameAs: []
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://sadafassociates.in/#website",

  url: "https://sadafassociates.in",

  name: "Sadaf Associates",

  inLanguage: "en-IN",

  publisher: {
    "@id": "https://sadafassociates.in/#organization",
  },
};