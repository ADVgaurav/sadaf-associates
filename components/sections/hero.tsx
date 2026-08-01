"use client";

import Link from "next/link";
import { ArrowRight, Check, Scale } from "lucide-react";

import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

const features = [
  "Corporate Advisory",
  "Contract Drafting",
  "Dispute Resolution",
  "Confidential Consultation",
];

const practiceAreas = [
  "Corporate Advisory",
  "Contract Drafting",
  "Legal Documentation",
  "Dispute Support",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(var(--border-subtle))] bg-[hsl(var(--canvas-default))]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent-subtle)),transparent_40%)]" />

        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border-subtle))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border-subtle))_1px,transparent_1px)] [background-size:72px_72px]" />

      </div>

      <Container
        size="wide"
        className="relative py-16 lg:py-24"
      >

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-accent/30 bg-[hsl(var(--accent-subtle))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Legal & Corporate Consultancy
            </span>

            <h1 className="mt-8 font-display text-5xl leading-tight tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">

              Strategic Legal
              <br />

              <span className="text-accent">
                Solutions
              </span>

              <br />

              <span className="text-[hsl(var(--text-secondary))]">
                For Businesses,
                <br />
                Startups &
                Individuals.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[hsl(var(--text-secondary))]">

              Professional legal advisory,
              documentation, contract drafting,
              and dispute support delivered with
              clarity, confidentiality and practical
              commercial understanding.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    variant: "primary",
                  }),
                  "w-full sm:w-auto"
                )}
              >
                Schedule Consultation

                <ArrowRight className="size-4" />

              </Link>

              <Link
                href="/services"
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                  }),
                  "w-full sm:w-auto"
                )}
              >
                Explore Services
              </Link>

            </div>
                        <ul className="mt-12 grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (

                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-[hsl(var(--text-secondary))]"
                >

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--accent-subtle))] text-accent">

                    <Check
                      className="size-3"
                      strokeWidth={2.5}
                    />

                  </span>

                  {feature}

                </li>

              ))}

            </ul>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -inset-6 rounded-[36px] bg-[radial-gradient(circle,hsl(var(--accent-subtle)),transparent_70%)] blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border-subtle))] bg-[hsl(var(--canvas-subtle))] p-8 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--accent-subtle))] text-accent">

                  <Scale className="size-7" />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-accent">
                    Sadaf Associates
                  </p>

                  <h3 className="mt-2 font-display text-3xl text-foreground">
                    Professional
                    <br />
                    Legal Support
                  </h3>

                </div>

              </div>

              <div className="mt-10 space-y-4">

                {practiceAreas.map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border-subtle))] bg-[hsl(var(--canvas-default))] px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
                  >

                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>

                    <ArrowRight className="size-4 text-accent" />

                  </div>

                ))}

              </div>

              <div className="mt-10 rounded-2xl border border-accent/20 bg-[hsl(var(--accent-subtle))] p-5">

                <p className="text-sm leading-7 text-[hsl(var(--text-secondary))]">

                  Trusted legal assistance focused on
                  practical advice, transparent communication
                  and professional standards.

                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
          </section>
  );
}