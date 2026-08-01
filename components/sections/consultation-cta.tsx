import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, BriefcaseBusiness } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Confidential",
    description: "Every discussion is handled with complete discretion.",
  },
  {
    icon: Scale,
    title: "Professional",
    description: "Thoughtful legal guidance with clarity and integrity.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Client-Focused",
    description: "Practical legal solutions tailored to your objectives.",
  },
];export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[hsl(var(--canvas-default))] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,134,11,0.08),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <span className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-accent">
          Let's Connect
        </span>

        <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Every Legal Matter Begins with the Right Conversation.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          We believe legal advice should be clear, practical, and tailored to
          your needs. Whether you're seeking legal guidance, contract support,
          or representation, we're here to help you move forward with
          confidence.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-20 grid w-full gap-6 md:grid-cols-3">
                      {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-[hsl(var(--surface-overlay))] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--border-accent))]"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[hsl(var(--accent-subtle))] text-accent">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 font-display text-xl text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Confidential • Professional • Client-Focused
        </p>
      </div>
    </section>
  );
}