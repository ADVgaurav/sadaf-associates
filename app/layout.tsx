import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cinzel, Inter } from "next/font/google";

// TypeScript may complain about side-effect CSS imports in some environments.
// @ts-ignore: Allow importing global CSS
import "./globals.css";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar";

import { defaultMetadata } from "@/lib/seo/metadata";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[hsl(var(--text-on-accent))] focus:not-sr-only"
        >
          Skip to content
        </a>

        <Navbar />

        {children}

        <Footer />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}