import { Metadata } from "next";

import { BlogHero } from "@/components/sections/blog-hero";
import { BlogGrid } from "@/components/sections/blog-grid";
import { BlogCTA } from "@/components/sections/blog-cta";

export const metadata: Metadata = {
  title: "Legal Blog | Sadaf Associates",
  description:
    "Read legal insights, practical guides, and expert articles from Sadaf Associates on contracts, litigation, commercial law, arbitration, property law, and legal documentation.",
};

export default function BlogPage() {
  return (
    <main className="bg-[#050505]">
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </main>
  );
}