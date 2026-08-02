"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  Briefcase,
} from "lucide-react";

export function ContactHero() {
  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [service, setService] = useState("");
const [message, setMessage] = useState("");

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(
        "Your enquiry has been submitted successfully. We will contact you shortly."
      );

      setFullName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                      {/* Left Side */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 font-cinzel text-5xl font-semibold leading-tight text-white">
              We Would Be Pleased
              <span className="block text-[#C9A45C]">
                To Hear From You
              </span>
            </h2>

            <div className="mt-8 h-px w-20 bg-[#C9A45C]" />

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/70">
              Feel free to reach out regarding legal documentation,
              consultation, corporate advisory, litigation support,
              contract drafting or any other legal matter.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {/* Email */}

              <div className="rounded-3xl border border-white/10 bg-[#101010] p-6 transition-all duration-300 hover:border-[#C9A45C]/40">

                <Mail className="h-6 w-6 text-[#C9A45C]" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                  Email
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Write to Us
                </h3>

                <p className="mt-3 break-all text-white/70">
                  contact@sadafassociates.com
                </p>

              </div>

              {/* Phone */}

              <div className="rounded-3xl border border-white/10 bg-[#101010] p-6 transition-all duration-300 hover:border-[#C9A45C]/40">

                <Phone className="h-6 w-6 text-[#C9A45C]" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                  Phone
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Speak With Us
                </h3>

                <p className="mt-3 text-white/70">
                  +91 70422 88975
                </p>

              </div>

              {/* Consultation */}

              <div className="rounded-3xl border border-white/10 bg-[#101010] p-6 transition-all duration-300 hover:border-[#C9A45C]/40">

                <Briefcase className="h-6 w-6 text-[#C9A45C]" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                  Consultation
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Virtual & Appointment
                </h3>

                <p className="mt-3 leading-7 text-white/70">
                  Meetings are arranged strictly by prior appointment.
                </p>

              </div>

              {/* Working Hours */}

              <div className="rounded-3xl border border-white/10 bg-[#101010] p-6 transition-all duration-300 hover:border-[#C9A45C]/40">

                <Clock className="h-6 w-6 text-[#C9A45C]" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                  Working Hours
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Monday – Friday
                </h3>

                <p className="mt-3 text-white/70">
                  10:00 AM – 7:00 PM
                </p>

              </div>

            </div>

            {/* WhatsApp Card */}

            <div className="mt-8 rounded-[32px] border border-[#C9A45C]/20 bg-[#0d0b08] p-8 text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
                Need Immediate Assistance?
              </p>

              <h3 className="mt-5 font-cinzel text-4xl text-white">
                Connect With Us Instantly
              </h3>

              <p className="mx-auto mt-5 max-w-md text-white/70">
                For urgent legal matters, connect with us directly on
                WhatsApp.
              </p>

              <Link
                href="https://wa.me/917042288975"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:bg-[#1FA855]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Link>

            </div>

          </div>

          {/* Right Side */}
                    <div
            id="contact-form"
            className="rounded-[32px] border border-white/10 bg-[#101010] p-8 lg:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Contact Form
            </span>

            <h2 className="mt-5 font-cinzel text-4xl font-semibold text-white">
              Send an Enquiry
            </h2>

            <p className="mt-4 text-white/60">
              Complete the form below and our team will contact you as
              soon as possible.
            </p>

            {success && (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{success}</p>
              </div>
            )}

            {error && (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#C9A45C]"
                />
              </div>
                            <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Practice Area
                </label>

                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#C9A45C]"
                >
                  <option value="">Select a Practice Area</option>

                  <option value="Corporate & Commercial Law">
                    Corporate & Commercial Law
                  </option>

                  <option value="Contract Drafting & Review">
                    Contract Drafting & Review
                  </option>

                  <option value="Civil Litigation">
                    Civil Litigation
                  </option>

                  <option value="Criminal Litigation">
                    Criminal Litigation
                  </option>

                  <option value="Family & Matrimonial Law">
                    Family & Matrimonial Law
                  </option>

                  <option value="Property & Real Estate">
                    Property & Real Estate
                  </option>

                  <option value="Employment & Labour Law">
                    Employment & Labour Law
                  </option>

                  <option value="Consumer Disputes">
                    Consumer Disputes
                  </option>

                  <option value="Arbitration & ADR">
                    Arbitration & ADR
                  </option>

                  <option value="Legal Notices & Documentation">
                    Legal Notices & Documentation
                  </option>

                  <option value="Other Legal Matter">
                    Other Legal Matter
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your legal matter..."
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#C9A45C]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C9A45C] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#d8b46b] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

            </form>

          </div>
                  </div>

      </div>

    </section>
  );
}