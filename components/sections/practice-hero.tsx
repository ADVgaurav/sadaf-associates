export function PracticeHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">

        <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
          Practice Areas
        </span>

        <h1 className="mt-8 font-cinzel text-5xl font-semibold leading-tight text-white md:text-7xl">
          Legal Services
          <span className="block text-[#C9A45C]">
            Designed Around Your Needs
          </span>
        </h1>

        <div className="mt-8 h-px w-24 bg-[#C9A45C]" />

        <p className="mt-10 max-w-3xl text-lg leading-9 text-neutral-300">
          Sadaf Associates provides practical legal assistance across a
          broad range of practice areas, delivering thoughtful legal
          solutions with professionalism, integrity, and a client-focused
          approach.
        </p>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

          <a
            href="#practice-grid"
            className="rounded-full border border-[#C9A45C] bg-[#C9A45C] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#d8b46b]"
          >
            Explore Our Services
          </a>

          <a
            href="/contact"
            className="rounded-full border border-[#C9A45C]/40 px-8 py-4 font-medium text-[#C9A45C] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C]/10"
          >
            Schedule Consultation
          </a>

        </div>

      </div>

    </section>
  );
}