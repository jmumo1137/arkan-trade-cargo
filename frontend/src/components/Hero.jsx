import {
  ArrowRight,
  Globe2,
  Plane,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#04111F]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.pexels.com/photo/a-white-and-blue-airplane-on-airport-11146455/?utm_source=chatgpt.com')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#04111F]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04111F]/70 via-[#071A2F]/60 to-[#04111F]/95" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[760px] items-center justify-center">
        <div className="arkan-container">
          <div className="mx-auto max-w-6xl pt-24 text-center">
            {/* EYEBROW */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Kenya's Air Cargo Specialists
              </span>

              <span className="h-px w-10 bg-[#C9A227]" />
            </div>

            {/* SPEED BADGE */}
            <div className="mb-8 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
              ✈ Fast International Cargo Movement
            </div>

            {/* COMPANY NAME */}
            <div className="mb-4">
              <p className="text-base font-semibold uppercase tracking-[0.45em] text-white/80">
                ARKAN
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                Trade Cargo & Freight Solutions
              </p>
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Air Cargo &
              <span className="block text-[#D4AF37]">
                Agricultural Exports
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Specialists in fresh chilled meat exports, flowers,
              herbs, vegetables, pets and general cargo. We provide
              fast, reliable air freight solutions connecting Kenya
              to international markets with efficiency, care and
              professionalism.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/quote"
                className="arkan-button-primary"
              >
                Request a Quote
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/services"
                className="arkan-button-outline"
              >
                Explore Our Services
              </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mx-auto mt-16 flex max-w-4xl flex-wrap justify-center gap-x-12 gap-y-8 border-t border-white/15 pt-8">
              {/* AIR CARGO */}
              <div className="flex items-center gap-3 text-left">
                <Plane
                  size={22}
                  className="text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Speciality
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Air Cargo Solutions
                  </p>
                </div>
              </div>

              {/* MEAT EXPORT */}
              <div className="flex items-center gap-3 text-left">
                <Package
                  size={22}
                  className="text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Export Focus
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Chilled Meat Exports
                  </p>
                </div>
              </div>

              {/* GLOBAL MARKETS */}
              <div className="flex items-center gap-3 text-left">
                <Globe2
                  size={22}
                  className="text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Reach
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Global Export Markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
    </section>
  );
};

export default Hero;