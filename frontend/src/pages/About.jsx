import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Target,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Reliability",
      text: "We focus on dependable cargo movement, clear communication and consistent service from origin to destination.",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      text: "We connect Kenyan businesses with international markets through coordinated air, sea, road and customs solutions.",
    },
    {
      icon: CheckCircle2,
      title: "Professional Service",
      text: "Every shipment is handled with attention to documentation, compliance, timelines and customer requirements.",
    },
  ];

  const capabilities = [
    "Air Freight & Cargo Booking",
    "Sea Freight Solutions",
    "Road Freight & Inland Transportation",
    "Import & Export Clearance",
    "Customs & Documentation",
    "Perishable Cargo Handling",
    "Cargo Consolidation",
    "Warehousing & Cargo Insurance",
  ];

  return (
    <main className="bg-[#F5F7FA] text-[#172033]">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
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

              {/* Eyebrow */}
              <div className="mb-6 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  About Arkan
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />

              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Moving Cargo.
                <span className="block text-[#D4AF37]">
                  Connecting Opportunities.
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Arkan Trade Cargo & Freight Solutions provides reliable
                logistics and cargo solutions that connect businesses in
                Kenya with markets across the world.
              </p>

            </div>

          </div>

        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <div className="relative">

              <div className="overflow-hidden rounded-2xl">

                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                  alt="Cargo containers and logistics operations"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                />

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-7 -right-4 rounded-2xl bg-[#071A2F] px-7 py-6 shadow-2xl sm:-right-7">

                <p className="text-3xl font-bold text-[#D4AF37]">
                  Global
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Freight Connections
                </p>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                A logistics partner built around
                <span className="text-[#C9A227]">
                  {" "}your business.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-[#64748B]">
                Arkan Trade Cargo & Freight Solutions is a Kenyan logistics
                company focused on helping businesses move goods efficiently
                across local and international markets.
              </p>

              <p className="mt-4 leading-7 text-[#64748B]">
                From cargo booking and freight coordination to customs
                clearance and export documentation, we bring together the
                services required to simplify the movement of goods from
                origin to destination.
              </p>

              <p className="mt-4 leading-7 text-[#64748B]">
                Our approach combines professional coordination, responsive
                communication and attention to documentation and compliance
                so that our clients can focus on growing their businesses
                while we help keep their cargo moving.
              </p>

              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#071A2F] transition-colors hover:text-[#C9A227]"
              >
                Explore our services
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR CAPABILITIES
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Section Heading */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Our Capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                End-to-end logistics
                <span className="block text-[#C9A227]">
                  solutions.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-[#64748B]">
                We coordinate multiple stages of the logistics journey to
                provide businesses with a streamlined cargo experience.
              </p>

            </div>


            {/* Capability Cards */}
            <div className="grid gap-4 sm:grid-cols-2">

              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-md"
                >

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#C9A227]"
                  />

                  <span className="text-sm font-semibold text-[#172033]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY ARKAN
      ===================================================== */}
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
              Our commitment is simple: provide dependable logistics
              coordination while giving our clients confidence at every
              stage of their shipment.
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


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="bg-[#071A2F] py-20 lg:py-28">

        <div className="arkan-container">

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
                To provide reliable, efficient, and professional logistics
                solutions that simplify cargo movement and help businesses
                access local and international markets.
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
                To become a trusted logistics partner for businesses in
                Kenya and beyond, recognized for dependable service,
                professional execution and global connectivity.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#C9A227]">

        <div className="arkan-container">

          <div className="flex flex-col items-center justify-between gap-8 py-16 text-center md:flex-row md:text-left">

            <div>

              <h2 className="text-3xl font-bold text-[#071A2F] sm:text-4xl">
                Ready to move your cargo?
              </h2>

              <p className="mt-2 max-w-xl text-[#071A2F]/70">
                Talk to our team about your next shipment and let us help
                you find the right logistics solution.
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

