export function AboutCTA() {
  return (
    <section className="bg-[#080808] py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="rounded-[40px] border border-[#C9A45C]/20 bg-[#111111] px-8 py-20 text-center">

          <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
            Let's Connect
          </span>

          <h2 className="mt-8 font-cinzel text-4xl font-semibold text-white md:text-5xl">
            Looking for
            <span className="block text-[#C9A45C]">
              Professional Legal Assistance?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            Whether you require legal guidance, document drafting,
            or professional legal support, we welcome the opportunity
            to understand your requirements and discuss how we may assist.
          </p>

          <div className="mt-12 flex justify-center">

            <a
              href="/contact"
              className="rounded-full border border-[#C9A45C] px-10 py-4 font-medium text-[#C9A45C] transition-all duration-300 hover:bg-[#C9A45C] hover:text-black"
            >
              Schedule a Consultation
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}