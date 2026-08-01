import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-[36px] border border-[#C9A45C]/20 bg-[#101010] p-10 text-center shadow-[0_0_60px_rgba(201,164,92,0.08)] md:p-16">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
            NEED LEGAL ASSISTANCE?
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-cinzel text-4xl font-semibold leading-tight text-white md:text-6xl">
            Discuss Your Legal Matter
            <span className="block text-[#C9A45C]">
              With Sadaf Associates
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Reading about the law is helpful, but every legal matter is unique.
            If you require legal advice, contract drafting, documentation,
            litigation support, or strategic guidance, our team is ready to assist.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#C9A45C] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#d8b46b]"
            >
              Schedule Consultation

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/practice-areas"
              className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              Explore Practice Areas
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}