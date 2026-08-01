export function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description:
        "We are committed to acting with honesty, fairness, and professionalism in every legal engagement.",
    },
    {
      title: "Client Commitment",
      description:
        "Every client receives thoughtful attention, clear communication, and dedicated professional support.",
    },
    {
      title: "Excellence",
      description:
        "We strive for precision, continuous improvement, and the highest standards in every matter we undertake.",
    },
    {
      title: "Confidentiality",
      description:
        "Protecting client information and maintaining professional confidentiality remain fundamental to our practice.",
    },
  ];

  return (
    <section className="bg-[#080808] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
            Core Values
          </span>

          <h2 className="mt-8 font-cinzel text-4xl font-semibold text-white md:text-5xl">
            Principles That
            <span className="block text-[#C9A45C]">
              Define Our Practice
            </span>
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-[#C9A45C]" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-3xl border border-[#C9A45C]/20 bg-[#111111] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50"
            >
              <div className="mb-6 h-12 w-12 rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10" />

              <h3 className="font-cinzel text-2xl text-white">
                {value.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}