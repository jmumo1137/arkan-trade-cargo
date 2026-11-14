
import {
  ArrowRight,
  Globe2,
  Plane,
  Package,
} from "lucide-react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#04111F]">

      {/* BACKGROUND IMAGE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/d/d9/Boeing_747-409F_Prague_airport_2015_3.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-[#04111F]/65" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#04111F]/60 via-[#071A2F]/65 to-[#04111F]/95" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-14 sm:py-16 lg:py-20">

        <div className="arkan-container w-full">

          <div className="mx-auto max-w-6xl text-center">

            {/* TOP LABEL */}
            <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-7 bg-[#C9A227] sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-xs sm:tracking-[0.3em]">
                Kenya's Air Cargo & Meat Export Specialists
              </span>

              <span className="h-px w-7 bg-[#C9A227] sm:w-10" />
            </div>

            {/* AIR CARGO BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium text-[#D4AF37] backdrop-blur-sm sm:mb-7 sm:px-5 sm:text-sm">
              <Plane size={16} />
              International Air Freight Solutions
            </div>

            {/* COMPANY BRANDING */}
            <div className="mb-5 sm:mb-6">
              <p className="text-lg font-extrabold uppercase tracking-[0.45em] text-white sm:text-xl">
                ARKAN
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm sm:tracking-[0.3em]">
                Trade Cargo & Freight Ltd
              </p>
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Fresh & Chilled

              <span className="block text-[#D4AF37]">
                Meat Exports
              </span>

              <span className="mt-2 block text-2xl font-semibold text-white/90 sm:text-3xl lg:text-4xl">
                Across Global Markets
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              Connecting Kenya's meat exporters to international
              markets through reliable air freight, temperature-conscious
              cargo handling and professional export logistics.
              We also support flower, horticultural and general cargo exports.
            </p>

            {/* CALL TO ACTION */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">

              <Link
                to="/quote"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#C9A227] bg-[#C9A227] px-8 py-4 font-bold text-[#04111F] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(201,162,39,0.35)] sm:w-auto"
              >
                Request a Quote

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C9A227] hover:bg-white/10 sm:w-auto"
              >
                Explore Our Services
              </Link>

            </div>

            {/* TRUST INDICATORS */}
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 border-t border-white/15 pt-7 sm:mt-12 sm:grid-cols-3 sm:gap-5 sm:pt-9">

              {/* AIR CARGO */}
              <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#071A2F]/65 p-4 text-left backdrop-blur-md">
                <Plane
                  size={26}
                  className="shrink-0 text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Speciality
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Air Cargo Solutions
                  </p>
                </div>
              </div>

              {/* MEAT EXPORT */}
              <div className="flex items-center justify-center gap-3 rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 p-4 text-left backdrop-blur-md">
                <Package
                  size={26}
                  className="shrink-0 text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Primary Focus
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Fresh Meat Exports
                  </p>
                </div>
              </div>

              {/* GLOBAL REACH */}
              <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#071A2F]/65 p-4 text-left backdrop-blur-md">
                <Globe2
                  size={26}
                  className="shrink-0 text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Reach
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Global Export Markets
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

    </section>
  );
};

export default Hero;
