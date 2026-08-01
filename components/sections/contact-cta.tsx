"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        <div className="rounded-[36px] border border-[#C9A45C]/20 bg-[#0D0D0D] px-8 py-16 text-center shadow-[0_0_80px_rgba(201,164,92,0.08)] lg:px-16">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
            CONFIDENTIAL LEGAL CONSULTATION
          </span>

          <h2 className="mt-6 font-cinzel text-4xl font-semibold leading-tight text-white md:text-5xl">
            Ready To Discuss
            <span className="block text-[#C9A45C]">
              Your Legal Matter?
            </span>
          </h2>

          <div className="mx-auto mt-8 h-px w-20 bg-[#C9A45C]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Whether you require strategic legal advice, contract drafting,
            dispute resolution, or representation, our team is committed to
            delivering practical legal solutions with professionalism,
            confidentiality, and attention to detail.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/contact#contact-form"
              className="inline-flex items-center rounded-full bg-[#C9A45C] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#D8B46B]"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="tel:+917042288975"
              className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Call Now
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}