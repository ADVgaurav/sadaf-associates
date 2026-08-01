"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, FolderOpen, CalendarDays } from "lucide-react";

import { blogs } from "@/data/blogs";

export function BlogHero() {
  const totalArticles = blogs.length;

  const totalCategories = new Set(
    blogs.map((blog) => blog.category)
  ).size;

  const averageReadingTime = Math.round(
    blogs.reduce((total, blog) => {
      const minutes = parseInt(blog.readingTime.replace(/\D/g, "")) || 0;
      return total + minutes;
    }, 0) / Math.max(totalArticles, 1)
  );

  const latestUpdated =
    blogs.length > 0
      ? [...blogs]
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() -
              new Date(a.updatedAt).getTime()
          )[0].updatedAt
      : "";

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

        {/* Left Content */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
            LEGAL INSIGHTS
          </span>

          <h1 className="mt-5 font-cinzel text-5xl font-semibold leading-tight text-white md:text-6xl">

            Legal Insights

            <span className="block text-[#C9A45C]">
              & Practical Perspectives
            </span>

          </h1>

          <div className="mt-8 h-px w-20 bg-[#C9A45C]" />

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">

            Stay informed with practical legal insights,
            corporate updates, litigation guidance,
            documentation strategies, and expert perspectives
            from the legal professionals at Sadaf Associates.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#latest-articles"
              className="inline-flex items-center rounded-full bg-[#C9A45C] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#d8b46b]"
            >
              Explore Articles

              <ArrowRight className="ml-2 h-5 w-5" />

            </Link>
                      </div>

          <div className="mt-12 flex flex-wrap gap-5">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101010] px-5 py-4">

              <BookOpen className="h-5 w-5 text-[#C9A45C]" />

              <div>

                <p className="text-2xl font-semibold text-white">
                  {totalArticles}
                </p>

                <p className="text-sm text-white/60">
                  Articles
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101010] px-5 py-4">

              <FolderOpen className="h-5 w-5 text-[#C9A45C]" />

              <div>

                <p className="text-2xl font-semibold text-white">
                  {totalCategories}
                </p>

                <p className="text-sm text-white/60">
                  Categories
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101010] px-5 py-4">

              <Clock3 className="h-5 w-5 text-[#C9A45C]" />

              <div>

                <p className="text-2xl font-semibold text-white">
                  {averageReadingTime} Min
                </p>

                <p className="text-sm text-white/60">
                  Average Read
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101010] px-5 py-4">

              <CalendarDays className="h-5 w-5 text-[#C9A45C]" />

              <div>

                <p className="text-lg font-semibold text-white">
                  {latestUpdated}
                </p>

                <p className="text-sm text-white/60">
                  Last Updated
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Card */}

        <div className="w-full max-w-xl">

          <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 shadow-[0_0_60px_rgba(201,164,92,0.08)]">

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Featured Knowledge Hub
            </span>

            <h2 className="mt-5 font-cinzel text-4xl text-white">
              Trusted Legal
              <span className="block text-[#C9A45C]">
                Resources
              </span>
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              Explore carefully prepared articles covering
              contracts, litigation, arbitration,
              commercial law, property matters,
              legal notices, and practical legal guidance
              for businesses and individuals.
            </p>
                        <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">

                <BookOpen className="mt-1 h-6 w-6 text-[#C9A45C]" />

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Practical Legal Guides
                  </h3>

                  <p className="mt-2 leading-7 text-white/60">
                    Clear, practical articles designed to help
                    businesses, entrepreneurs and individuals
                    understand important legal concepts without
                    unnecessary complexity.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">

                <FolderOpen className="mt-1 h-6 w-6 text-[#C9A45C]" />

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Expert Coverage
                  </h3>

                  <p className="mt-2 leading-7 text-white/60">
                    Articles span commercial contracts,
                    civil litigation, arbitration,
                    property law, legal documentation
                    and other important practice areas.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">

                <Clock3 className="mt-1 h-6 w-6 text-[#C9A45C]" />

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    Regularly Updated
                  </h3>

                  <p className="mt-2 leading-7 text-white/60">
                    Our knowledge base is continually expanded
                    with fresh legal insights, regulatory
                    developments and practical guidance.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-[#C9A45C]/20 bg-[#0d0b08] p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                Sadaf Associates
              </p>

              <h3 className="mt-4 font-cinzel text-3xl text-white">
                Knowledge That
                <span className="block text-[#C9A45C]">
                  Builds Confidence
                </span>
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                Every article is written with the objective
                of providing practical legal awareness while
                maintaining professional standards and
                accessibility for readers.
              </p>

            </div>

          </div>

        </div>

      </div>
          </section>
  );
}