
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
  Plane,
  ThermometerSnowflake,
} from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  // Meat exports are Arkan's primary industry focus.
  const industries = [
    {
      icon: Snowflake,
      title: "Fresh & Chilled Meat Exports",
      featured: true,
      description:
        "Supporting meat exporters and businesses moving fresh and chilled meat to regional and international markets through coordinated air freight, temperature-conscious handling and export logistics.",
      services: [
        "Fresh and chilled meat export coordination",
        "Air freight arrangements",
        "Cold-chain logistics coordination",
        "Export documentation and customs support",
      ],
    },
    {
      icon: Flower2,
      title: "Flowers & Horticulture",
      description:
        "Coordinating time-sensitive logistics for flower farms, horticultural exporters and businesses serving international markets where careful handling and shipment planning matter.",
      services: [
        "International air freight",
        "Cargo booking coordination",
        "Export documentation",
        "Time-sensitive cargo handling",
      ],
    },
    {
      icon: Sprout,
      title: "Agriculture & Fresh Produce",
      description:
        "Supporting farmers, aggregators and agricultural businesses moving fresh produce from Kenya to regional and international markets.",
      services: [
        "Fresh produce export coordination",
        "Air and sea freight",
        "Export documentation",
        "Perishable cargo logistics",
      ],
    },
    {
      icon: Apple,
      title: "Fruits, Herbs & Vegetables",
      description:
        "Helping exporters coordinate the movement of fruits, herbs and vegetables through freight planning, documentation and international logistics support.",
      services: [
        "Export cargo coordination",
        "Air freight arrangements",
        "Documentation support",
        "International logistics",
      ],
    },
    {
      icon: Boxes,
      title: "General Cargo",
      description:
        "Flexible freight and logistics coordination for businesses importing and exporting commercial goods across regional and international markets.",
      services: [
        "Sea freight",
        "Air freight",
        "Road transportation coordination",
        "Cargo consolidation",
      ],
    },
    {
      icon: Store,
      title: "Traders & Importers",
      description:
        "Supporting businesses sourcing goods internationally through freight arrangements, customs coordination, documentation and inland transportation.",
      services: [
        "Import clearance coordination",
        "Sea and air freight",
        "Customs documentation support",
        "Cargo delivery coordination",
      ],
    },
  ];

  const benefits = [
    "Fresh and chilled meat export logistics",
    "Air freight coordination for time-sensitive cargo",
    "Temperature-conscious cargo handling coordination",
    "Import and export clearance support",
    "Documentation and compliance coordination",
    "Regional and international freight solutions",
  ];

  return (
    <main className="bg-[#F5F7FA] text-[#172033]">

      {/* INDUSTRIES HERO */}
      <section className="relative overflow-hidden bg-[#04111F]">

        {/* Preserve existing background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#04111F]/85" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#04111F]/80 via-[#071A2F]/70 to-[#04111F]" />

        <div className="relative z-10 arkan-container">

          <div className="flex min-h-[520px] items-center justify-center py-32 text-center">

            <div className="max-w-4xl">

              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Industries We Serve
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Logistics Built Around
                <span className="block text-[#D4AF37]">
                  Your Industry.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                From fresh and chilled meat exports to flowers, agricultural
                produce and general cargo, Arkan coordinates freight and
                export logistics to connect Kenyan businesses with global
                markets.
              </p>

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

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* INTRODUCTION */}
      <section className="bg-white py-20 lg:py-24">

        <div className="arkan-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Industry Expertise
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
              Every cargo type has
              <span className="text-[#C9A227]">
                {" "}different logistics needs.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              Our primary focus is supporting fresh and chilled meat exports,
              where shipment planning, temperature-conscious handling,
              freight coordination and export documentation are essential.
              We also support businesses across horticulture, agriculture,
              general cargo and international trade.
            </p>

          </div>

        </div>

      </section>


      {/* INDUSTRIES GRID */}
      <section className="bg-[#F5F7FA] py-20 lg:py-28">

        <div className="arkan-container">

          <div className="mb-12 max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Our Industry Focus
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
              Cargo solutions for
              <span className="text-[#C9A227]">
                {" "}different markets.
              </span>
            </h2>

            <p className="mt-4 leading-7 text-[#64748B]">
              Explore the industries we support, starting with our primary
              focus on fresh and chilled meat exports.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className={`group relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    industry.featured
                      ? "border-[#C9A227]/70 shadow-md"
                      : "border-[#E2E8F0] hover:border-[#C9A227]/50"
                  }`}
                >

                  {industry.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#C9A227]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9A7410]">
                      Primary Focus
                    </span>
                  )}

                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#071A2F] transition-colors duration-300 group-hover:bg-[#C9A227]">

                    <Icon
                      size={24}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#071A2F]"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071A2F]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {industry.description}
                  </p>

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


      {/* MEAT EXPORT FOCUS */}
      <section className="bg-[#071A2F] py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Our Primary Export Focus
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Moving Kenya's
                <span className="text-[#D4AF37]">
                  {" "}meat exports to the world.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-white/60">
                Fresh and chilled meat exports require careful shipment
                planning, suitable freight arrangements and coordination
                across the export process. Arkan focuses on helping meat
                exporters navigate these logistics requirements.
              </p>

              <p className="mt-4 leading-7 text-white/60">
                Through air freight arrangements, temperature-conscious
                cargo handling coordination, export documentation and
                customs support, we help connect Kenyan meat businesses
                with regional and international markets.
              </p>

              <p className="mt-4 leading-7 text-white/60">
                Beyond meat exports, we also coordinate logistics for
                flowers, herbs, vegetables, fruits and general commercial
                cargo.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B24A]"
                >
                  Discuss Your Shipment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#D4AF37]"
                >
                  Explore Freight Services
                </Link>

              </div>

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

              <div className="grid gap-5 sm:grid-cols-2">

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

              <div className="mt-8 border-t border-white/10 pt-6">

                <div className="flex items-center gap-3 text-[#D4AF37]">
                  <Plane size={20} />
                  <span className="text-sm font-semibold">
                    Air Freight & Export Coordination
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-3 text-[#D4AF37]">
                  <ThermometerSnowflake size={20} />
                  <span className="text-sm font-semibold">
                    Temperature-Conscious Cargo Planning
                  </span>
                </div>

              </div>

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
                Planning a meat export or cargo shipment?
              </h2>

              <p className="mt-2 max-w-xl text-[#071A2F]/70">
                Tell us about your cargo, destination and shipment
                requirements. Our team can help you explore suitable
                freight and logistics arrangements.
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
