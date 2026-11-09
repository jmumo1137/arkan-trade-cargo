
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  PackageCheck,
  Snowflake,
  PawPrint,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const Services = () => {
  // Arkan's cargo priorities: meat exports first, followed by other cargo.
  const cargoSpecialties = [
    {
      icon: Snowflake,
      title: "Fresh & Chilled Meat",
      text: "Freight coordination for fresh and chilled meat exports, with attention to temperature-sensitive handling requirements, documentation and destination needs.",
    },
    {
      icon: PackageCheck,
      title: "Flowers",
      text: "Air freight coordination for time-sensitive flower shipments from Kenya to international markets.",
    },
    {
      icon: Boxes,
      title: "Herbs & Vegetables",
      text: "Logistics support for fresh herbs, vegetables and other agricultural products destined for international buyers.",
    },
    {
      icon: PawPrint,
      title: "Pets",
      text: "Transportation coordination for pets, with attention to handling arrangements, required documentation and destination regulations.",
    },
    {
      icon: PackageCheck,
      title: "General Cargo",
      text: "Freight solutions for commercial goods, parcels and other shipments requiring domestic or international movement.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Tell Us About Your Cargo",
      text: "Share what you are shipping, its destination, preferred timeline and any special handling or documentation requirements.",
    },
    {
      number: "02",
      title: "We Plan the Movement",
      text: "We assess your shipment requirements and help identify a suitable freight solution, including the supporting documentation.",
    },
    {
      number: "03",
      title: "Freight & Customs Coordination",
      text: "We coordinate relevant freight, handling, customs and transportation arrangements for your shipment.",
    },
    {
      number: "04",
      title: "Ongoing Shipment Support",
      text: "We remain available to provide communication and coordination support throughout the logistics process.",
    },
  ];

  const supportingServices = services.filter(
    (service) =>
      service.title !== "Air Freight" &&
      service.title !== "Perishable Cargo" &&
      service.title !== "Export Solutions"
  );

  return (
    <main className="bg-[#F5F7FA] text-[#172033]">
      {/* SERVICES HERO */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#04111F]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/11146455/pexels-photo-11146455.jpeg?auto=compress&cs=tinysrgb&w=2200')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#04111F]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04111F]/95 via-[#04111F]/70 to-[#04111F]/35" />

        <div className="relative z-10 arkan-container">
          <div className="flex min-h-[680px] items-center py-28">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                  ARKAN FREIGHT SOLUTIONS
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Moving Meat Exports.
                <span className="block text-[#D4AF37]">
                  Connecting Global Markets.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Arkan prioritises fresh and chilled meat export logistics,
                coordinating air freight, shipment handling requirements,
                export documentation and customs support. We also support
                flowers, herbs, vegetables, pets and general cargo.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B24A]"
                >
                  Request a Cargo Quote
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#D4AF37]"
                >
                  Talk to Arkan
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              {/* Hero Indicators */}
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/15 pt-7">
                <div className="flex items-center gap-3">
                  <Snowflake size={20} className="text-[#C9A227]" />
                  <span className="text-sm font-semibold text-white">
                    Chilled Meat Exports
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Plane size={20} className="text-[#C9A227]" />
                  <span className="text-sm font-semibold text-white">
                    Air Freight Solutions
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <PackageCheck size={20} className="text-[#C9A227]" />
                  <span className="text-sm font-semibold text-white">
                    Export Coordination
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
      </section>

      {/* MEAT EXPORT & AIR FREIGHT INTRO */}
      <section className="bg-white py-20 lg:py-28">
        <div className="arkan-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  Our Core Focus
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#071A2F] sm:text-5xl">
                Supporting Kenya's
                <span className="text-[#C9A227]">
                  {" "}meat exports to the world.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B]">
                Fresh and chilled meat exports require careful coordination
                across several stages of the logistics journey. Arkan focuses
                on helping businesses arrange suitable freight solutions
                while considering shipment timelines, handling requirements
                and destination needs.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
                Our support includes air freight coordination, export
                documentation and customs processes. We also assist with
                logistics requirements for flowers, herbs, vegetables,
                pets and general cargo.
              </p>

              <Link
                to="/quote"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#071A2F]"
              >
                Request a Meat Export Quote

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#071A2F]/20 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227]">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>

            {/* Visual */}
            <div className="relative overflow-hidden rounded-2xl bg-[#071A2F]">
              <img
                src="https://images.pexels.com/photos/32642359/pexels-photo-32642359.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Air cargo operations at an airport"
                className="h-[420px] w-full object-cover lg:h-[500px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04111F]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#04111F]/70 px-4 py-2.5 backdrop-blur-md">
                  <Plane size={16} className="text-[#D4AF37]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                    International Air Freight
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARGO SPECIALTIES */}
      <section className="bg-[#F5F7FA] py-20 lg:py-28">
        <div className="arkan-container">
          {/* Heading */}
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                What We Move
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#071A2F] sm:text-5xl">
              Cargo categories we
              <span className="text-[#C9A227]">
                {" "}support.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
              Our primary focus is fresh and chilled meat exports. We also
              coordinate freight solutions for other time-sensitive,
              agricultural and general cargo shipments.
            </p>
          </div>

          {/* Cargo Cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {cargoSpecialties.map((cargo, index) => {
              const Icon = cargo.icon;

              return (
                <article
                  key={cargo.title}
                  className={`group relative overflow-hidden rounded-2xl border bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl ${
                    index === 0
                      ? "border-[#C9A227]/50 xl:scale-[1.02]"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A2F] transition-colors duration-300 group-hover:bg-[#C9A227]">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#071A2F]"
                    />
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                    {index === 0 ? "Primary Focus" : `0${index + 1}`}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-tight text-[#071A2F]">
                    {cargo.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#64748B]">
                    {cargo.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUPPORTING LOGISTICS SERVICES */}
      <section className="bg-white py-20 lg:py-28">
        <div className="arkan-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  Supporting Logistics
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-[1.1] text-[#071A2F] sm:text-5xl">
                More than freight.
                <span className="block text-[#C9A227]">
                  Support across the journey.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
                Successful cargo movement often involves several supporting
                services. We coordinate relevant logistics arrangements
                to help businesses manage shipments from origin to destination.
              </p>
            </div>

            <Plane
              size={46}
              strokeWidth={1}
              className="hidden text-[#C9A227] lg:block"
            />
          </div>

          {/* Services */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#071A2F] hover:bg-[#071A2F] hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.25em] text-slate-300 group-hover:text-[#C9A227]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7FA] group-hover:bg-[#C9A227]/15">
                      {Icon ? (
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#C9A227]"
                        />
                      ) : (
                        <CheckCircle2
                          size={21}
                          className="text-[#C9A227]"
                        />
                      )}
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#071A2F] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B] transition-colors duration-300 group-hover:text-white/60">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#C9A227]">
                    Logistics Support
                    <ArrowUpRight size={14} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#071A2F] py-20 lg:py-28">
        <div className="arkan-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              How It Works
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              From booking
              <span className="text-[#D4AF37]">
                {" "}to destination.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              We coordinate the important stages of your shipment, with
              attention to cargo requirements, documentation and logistics
              arrangements along the way.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.number} className="relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227] bg-[#071A2F] text-sm font-bold text-[#D4AF37]">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CARGO CTA */}
      <section className="relative overflow-hidden bg-[#C9A227]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#071A2F]/10" />

        <div className="arkan-container">
          <div className="relative flex flex-col items-center justify-between gap-8 py-16 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                <Plane size={18} className="text-[#071A2F]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#071A2F]/70">
                  Ready to Move?
                </span>
              </div>

              <h2 className="text-3xl font-bold text-[#071A2F] sm:text-4xl">
                Planning a meat export or cargo shipment?
              </h2>

              <p className="mt-2 max-w-xl text-[#071A2F]/70">
                Tell us what you are shipping, where it needs to go and
                your preferred timeline. Let's discuss the right logistics
                arrangements for your cargo.
              </p>
            </div>

            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#071A2F] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#04111F]"
            >
              Request a Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
