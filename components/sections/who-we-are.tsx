export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
          Who We Are
        </span>

        <h2 className="mt-8 font-cinzel text-4xl font-semibold leading-tight text-white md:text-5xl">
          A Modern Law Firm Built on
          <span className="block text-[#C9A45C]">
            Integrity, Precision & Trust
          </span>
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-[#C9A45C]" />

        <div className="mx-auto mt-10 max-w-4xl space-y-8 text-lg leading-9 text-neutral-300">
          <p>
            Sadaf Associates is a modern law firm committed to delivering
            thoughtful legal solutions with professionalism, integrity, and
            attention to detail. We strive to understand every matter carefully
            and provide practical legal support tailored to the unique
            circumstances of each client.
          </p>

          <p>
            Our practice is founded on ethical values, transparent communication,
            and a client-focused approach. We believe that trust is earned
            through consistent professionalism, careful preparation, and
            responsible legal representation.
          </p>

          <p>
            Whether assisting individuals, businesses, or organisations, we aim
            to build lasting professional relationships while maintaining the
            highest standards expected of the legal profession.
          </p>
        </div>
      </div>
    </section>
  );
}