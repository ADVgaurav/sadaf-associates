import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return { name: siteConfig.legalName, short_name: siteConfig.name, description: siteConfig.description, start_url: "/", display: "minimal-ui", background_color: "#090909", theme_color: "#090909", icons: [{ src: "/icon", sizes: "any", type: "image/png" }] };
}
