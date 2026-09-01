import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "../data/industries";

const IndustriesSection = () => {
  return (
    <section className="bg-[#071A2F] py-24 sm:py-28 lg:py-32">

      <div className="arkan-container">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                What We Move
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              From fresh produce
              <span className="block text-[#D4AF37]">
                to general cargo.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-white/55 lg:pb-1">
            Specialized logistics solutions for businesses
            moving goods from Kenya to markets around the world.
          </p>

        </div>


        {/* FEATURED PERISHABLES */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#0B243F]">

          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}
            <div className="group relative min-h-[360px] overflow-hidden lg:min-h-[460px]">

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1600&q=85')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04111F]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">

                <span className="rounded-full border border-[#D4AF37]/40 bg-[#071A2F]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-md">
                  Our Specialty
                </span>

              </div>

            </div>


            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Perishable Cargo
              </span>

              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Moving Kenya's fresh produce to the world.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                From flowers and fruits to herbs and meat,
                perishable cargo requires careful planning,
                appropriate handling and time-conscious logistics.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                Our freight solutions are designed around the
                specific requirements of your shipment and
                destination.
              </p>

              <Link
                to="/services"
                className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold text-white"
              >
                Explore our solutions

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A227] text-[#071A2F] transition-transform duration-300 group-hover:translate-x-1">

                  <ArrowUpRight size={16} />

                </span>

              </Link>

            </div>

          </div>

        </div>


        {/* CARGO GRID */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {industries.slice(0, 4).map((industry) => {

            const Icon = industry.icon;

            return (
              <Link
                key={industry.title}
                to="/industries"
                className="group relative min-h-[320px] overflow-hidden rounded-2xl"
              >

                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${industry.image}')`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04111F] via-[#071A2F]/35 to-transparent transition-opacity duration-300 group-hover:via-[#071A2F]/50" />


                {/* ICON */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071A2F]/50 backdrop-blur-md">

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#D4AF37]"
                  />

                </div>


                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {industry.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-2 max-h-0 overflow-hidden text-xs leading-5 text-white/60 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {industry.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white opacity-70">

                    <span>
                      Learn more
                    </span>

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

    </section>
  );
};

export default IndustriesSection;