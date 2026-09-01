import {
  ArrowUpRight,
  Globe2,
  Plane,
  Ship,
} from "lucide-react";
import { Link } from "react-router-dom";

const regions = [
  {
    title: "Africa",
    description: "Regional trade and cargo movements across African markets.",
  },
  {
    title: "Europe",
    description: "Supporting businesses connecting Kenyan cargo with European markets.",
  },
  {
    title: "Middle East",
    description: "Freight solutions for businesses trading with the Middle East.",
  },
  {
    title: "Worldwide",
    description: "International cargo solutions extending beyond key markets.",
  },
];

const GlobalReach = () => {
  return (
    <section className="relative overflow-hidden bg-[#071A2F] py-24 sm:py-28 lg:py-32">

      {/* Decorative globe rings */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/5" />

      <div className="pointer-events-none absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[#C9A227]/10" />

      <div className="arkan-container relative">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Global Reach
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">

              From Kenya,
              <span className="block text-[#D4AF37]">
                across the world.
              </span>

            </h2>

          </div>

          <div className="lg:col-span-5">

            <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Arkan supports businesses moving cargo between
              Kenya and international markets through air,
              sea and customs solutions.
            </p>

          </div>

        </div>


        {/* MAIN VISUAL */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0B243F]">

          {/* WORLD IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524666041070-9f8763d1be4b?auto=format&fit=crop&w=1800&q=85')",
            }}
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2F] via-[#071A2F]/95 to-[#071A2F]/60" />

          <div className="relative grid min-h-[480px] lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10">

                <Globe2
                  size={27}
                  strokeWidth={1.4}
                  className="text-[#D4AF37]"
                />

              </div>

              <h3 className="mt-8 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Your cargo can move
                <span className="text-[#D4AF37]">
                  {" "}beyond borders.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                Whether you're exporting fresh produce,
                importing goods or moving general cargo,
                Arkan provides logistics solutions designed
                around your shipment.
              </p>

              <Link
                to="/quote"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:bg-[#D4AF37]"
              >
                Discuss Your Shipment

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </Link>

            </div>


            {/* RIGHT SIDE */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16">

              {/* Central point */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#C9A227]/20 sm:h-60 sm:w-60">

                <div className="absolute inset-8 rounded-full border border-white/10" />

                <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#C9A227] shadow-[0_0_60px_rgba(201,162,39,0.25)]">

                  <span className="text-xs font-black uppercase tracking-widest text-[#071A2F]">
                    KENYA
                  </span>

                  <span className="mt-1 text-[9px] font-medium text-[#071A2F]/60">
                    Origin
                  </span>

                </div>


                {/* Connection points */}
                <div className="absolute left-0 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#071A2F]">

                  <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

                </div>

                <div className="absolute right-0 top-1/2 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#071A2F]">

                  <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

                </div>

                <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#071A2F]">

                  <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

                </div>

                <div className="absolute bottom-0 left-1/2 flex h-8 w-8 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#071A2F]">

                  <span className="h-2 w-2 rounded-full bg-[#C9A227]" />

                </div>

              </div>


              {/* Plane / ship indicators */}
              <div className="absolute left-6 top-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#071A2F]/80 px-3 py-2 backdrop-blur-md">

                <Plane
                  size={14}
                  className="text-[#D4AF37]"
                />

                <span className="text-[9px] font-bold uppercase tracking-wider text-white/60">
                  Air Freight
                </span>

              </div>


              <div className="absolute bottom-10 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#071A2F]/80 px-3 py-2 backdrop-blur-md">

                <Ship
                  size={14}
                  className="text-[#D4AF37]"
                />

                <span className="text-[9px] font-bold uppercase tracking-wider text-white/60">
                  Sea Freight
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* REGION STRIP */}
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {regions.map((region, index) => (

            <div
              key={region.title}
              className={`
                group p-6 transition-colors duration-300 hover:bg-white/5 sm:p-7
                ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}
                ${index === 2 ? "lg:border-l" : ""}
                ${index === 3 ? "lg:border-l" : ""}
              `}
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                />

              </div>

              <h3 className="mt-7 text-xl font-bold text-white">
                {region.title}
              </h3>

              <p className="mt-3 text-xs leading-5 text-white/40">
                {region.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default GlobalReach;