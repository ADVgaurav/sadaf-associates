import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/config/navigation";

export function NavigationLinks({ items, onNavigate, className }: { items: readonly NavigationItem[]; onNavigate?: () => void; className?: string }) { return <nav aria-label="Primary navigation" className={cn("flex items-center gap-1", className)}>{items.map((item) => <Link key={item.href} href={item.href} onClick={onNavigate} className="rounded-lg px-3 py-2 text-sm text-[hsl(var(--text-secondary))] transition-colors hover:bg-[hsl(var(--interactive-ghost-hover))] hover:text-foreground">{item.label}</Link>)}</nav>; }
