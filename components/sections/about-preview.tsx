"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";
export function AboutPreview() {
  const services = [
    {
      icon: BriefcaseBusiness,
      title: "Corporate Advisory",
      text: "Practical legal guidance for companies, founders and entrepreneurs.",
    },
    {
      icon: FileText,
      title: "Contract Drafting",
      text: "Professionally drafted commercial agreements and legal documentation.",
    },
    {
      icon: Scale,
      title: "Civil & Commercial Matters",
      text: "Legal assistance across civil and commercial disputes.",
    },
    {
      icon: ShieldCheck,
      title: "Confidential Consultation",
      text: "Every consultation is handled with professionalism and confidentiality.",
    },
  ];

  return (
    <section className="border-t border-white/10 bg-[#0B0B0B] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-[#C9A34E]/30 bg-[#C9A34E]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A34E]">
              About Sadaf Associates
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Legal Solutions
              <br />
              Built Around
              <br />
              Practical Advice.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Sadaf Associates provides practical legal assistance through
              advisory, documentation, drafting and dispute support while
              maintaining professionalism, integrity and confidentiality.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              {services.map((service) => {

                const Icon = service.icon;

                return (

                  <div
                    key={service.title}
                    className="rounded-2xl border border-white/10 bg-[#141414] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9A34E]/40"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A34E]/10">

                      <Icon className="h-6 w-6 text-[#C9A34E]" />

                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {service.text}
                    </p>

                  </div>

                );

              })}

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-[#C9A34E] px-7 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Learn More

                <ArrowRight className="ml-2 h-4 w-4" />

              </Link>
                            <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#C9A34E] px-7 py-3 font-semibold text-[#C9A34E] transition hover:bg-[#C9A34E] hover:text-black"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#151515] to-[#0D0D0D] p-10 shadow-2xl">

              <div className="mb-8">

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A34E]">
                  Our Commitment
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  Professional.
                  <br />
                  Ethical.
                  <br />
                  Client Focused.
                </h3>

                <p className="mt-6 leading-8 text-gray-400">
                  Every legal matter deserves careful attention,
                  transparent communication and practical legal
                  solutions tailored to the client's objectives.
                </p>

              </div>

              <div className="space-y-5">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="font-semibold text-white">
                    Advisory
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    Strategic legal guidance for businesses,
                    startups and professionals.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="font-semibold text-white">
                    Documentation
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    Agreements, notices and commercial documents
                    prepared with precision.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="font-semibold text-white">
                    Litigation Support
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    Assistance in civil and commercial legal
                    proceedings wherever applicable.
                  </p>
                </div>
                              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}