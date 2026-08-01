"use client";

import Link from "next/link";

import {
  ArrowRight,
  Building2,
  FileText,
  Scale,
  ScrollText,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Advisory",
    description:
      "Strategic legal guidance for companies, founders and growing businesses.",
    href: "/practice-areas",
  },
  {
    icon: FileText,
    title: "Contract Drafting",
    description:
      "Professionally drafted agreements and commercial documentation.",
    href: "/practice-areas",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description:
      "Support in civil and commercial disputes with practical legal solutions.",
    href: "/practice-areas",
  },
  {
    icon: ScrollText,
    title: "Legal Documentation",
    description:
      "Legal notices, affidavits, deeds and documentation assistance.",
    href: "/practice-areas",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description:
      "Business compliance and regulatory guidance for organizations.",
    href: "/practice-areas",
  },
  {
    icon: MessagesSquare,
    title: "Legal Consultation",
    description:
      "Professional legal consultation tailored to your requirements.",
    href: "/practice-areas",
  },
];

export function PracticeAreas() {
  return (
    <section className="border-t border-[hsl(var(--border-subtle))] bg-[hsl(var(--canvas-default))] py-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-accent/30 bg-[hsl(var(--accent-subtle))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Practice Areas
          </span>

          <h2 className="mt-8 font-display text-5xl leading-tight tracking-[-0.03em] text-foreground">

            Comprehensive Legal
            <br />

            <span className="text-accent">
              Services
            </span>

            <span className="text-[hsl(var(--text-secondary))]">
              {" "}
              Designed Around
              <br />
              Your Needs.
            </span>

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[hsl(var(--text-secondary))]">

            Professional legal support across advisory,
            drafting, documentation, commercial matters
            and dispute assistance with a practical,
            client-focused approach.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                      {practiceAreas.map((area) => {

            const Icon = area.icon;

            return (

              <Link
                key={area.title}
                href={area.href}
                className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border-subtle))] bg-[hsl(var(--canvas-subtle))] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl"
              >

                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent-subtle)),transparent_60%)]" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(var(--accent-subtle))] text-accent">

                    <Icon className="size-8" />

                  </div>

                  <h3 className="mt-8 font-display text-3xl text-foreground transition-colors duration-300 group-hover:text-accent">

                    {area.title}

                  </h3>

                  <p className="mt-5 leading-8 text-[hsl(var(--text-secondary))]">

                    {area.description}

                  </p>

                  <div className="mt-10 flex items-center justify-between">

                    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">

                      Read More

                    </span>

                    <ArrowRight className="size-5 text-accent transition-transform duration-300 group-hover:translate-x-2" />

                  </div>

                </div>

              </Link>

            );

          })}

        </div>

        <div className="mt-20 flex justify-center">

          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-3 rounded-full border border-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent hover:text-black"
          >

            View All Practice Areas

            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2" />

          </Link>

        </div>
              </div>

    </section>
  );
}
