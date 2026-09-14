import {
  ArrowRight,
  Globe2,
  Plane,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#04111F]">

      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#04111F]/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04111F]/50 via-[#071A2F]/40 to-[#04111F]/90" />

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div className="relative z-10 flex min-h-[800px] items-center px-4 pt-36 pb-24 sm:px-6 lg:px-8">

        <div className="arkan-container w-full">

          <div className="mx-auto max-w-6xl text-center">

            {/* Top Label */}
            <div className="mb-6 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
                Kenya's Air Cargo Specialists
              </span>

              <span className="h-px w-12 bg-[#C9A227]" />

            </div>

            {/* Speed Badge */}
            <div className="mb-8 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37] backdrop-blur-sm">
              ✈ Fast International Cargo Movement
            </div>

            {/* Company Name */}
            <div className="mb-5">

              <p className="text-lg font-bold uppercase tracking-[0.5em] text-white">
                ARKAN
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                Trade Cargo & Freight Solutions
              </p>

            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Air Cargo &
              <span className="block text-[#D4AF37]">
                Agricultural Exports
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
              Specialists in fresh chilled meat exports, flowers,
              herbs, vegetables, pets and general cargo. We provide
              reliable air freight solutions connecting Kenya to
              international markets with speed, care and professionalism.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/quote"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#C9A227]
                  px-8
                  py-4
                  font-semibold
                  text-[#04111F]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E3C766]
                "
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/25
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Explore Our Services
              </Link>

            </div>

            {/* Trust Indicators */}
            <div className="mx-auto mt-20 max-w-5xl border-t border-white/15 pt-12">

              <div className="flex flex-wrap justify-center gap-5">

                {/* Card 1 */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md">

                  <Plane
                    size={24}
                    className="text-[#C9A227]"
                  />

                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Specialty
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Air Cargo Solutions
                    </p>
                  </div>

                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md">

                  <Package
                    size={24}
                    className="text-[#C9A227]"
                  />

                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Export Focus
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Chilled Meat Exports
                    </p>
                  </div>

                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md">

                  <Globe2
                    size={24}
                    className="text-[#C9A227]"
                  />

                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
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

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

    </section>
  );
};

export default Hero;