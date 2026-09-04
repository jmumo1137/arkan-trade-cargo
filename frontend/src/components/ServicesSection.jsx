import {
  ArrowUpRight,
  Plane,
  Ship,
  Truck,
  FileCheck,
  Package,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const ServicesSection = () => {

  /*
   * Keep Air Freight at the front regardless
   * of the order inside services.js.
   */
  const priority = [
    "Air Freight",
    "Sea Freight",
    "Road Freight",
    "Customs Clearance",
    "Export Documentation",
    "Import Clearance",
  ];

  const sortedServices = [...services].sort((a, b) => {
    const aIndex = priority.indexOf(a.title);
    const bIndex = priority.indexOf(b.title);

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });

  return (
    <section className="relative bg-white py-24 sm:py-28 lg:py-32">

      <div className="arkan-container">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Logistics Solutions
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#071A2F] sm:text-5xl lg:text-6xl">

              Air cargo first.
              <span className="block text-[#C9A227]">
                Complete logistics support.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Air freight is at the heart of what we do. Around it,
              Arkan provides the customs, documentation, road, sea
              and cargo coordination services needed to move your
              shipment smoothly from origin to destination.
            </p>

          </div>


          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#071A2F]"
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


        {/* =====================================================
            FEATURED AIR FREIGHT
        ====================================================== */}

        <div className="mb-6 overflow-hidden rounded-2xl bg-[#071A2F]">

          <div className="grid lg:grid-cols-2">

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]/10">

                <Plane
                  size={27}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Our Speciality
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Air Freight
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Fast and dependable air cargo solutions for
                time-sensitive exports including fresh chilled meat,
                flowers, herbs, vegetables, pets and general cargo.
              </p>

              <Link
                to="/services"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:bg-[#D4AF37]"
              >

                Explore Air Freight

                <ArrowUpRight size={17} />

              </Link>

            </div>


            {/* VISUAL */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[420px]">

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071A2F] via-[#071A2F]/20 to-transparent lg:bg-gradient-to-r" />

            </div>

          </div>

        </div>


        {/* =====================================================
            OTHER SERVICES
        ====================================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {sortedServices
            .filter((service) => service.title !== "Air Freight")
            .map((service, index) => {

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
                      {String(index + 2).padStart(2, "0")}
                    </span>


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


                  {/* CATEGORY */}
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


                  {/* CTA */}
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