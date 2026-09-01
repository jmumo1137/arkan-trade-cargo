import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  Globe2,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Cargo-focused solutions",
    description:
      "We consider the type of cargo, destination, timelines and handling requirements when planning a logistics solution.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Documentation support",
    description:
      "International cargo requires accurate documentation. We help simplify the processes involved in export and import movements.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "International connectivity",
    description:
      "Supporting cargo movements between Kenya and international markets across Africa, Europe, the Middle East and beyond.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Personal service",
    description:
      "Clear communication and a client-focused approach keep you informed throughout the logistics process.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#071A2F]/5" />

      <div className="arkan-container relative">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">

          {/* LABEL */}
          <div className="lg:col-span-3">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#071A2F]">
                Why Arkan
              </span>

            </div>

          </div>


          {/* HEADING */}
          <div className="lg:col-span-9">

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#071A2F] sm:text-5xl lg:text-6xl">

              Logistics built around
              <span className="block text-[#C9A227]">
                the way your cargo moves.
              </span>

            </h2>

          </div>

        </div>


        {/* =========================================
            INTRO
        ========================================== */}

        <div className="mt-10 grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-12">

          <div className="lg:col-span-3" />

          <div className="lg:col-span-6">

            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              Moving cargo internationally requires more than
              transportation. It requires coordination,
              documentation, timing and an understanding of
              what each shipment demands.
            </p>

          </div>

          <div className="flex items-end lg:col-span-3">

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#071A2F]"
            >

              About Arkan

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]">

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </span>

            </Link>

          </div>

        </div>


        {/* =========================================
            REASONS
        ========================================== */}

        <div className="grid lg:grid-cols-12">

          {/* LEFT STATEMENT */}
          <div className="hidden border-r border-slate-200 lg:col-span-4 lg:block">

            <div className="sticky top-20 pr-12 pt-12">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#071A2F]">

                <ShieldCheck
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#D4AF37]"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold leading-tight text-[#071A2F]">
                Built for businesses
                <br />
                moving beyond borders.
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
                From agricultural exporters to businesses
                moving general cargo, our approach is centred
                around practical logistics solutions.
              </p>

            </div>

          </div>


          {/* RIGHT REASONS */}
          <div className="lg:col-span-8">

            {reasons.map((reason, index) => {

              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className={`
                    group grid gap-6 py-9 sm:grid-cols-[70px_1fr_auto] sm:items-start
                    ${index !== reasons.length - 1 ? "border-b border-slate-200" : ""}
                  `}
                >

                  {/* NUMBER */}
                  <span className="text-sm font-bold tracking-widest text-[#C9A227]">
                    {reason.number}
                  </span>


                  {/* CONTENT */}
                  <div>

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] transition-all duration-300 group-hover:bg-[#071A2F]">

                        <Icon
                          size={18}
                          strokeWidth={1.6}
                          className="text-[#C9A227]"
                        />

                      </div>

                      <h3 className="text-xl font-bold text-[#071A2F] sm:text-2xl">
                        {reason.title}
                      </h3>

                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:ml-14">
                      {reason.description}
                    </p>

                  </div>


                  {/* ARROW */}
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] sm:flex">

                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 transition-colors group-hover:text-[#071A2F]"
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="relative mt-16 overflow-hidden rounded-2xl bg-[#071A2F] px-7 py-10 sm:px-10 sm:py-12 lg:px-14">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[#C9A227]/10" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Your cargo. Our coordination.
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let's find the right logistics solution for your shipment.
              </h3>

            </div>


            <Link
              to="/quote"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:bg-[#D4AF37]"
            >

              Request a Quote

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;