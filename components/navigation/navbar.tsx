"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";
import { Logo } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { NavigationLinks } from "./navigation-links";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className={cn("sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300", isScrolled || isOpen ? "border-b border-border bg-[hsl(var(--surface-overlay))] backdrop-blur-xl" : "border-b border-transparent bg-transparent")}>
      <Container size="wide">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-foreground" aria-label="Sadaf Associates home">
            <Logo />
            <span className="font-display text-sm tracking-[0.04em]">Sadaf Associates</span>
          </Link>
          <NavigationLinks items={primaryNavigation} className="hidden lg:flex" />
          <Link href="/contact" className="hidden rounded-xl border border-[hsl(var(--border-accent))] px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-[hsl(var(--accent-subtle))] lg:inline-flex">
            Schedule Consultation
          </Link>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-[hsl(var(--interactive-ghost-hover))] lg:hidden" aria-label="Open navigation" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(true)}>
            <Menu aria-hidden="true" />
          </button>
        </div>
      </Container>
      {isOpen && (
        <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-0 z-50 lg:hidden">
          <motion.button type="button" aria-label="Close navigation" className="absolute inset-0 cursor-default bg-[hsl(var(--canvas-default)/0.7)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} onClick={() => setIsOpen(false)} />
          <motion.aside className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-border bg-[hsl(var(--surface-overlay))] p-5 shadow-raised backdrop-blur-2xl" initial={reducedMotion ? false : { opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reducedMotion ? 0 : 0.24, ease: [0.2, 0, 0, 1] }}>
            <div className="flex items-center justify-between"><span className="font-display text-sm tracking-[0.04em]">Sadaf Associates</span><button ref={closeButtonRef} type="button" className="inline-flex size-11 items-center justify-center rounded-xl text-foreground hover:bg-[hsl(var(--interactive-ghost-hover))]" aria-label="Close navigation" onClick={() => setIsOpen(false)}><X aria-hidden="true" /></button></div>
            <NavigationLinks items={primaryNavigation} onNavigate={() => setIsOpen(false)} className="mt-12 flex-col items-stretch" />
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-auto inline-flex min-h-11 items-center justify-center rounded-xl border border-[hsl(var(--border-accent))] px-5 text-sm font-medium text-accent">Schedule Consultation</Link>
          </motion.aside>
        </div>
      )}
    </header>
  );
}
