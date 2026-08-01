import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,164,92,0.12),transparent_45%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:px-8">
        {/* Badge */}
        <span className="rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
          About Sadaf Associates
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
          Built on{" "}
          <span className="text-[#C9A45C]">
            Trust,
          </span>
          <br />
          Guided by Integrity.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Sadaf Associates is committed to providing thoughtful, practical,
          and client-focused legal services with professionalism,
          confidentiality, and integrity at every stage.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#C9A45C] px-7 py-3 text-sm font-medium text-[#C9A45C] transition-all duration-300 hover:bg-[#C9A45C] hover:text-black"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}