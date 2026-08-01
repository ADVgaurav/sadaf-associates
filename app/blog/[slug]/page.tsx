import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
    ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  User2,
} from "lucide-react";

import { BlogCTA } from "@/components/sections/blog-cta";
import { blogs } from "@/data/blogs";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find(
    (post) => post.slug === slug
  );

  if (!blog) {
    return {
      title: "Article Not Found | Sadaf Associates",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,

    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.coverImage],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find(
    (post) => post.slug === slug
  );

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter(
    (post) =>
      blog.relatedPosts.includes(post.slug) &&
      post.slug !== blog.slug
  );

  return (
    <main className="bg-[#050505]">

      {/* Hero Starts */}
            <section className="relative overflow-hidden py-20">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[140px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-white/70 transition hover:text-[#C9A45C]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Left Content */}

            <div>

              <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">

                {blog.category}

              </span>

              <h1 className="mt-8 font-cinzel text-5xl font-semibold leading-tight text-white md:text-6xl">

                {blog.title}

              </h1>

              <div className="mt-8 h-px w-20 bg-[#C9A45C]" />

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">

                {blog.excerpt}

              </p>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">

                <span className="flex items-center gap-2">

                  <User2 className="h-4 w-4 text-[#C9A45C]" />

                  {blog.author}

                </span>

                <span className="flex items-center gap-2">

                  <CalendarDays className="h-4 w-4 text-[#C9A45C]" />

                  Published {blog.publishedAt}

                </span>

                <span className="flex items-center gap-2">

                  <CalendarDays className="h-4 w-4 text-[#C9A45C]" />

                  Updated {blog.updatedAt}

                </span>

                <span className="flex items-center gap-2">

                  <Clock3 className="h-4 w-4 text-[#C9A45C]" />

                  {blog.readingTime}

                </span>

              </div>

            </div>

            {/* Cover Image */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010]">

              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={900}
                height={650}
                priority
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Article Starts */}
            <section className="pb-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[280px_1fr] lg:px-8">

          {/* Table of Contents */}

          <aside className="h-fit rounded-[28px] border border-white/10 bg-[#101010] p-8 lg:sticky lg:top-28">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Table of Contents
            </p>

            <nav className="mt-8 space-y-4">

              {blog.tableOfContents.map((item, index) => (

                <a
                  key={item}
                  href={`#section-${index + 1}`}
                  className="block text-sm leading-7 text-white/70 transition hover:text-[#C9A45C]"
                >
                  {index + 1}. {item}
                </a>

              ))}

            </nav>

          </aside>

          {/* Article */}

          <article className="rounded-[32px] border border-white/10 bg-[#101010] p-8 md:p-12">

            {blog.content.map((paragraph, index) => (

              <section
                key={index}
                id={`section-${index + 1}`}
                className="mb-12 scroll-mt-32"
              >

                {blog.tableOfContents[index] && (

                  <h2 className="mb-6 font-cinzel text-3xl text-white">

                    {blog.tableOfContents[index]}

                  </h2>

                )}

                <p className="text-lg leading-9 text-white/75">

                  {paragraph}

                </p>

              </section>

            ))}

          </article>

        </div>

      </section>

      {/* FAQ Starts */}
            <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* FAQ */}

          <div className="rounded-[32px] border border-white/10 bg-[#101010] p-8 md:p-12">

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 font-cinzel text-4xl text-white">
              Common Questions
            </h2>

            <div className="mt-10 space-y-5">

              {blog.faq.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6"
                >

                  <h3 className="text-xl font-semibold text-white">

                    {item.question}

                  </h3>

                  <p className="mt-4 leading-8 text-white/70">

                    {item.answer}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Related Articles */}

          {relatedBlogs.length > 0 && (

            <div className="mt-24">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                Continue Reading
              </span>

              <h2 className="mt-5 font-cinzel text-4xl text-white">
                Related Articles
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {relatedBlogs.map((post) => (

                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A45C]/40"
                  >

                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="p-6">

                      <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A45C]">

                        {post.category}

                      </span>

                      <h3 className="mt-5 font-cinzel text-2xl leading-tight text-white transition group-hover:text-[#C9A45C]">

                        {post.title}

                      </h3>

                      <p className="mt-4 line-clamp-3 leading-7 text-white/70">

                        {post.excerpt}

                      </p>

                      <span className="mt-6 inline-flex items-center font-semibold text-[#C9A45C]">

                        Read Article

                        <ArrowRight className="ml-2 h-5 w-5" />

                      </span>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          )}

        </div>

      </section>

      <BlogCTA />

    </main>
  );
}