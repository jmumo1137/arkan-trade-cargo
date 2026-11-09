
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Target,
  Eye,
  ThermometerSnowflake,
  FileCheck2,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We focus on dependable freight coordination, clear communication and careful attention to shipment requirements from origin to destination.",
  },
  {
    icon: Globe2,
    title: "Global Connectivity",
    text: "We support Kenyan businesses seeking to connect their cargo with international markets through coordinated freight solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Service",
    text: "We place importance on documentation, customs processes, timelines and understanding each client's cargo requirements.",
  },
];

const capabilities = [
  "Fresh & Chilled Meat Export Logistics",
  "Air Freight & Cargo Booking",
  "Perishable Cargo Coordination",
  "Export Documentation",
  "Import & Export Customs Clearance",
  "Sea Freight Solutions",
  "Road Freight & Inland Transportation",
  "Cargo Consolidation",
  "Warehousing Coordination",
  "Cargo Insurance Support",
];

const About = () => {
  return (
    <main className="bg-[#F5F7FA] text-[#172033]">
      {/* ABOUT HERO */}
      <section className="relative overflow-hidden bg-[#04111F]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#04111F]/85" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04111F]/80 via-[#071A2F]/70 to-[#04111F]" />

        {/* Hero Content */}
        <div className="relative z-10 arkan-container">
          <div className="flex min-h-[520px] items-center justify-center py-32 text-center">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  About Arkan
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Moving Kenya's Cargo.
                <span className="block text-[#D4AF37]">
                  Connecting Global Markets.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Arkan Trade Cargo & Freight Ltd supports businesses moving
                fresh and chilled meat exports from Kenya to international
                markets, alongside a wider range of freight and logistics
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 lg:py-28">
        <div className="arkan-container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                  alt="Cargo warehouse and international logistics operations"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                  loading="lazy"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-7 -right-4 rounded-2xl bg-[#071A2F] px-7 py-6 shadow-2xl sm:-right-7">
                <p className="text-3xl font-bold text-[#D4AF37]">
                  Kenya
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Connecting to Global Markets
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                A logistics partner focused on
                <span className="text-[#C9A227]">
                  {" "}moving your business forward.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-[#64748B]">
                Arkan Trade Cargo & Freight Ltd is a Kenyan logistics company
                focused on supporting businesses with local and international
                cargo movements. Our primary focus is fresh and chilled meat
                export logistics, alongside other agricultural and general
                cargo solutions.
              </p>

              <p className="mt-4 leading-7 text-[#64748B]">
                We coordinate freight solutions, cargo booking, export
                documentation and customs clearance support to help simplify
                the movement of shipments from Kenya to their destinations.
              </p>

              <p className="mt-4 leading-7 text-[#64748B]">
                For perishable shipments, we recognise the importance of
                shipment planning, temperature-conscious handling coordination
                and attention to destination requirements. We also support
                businesses moving flowers, herbs, vegetables and other cargo.
              </p>

              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#071A2F] transition-colors hover:text-[#C9A227]"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CAPABILITIES */}
      <section className="bg-white py-20 lg:py-28">
        <div className="arkan-container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Section Heading */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Our Capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                Logistics solutions
                <span className="block text-[#C9A227]">
                  for every shipment.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-[#64748B]">
                From fresh and chilled meat exports to general cargo, we
                coordinate the freight and supporting services businesses
                need to move their shipments across borders.
              </p>

              {/* Primary Focus */}
              <div className="mt-8 rounded-xl border border-[#C9A227]/30 bg-[#FDFBF5] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#071A2F]">
                    <ThermometerSnowflake
                      size={20}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                      Primary Focus
                    </p>

                    <p className="mt-1 font-bold text-[#071A2F]">
                      Fresh & Chilled Meat Exports
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    index === 0
                      ? "border-[#C9A227]/40 bg-[#FDFBF5]"
                      : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#C9A227]/50"
                  }`}
                >
                  {index === 0 ? (
                    <ThermometerSnowflake
                      size={20}
                      className="mt-0.5 shrink-0 text-[#C9A227]"
                    />
                  ) : (
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#C9A227]"
                    />
                  )}

                  <span className="text-sm font-semibold text-[#172033]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ARKAN */}
      <section className="bg-[#F5F7FA] py-20 lg:py-28">
        <div className="arkan-container">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Why Arkan
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#071A2F] sm:text-4xl">
              Built on trust.
              <span className="text-[#C9A227]">
                {" "}Driven by service.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              We focus on dependable freight coordination, professional
              service and careful attention to the requirements of every
              shipment, particularly perishable exports.
            </p>
          </div>

          {/* Values */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071A2F]">
                    <Icon
                      size={22}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071A2F]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#071A2F] py-20 lg:py-28">
        <div className="arkan-container">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Direction
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              What drives
              <span className="text-[#D4AF37]">
                {" "}Arkan forward.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]">
                <Target
                  size={23}
                  className="text-[#071A2F]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                To provide reliable, efficient and professional freight
                coordination that supports the movement of fresh and chilled
                meat exports and other cargo, helping businesses connect
                with local and international markets.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]">
                <Eye
                  size={23}
                  className="text-[#071A2F]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                To become a trusted Kenyan logistics partner recognised
                for professional freight coordination, dependable service
                and supporting businesses as they access international
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A227]">
        <div className="arkan-container">
          <div className="flex flex-col items-center justify-between gap-8 py-16 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-[#071A2F] sm:text-4xl">
                Planning your next export?
              </h2>

              <p className="mt-2 max-w-xl text-[#071A2F]/70">
                Whether you're shipping fresh and chilled meat or other
                cargo, talk to Arkan about your shipment requirements.
              </p>
            </div>

            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#071A2F] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#04111F]"
            >
              Request a Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
