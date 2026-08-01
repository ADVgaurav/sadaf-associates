"use client";

import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { blogs } from "@/data/blogs";

export function BlogGrid() {
  const featuredBlog =
    blogs.find((blog) => blog.featured) ?? blogs[0];

  const latestBlogs = blogs.filter(
    (blog) => blog.id !== featuredBlog?.id
  );

  return (
    <section
      id="latest-articles"
      className="relative bg-[#050505] py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-8">

        {/* Featured Article */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
            Featured Article
          </span>

          <h2 className="mt-5 font-cinzel text-5xl text-white">
            Editor's
            <span className="block text-[#C9A45C]">
              Pick
            </span>
          </h2>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] transition-all duration-500 hover:border-[#C9A45C]/40">

            <div className="grid lg:grid-cols-[1fr_1.1fr]">

              {/* Image */}

              <div className="relative min-h-[340px] overflow-hidden">

                <img
                  src={featuredBlog.coverImage}
                  alt={featuredBlog.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="flex flex-col justify-center p-10 lg:p-14">

                <span className="w-fit rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
                  {featuredBlog.category}
                </span>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/60">

                  <span className="flex items-center gap-2">

                    <CalendarDays className="h-4 w-4 text-[#C9A45C]" />

                    {featuredBlog.updatedAt}

                  </span>

                  <span className="flex items-center gap-2">

                    <Clock3 className="h-4 w-4 text-[#C9A45C]" />

                    {featuredBlog.readingTime}

                  </span>

                </div>

                <h3 className="mt-8 font-cinzel text-4xl leading-tight text-white">

                  {featuredBlog.title}

                </h3>

                <p className="mt-6 text-lg leading-8 text-white/70">

                  {featuredBlog.excerpt}

                </p>

                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="mt-10 inline-flex w-fit items-center font-semibold text-[#C9A45C] transition hover:text-[#e5bf73]"
                >
                  Read Article

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Link>

              </div>

            </div>

          </div>

        </div>
                {/* Latest Articles */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
            Latest Articles
          </span>

          <h2 className="mt-5 font-cinzel text-5xl text-white">
            Explore Our
            <span className="block text-[#C9A45C]">
              Legal Insights
            </span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {latestBlogs.map((blog) => (

              <article
                key={blog.id}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A45C]/40"
              >

                {/* Cover Image */}

                <div className="relative h-60 overflow-hidden">

                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-8">

                  <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">

                    {blog.category}

                  </span>

                  <div className="mt-6 flex items-center justify-between text-sm text-white/60">

                    <span className="flex items-center gap-2">

                      <CalendarDays className="h-4 w-4 text-[#C9A45C]" />

                      {blog.updatedAt}

                    </span>

                    <span className="flex items-center gap-2">

                      <Clock3 className="h-4 w-4 text-[#C9A45C]" />

                      {blog.readingTime}

                    </span>

                  </div>

                  <h3 className="mt-6 font-cinzel text-3xl leading-tight text-white transition group-hover:text-[#C9A45C]">

                    {blog.title}

                  </h3>

                  <p className="mt-5 line-clamp-3 leading-8 text-white/70">

                    {blog.excerpt}

                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-8 inline-flex items-center font-semibold text-[#C9A45C] transition-all duration-300 group-hover:translate-x-1"
                  >

                    Read Article

                    <ArrowRight className="ml-2 h-5 w-5" />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>
              </div>
    </section>
  );
}