"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Scale,
} from "lucide-react";

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
            RESOURCES
          </span>

          <h1 className="mt-6 font-cinzel text-5xl font-semibold leading-tight text-white">
            Legal Resources
            <span className="block text-[#C9A45C]">
              Designed For You
            </span>
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-[#C9A45C]" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Explore practical legal information, understand our areas of
            practice, and discover how Sadaf Associates can assist you with
            reliable legal guidance and professional representation.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
                      {/* Legal Guides */}

          <div className="group rounded-[30px] border border-white/10 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A45C]/40">

            <BookOpen className="h-10 w-10 text-[#C9A45C]" />

            <h3 className="mt-6 font-cinzel text-2xl text-white">
              Legal Guides
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Read practical legal articles designed to help individuals and
              businesses understand important legal concepts.
            </p>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center font-semibold text-[#C9A45C] transition hover:translate-x-1"
            >
              Explore Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

          </div>

          {/* Practice Areas */}

          <div className="group rounded-[30px] border border-white/10 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A45C]/40">

            <Briefcase className="h-10 w-10 text-[#C9A45C]" />

            <h3 className="mt-6 font-cinzel text-2xl text-white">
              Practice Areas
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Discover the legal services offered by Sadaf Associates across
              litigation, advisory, contracts, and dispute resolution.
            </p>

            <Link
              href="/practice-areas"
              className="mt-8 inline-flex items-center font-semibold text-[#C9A45C] transition hover:translate-x-1"
            >
              View Practice Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

          </div>

          {/* Contact */}

          <div className="group rounded-[30px] border border-white/10 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A45C]/40">

            <Scale className="h-10 w-10 text-[#C9A45C]" />

            <h3 className="mt-6 font-cinzel text-2xl text-white">
              Need Legal Advice?
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Connect with our legal team for confidential guidance and
              professional assistance tailored to your legal matter.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center font-semibold text-[#C9A45C] transition hover:translate-x-1"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}