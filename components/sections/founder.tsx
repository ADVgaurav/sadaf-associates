import Image from "next/image";

export function Founder() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,164,92,0.08),transparent_45%)]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-[32px] border border-[#C9A45C]/20 bg-[#111111] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/founder.png"
                alt="Founder of Sadaf Associates"
                width={580}
                height={725}
                priority
                className="rounded-[24px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
                        <div className="inline-flex w-fit items-center rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
                A Note From The Founder
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinzel text-4xl font-semibold leading-tight text-white md:text-5xl">
                Building Trust Through
                <span className="block text-[#C9A45C]">
                  Integrity & Excellence
                </span>
              </h2>

              <div className="h-px w-24 bg-[#C9A45C]" />
            </div>

            <div>
              <h3 className="font-cinzel text-3xl text-white">
                Adv.Sadaf Aafreen
              </h3>

              <p className="mt-2 uppercase tracking-[0.35em] text-sm text-[#C9A45C]">
                Founder
              </p>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-300">
                              <p>
                Sadaf Associates was founded with a simple vision—to provide
                thoughtful, reliable, and professional legal assistance while
                maintaining the highest standards of integrity and client care.
              </p>

              <p>
                We believe that every legal matter deserves careful attention,
                strategic thinking, and a commitment to delivering practical
                solutions. Our approach is built on professionalism,
                transparency, and respect for every client we serve.
              </p>

              <p>
                Whether assisting individuals, businesses, or organizations,
                our objective is to establish lasting professional relationships
                founded on trust, diligence, and ethical legal practice.
              </p>
            </div>

            <div className="pt-4">
              <div className="h-px w-32 bg-[#C9A45C]/40" />

              <div className="mt-8">
                <h4 className="font-cinzel text-2xl text-[#C9A45C]">
                  Adv.Sadaf Aafreen
                </h4>

                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Founder
                </p>

                <p className="mt-1 text-neutral-500">
                  Sadaf Associates
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
    