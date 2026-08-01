import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Lock,
  Clock3,
  Users,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { div } from "framer-motion/m";

const features = [
  {
    icon: Scale,
    title: "Practical Legal Advice",
    description:
      "Clear, practical legal guidance tailored to your legal and commercial requirements.",
  },
  {
    icon: Lock,
    title: "Confidential Consultation",
    description:
      "Every consultation is handled with discretion, confidentiality, and professionalism.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We focus on understanding your objectives before recommending legal solutions.",
  },
  {
    icon: FileCheck,
    title: "Accurate Documentation",
    description:
      "Professionally drafted legal documents prepared with attention to detail.",
  },
  {
    icon: Clock3,
    title: "Timely Assistance",
    description:
      "Responsive communication and timely legal support throughout the engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Standards",
    description:
      "Committed to integrity, ethics, and professional responsibility in every matter.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Professional Legal Support
            <span className="block text-[#D4AF37]">
              Built on Trust & Integrity
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            We are committed to providing practical legal assistance through
            professionalism, confidentiality, transparent communication, and
            carefully prepared legal solutions tailored to each client's
            requirements.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 transition-colors duration-300 group-hover:bg-[#D4AF37]/20">
                  <Icon className="h-7 w-7 text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 via-white/[0.03] to-[#D4AF37]/10 p-10 text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white">
            Looking for Professional Legal Assistance?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-400">
            Whether you require legal documentation, corporate advisory,
            consultation, or dispute-related assistance, we are committed to
            providing practical legal support tailored to your requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#E6C55A]"
          >
            Schedule Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>      </div>
    </section>
  );
}