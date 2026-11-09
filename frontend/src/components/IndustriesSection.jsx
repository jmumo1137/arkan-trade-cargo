
import {
  ArrowUpRight,
  ThermometerSnowflake,
} from "lucide-react";

import { Link } from "react-router-dom";
import { industries } from "../data/industries";

const IndustriesSection = () => {
  // Keep meat exports as the featured industry.
  // Other industries remain supporting markets.
  const supportingIndustries = industries
    .filter((industry) => !/meat/i.test(industry.title))
    .slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#071A2F] py-20 sm:py-24 lg:py-28">

      <div className="arkan-container">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Industries We Serve
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connecting Kenya's
              <span className="block text-[#D4AF37]">
                exports to global markets.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60 lg:pb-1 sm:text-base">
            From fresh and chilled meat exports to agricultural
            products, pets and general cargo, Arkan supports
            businesses moving goods from Kenya to international
            destinations.
          </p>

        </div>

        {/* FEATURED MEAT EXPORT INDUSTRY */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0B243F]">

          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}
            <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[480px]">

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1600&q=85')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04111F]/80 via-[#071A2F]/15 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#071A2F]/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-md">
                  <ThermometerSnowflake size={14} />
                  Primary Export Focus
                </span>
              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Fresh & Chilled Meat Exports
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Moving Kenya's meat exports to the world.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Meat exports are at the heart of Arkan's industry
                focus. We coordinate international air freight,
                temperature-conscious cargo handling, export
                documentation and customs clearance to support
                the movement of time-sensitive meat shipments.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Every shipment has its own handling requirements
                and destination considerations. Our logistics
                approach is built around those requirements.
              </p>

              <Link
                to="/services"
                className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold text-white"
              >
                Explore Meat Export Solutions

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A227] text-[#071A2F] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

            </div>

          </div>

        </div>

        {/* SECONDARY INDUSTRIES */}
        <div className="mt-14">

          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Other Industries We Support
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                More cargo. More possibilities.
              </h3>
            </div>

            <Link
              to="/industries"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#D4AF37]"
            >
              View All Industries

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {supportingIndustries.map((industry) => {

              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  to="/industries"
                  className="group relative min-h-[280px] overflow-hidden rounded-xl border border-white/10"
                >

                  {/* IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${industry.image}')`,
                    }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04111F] via-[#071A2F]/45 to-[#071A2F]/10 transition-colors duration-300 group-hover:via-[#071A2F]/65" />

                  {/* ICON */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071A2F]/60 backdrop-blur-md">
                    {Icon && (
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#D4AF37]"
                      />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {industry.category}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {industry.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/65">
                      {industry.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span>Learn More</span>

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default IndustriesSection;
