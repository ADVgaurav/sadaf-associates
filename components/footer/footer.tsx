import Link from "next/link";
import { legalNavigation, primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { Container } from "@/components/layout/container";

export function Footer() { const year = new Date().getFullYear(); return <footer className="border-t border-border bg-[hsl(var(--canvas-subtle))]"><Container size="wide"><div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]"><div className="space-y-4"><div className="flex items-center gap-3"><Logo /><span className="font-display text-sm tracking-[0.04em]">Sadaf Associates</span></div><p className="max-w-sm text-sm leading-6 text-[hsl(var(--text-muted))]">{siteConfig.description}</p><p className="max-w-md text-xs leading-5 text-[hsl(var(--text-muted))]">{siteConfig.disclaimer}</p></div><FooterLinks title="Explore" links={primaryNavigation} /><FooterLinks title="Legal" links={legalNavigation} /></div><div className="border-t border-border py-6 text-xs text-[hsl(var(--text-muted))]">© {year} {siteConfig.legalName}. All rights reserved.</div></Container></footer>; }
function FooterLinks({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) { return <div><h2 className="mb-4 text-sm font-medium text-foreground">{title}</h2><ul className="space-y-3">{links.map((link) => <li key={link.href}><Link className="text-sm text-[hsl(var(--text-muted))] transition-colors hover:text-foreground" href={link.href}>{link.label}</Link></li>)}</ul></div>; }
