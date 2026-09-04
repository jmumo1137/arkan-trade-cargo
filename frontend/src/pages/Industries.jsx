import {
  ArrowRight,
  Sprout,
  Flower2,
  Snowflake,
  Apple,
  Boxes,
  Store,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      icon: Sprout,
      title: "Agriculture & Fresh Produce",
      description:
        "Supporting farmers, aggregators and agricultural businesses moving fresh produce from Kenya to local and international markets.",
      services: [
        "Fresh produce transportation",
        "Export coordination",
        "Air & sea freight",
        "Export documentation",
      ],
    },
    {
      icon: Flower2,
      title: "Flowers & Horticulture",
      description:
        "Time-sensitive logistics solutions for flowers and horticultural products where speed, coordination and careful handling matter.",
      services: [
        "International air freight",
        "Cargo booking",
        "Export documentation",
        "Time-sensitive handling",
      ],
    },
    {
      icon: Snowflake,
      title: "Meat & Perishables",
      description:
        "Coordinated logistics for businesses handling meat and other temperature-sensitive products destined for regional and international markets.",
      services: [
        "Perishable cargo handling",
        "Air freight",
        "Cold-chain coordination",
        "Customs clearance",
      ],
    },
    {
      icon: Apple,
      title: "Fruits & Herbs",
      description:
        "Helping exporters move fruits, herbs and other agricultural products efficiently while coordinating the logistics required for international markets.",
      services: [
        "Export cargo coordination",
        "Air freight",
        "Documentation support",
        "International logistics",
      ],
    },
    {
      icon: Boxes,
      title: "General Cargo",
      description:
        "Flexible freight and logistics solutions for businesses importing and exporting commercial goods across different markets.",
      services: [
        "Sea freight",
        "Air freight",
        "Road transportation",
        "Cargo consolidation",
      ],
    },
    {
      icon: Store,
      title: "Traders & Importers",
      description:
        "Supporting businesses sourcing goods internationally with freight, customs, documentation and inland transportation coordination.",
      services: [
        "Import clearance",
        "Sea & air freight",
        "Customs coordination",
        "Cargo delivery",
      ],
    },
  ];

  const benefits = [
    "Industry-focused logistics coordination",
    "Air, sea and road freight options",
    "Import and export clearance support",
    "Documentation and compliance coordination",
    "Specialized handling for perishables",
    "Local and international cargo solutions",
  ];

  return (
    <main className="bg-[#F5F7FA] text-[#172033]">

      {/* =====================================================
          INDUSTRIES HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#04111F]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=2200&q=85')",
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
                  Industries We Serve
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />

              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Logistics Built Around
                <span className="block text-[#D4AF37]">
                  Your Industry.
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                From fresh produce and flowers to meat, general cargo and
                international trade, we provide logistics solutions designed
                around the needs of different businesses and industries.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B24A]"
                >
                  Request a Quote
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#D4AF37]"
                >
                  View Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="arkan-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Industry Expertise
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
              Different industries.
              <span className="text-[#C9A227]">
                {" "}Different logistics needs.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              Cargo requirements can vary significantly depending on the
              product, destination, timeline and regulatory requirements.
              We work with businesses to coordinate logistics solutions
              suited to their specific cargo and market.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES GRID
      ===================================================== */}
      <section className="bg-[#F5F7FA] py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl"
                >

                  {/* Icon */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#071A2F] transition-colors duration-300 group-hover:bg-[#C9A227]">

                    <Icon
                      size={24}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#071A2F]"
                    />

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-[#071A2F]">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {industry.description}
                  </p>

                  {/* Services */}
                  <div className="mt-6 border-t border-[#E2E8F0] pt-5">

                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                      Supporting Services
                    </p>

                    <ul className="space-y-3">

                      {industry.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-2.5 text-sm text-[#172033]"
                        >

                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#C9A227]"
                          />

                          <span>{service}</span>

                        </li>
                      ))}

                    </ul>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPORT FOCUS
      ===================================================== */}
      <section className="bg-[#071A2F] py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Kenya to the World
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Helping Kenyan businesses
                <span className="text-[#D4AF37]">
                  {" "}reach global markets.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-white/60">
                Kenya's agricultural and commercial sectors serve customers
                across regional and international markets. We help
                businesses coordinate the logistics involved in getting
                their products where they need to go.
              </p>

              <p className="mt-4 leading-7 text-white/60">
                Whether you are exporting fresh produce, flowers, meat,
                herbs, or general commercial cargo, we can coordinate the
                freight and documentation requirements around your shipment.
              </p>

              <Link
                to="/quote"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B24A]"
              >
                Discuss Your Shipment
                <ArrowRight size={17} />
              </Link>

            </div>


            {/* Benefits */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]">

                  <Globe2
                    size={23}
                    className="text-[#071A2F]"
                  />

                </div>

                <div>

                  <p className="text-lg font-bold text-white">
                    Our Logistics Advantage
                  </p>

                  <p className="text-sm text-white/45">
                    Coordinated solutions for your cargo
                  </p>

                </div>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#D4AF37]"
                    />

                    <span className="text-sm leading-6 text-white/70">
                      {benefit}
                    </span>

                  </div>
                ))}

              </div>

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
                Don't see your industry?
              </h2>

              <p className="mt-2 max-w-xl text-[#071A2F]/70">
                Every shipment is different. Tell us what you need to move
                and our team can help you explore the right logistics
                solution.
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

export default Industries;