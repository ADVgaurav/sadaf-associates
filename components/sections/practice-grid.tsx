import Link from "next/link";

const practiceAreas = [
  {
    title: "Corporate & Commercial Law",
    description:
      "Advisory, commercial transactions, business structuring, compliance, and corporate legal support.",
  },
  {
    title: "Contract Drafting & Review",
    description:
      "Preparation, review, and negotiation of commercial agreements, contracts, and legal documentation.",
  },
  {
    title: "Civil Litigation",
    description:
      "Representation and legal assistance in civil disputes before appropriate judicial forums.",
  },
  {
    title: "Arbitration & ADR",
    description:
      "Efficient dispute resolution through arbitration, mediation, and other alternative mechanisms.",
  },
  {
    title: "Property & Real Estate",
    description:
      "Legal assistance relating to property transactions, documentation, due diligence, and ownership matters.",
  },
  {
    title: "Employment & Labour Law",
    description:
      "Professional guidance on workplace policies, employment contracts, labour compliance, and related matters.",
  },
  {
    title: "Family Law",
    description:
      "Legal support in matrimonial, family, maintenance, guardianship, and related personal matters.",
  },
  {
    title: "Intellectual Property",
    description:
      "Assistance concerning trademarks, copyrights, branding protection, and intellectual property matters.",
  },
  {
    title: "Legal Documentation",
    description:
      "Preparation and review of legal notices, agreements, affidavits, deeds, and other legal instruments.",
  },
  {
    title: "General Legal Advisory",
    description:
      "Practical legal consultation for individuals, startups, businesses, and organisations.",
  },
];

export function PracticeGrid() {
  return (
    <section
      id="practice-grid"
      className="relative bg-[#070707] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
            We Practice In These Areas
          </span>

          <h2 className="mt-8 font-cinzel text-4xl font-semibold text-white md:text-5xl">
            Comprehensive Legal Services
            <span className="block text-[#C9A45C]">
              Tailored To Your Requirements
            </span>
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-[#C9A45C]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            Our practice covers a broad spectrum of legal services,
            delivering practical legal solutions with professionalism,
            integrity, and meticulous attention to every matter.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {practiceAreas.map((area) => (
            <Link
              key={area.title}
              href="/contact"
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C9A45C]/40
                hover:bg-white/[0.07]
                hover:shadow-[0_20px_60px_rgba(201,164,92,0.15)]
              "
            >
              {/* Glass Reflection */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-20 top-0 h-40 w-40 rotate-12 bg-white/10 blur-3xl" />
              </div>

              <div className="relative">
                                <div className="mb-6 h-1 w-16 rounded-full bg-[#C9A45C] transition-all duration-500 group-hover:w-24" />

                <h3 className="font-cinzel text-2xl font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-300">
                  {area.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm uppercase tracking-[0.25em] text-[#C9A45C]">
                    Learn More
                  </span>

                  <span
                    className="
                      text-3xl
                      text-[#C9A45C]
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-20">

          <div className="rounded-[36px] border border-[#C9A45C]/20 bg-[#111111] px-8 py-16 text-center">

            <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
              Need Legal Assistance?
            </span>

            <h3 className="mt-8 font-cinzel text-4xl font-semibold text-white md:text-5xl">
              Let's Discuss
              <span className="block text-[#C9A45C]">
                Your Legal Requirements
              </span>
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
              Whether you require legal guidance, document drafting,
              dispute resolution, or professional legal support,
              we welcome the opportunity to understand your
              requirements and discuss how we may assist.
            </p>

            <div className="mt-12">
                            <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#C9A45C] bg-[#C9A45C] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#d8b46b]"
              >
                Schedule Consultation
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}