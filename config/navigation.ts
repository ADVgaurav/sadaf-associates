export type NavigationItem = { label: string; href: string };

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const legalNavigation: readonly NavigationItem[] = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
