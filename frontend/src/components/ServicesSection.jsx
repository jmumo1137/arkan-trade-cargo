import {
  ArrowUpRight,
  Package,
  Plane,
  ShieldCheck,
  FileCheck,
  ThermometerSnowflake,
} from "lucide-react";

import { Link } from "react-router-dom";

const supportingServices = [
  {
    title: "Air Freight",
    shortTitle: "International Shipping",
    description:
      "Coordinated air cargo solutions for time-sensitive exports and international shipments.",
    icon: Plane,
  },
  {
    title: "Customs Clearance",
    shortTitle: "Customs Solutions",
    description:
      "Support with customs procedures and clearance requirements for international cargo.",
    icon: ShieldCheck,
  },
  {
    title: "Export Documentation",
    shortTitle: "Export Compliance",
    description:
      "Assistance with export documentation and shipment paperwork for smooth cargo movement.",
    icon: FileCheck,
  },
  {
    title: "Perishable Cargo Handling",
    shortTitle: "Temperature-Sensitive Cargo",
    description:
      "Coordinated handling arrangements for fresh meat, flowers and other temperature-sensitive products.",
    icon: ThermometerSnowflake,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="arkan-container">

        {/* SECTION HEADER */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Logistics Solutions
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#071A2F] sm:text-5xl lg:text-6xl">
              Meat exports.
              <span className="block text-[#C9A227]">
                Logistics without compromise.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Arkan focuses on fresh and chilled meat exports from Kenya
              to international markets. We coordinate air freight,
              temperature-conscious cargo handling, export documentation
              and customs clearance. We also support flowers,
              horticultural products and general cargo.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-[#071A2F]"
          >
            View All Services

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#071A2F]/20 transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>

        {/* FEATURED MEAT EXPORT SOLUTION */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-[#071A2F]">
          <div className="grid lg:grid-cols-2">

            {/* FEATURED CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]/10">
                <Package
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Our Primary Export Focus
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Fresh & Chilled
                <span className="block text-[#D4AF37]">
                  Meat Export Logistics
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Supporting meat exporters with coordinated international
                air freight, temperature-conscious cargo handling,
                export documentation and customs clearance. We focus
                on the careful movement of time-sensitive meat shipments
                from Kenya to global markets.
              </p>

              <Link
                to="/services"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#C9A227] bg-[#C9A227] px-6 py-3 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:bg-transparent hover:text-[#D4AF37]"
              >
                Explore Meat Export Solutions

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* FEATURED VISUAL */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071A2F]/60 via-[#071A2F]/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* FOUR SELECTED SUPPORTING SERVICES */}
        <div>
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Supporting Services
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#071A2F] sm:text-3xl">
              Essential support for every shipment.
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to="/services"
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-[#071A2F] hover:shadow-lg"
                >
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 transition-colors group-hover:text-[#C9A227]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A227]/10 transition-colors group-hover:bg-[#C9A227]/20">
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="text-[#C9A227]"
                      />
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C9A227]">
                    {service.shortTitle}
                  </p>

                  {/* TITLE */}
                  <h4 className="mt-2 text-lg font-bold leading-snug text-[#071A2F] transition-colors group-hover:text-white">
                    {service.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-xs leading-6 text-slate-500 transition-colors group-hover:text-white/65">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 transition-colors group-hover:border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-white/60">
                      Learn More
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C9A227]"
                    />
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

export default ServicesSection;