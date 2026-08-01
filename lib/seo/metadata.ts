import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Law Firm India",
    "Legal Services",
    "Commercial Law",
    "Contract Drafting",
    "Legal Notice",
    "Arbitration",
    "Civil Litigation",
    "Commercial Litigation",
    "Corporate Law",
    "Sadaf Associates",
  ],

  authors: [
    {
      name: "Sadaf Associates",
    },
  ],

  creator: "Sadaf Associates",

  publisher: "Sadaf Associates",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: siteConfig.locale,

    url: siteConfig.url,

    siteName: siteConfig.name,

    title: siteConfig.name,

    description: siteConfig.description,

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Sadaf Associates",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },

  category: "Legal Services",
};