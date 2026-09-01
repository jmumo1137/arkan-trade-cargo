import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend integration will be added later.
    console.log("Contact Request:", formData);

    setSubmitted(true);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#071A2F] outline-none transition-all placeholder:text-slate-400 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/10";

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071A2F]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#04111F]/80" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#C9A227]/10" />


        <div className="arkan-container relative">

          <div className="flex min-h-[500px] items-center py-28">

            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Contact Arkan
                </span>

              </div>


              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Let's talk about
                <span className="block text-[#D4AF37]">
                  your cargo.
                </span>
              </h1>


              <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Whether you need a freight solution, customs support,
                export coordination, or simply want to understand how
                we can help, our team is ready to hear from you.
              </p>

            </div>

          </div>

        </div>


        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="arkan-container">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">


            {/* PHONE */}
            <a
              href="tel:+254714031701"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-lg"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071A2F]">

                <Phone
                  size={20}
                  className="text-[#D4AF37]"
                />

              </div>


              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                Call Us
              </p>

              <p className="mt-2 text-sm font-bold text-[#071A2F]">
                +254 714 031 701
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Speak with our team
              </p>

            </a>


            {/* EMAIL */}
            <a
              href="mailto:info@arkancargo.com"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-lg"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071A2F]">

                <Mail
                  size={20}
                  className="text-[#D4AF37]"
                />

              </div>


              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                Email Us
              </p>

              <p className="mt-2 break-all text-sm font-bold text-[#071A2F]">
                timwangondu@gmail.com
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Send us an enquiry
              </p>

            </a>


            {/* LOCATION */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071A2F]">

                <MapPin
                  size={20}
                  className="text-[#D4AF37]"
                />

              </div>


              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                Location
              </p>

              <p className="mt-2 text-sm font-bold text-[#071A2F]">
                Nairobi, Kenya
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Serving Kenya and global markets
              </p>

            </div>


            {/* HOURS */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071A2F]">

                <Clock3
                  size={20}
                  className="text-[#D4AF37]"
                />

              </div>


              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                Availability
              </p>

              <p className="mt-2 text-sm font-bold text-[#071A2F]">
                Mon – Fri
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Contact us for shipment support
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + WHATSAPP
      ====================================================== */}
      <section className="bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">

        <div className="arkan-container">

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">


            {/* LEFT */}
            <div className="lg:col-span-4">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Send an Enquiry
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                How can we help?
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Have a question about our freight services, customs
                clearance, cargo handling, or international logistics?
                Send us a message and our team will get back to you.
              </p>


              {/* WhatsApp Card */}
              <div className="mt-9 rounded-2xl bg-[#071A2F] p-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A227]">

                  <MessageCircle
                    size={21}
                    className="text-[#071A2F]"
                  />

                </div>


                <h3 className="mt-5 text-lg font-bold text-white">
                  Prefer WhatsApp?
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  For quick questions or shipment discussions, you can
                  contact our team directly.
                </p>


                <a
                  href="https://wa.me/254714031701"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] transition-colors hover:text-white"
                >
                  Chat on WhatsApp
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>


            {/* FORM */}
            <div className="lg:col-span-8">

              {submitted ? (

                <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#071A2F]">

                    <Send
                      size={27}
                      className="text-[#D4AF37]"
                    />

                  </div>


                  <h2 className="mt-7 text-3xl font-bold text-[#071A2F]">
                    Message received.
                  </h2>


                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                    Thank you for reaching out to Arkan Trade Cargo &
                    Freight Solutions. Your message has been captured
                    for review.
                  </p>


                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold text-[#071A2F] underline underline-offset-4"
                  >
                    Send another message
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>

                      <label
                        htmlFor="name"
                        className="text-xs font-bold text-[#071A2F]"
                      >
                        Full Name
                        <span className="ml-1 text-[#C9A227]">
                          *
                        </span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />

                    </div>


                    {/* Company */}
                    <div>

                      <label
                        htmlFor="company"
                        className="text-xs font-bold text-[#071A2F]"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className={inputClass}
                      />

                    </div>


                    {/* Email */}
                    <div>

                      <label
                        htmlFor="email"
                        className="text-xs font-bold text-[#071A2F]"
                      >
                        Email Address
                        <span className="ml-1 text-[#C9A227]">
                          *
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className={inputClass}
                      />

                    </div>


                    {/* Phone */}
                    <div>

                      <label
                        htmlFor="phone"
                        className="text-xs font-bold text-[#071A2F]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254..."
                        className={inputClass}
                      />

                    </div>


                    {/* Subject */}
                    <div className="sm:col-span-2">

                      <label
                        htmlFor="subject"
                        className="text-xs font-bold text-[#071A2F]"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={inputClass}
                      />

                    </div>


                    {/* Message */}
                    <div className="sm:col-span-2">

                      <label
                        htmlFor="message"
                        className="text-xs font-bold text-[#071A2F]"
                      >
                        Message
                        <span className="ml-1 text-[#C9A227]">
                          *
                        </span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={7}
                        placeholder="Tell us how we can help..."
                        className={`${inputClass} resize-none`}
                      />

                    </div>

                  </div>


                  {/* Submit */}
                  <div className="mt-8 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">

                    <p className="max-w-md text-xs leading-5 text-slate-400">
                      We use the information you provide to respond to
                      your enquiry and understand your requirements.
                    </p>


                    <button
                      type="submit"
                      className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#071A2F] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0B243F]"
                    >

                      Send Message

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A227] text-[#071A2F]">

                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />

                      </span>

                    </button>

                  </div>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION / MAP PLACEHOLDER
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">

        <div className="arkan-container">

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#071A2F]">

            <div className="grid min-h-[320px] lg:grid-cols-2">

              {/* Map Placeholder */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#0B243F]">

                <div className="absolute inset-0 opacity-10">

                  <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#C9A227]" />

                  <div className="absolute bottom-5 right-10 h-56 w-56 rounded-full border border-white" />

                </div>


                <div className="relative z-10 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]">

                    <MapPin
                      size={25}
                      className="text-[#071A2F]"
                    />

                  </div>

                  <p className="mt-4 text-sm font-bold text-white">
                    Nairobi, Kenya
                  </p>

                  <p className="mt-1 text-xs text-white/45">
                    Arkan Trade Cargo & Freight Solutions
                  </p>

                </div>

              </div>


              {/* Location Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Our Location
                </span>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Connecting Kenya
                  <span className="text-[#D4AF37]">
                    {" "}to the world.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  Our logistics operations are positioned to support
                  businesses moving cargo within Kenya and to
                  international markets.
                </p>

                <Link
                  to="/quote"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B24A]"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;

