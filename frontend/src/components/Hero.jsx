import {
  ArrowRight,
  Globe2,
  Plane,
  Ship,
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
            "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#04111F]/75" />

      {/* CENTER GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04111F]/70 via-[#071A2F]/55 to-[#04111F]/90" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[760px] items-center justify-center">

        <div className="arkan-container">

          <div className="mx-auto max-w-5xl pt-24 text-center">

            {/* EYEBROW */}
            <div className="mb-6 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Global Freight & Logistics
              </span>

              <span className="h-px w-10 bg-[#C9A227]" />

            </div>

            {/* HEADING */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">

              Connecting Kenya

              <span className="block text-[#D4AF37]">
                to the World.
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Reliable air freight, sea freight, customs clearance
              and international cargo solutions designed to move
              your business forward.
            </p>

            {/* ACTIONS */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

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
            <div className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-6 border-t border-white/15 pt-7">

              {/* GLOBAL */}
              <div className="flex items-center gap-3 text-left">

                <Globe2
                  size={21}
                  className="text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Reach
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Global Markets
                  </p>
                </div>

              </div>

              {/* AIR */}
              <div className="flex items-center gap-3 text-left">

                <Plane
                  size={21}
                  className="text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Air
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Freight Solutions
                  </p>
                </div>

              </div>

              {/* SEA */}
              <div className="flex items-center gap-3 text-left">

                <Ship
                  size={21}
                  className="text-[#C9A227]"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    Sea
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Cargo Solutions
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* GOLD ACCENT LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

    </section>
  );
};

export default Hero;