import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const ServicesSection = () => {
  return (
    <section className="relative bg-white py-24 sm:py-28 lg:py-32">

      <div className="arkan-container">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Logistics Solutions
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#071A2F] sm:text-5xl lg:text-6xl">
              Freight, customs and cargo solutions designed for global trade.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Arkan Trade Cargo & Freight Solutions supports exporters,
              importers and businesses through reliable air freight,
              sea freight, customs clearance and logistics coordination.
            </p>

          </div>


          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#071A2F]"
          >

            View All Services

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />

          </Link>

        </div>


        {/* =========================================
            SERVICES GRID
        ========================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to="/services"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#071A2F]
                  hover:bg-[#071A2F]
                  hover:shadow-2xl
                "
              >

                {/* GOLD TOP BORDER */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-0
                    bg-[#C9A227]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />



                {/* TOP ROW */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <span
                      className="
                        text-[11px]
                        font-bold
                        tracking-[0.3em]
                        text-slate-300
                        transition-colors
                        duration-300
                        group-hover:text-[#C9A227]
                      "
                    >
                      0{index + 1}
                    </span>

                  </div>


                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C9A227]/10
                      transition-all
                      duration-300
                      group-hover:bg-[#C9A227]/20
                    "
                  >

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#C9A227]"
                    />

                  </div>

                </div>



                {/* SERVICE CATEGORY */}

                <p
                  className="
                    mt-10
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#C9A227]
                  "
                >
                  {service.shortTitle}
                </p>



                {/* TITLE */}

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-bold
                    leading-tight
                    text-[#071A2F]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {service.title}
                </h3>



                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-slate-500
                    transition-colors
                    duration-300
                    group-hover:text-white/65
                  "
                >
                  {service.description}
                </p>



                {/* BOTTOM CTA */}

                <div className="mt-10 flex items-center justify-between">

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-white/60
                    "
                  >
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-slate-300
                      transition-all
                      duration-300
                      group-hover:text-[#C9A227]
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />

                </div>

              </Link>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;