export function OurPhilosophy() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Left */}

        <div>
          <span className="inline-flex rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
            Our Philosophy
          </span>

          <h2 className="mt-8 font-cinzel text-4xl font-semibold leading-tight text-white md:text-5xl">
            Every Matter
            <span className="block text-[#C9A45C]">
              Deserves Careful Attention
            </span>
          </h2>

          <div className="mt-6 h-px w-24 bg-[#C9A45C]" />

          <p className="mt-8 text-lg leading-9 text-neutral-300">
            At Sadaf Associates, we believe that effective legal services begin
            with understanding every client's circumstances carefully. Our work
            is guided by preparation, professional ethics, clear communication,
            and practical legal thinking.
          </p>
        </div>

        {/* Right */}

        <div className="space-y-6">

          <div className="rounded-3xl border border-[#C9A45C]/20 bg-[#111111] p-8">
            <h3 className="font-cinzel text-2xl text-white">
              Professional Integrity
            </h3>

            <p className="mt-4 leading-8 text-neutral-300">
              Every engagement is approached with honesty, ethical conduct, and
              respect for professional responsibilities.
            </p>
          </div>

          <div className="rounded-3xl border border-[#C9A45C]/20 bg-[#111111] p-8">
            <h3 className="font-cinzel text-2xl text-white">
              Client-Centred Approach
            </h3>

            <p className="mt-4 leading-8 text-neutral-300">
              We believe every client deserves attentive communication,
              thoughtful guidance, and practical legal support.
            </p>
          </div>

          <div className="rounded-3xl border border-[#C9A45C]/20 bg-[#111111] p-8">
            <h3 className="font-cinzel text-2xl text-white">
              Practical Legal Solutions
            </h3>

            <p className="mt-4 leading-8 text-neutral-300">
              Our objective is to provide carefully considered legal solutions
              tailored to each matter while maintaining the highest standards of
              professionalism.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}