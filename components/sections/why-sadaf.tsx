export function WhySadaf() {
  const features = [
    {
      title: "Professional Approach",
      description:
        "Every matter is approached with careful preparation, attention to detail, and a commitment to professional standards.",
    },
    {
      title: "Practical Legal Thinking",
      description:
        "Our focus is on providing practical, well-considered legal solutions that align with each client's circumstances.",
    },
    {
      title: "Client-Focused Service",
      description:
        "We value clear communication, transparency, and building long-term professional relationships founded on trust.",
    },
  ];

  return (
    <section className="bg-[#050505] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
            Why Sadaf Associates
          </span>

          <h2 className="mt-8 font-cinzel text-4xl font-semibold text-white md:text-5xl">
            Committed to
            <span className="block text-[#C9A45C]">
              Professional Excellence
            </span>
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-[#C9A45C]" />

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-[#C9A45C]/20 bg-[#111111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50"
            >
              <div className="mb-6 h-1 w-16 bg-[#C9A45C]" />

              <h3 className="font-cinzel text-2xl text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-300">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}