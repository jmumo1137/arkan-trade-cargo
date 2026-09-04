import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Clock3,
  Plane,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const GlobalConnection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24 sm:py-28 lg:py-32">

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#071A2F]/5" />
      <div className="pointer-events-none absolute -right-24 top-36 h-[350px] w-[350px] rounded-full border border-[#C9A227]/10" />

      <div className="arkan-container relative">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Air Cargo & Export Specialists
              </span>

            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[#071A2F] sm:text-5xl lg:text-6xl">

              Moving Kenya's exports
              <span className="block text-[#C9A227]">
                to the world.
              </span>

            </h2>

          </div>


          {/* RIGHT */}
          <div className="lg:pb-2">

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Arkan specialises in fast, reliable air cargo solutions
              for agricultural exports and time-sensitive shipments.
              From chilled meat and fresh produce to flowers, pets
              and general cargo, we help your goods reach their
              destination safely and efficiently.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#071A2F]"
            >

              Discover Arkan

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#071A2F]/20 transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]">

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </span>

            </Link>

          </div>

        </div>


        {/* =====================================================
            MAIN FEATURE AREA
        ====================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-12">

          {/* =================================================
              MAIN AIR CARGO FEATURE
          ================================================== */}

          <div className="group relative min-h-[500px] overflow-hidden rounded-2xl bg-[#071A2F] lg:col-span-7">

            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/46148/aircraft-landing-airplane-landing-airplane-46148.jpeg?auto=compress&cs=tinysrgb&w=1800')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04111F] via-[#071A2F]/45 to-[#071A2F]/10" />

            {/* Top badge */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-[#04111F]/60 px-4 py-2 backdrop-blur-md">

              <Plane
                size={15}
                className="text-[#D4AF37]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Air Cargo
              </span>

            </div>


            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Built around your cargo
              </p>

              <h3 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Fast movement. Careful handling. Global reach.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
                We coordinate air cargo movements with attention to
                timing, documentation, handling and destination
                requirements.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT FEATURE CARDS
          ================================================== */}

          <div className="grid gap-5 lg:col-span-5">

            {/* CHILLED MEAT */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#071A2F] p-7 sm:p-8">

              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full border border-[#C9A227]/20" />

              <PackageCheck
                size={30}
                strokeWidth={1.5}
                className="relative text-[#D4AF37]"
              />

              <p className="relative mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Core Export Market
              </p>

              <h3 className="relative mt-3 text-2xl font-bold text-white">
                Fresh Chilled Meat
              </h3>

              <p className="relative mt-3 max-w-md text-sm leading-6 text-white/60">
                Time-sensitive chilled meat shipments require speed,
                coordination and careful cargo handling from origin
                to destination.
              </p>

            </div>


            {/* AGRICULTURAL EXPORTS */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">

              <div className="flex items-start justify-between">

                <Globe2
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#C9A227]"
                />

                <span className="text-xs font-bold tracking-widest text-slate-300">
                  EXPORT
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#071A2F]">
                Agricultural Products
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Supporting the movement of Kenyan flowers, herbs,
                vegetables and other fresh agricultural products
                into international markets.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            VALUE STRIP
        ====================================================== */}

        <div className="mt-5 grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-3">

          {/* SPEED */}
          <div className="flex items-center gap-5 p-6 sm:p-7">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA]">

              <Clock3
                size={20}
                className="text-[#C9A227]"
              />

            </div>

            <div>

              <p className="text-sm font-bold text-[#071A2F]">
                Time Conscious
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Built around time-sensitive cargo.
              </p>

            </div>

          </div>


          {/* AIR */}
          <div className="border-t border-slate-200 p-6 sm:border-l sm:border-t-0 sm:p-7">

            <div className="flex items-center gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA]">

                <Plane
                  size={20}
                  className="text-[#C9A227]"
                />

              </div>

              <div>

                <p className="text-sm font-bold text-[#071A2F]">
                  Air Cargo Focused
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Fast international cargo movement.
                </p>

              </div>

            </div>

          </div>


          {/* RELIABILITY */}
          <div className="border-t border-slate-200 p-6 sm:border-l sm:border-t-0 sm:p-7">

            <div className="flex items-center gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA]">

                <ShieldCheck
                  size={20}
                  className="text-[#C9A227]"
                />

              </div>

              <div>

                <p className="text-sm font-bold text-[#071A2F]">
                  Reliable Handling
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your cargo remains in good hands.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GlobalConnection;